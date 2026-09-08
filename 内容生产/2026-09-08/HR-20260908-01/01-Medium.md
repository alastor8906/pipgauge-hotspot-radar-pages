# FTMO Futures 50K Pro: Turn a Daily-Loss Rule Into a Planned-Risk Budget

FTMO Futures is currently in beta. If you are reading its 50K Pro Evaluation rules, the useful calculation is not “how big can I trade?” It is: after the stated daily-loss ceiling, commissions and open P&L are considered, how much planned price risk is actually left for one idea?

[FTMO’s Futures Trading Objectives & Rules](https://ftmo.com/en/futures/trading-objectives-and-rules/) lists a USD 1,000 Daily Loss Limit for the 50K Pro Evaluation. The same page defines the rule using equity: balance plus open-position P&L, less commissions. That makes the figure a day-level boundary, not a contract-size recommendation or a promise about fills.

## Start with a buffer, not the full limit

For a transparent teaching example, reserve USD 200 of the stated USD 1,000 ceiling for costs, open P&L variation and ordinary input error. That leaves a maximum planned price-risk budget of USD 800 before costs.

| Item | Teaching input |
|---|---:|
| 50K Pro day-one Daily Loss Limit | USD 1,000 |
| Editorial buffer | USD 200 |
| Maximum planned price risk before costs | USD 800 |

The USD 200 is not an FTMO rule, a recommended buffer or an execution estimate. It simply makes the arithmetic visible. Your own buffer may be larger, and no buffer turns a planned stop into a guaranteed fill.

## Translate the budget using your own verified contract value

Suppose your planned stop is 40 points. Do not assume a standard dollar value per point: that depends on the contract and the specifications in your actual platform.

Use this calculation:

`maximum whole quantity = floor(800 ÷ (40 × verified USD per point))`

The order matters. Confirm the instrument’s contract specifications and your point value first; then enter the verified value and the planned stop. The result is only a planned price-risk quantity. It does not include every commission, spread-like cost, slippage, gap or rule-specific account calculation, and it is not a view on futures direction.

## Where the calculators fit

Use PipGauge Daily Loss Limit first to record the stated rule, account state and the buffer you choose. Then use PipGauge Position Size with the contract value you have verified and the planned stop. PositionMath’s Prop Firm Simulator can be a secondary cross-check of the rule inputs.

The calculator should follow the rule reading, not replace it. [FTMO’s beta launch post](https://ftmo.com/en/futures/blog/ftmo-futures-is-here-prove-your-edge-in-the-futures-market/) describes the new Futures offering; its official rule page remains the source for the actual account mechanics. An [independent September 5 rule check](https://propfirmtimes.com/blog/ftmo-futures-beta-payout-ratio/) is a useful reminder to keep payout language and withdrawal eligibility separate from the risk math.

## A small checklist before using the number

- Confirm that you are looking at the right plan, account size and phase.
- Re-open the official rules and verify that the USD 1,000 figure and its equity definition still apply.
- Use your own platform’s current contract specification; do not borrow a point value from an unrelated micro or mini contract.
- Leave room for open P&L, commissions and execution differences rather than treating USD 800 as spendable capacity.
- Recalculate after a balance change and stop relying on this beta-launch explanation if FTMO changes the rules or the product leaves beta.

This is a rule-reading and planned-risk exercise, not a comparison of firms, a purchase recommendation, or a futures trade idea. A daily-loss rule can help frame a maximum planned loss; it cannot determine whether a trade should be taken or guarantee that an exit will occur at a chosen price.

*Draft status: awaiting_human_review. Do not publish until a human has rechecked the current FTMO Futures rules and every calculation input.*
