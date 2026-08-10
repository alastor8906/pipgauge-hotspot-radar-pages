import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps refresh opportunities from being rejected as calculator-path duplicates", async () => {
  const [rules, dataText] = await Promise.all([
    readFile(new URL("../public/雷达规则.md", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/data.json", import.meta.url), "utf8"),
  ]);
  const data = JSON.parse(dataText);
  const policy = data.editorial_policy;

  assert.match(rules, /重复主题必须先评估 `refresh`/);
  assert.match(rules, /fact_delta/);
  assert.match(rules, /search_delta/);
  assert.match(rules, /example_delta/);
  assert.match(rules, /window_delta/);
  assert.match(rules, /至少 2 类成立/);
  assert.equal(policy.duplicate_path_is_not_automatic_rejection, true);
  assert.equal(policy.minimum_refresh_signals, 2);
  assert.deepEqual(policy.refresh_signals, [
    "fact_delta",
    "search_delta",
    "example_delta",
    "window_delta",
  ]);
});

test("separates official product facts from independent impact evidence", async () => {
  const [rules, dataText] = await Promise.all([
    readFile(new URL("../public/雷达规则.md", import.meta.url), "utf8"),
    readFile(new URL("../public/radar/data.json", import.meta.url), "utf8"),
  ]);
  const data = JSON.parse(dataText);

  assert.match(rules, /1 个官方一手事实源 \+ 1 个独立公开影响\/热度源/);
  assert.match(rules, /缺少实测点差\/滑点.*通用否决条件/);
  assert.equal(
    data.editorial_policy.source_policy,
    "official_fact_plus_independent_impact_for_product_rules",
  );
  assert.equal(
    data.editorial_policy.measured_execution_data_only_for_execution_cost_claims,
    true,
  );
  assert.equal(data.editorial_policy.slow_watch_recheck_days, 3);
});
