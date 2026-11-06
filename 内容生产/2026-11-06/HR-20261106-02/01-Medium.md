# FTMO Futures Changed Growth 100K and 150K Rules. Verify the Cohort Before Doing Any Math.

FTMO’s November 5 Futures update changes two numbers for Growth 100K and 150K accounts created as new Evaluations on or after 04:30 ET that day. It does not say that every existing account changes, and it does not turn a maximum-drawdown figure into a per-trade risk allowance.

For the affected new-evaluation cohort, FTMO lists:

| Growth plan | Maximum Drawdown (EOD Trailing) | Qualifying-day minimum daily P&L |
|---|---:|---:|
| 100K | USD 3,500 → USD 3,000 | USD 250 → USD 300 |
| 150K | USD 5,000 → USD 4,500 | USD 300 → USD 450 |

The official update also says Evaluations created before the cutoff, along with the Sim-Funded and Live Accounts they lead to, retain the current values. That makes the creation time, exact plan, account size and phase more important than a headline number.

## One transparent arithmetic check

The payout-eligibility wording refers to four qualifying days with a minimum daily P&L. If, and only if, four days each meet the stated minimum exactly, the arithmetic is:

- Growth 100K: 4 × USD 300 = USD 1,200
- Growth 150K: 4 × USD 450 = USD 1,800

This is not a payout forecast or a statement of eligibility. It does not replace any other official requirement. It also does not tell someone what to trade, how much to risk, what a contract is worth or where an EOD trailing floor will be for a particular account state.

## Keep rule boundaries separate from trade inputs

A clean checking sequence is:

1. Confirm the FTMO new-Evaluation creation time and the exact Growth plan, size and phase.
2. Record the current official Maximum Drawdown and qualifying-day values without converting either into a single-trade allowance.
3. Keep balance, high-water mark, open P&L, commissions and planned stop inputs as separate reader-entered values.
4. Use a calculator only to organize those inputs after the rule is confirmed.

PipGauge’s Challenge Simulator and Daily Loss Limit tools can help a reader structure their own risk-budget inputs. A [PositionMath Trailing Drawdown check](https://positionmath.com/) can be a secondary cross-check. Neither tool verifies FTMO eligibility, contract value, payout qualification, live account state or execution.

This dated rule-change frame expires at 12:00 ET on November 7, on an FTMO correction or later rule update, or when the reader is not in the new-evaluation cohort.

*Draft status: awaiting_human_review. Rule-reading and educational arithmetic only; not a firm endorsement, purchase recommendation, trading instruction or payout promise.*
