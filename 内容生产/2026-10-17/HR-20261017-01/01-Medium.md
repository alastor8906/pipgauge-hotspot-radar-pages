# FTMO’s Europe DST Week: Verify Your Daily-Loss Reset Before October 26

FTMO’s October 15 trading update flags a timekeeping change that is easy to misread as a trading issue. It is not a market outlook and it is not a reason to take, hold, or close a position. It is a calendar-and-rule check: during the Europe/US daylight-saving mismatch, the clock on a platform may not mark the same boundary as the one that matters for a daily-loss rule.

FTMO says Europe leaves Summer Time on October 25. From October 26 through November 1, its CFD update says Prague midnight and MetaTrader midnight will be two hours apart, rather than the usual one hour. The same update says Max Daily Loss is monitored on Prague time and the daily drawdown resets at midnight. For an account-specific answer, FTMO directs users to the countdown shown when hovering over Today’s permitted loss in Account MetriX.

## The useful number is a clock difference, not a loss estimate

| Period in FTMO’s update | Prague midnight vs. MetaTrader midnight |
|---|---:|
| Usual relationship | 1 hour |
| October 26 to November 1, 2026 | 2 hours |

Those are timing facts, not a universal broker offset, a local reset time, or a dollar-risk calculation. The [ICE 2026 daylight-saving timetable](https://www.ice.com/publicdocs/endex/circulars/E26004_attach_2.pdf) independently confirms the underlying sequence: Europe changes on October 25 and the United States on November 1. But ICE does not define FTMO’s account rule. FTMO’s current update and the reader’s own Account MetriX countdown remain the relevant checks.

## A verification sequence that does not assume a clock

1. Open the current [FTMO October 15 trading update](https://ftmo.com/en/blog/trading-updates/trading-update-15-oct-2026/) and confirm that its dates, product, platform wording and reset guidance still apply to the account in question.
2. In the affected account, inspect Account MetriX’s live reset countdown. Record the date and time displayed rather than inferring it from a phone, local computer, or a generic MT4/MT5 convention.
3. Compare three labels separately: Prague time, the platform display, and local time. During October 26–November 1, the official 1-hour-to-2-hour change is a reason to recheck, not a shortcut for declaring a reset time.
4. Keep the clock check distinct from any risk number. A Daily Loss Limit is a day-level boundary; it is not an automatically available per-trade budget, and a reset time does not erase open P&L, commissions, product terms, or other account conditions.

After the official timing and the account’s countdown are verified, PipGauge’s Forex Session Clock can help make the three clock displays legible, and its Daily Loss Limit tool can keep a reader-entered day boundary separate from position-size arithmetic. The tools do not establish FTMO terms, decide whether a reader is covered by this update, or guarantee compliance.

[PropDataLab’s reset-clock explainer](https://propdatalab.com/prop-firm-daily-reset-clock/) shows why this is a current public rule-reading question, but it is not the rulebook. The only responsible use of the DST hook is to check the live official wording and an account-specific countdown before relying on any day boundary.

This is a verification note, not a firm comparison, purchase recommendation, market forecast, trade signal, or claim that a clock difference creates a predictable trading result. Recheck the framing on October 25 and retire it after November 1 unless a newer official update creates a new, dated reset-time question.

*Draft status: awaiting_human_review. Do not publish until a human has rechecked the live FTMO update, the applicable account view, and every timing statement.*
