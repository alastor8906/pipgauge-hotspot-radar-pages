# 2026-08-10 PipGauge / PositionMath 英文热点研究底稿

- 扫描日期：2026-08-10（Asia/Shanghai）
- 研究角色：一手来源研究代理；只提供候选与门槛判断，不修改候选总表、打法、日报、内容包或站点
- 观察窗口：过去 72 小时 / 未来 7 天
- 结论：建议正式入选 **1** 条（`refresh`），观察 **3** 条，淘汰 **2** 类。最强候选是 2026-08-07 发布的美国 7 月就业报告结果；它有 BLS + AP + Axios 三个独立可靠主体及同日公开讨论，并且四类 refresh signal 全成立。它应刷新既有宏观事件稿，而不是新建同构文章。

## 扫描基线与历史去重

已阅读：`雷达规则.md`、`雷达配置.yaml`、`热点候选总表.csv`、`热点流量打法.json`、2026-08-09 及此前每日报告、既有内容生产目录与历史审核包。历史中与本期最接近的内容包括：

- `HR-20260730-02`：FOMC 结果后的 EUR/USD 固定风险与点差计算稿，可作为美元宏观事件稿的刷新对象。
- `HR-20260724-01` / `HR-20260725-01`：FOMC 会前与结果链，说明通用会前仓位表本身已被覆盖。
- `HR-20260802-01`：USD/JPY 干预风险刷新，不应因同样使用 Pip Value/Position Size 就误判为重复，但当前没有新的日元官方金额或机制事实。
- 2026-08-08/09 观察记录：美国就业、CPI/PPI、FundedNext FNL:002、LucidDaily 已进入历史扫描；本期必须逐项应用四类 refresh gate，而非重复造题。

## A. 建议正式入选

### HR-20260810-01 — U.S. Payrolls Fell 23,000: Recalculate Dollar Risk Around the July Jobs Surprise

**站点 / 执行方式：** PipGauge / `refresh`。建议更新 `HR-20260730-02` 的宏观美元风险稿，不创建第二篇同构文章。

**事实与关键数字：** BLS 于 2026-08-07 08:30 ET 发布 7 月 Employment Situation：非农就业变动为 **-23,000**，失业率 **4.1%**；5 月由 +129,000 下修至 +63,000，6 月由 +57,000 下修至 +20,000，合计下修 **103,000**。AP 独立报道同一组核心数字，并指出 **264,000** 人离开劳动力市场、参与率降至 **61.4%**；Axios 独立确认 -23,000、4.1%、合计下修 103,000，并给出经济学家此前预期约 +87,000。

**可靠事实源（按发布主体去重，共 3）：**

1. U.S. Bureau of Labor Statistics，2026-08-07，官方一手事实源：<https://www.bls.gov/news.release/empsit.nr0.htm>
2. AP News，2026-08-06/07（页面事件为周五报告），独立可靠新闻：<https://apnews.com/article/economy-jobs-trump-unemployment-rate-jobseekers-9c2d147c14bc428458be5a1e83e54957>
3. Axios，2026-08-07，独立可靠新闻：<https://www.axios.com/2026/08/07/july-jobs-report-employment-losses>

**公开讨论 / 热度信号：**

- Reddit `r/recruitinghell`，2026-08-07，用户明确追问“就业减少但失业率为何下降”，证明搜索对象已从会前预测转为结果解释：<https://www.reddit.com/r/recruitinghell/comments/1vhzn7h/the_economy_lost_23000_jobs_in_july_and/>
- Reddit `r/UnderReportedNews`，2026-08-07，搜索快照约 +399 votes，证明该标题数字在 72 小时窗口内获得广泛讨论：<https://www.reddit.com/r/UnderReportedNews/comments/1vi0u3a/us_economy_unexpectedly_lost_23000_jobs_in_july/>
- AP 2026-08-07 市场收盘报道指出政府报告公布后美股上涨、国债收益率下跌，仅作为跨市场关注度信号，不用于预测美元方向：<https://apnews.com/article/9d586bdbf1fb230dcf1f915dcaf50858>

**计算器桥接：** 将新闻问题转为“在就业冲击后的美元事件窗口，固定美元风险下，25/50/100 pip stop 对应多大仓位”；Pip Value → Position Size → P&L，Spread Cost 只用明确标注的假设情景。示例可用 USD 账户 $10,000、最大计划损失 $50、EUR/USD 约 $10/pip/标准手：25/50/100 pip 对应 0.20/0.10/0.05 lot。不得把假设点差或滑点写成实测。

**刷新信号：**

- `fact_delta=true`：会前日历已变为正式 -23,000 / 4.1% / -103,000 结果。
- `search_delta=true`：当前用户搜索和讨论的是“why unemployment fell when payrolls fell”“July jobs report -23K”，不再是发布时间/预测。
- `example_delta=true`：-23,000、4.1%、103,000 与 264,000 足以替换标题、首段和数字示例语境。
- `window_delta=true`：2026-08-07 结果公布后的 72 小时讨论窗口仍有效，但应以 2026-08-10/11 为最迟快发窗口。

**评分建议：** 新鲜度 23 / 流量 25 / 贴合 24 / 证据 15 / 可执行 9 = **96**。

**门槛判断：** `selected + refresh`。双来源、近期性、计算贴合、数字回溯、排除项与 72 分门槛全部通过。规则明确指出宏观结果解释不以实测点差/滑点为通用硬门槛；历史 8 月 7–9 日以“缺执行成本”为由降级的做法不应继续沿用。

**编辑边界：** 不预测美元、EUR/USD、黄金或美股方向；不把失业率下降简化成劳动力市场改善；不把 AP/Axios 的政策解释写成 BLS 结论；不把假设 stop、spread 或 slippage 写成观察数据。

## B. 观察池

### HR-20260810-02 — July CPI Due August 12

**事实源：** BLS 的 6 月 CPI 正式发布页明确写明 7 月 CPI 将于 **2026-08-12 08:30 ET** 发布：<https://www.bls.gov/news.release/cpi.nr0.htm>。BLS 6 月结果为月率 **-0.4%**、同比 **3.5%**，但这些不是待发布的 7 月结果。

**辅助日历 / 独立性：** 可由公开经济日历或可靠 week-ahead 新闻确认该时点，但在正式结果前，任何预测数字都不能写成事实。当前扫描拿到的关键可核验数字仍主要来自 BLS；即使补齐第二日历主体，主题仍受刷新门槛限制。

**计算器桥接：** CPI 事件的 EUR/USD 固定风险仓位和 P&L 路径自然，但与既有 FOMC/宏观会前包高度重叠。

**刷新信号：** `window_delta=true`；`fact_delta=false`（结果未出）；`search_delta=false`（仍为通用 CPI 时间/预测）；`example_delta=false`（没有新的正式结果数字）。

**评分建议：** 20 + 22 + 21 + 15 + 6 = **84**；但硬性 refresh gate 只有 1 类信号，故 `observation`。重开条件：8 月 12 日正式结果发布且产生新的结果型搜索问题/数字示例。

### HR-20260810-03 — July PPI Due August 13

**事实源：** BLS 官方 PPI 日历明确列出 7 月 PPI 于 **2026-08-13 08:30 ET** 发布：<https://www.bls.gov/schedule/news_release/ppi.htm>。

**计算器桥接与重复：** 可连接 Pip Value / Position Size / P&L，但当前是会前通用风险表，而且流量路径被前一日 CPI 抢占；没有独立的正式结果数字或独特计算问题。

**刷新信号：** 仅 `window_delta=true`；其余三类为 false。评分建议 19 + 18 + 20 + 15 + 5 = **77**，但 refresh 硬门槛失败，故 `observation`。重开条件：8 月 13 日结果形成至少两个新信号，并出现与 CPI 不同的具体搜索问题。

### HR-20260810-04 — FundedNext FNL:002 Drawdown Math

**品牌 / 社区可见数字：** FundedNext 品牌关联的公开 Reddit 帖于 2026-08-04 声称：$25,000 challenge、**12% maximum loss limit**、**4% daily loss limit**、static drawdown、3-day payout、85% reward share、起价 **$149.99**：<https://www.reddit.com/r/fundednext/comments/1vf6o9x/fnl002_12_mll_3day_payout_2step_cfds_25k/>。社区转述页于 2026-08-05 重复这些数字，但发布主体和事实链仍未脱离 FundedNext：<https://www.reddit.com/r/joinproptrading/comments/1vg70mf/does_a_wider_loss_buffer_actually_help_traders/>。

**独立行业背景：** Finance Magnates 2026-07 的报道可独立证明 FundedNext Labs 是以真实用户测试实验挑战的项目，但报道的是 FNL:001，不能独立核验 FNL:002 的 12%/4%/$149.99：<https://www.financemagnates.com/forex/fundednext-launches-labs-to-test-experimental-prop-challenges-on-live-traders/>。

**计算器桥接：** PositionMath 很强：$25,000 × 12% = $3,000 total buffer；×4% = $1,000 daily limit；可比较同风险预算下的连续亏损容忍度。但数字若不能由稳定、带日期/版本的官方规则页回溯，就不能正式写作。

**讨论信号：** 2026-08-07 的 propfirm 帖约 +129 votes，用户主动用“fee per $100 available drawdown”比较费用和亏损空间，证明计算需求真实，但不能核验 FNL:002 条款：<https://www.reddit.com/r/propfirm/comments/1vhulvj/12_payouts_in_3_months_all_from_5k_accounts/>。

**门槛判断：** `observation`。建议分数 18 + 20 + 24 + 7 + 7 = **76**，但只有一个可靠规则发布主体，且未找到稳定 dated/versioned 官方规则页；品牌规则政策的“官方一手 + 独立影响/热度”中，官方事实源本身不合格。重开条件：FundedNext 发布带日期/版本、可公开访问的完整 FNL:002 规则页或 PDF，并由独立行业来源确认其影响。

## C. 淘汰 / 本期不重扫成候选

### 方向性预测与喊单

包括“CPI/NFP 后美元、黄金、股票或加密货币会涨还是跌”、具体价位目标和交易信号。即使 72 小时讨论热，也触发方向预测/纯价格炒作排除项，无法靠 P&L 计算器包装为合格选题。建议记为 `discarded`，评分约 57。

### 无当期触发的常青仓位、杠杆与 prop-risk 问题

Reddit 在 2026-08-09 仍讨论 daily loss、trailing drawdown 和 consistency rules（例如 <https://www.reddit.com/r/propfirm/comments/1vjw6o5/heres_how_your_strategy_can_be_genuinely/>），说明常青需求存在；但没有新的、可核验的规则版本或正式决定，不能构成热点。适合常青 SEO 队列，不应放入当期正式雷达。评分约 49，`discarded/slow_watch`。

## 覆盖审计

本期覆盖了：美国宏观官方日历与结果（BLS jobs/CPI/PPI）、AP/Axios 独立新闻、Reddit 公开讨论、ForexFactory 搜索可见日历信号、英国 FCA 新闻面、美国 CFTC 搜索面、prop-firm 新品与规则讨论。没有找到过去 72 小时内可直接落到 PipGauge/PositionMath、同时满足双来源与新颖性门槛的其他 FCA/CFTC 零售 FX/CFD 规则变更。未使用登录墙、匿名截图或无法回溯的社交爆料作为事实源。

## 最终研究建议

正式入选仅保留 **1 条**：美国 7 月就业报告，执行为 `refresh`。CPI/PPI 均等待结果；FNL:002 等待合格的 dated/versioned 官方规则源；其余方向性或无触发的常青问题淘汰。该结论符合“允许 0 条、宁缺毋滥”，但当前就业候选确实通过全部硬门槛，不需要为了寻找实测点差而错误降级。
