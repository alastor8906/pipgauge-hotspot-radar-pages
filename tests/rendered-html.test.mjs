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
  assert.match(app, /\["内容价值", "content_value", 25\]/);
  assert.match(app, /productBridgeLabels/);
  assert.match(app, /内容主线 · 正文 80%–90%/);
  assert.match(app, /产品承接 · 全文 10%–20% · 可选/);
  assert.match(rules, /工具是否贴合不参与选题评分，也不是入选门槛/);
  assert.match(rules, /`none`：内容本身成立，不挂工具/);

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
