# FTMO’s 1-Step Rule Changes on October 12: Check the Denominator Before You Read Your Best-Day Ratio

FTMO says its 1-Step rules change for new orders created on or after October 12, 2026 at 09:00 GMT+3. The useful question is not whether a CFD market will move up or down, or whether a challenge is “better.” It is which profit denominator applies to the order date you are looking at.

In its [October 8 CFD Trading Update](https://ftmo.com/en/blog/trading-updates/trading-update-8-oct-2026/), FTMO says the Best Day Rule is replaced by a Consistency rule for those new 1-Step orders and for 1-Step accounts merged on or after that date. Orders created before the cutover remain under the Best Day Rule.

## The calculation change is the denominator

FTMO describes the existing Best Day Rule as Best Day divided by Positive Days’ Profit: only days that close with a positive daily P&L are in that denominator. The announced Consistency rule instead uses total profit, including days that close with a loss.

Here is a teaching-only P&L sequence, also useful for checking arithmetic:

| Day | Closed daily P&L |
|---|---:|
| 1 | -USD 500 |
| 2 | +USD 2,000 |
| 3 | -USD 300 |
| 4 | +USD 1,000 |

The Best Day is USD 2,000.

- Under the old Positive Days’ Profit denominator, only USD 2,000 and USD 1,000 count: USD 3,000 total. The ratio is `2,000 / 3,000 = 66.7%`.
- Under the announced total-profit denominator, all four days count: `-500 + 2,000 - 300 + 1,000 = 2,200`. The ratio is `2,000 / 2,200 = 90.9%`.

Those numbers illustrate the denominator change. They are not FTMO’s post-cutover percentage, an account result, a pass/fail statement, or a reason to increase risk.

## Verify the rule before applying any percentage

[BabyPips’ independent explanation](https://www.babypips.com/trading/prop-firm-consistency-rule-best-day-limit) describes the existing FTMO 1-Step 50% Best Day calculation and why a profitable day can require more qualifying profit later. FTMO’s own update says the new Consistency rule is stricter and that the full description will appear in Trading Objectives once the change takes effect.

So the sequence is simple: confirm the order date, open the current official 1-Step terms, identify the applicable percentage and definition, then calculate the ratio from the actual daily P&L distribution. A [PositionMath Consistency Rule Calculator](https://positionmath.com/) can make the arithmetic auditable after those inputs are verified. It cannot tell you which FTMO terms apply, confirm eligibility, or make a challenge outcome predictable.

This is a rule-reading example, not a recommendation to buy an account, trade a particular size, or take a market view. Rules can vary by order date, program, stage, eligibility and updated terms. Recheck the official page after the October 12 cutover.

*Draft status: awaiting_human_review. Do not publish until a human has rechecked the live FTMO Trading Objectives, the effective time, affected order cohort and every formula reference.*
