import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "public", "内容生产");
const requiredPlatforms = ["medium", "reddit", "x"];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderInline(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function renderMarkdown(markdown) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const output = [];
  let paragraph = [];
  let listType = null;

  const tableCells = (line) => line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

  const isTableDivider = (line) => tableCells(line).every((cell) => /^:?-{3,}:?$/.test(cell));

  const flushParagraph = () => {
    if (!paragraph.length) return;
    output.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (!listType) return;
    output.push(`</${listType}>`);
    listType = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      flushParagraph();
      closeList();
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }
    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      closeList();
      output.push(`<blockquote>${renderInline(quote[1])}</blockquote>`);
      continue;
    }
    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        output.push(`<${nextType}>`);
        listType = nextType;
      }
      output.push(`<li>${renderInline((unordered || ordered)[1])}</li>`);
      continue;
    }
    if (/^---+$/.test(line)) {
      flushParagraph();
      closeList();
      output.push("<hr>");
      continue;
    }
    const nextLine = lines[index + 1]?.trimEnd() || "";
    if (line.includes("|") && nextLine.includes("|") && isTableDivider(nextLine)) {
      flushParagraph();
      closeList();
      const headings = tableCells(line);
      const rows = [];
      index += 2;
      while (index < lines.length && lines[index].includes("|")) {
        rows.push(tableCells(lines[index]));
        index += 1;
      }
      index -= 1;
      output.push(`<div class="table-wrap"><table><thead><tr>${headings.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    paragraph.push(line.trim());
  }
  flushParagraph();
  closeList();
  return output.join("\n");
}

function packageHtml(manifest, documents) {
  const platformTabs = manifest.documents
    .filter((document) => requiredPlatforms.includes(document.platform))
    .map((document) => `<button type="button" class="platform-tab" data-target="${escapeHtml(document.platform)}">${escapeHtml(document.label)}<span>草稿完成</span></button>`)
    .join("");
  const navTabs = manifest.documents
    .map((document, index) => `<button type="button" class="doc-tab${index === 0 ? " is-active" : ""}" data-target="${escapeHtml(document.id)}">${escapeHtml(document.label)}</button>`)
    .join("");
  const sections = manifest.documents
    .map((document, index) => `<article id="${escapeHtml(document.id)}" class="document-panel${index === 0 ? " is-active" : ""}">
      <header><span>${escapeHtml(document.kind)}</span><strong>${escapeHtml(document.status_label)}</strong></header>
      <div class="markdown-body">${documents.get(document.id)}</div>
    </article>`)
    .join("");

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(manifest.topic)} · 内容审核包</title>
  <link rel="stylesheet" href="../../package.css">
</head>
<body>
  <header class="package-header">
    <a href="../../../radar/">返回热点雷达</a>
    <span>${escapeHtml(manifest.candidate_id)}</span>
  </header>
  <main class="package-shell">
    <section class="package-hero">
      <div class="package-kicker"><span>${escapeHtml(manifest.primary_site)}</span><span>${escapeHtml(manifest.scan_date)}</span></div>
      <h1>${escapeHtml(manifest.topic)}</h1>
      <p>${escapeHtml(manifest.package_summary)}</p>
      <div class="state-grid">
        <div><span>流水线状态</span><strong>三平台草稿已生成</strong></div>
        <div><span>当前停点</span><strong>等待人工审核</strong></div>
        <div><span>时效处理</span><strong>${escapeHtml(manifest.time_status_label)}</strong></div>
      </div>
    </section>

    <section class="platform-strip" aria-label="平台草稿快速入口">${platformTabs}</section>

    <section class="review-layout">
      <aside>
        <p>审核顺序</p>
        <nav class="doc-tabs">${navTabs}</nav>
        <div class="stop-note"><strong>不会自动发布</strong><span>审核通过后，才由人决定是否复制到平台。</span></div>
      </aside>
      <div class="documents">${sections}</div>
    </section>
  </main>
  <script>
    const activate = (id) => {
      document.querySelectorAll('.doc-tab').forEach((button) => button.classList.toggle('is-active', button.dataset.target === id));
      document.querySelectorAll('.document-panel').forEach((panel) => panel.classList.toggle('is-active', panel.id === id));
      history.replaceState(null, '', '#' + id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.querySelectorAll('[data-target]').forEach((button) => button.addEventListener('click', () => activate(button.dataset.target)));
    const initial = location.hash.slice(1);
    if (initial && document.getElementById(initial)) activate(initial);
  </script>
</body>
</html>`;
}

async function findPackages(directory) {
  const found = [];
  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const child = path.join(directory, entry.name);
    try {
      await fs.access(path.join(child, "manifest.json"));
      found.push(child);
    } catch {
      found.push(...await findPackages(child));
    }
  }
  return found;
}

const packageDirs = await findPackages(contentRoot);
const packageRecords = [];
let generated = 0;
for (const packageDir of packageDirs) {
  const manifest = JSON.parse(await fs.readFile(path.join(packageDir, "manifest.json"), "utf8"));
  const platforms = manifest.documents.filter((document) => requiredPlatforms.includes(document.platform)).map((document) => document.platform);
  if (platforms.join(",") !== requiredPlatforms.join(",")) {
    throw new Error(`${manifest.candidate_id} must contain exactly Medium, Reddit and X in that order.`);
  }
  const documents = new Map();
  for (const document of manifest.documents) {
    const markdown = await fs.readFile(path.join(packageDir, document.file), "utf8");
    documents.set(document.id, renderMarkdown(markdown));
  }
  await fs.writeFile(path.join(packageDir, "index.html"), packageHtml(manifest, documents));
  const relativeDir = path.relative(contentRoot, packageDir).split(path.sep).join("/");
  const packageUrl = `../内容生产/${relativeDir}/index.html`;
  packageRecords.push({
    candidate_id: manifest.candidate_id,
    scan_date: manifest.scan_date,
    primary_site: manifest.primary_site,
    topic: manifest.topic,
    package_summary: manifest.package_summary,
    package_status: manifest.package_status,
    review_state: manifest.review_state,
    time_status: manifest.time_status,
    time_status_label: manifest.time_status_label,
    url: packageUrl,
    platforms: manifest.documents
      .filter((document) => requiredPlatforms.includes(document.platform))
      .map((document) => ({
        id: document.platform,
        label: document.label,
        status: "draft_ready",
        status_label: document.status_label,
        url: `${packageUrl}#${document.id}`,
      })),
  });
  generated += 1;
}

packageRecords.sort((left, right) => (
  right.scan_date.localeCompare(left.scan_date)
  || left.candidate_id.localeCompare(right.candidate_id)
));
await fs.writeFile(
  path.join(contentRoot, "packages.json"),
  `${JSON.stringify({
    generated_at: new Date().toISOString(),
    endpoint: "multi_platform_drafts_awaiting_human_review",
    supported_platforms: requiredPlatforms,
    packages: packageRecords,
  }, null, 2)}\n`,
);

console.log(`Generated ${generated} content review package(s).`);
