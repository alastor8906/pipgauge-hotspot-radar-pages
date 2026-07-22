import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the hotspot content radar", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>热点内容雷达 \| PipGauge · PositionMath<\/title>/i);
  assert.match(html, /产品承接控制在 10%–20%/);
  assert.match(html, /src="\/radar\/index\.html"/);
  assert.match(html, /title="PipGauge 与 PositionMath 热点内容雷达"/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("keeps content value primary and product placement optional", async () => {
  const [page, dashboard, app, rules, dataText] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/app.js", import.meta.url), "utf8"),
    readFile(new URL("../public/雷达规则.md", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/data.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /热点内容雷达/);
  assert.match(dashboard, /80%–90% 热点解释与有用信息/);
  assert.match(dashboard, /10%–20%，可用现有工具、记录新工具线索或不挂工具/);
  assert.match(dashboard, /Medium · Reddit · X 内容审核包/);
  assert.match(app, /\["内容价值", "content_value", 25\]/);
  assert.match(app, /productBridgeLabels/);
  assert.match(app, /内容主线 · 正文 80%–90%/);
  assert.match(app, /产品承接 · 全文 10%–20% · 可选/);
  assert.match(app, /其他历史期次/);
  assert.match(app, /历史草稿不会因切换到新一期而消失/);
  assert.match(rules, /工具是否贴合不参与选题评分，也不是入选门槛/);
  assert.match(rules, /`none`：内容本身成立，不挂工具/);
  assert.match(rules, /Medium、Reddit、X 草稿已生成，等待人工审核/);

  const data = JSON.parse(dataText);
  assert.equal(data.radar_model, "v2-content-first");
  assert.equal(data.editorial_policy.product_bridge_optional, true);
  assert.ok(data.periods.every((period) => period.scoring_version === "v1-legacy"));
  assert.ok(
    data.periods
      .flatMap((period) => period.candidates)
      .filter((candidate) => candidate.status === "selected")
      .every((candidate) => candidate.traffic_playbook?.content_mainline),
  );
});

test("generates Medium, Reddit and X drafts and stops at human review", async () => {
  const [registryText, dataText, dashboard, generator] = await Promise.all([
    readFile(new URL("../public/内容生产/packages.json", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/data.json", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/index.html", import.meta.url), "utf8"),
    readFile(new URL("../scripts/build-content-packages.mjs", import.meta.url), "utf8"),
  ]);
  const registry = JSON.parse(registryText);
  const data = JSON.parse(dataText);
  const selectedCandidates = data.periods
    .flatMap((period) => period.candidates
      .filter((candidate) => candidate.status === "selected")
      .map((candidate) => ({ ...candidate, scan_date: period.scan_date })))
    .sort((left, right) => left.candidate_id.localeCompare(right.candidate_id));
  const allPackages = [...registry.packages]
    .sort((left, right) => left.candidate_id.localeCompare(right.candidate_id));

  assert.equal(registry.endpoint, "multi_platform_drafts_awaiting_human_review");
  assert.deepEqual(registry.supported_platforms, ["medium", "reddit", "x"]);
  assert.deepEqual(
    allPackages.map((contentPackage) => contentPackage.candidate_id),
    selectedCandidates.map((candidate) => candidate.candidate_id),
  );
  assert.equal(allPackages.length, 17);
  assert.equal(allPackages.reduce((total, contentPackage) => total + contentPackage.platforms.length, 0), 51);
  assert.ok(allPackages.every((contentPackage) => contentPackage.package_status === "review_ready"));
  assert.ok(allPackages.every((contentPackage) => contentPackage.review_state === "awaiting_human_review"));
  assert.ok(allPackages.every((contentPackage) => (
    contentPackage.platforms.map((platform) => platform.id).join(",") === "medium,reddit,x"
  )));
  for (const period of data.periods) {
    const selectedCount = period.candidates.filter((candidate) => candidate.status === "selected").length;
    const packageCount = allPackages.filter((contentPackage) => contentPackage.scan_date === period.scan_date).length;
    assert.equal(packageCount, selectedCount, `${period.scan_date} content package count mismatch`);
  }
  assert.doesNotMatch(registryText, /"id": "quora"/i);
  assert.match(dashboard, /草稿已生成，统一停止在人工审核；不会自动发布/);
  assert.match(generator, /must contain exactly Medium, Reddit and X in that order/);

  for (const contentPackage of allPackages) {
    const factsDraft = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/00-事实与论点.md`, import.meta.url),
      "utf8",
    );
    const mediumDraft = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/01-Medium.md`, import.meta.url),
      "utf8",
    );
    const redditDraft = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/02-Reddit.md`, import.meta.url),
      "utf8",
    );
    const xDraft = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/03-X.md`, import.meta.url),
      "utf8",
    );
    const reviewDraft = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/04-人工审核.md`, import.meta.url),
      "utf8",
    );
    const packageHtml = await readFile(
      new URL(`../public/内容生产/${contentPackage.scan_date}/${contentPackage.candidate_id}/index.html`, import.meta.url),
      "utf8",
    );
    assert.match(packageHtml, /三平台草稿已生成/);
    assert.match(packageHtml, /等待人工审核/);
    assert.match(packageHtml, /不会自动发布/);
    assert.ok(factsDraft.length > 300, `${contentPackage.candidate_id} facts file is too short`);
    assert.ok(mediumDraft.length > 1800, `${contentPackage.candidate_id} Medium draft is too short`);
    assert.ok(redditDraft.length > 500, `${contentPackage.candidate_id} Reddit draft is too short`);
    assert.match(xDraft, /1\//, `${contentPackage.candidate_id} X draft must be a numbered thread`);
    assert.match(reviewDraft, /人工|审核/, `${contentPackage.candidate_id} review gate is missing`);
    if (contentPackage.scan_date !== data.latest_scan_date) {
      assert.match(reviewDraft, /时效|历史|复盘/, `${contentPackage.candidate_id} historical time gate is missing`);
    }
  }
});
