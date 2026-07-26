# The ECB Held at 2.25%. The Risk Calculation Still Matters.

The European Central Bank kept its key interest rates unchanged on July 23. The deposit facility rate remained at 2.25%, and immediate market commentary described the decision itself as producing no material surprise.

That outcome is useful because it exposes a common mistake in event trading: treating the importance of a headline as a forecast of how many pips the market must move.

> A major decision can produce a modest reaction. Position size should be based on the loss budget, not on the drama of the calendar.

## What was known and what was not

The decision time was known in advance. The direction and size of the EUR/USD response were not. A trader could prepare for 25, 50 or 100 pips, but none of those scenarios was guaranteed.

That is why a pre-event calculation should be read as a risk ceiling under stated assumptions, not as a volatility forecast.

Assume a $10,000 account and a maximum planned loss of $100. For a USD-denominated account, one standard lot of EUR/USD is commonly about $10 per pip.

The approximate position-size formula is:

`lot size = dollar risk ÷ (stop distance × pip value per standard lot)`

That produces:

| Planned stop | Approximate size | Modeled stop loss |
|---|---:|---:|
| 25 pips | 0.40 lot | $100 |
| 50 pips | 0.20 lot | $100 |
| 100 pips | 0.10 lot | $100 |

The rows do not claim that EUR/USD moved by any of those amounts. They show how the same account budget leads to a smaller position when the assumed event range becomes wider.

## Reconstruct the actual move separately

A post-event review needs a reliable timestamped price source. Record the last tradable price immediately before the release, then the post-release high and low over a clearly defined window.

If that verified range is `N` pips, the simplified dollar impact is:

- 0.10 lot: approximately `N × $1`.
- 0.50 lot: approximately `N × $5`.
- 1.00 lot: approximately `N × $10`.

Do not insert an attractive round number because the event was important. If the source does not support the exact high and low, publish the method without claiming an exact event move.

## A quiet result does not invalidate preparation

The ECB hold was broadly expected, and Reuters reported that markets did not move materially because of the decision itself. That does not mean the risk check was wasted.

Preparation is valuable precisely because the eventual path is unknown. A position sized for a defined loss budget can survive a modest reaction without having depended on one. A position sized from excitement can be too large even when the final move is small.

Spread and slippage also remain separate costs. A 1-pip spread at 0.20 lot is roughly $2; a 3-pip event spread is roughly $6. Those figures do not replace the stop-loss calculation, and a stop still cannot guarantee its requested fill.

After doing the arithmetic, the inputs can be checked with PipGauge's [position size calculator](https://pipgauge.com/position-size-calculator/) and [spread cost calculator](https://pipgauge.com/spread-cost-calculator/). The calculators verify assumptions; they do not predict the next ECB decision.

The clean lesson from a limited market reaction is not that event risk was imaginary. It is that calendar importance and account impact are two different numbers.

## Sources

- [ECB: monetary policy decisions, July 23, 2026](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260723~29f24d99bc.en.html)
- [Reuters: ECB leaves rates on hold](https://www.investing.com/news/economy-news/instant-view-ecb-leaves-rates-on-hold-but-keeps-door-open-to-further-rate-hikes-4808962)
- [Associated Press: ECB holds rates](https://apnews.com/article/b89a1bcf29374108fb0f15621e33c788)

*Educational retrospective only. Not financial advice.*
