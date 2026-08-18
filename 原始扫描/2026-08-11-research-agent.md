# 2026-08-11 PipGauge / PositionMath 英文热点需求扫描——研究代理证据笔记

- 扫描日期：2026-08-11（Asia/Shanghai）
- 研究时间：约 22:00 CST
- 观察窗口：过去 72 小时 / 未来 7 天
- 边界：仅公开、无需登录的英文来源；事实以官方/一手材料为主，社区仅作热度信号；不预测方向。
- 历史去重：已全文检索既有每日报告、候选总表与内容生产目录。未发现 `RBA`、`Reserve Bank of Australia`、`AUD/USD` 或 Australian cash-rate 主题，因此下述 RBA 项不是历史同构稿。

## 建议正式入选（1）

### RBA holds at 4.35%: How much AUD/USD risk fits your stop after a low-volatility decision?

- 建议 candidate_id：`HR-20260811-01`
- 建议状态：`selected`
- 建议 execution_mode：`new`
- 事件日期 / 新鲜度：2026-08-11；当日事件，满足 72 小时门槛。
- Why now：RBA 在 8 月 11 日一致决定把 cash rate 留在 4.35%。官方声明称通胀仍过高、政策“somewhat restrictive”，若上行风险兑现仍可能加息。与方向预测不同，实际可承接的问题是：决议后 AUD/USD 当日波动很小，但交易者若仍按固定手数下单，会不会在不同止损距离下悄然改变账户风险？

#### 可核验事实与来源

1. **RBA（官方事实源，发布主体：Reserve Bank of Australia；2026-08-11）**  
   https://www.rba.gov.au/media-releases/2026/mr-26-19.html  
   确认：cash rate target 维持 4.35%；决定一致通过；通胀仍过高；预计到 2027 年末附近才回到目标区间中点；若上行风险兑现，仍可能进一步加息。
2. **RBA August Statement on Monetary Policy（官方一手背景；2026-08-11）**  
   https://www.rba.gov.au/publications/smp/2026/aug/  
   确认：2026 年此前已经加息三次；经济与支出预计放缓；失业率预计逐步上升；官方简版称通胀到 2028 年初才回到 2%–3%目标区间中点（与决议稿“late 2027”属于表述粒度差异，写稿时宜使用各自原文口径，不混成一个精确日期）。
3. **FOREX.com / Matt Simpson（独立公开 FX 影响源；2026-08-11）**  
   https://www.forex.com/en-us/news-and-analysis/australian-dollar-outlook-aud-usd-wobbles-on-rba-hold-us-cpi-up-next/  
   确认/影响：决议一致、维持 4.35%；当时 AUD/USD 较前收盘跌幅不足 0.1%，AUD/NZD 约跌 0.2%；分析明确称该次对 AUD 是低波动事件，并指出下一关注点转向次日美国 CPI。方向性意见不可写成事实或建议。
4. **Reddit r/australia（公开讨论热度；2026-08-11）**  
   https://www.reddit.com/r/australia/comments/1vl7e1m/rba_interest_rates_decision_on_hold_at_435/  
   扫描时约 230 upvotes，评论集中在利率维持、通胀、经济放缓与个人借贷影响；仅用于证明当日讨论，不用于核验规则数字。
5. **Reddit r/AusFinance（公开讨论热度；2026-08-11）**  
   https://www.reddit.com/r/AusFinance/comments/1vl7egj/rba_maintains_cash_rate_at_435/  
   当日讨论直接引用官方声明，并围绕“somewhat restrictive”和进一步加息条件展开；仅作热度证据。

#### 门槛与评分建议

- 独立可靠主体：RBA + FOREX.com，共 2 个；另有两条独立社区热度信号。宏观事实主体虽以 RBA 为准，但独立 FX 影响源对结果、投票和市场即时表现无冲突。
- 新鲜度：25/25
- 流量潜力：21/25（RBA 当日事件、澳大利亚大众讨论显著；全球关注度低于美国 CPI）
- 计算器贴合度：24/25（PipGauge pip value + position sizing + risk/reward 自然衔接）
- 证据质量：14/15（官方决定、官方 SMP、独立 FX 影响与社区热度齐备）
- 可执行性：9/10
- **建议总分：93/100**；硬门槛通过。

#### 计算器桥接与可读数字（不预测方向）

- 主桥接：PipGauge 的 AUD/USD pip value / position size / stop-loss risk 计算链；PositionMath 可辅助展示固定账户风险百分比。
- 建议示例：`$10,000` USD 账户、每笔风险 `0.5% = $50`。AUD/USD 对 USD 账户，1 standard lot 的 pip value 约 `$10/pip`：
  - 20-pip stop → `$50 / (20 × $10) = 0.25 lot`
  - 35-pip stop → 约 `0.14 lot`
  - 50-pip stop → `0.10 lot`
- 信息钩子是“4.35% hawkish hold 但即时 AUD/USD 反应不足 0.1%”，计算问题是“低波动结果后，止损不同如何保持固定美元风险”，不是“澳元接下来涨还是跌”。示例 pip value 应标注为 USD-quoted pair / USD account 的标准近似，最终数字由计算器按账户币种处理。
- 搜索意图示例：`RBA rate decision AUDUSD risk`, `AUDUSD position size calculator`, `how many lots AUDUSD 20 pip stop`, `AUDUSD pip value 2026`, `RBA hold 4.35 AUDUSD volatility`。
- 流量窗口：主窗口为 2026-08-11 决议后至 2026-08-12 美国 CPI 前；次窗口可延续至本周结束，但 CPI 发布后标题与首段必须更新，避免把“US CPI up next”写成过期时态。
- 编辑边界：不可引用 FOREX.com 的 bullish/bearish判断作结论；不可暗示 RBA hold 决定 AUD/USD 方向；不得把不足 0.1% 的即时变动当作未来常态；不得声称计算器能预测波动。

#### 新颖性结论

- `duplicate_of`: 空。
- `fact_delta`: true（8 月 11 日正式决定、4.35%、一致投票、最新预测）。
- `search_delta`: true（当日查询从“会不会加息”切换到“hold 后 AUD/USD 风险/下一事件 CPI”）。
- `example_delta`: true（官方 4.35%、独立来源 <0.1% AUD/USD / 0.2% AUD/NZD 的可核验即时数字）。
- `window_delta`: true（决议结果已落地，且次日美国 CPI 形成清楚截止窗口）。
- 历史无近似 RBA/AUD 内容，故应为 `new`，不是 refresh。

## 观察池

### US July CPI — result due 2026-08-12

- 状态：observation；建议约 68/100。
- 来源：BLS 6 月 CPI release 明确下期（July 2026）于 2026-08-12 08:30 ET 发布：  
  https://www.bls.gov/news.release/cpi.nr0.htm
- 独立近期预告：AP 2026-08-07 称 CPI 是本周核心更新：  
  https://apnews.com/article/1cf6047f812b3e1f151781f5722d97b7
- 判断：仍未发布结果，只有 `window_delta=true`；相对 8 月 9–10 日历史 CPI 观察没有第二刷新信号。按规则一类刷新信号只能观察。结果发布后若有新的实际数值与明确搜索变化，可评估 refresh 既有宏观风险稿；当前不应生成打法或审核包。

### US July PPI — due 2026-08-13

- 状态：observation；建议约 64/100。
- 官方日程：BLS PPI schedule：  
  https://www.bls.gov/schedule/news_release/ppi.htm
- 独立近期预告：AP 同上，确认 Thursday 发布 July PPI。
- 判断：仍只有未来发布窗口，没有结果数字；与历史 PPI 会前风险路径同构，`window_delta=true`，其余刷新信号为 false。等待正式结果。

### US July retail sales — due 2026-08-14

- 状态：discarded / low-frequency watch；建议约 55/100。
- 近期来源：AP 2026-08-07 本周预告：  
  https://apnews.com/article/1cf6047f812b3e1f151781f5722d97b7
- 淘汰理由：截至扫描时只有独立媒体预告，尚未完成官方结果双来源核验；虽然可连接事件风险仓位计算，但搜索/讨论热度与直接计算意图不够强，不能靠宏观日历凑选题。

### FundedNext FNL:002 / LucidDaily 慢变规则项

- 状态：本期不完整复扫。
- 理由：8 月 8–10 日已连续核验；FNL:002 仍缺稳定、带日期/版本的官方规则证据及独立可靠影响核验；LucidDaily 没有新的 dated changelog。按规则慢变观察项默认每 3 天复查，且无当日新触发信号。本期不可升级。

## 覆盖与淘汰摘要

- 覆盖类别：主要央行当日决定（RBA）、未来 7 天美国通胀/消费数据（CPI/PPI/retail sales）、公开 FX 影响分析、Reddit 当日讨论、历史候选与内容包去重、近期 prop-firm 慢变观察项触发检查。
- 正式建议：1（RBA，new）。
- 观察：2（CPI、PPI）。
- 淘汰/不重扫：retail sales 1；prop-firm 慢变组 2。
- 未使用来源：需要登录墙的 X/Quora、不可验证截图、方向预测和推广型 forecast 帖均未用于事实核验。

