# Before the ECB Decision, Fix the Dollar Risk Before You Guess the Direction

The day before a central-bank decision produces an endless supply of forecasts.

EUR/USD could rise, fall, spike in both directions or barely move. None of those scenarios can be known from a position-size formula.

What the formula can do is keep one decision stable while everything else is uncertain:

> How much of the account is allowed to be lost if the trade is wrong?

For this example, the account is $10,000 and the maximum planned loss is $100. The direction does not matter to the arithmetic.

## One risk budget, three stop distances

For a USD-denominated account trading EUR/USD, one standard lot is approximately $10 per pip.

The basic relationship is:

`lot size = dollar risk ÷ (stop distance × pip value per standard lot)`

With a $100 loss budget:

- A 25-pip stop gives `100 ÷ (25 × 10) = 0.40 lot`.
- A 50-pip stop gives 0.20 lot.
- A 100-pip stop gives 0.10 lot.

Each row targets the same $100 loss at the planned stop. The wider stop is not permission to lose more. It is a reason to trade a smaller position.

That point matters before an event because traders often adjust only one side of the equation. They widen the stop to allow for volatility but leave the original lot size unchanged. The chart may look more tolerant, while the account has quietly accepted twice the risk.

## Spread is a separate event cost

Now add a second variable. Assume the normal spread is 1 pip but widens to 3 pips around the decision.

The approximate opening spread cost is:

- At 0.40 lot: $4 at 1 pip, or $12 at 3 pips.
- At 0.20 lot: $2 at 1 pip, or $6 at 3 pips.
- At 0.10 lot: $1 at 1 pip, or $3 at 3 pips.

These figures are small relative to the account, but they show why “same setup, same stop” does not always mean the same trade. A wider spread changes the entry economics and can reduce the distance between the effective entry and the stop.

If the account also charges commission, that cost should be added separately. Spread, commission and stop loss answer different questions and should not be compressed into one vague estimate.

## A planned stop is not a guaranteed fill

The $100 figure is a planning baseline. During a fast release, the market can move through prices before the order is filled. Slippage can make the realized loss larger, while a whipsaw can stop the trade before the later move develops.

That is why an event-risk check needs two layers:

1. **Base case:** the planned stop is filled close to its price.
2. **Stress case:** the spread widens and the fill is worse than planned.

The second layer does not need a precise prediction. Even asking whether a $150 or $200 realized loss would remain acceptable can reveal that the original position is too large for the event.

## What should remain unchanged after the headline?

The trader can change the directional thesis, entry method or stop distance. The account-level loss budget should not expand simply because the event feels important.

Before the ECB decision, the useful checklist is therefore short:

- Define the maximum dollar loss.
- Choose the stop for market reasons, not to force a desired lot size.
- Calculate the lot size from those two inputs.
- Add spread and commission separately.
- Stress-test a worse fill.

For the table above, I checked the arithmetic with PipGauge's [position size calculator](https://pipgauge.com/position-size-calculator/) and [spread cost calculator](https://pipgauge.com/spread-cost-calculator/). They appear here only after the reasoning because a calculator can verify the numbers, not forecast the ECB.

The decision may surprise the market. The amount at risk should not surprise the account owner.

## Sources

- [European Central Bank: meeting calendar](https://www.ecb.europa.eu/press/calendars/mgcgc/html/index.en.html)
- [Reuters ECB preview](https://www.investing.com/news/economy-news/back-to-square-one-five-questions-for-the-ecb-4797379)
- [Associated Press background](https://apnews.com/article/27b96999040acc6b71b6452398a17daa)

*Educational example only. Not financial advice.*
