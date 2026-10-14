# FTMO 1-Step Consistency Is Live. Check the Order Cohort Before You Calculate the Ratio

FTMO’s October 8 update said its 1-Step CFD Challenge would replace the Best Day Rule with a Consistency rule for orders created on or after October 12, 2026 at 09:00 GMT+3. The current [Trading Objectives page](https://ftmo.com/en/trading-objectives/) now shows the live distinction: the new cohort uses a 50% Best Day-to-total-profit check, while earlier orders retain the legacy Best Day Rule.

That is a rule-reading and arithmetic question, not a market call.

## Start with the cohort, not a ratio

The current FTMO page says the Consistency rule applies to 1-Step accounts initiated from orders created on or after October 12, 2026, or accounts merged on or after that date. It says a Best Day must not represent more than 50% of total profit, where total profit is the cumulative sum of closed profits and losses across trading days.

Orders created before the cut-off remain on the legacy Best Day Rule, whose denominator is Positive Days’ Profit. Those are different denominators. A calculation can be correct and still be irrelevant if it is applied to the wrong order cohort.

## The official 50% example, as arithmetic

FTMO’s current example uses closed daily P&L of +USD 6,000, -USD 2,000, +USD 4,000 and +USD 2,000.

| Check | Value |
|---|---:|
| Total profit | USD 10,000 |
| Best Day | USD 6,000 |
| Best Day ÷ total profit | 60% |
| Total profit needed if Best Day stays USD 6,000 | USD 12,000 |

The last row is simply `USD 6,000 ÷ 0.50 = USD 12,000`. It describes the ratio only. It does not say what to trade, when to trade, whether an account is eligible, or what a future P&L should be.

FTMO also says that exceeding the Consistency limit is not a rule breach; the page says additional profit is needed until the ratio is 50% or less. The official terms, account date, account type and live dashboard remain authoritative.

## A clean verification sequence

1. Confirm the exact product and the order or merge date in the official record.
2. Confirm whether the live 50% Consistency wording applies, rather than assuming it applies to every FTMO product.
3. List closed daily P&L, identify the highest profitable day, and sum closed profits and losses for total profit.
4. Divide Best Day by total profit. If the confirmed percentage is 50%, the denominator required for a USD 6,000 Best Day is USD 12,000.

After those inputs are checked, [PositionMath](https://positionmath.com/) can make the same daily-P&L arithmetic transparent in a Consistency Rule Calculator. It does not validate FTMO terms, choose an account, interpret eligibility, or recommend any trade.

The news hook expires quickly: this is a post-cutover verification note for October 14–15, not an evergreen claim that every FTMO account has a 50% total-profit rule. If FTMO changes the cohort, definition or percentage, this title and example need a fresh source check before reuse.

Sources: [FTMO Trading Update, 8 October](https://ftmo.com/en/trading-updates/); [FTMO Trading Objectives, checked 14 October](https://ftmo.com/en/trading-objectives/); [independent dated rule-change tracker](https://www.propfirmsinsider.com/guides/prop-firm-rule-changes-in-q4-2026-the5ers-ftmo-fundednext-fundingpips-and-ftm).
