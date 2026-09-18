# FTMO Futures Has Formally Launched: Read the 50K Pro Daily-Loss Rule Before You Size a Trade

FTMO announced the formal launch of FTMO Futures on September 17. If you are now checking the 50K Pro rules, the useful question is not “how big can I trade?” or what a futures market might do next. It is whether a day-level loss boundary is being mistaken for a per-trade risk budget.

[FTMO’s current Futures Trading Objectives & Rules](https://ftmo.com/en/futures/trading-objectives-and-rules/) lists a USD 1,000 Daily Loss Limit Amount for the 50K Pro view. The page defines the limit with equity: balance plus open-position P&L, less commissions. Check the exact plan and phase you have before using any number; this is not a universal futures-prop rule.

## Keep a day boundary separate from planned price risk

For transparent teaching arithmetic, set aside USD 200 from the stated USD 1,000 amount for open P&L variation, commissions and input uncertainty. That leaves USD 800 as a maximum planned price-risk budget before costs.

| Item | Teaching input |
|---|---:|
| Stated 50K Pro daily-loss amount | USD 1,000 |
| Editorial buffer | USD 200 |
| Maximum planned price risk before costs | USD 800 |

The USD 200 is not an FTMO instruction, a recommendation or an execution-cost estimate. It simply prevents a day-level limit from being treated as spendable capacity. A different account state or buffer changes the calculation.

## Use the contract value you have verified

With a 40-point planned stop, do not import a dollar-per-point value from another micro, mini, broker or platform. First confirm the instrument and its contract specification in the platform you actually use. Then calculate:

`maximum whole quantity = floor(800 ÷ (40 × verified USD per point))`

That is a planned price-risk quantity only. It does not include every cost or execution difference, it does not tell you whether to take a trade, and it cannot make a stop a guaranteed exit.

## Where the calculators fit

The sequence matters: read the current official rule, confirm the correct plan and phase, verify your contract value, reserve a buffer, then calculate planned risk. PipGauge Daily Loss Limit can help keep the day-level boundary and buffer visible. PipGauge Position Size can then use the reader-verified USD-per-point input and planned stop. PositionMath’s Prop Firm Simulator is only a secondary cross-check of the rule inputs.

FTMO’s [September 17 launch release](https://ftmo.com/en/press-release/ftmo-launches-ftmo-futures/) is the current news hook. The official rules remain the source for the actual number and definition. An [independent industry launch item](https://www.liquidity24.com/ftmo-expands-into-futures-market-with-the-launch-of-ftmo-futures) and a [public rule-reading discussion](https://www.reddit.com/r/PropFirmGenie/comments/1w9wal1/ftmo_futures_pro_might_actually_be_one_of_the/) show why people are checking this now; neither replaces the rulebook.

This is a rule-reading and planned-risk exercise, not a comparison of firms, a purchase recommendation or a futures trade idea. Recheck every input if the rules, plan, phase, eligibility, contract specification, balance, open P&L or costs change.

*Draft status: awaiting_human_review. Do not publish until a human has rechecked the live official rules and every calculation input.*
