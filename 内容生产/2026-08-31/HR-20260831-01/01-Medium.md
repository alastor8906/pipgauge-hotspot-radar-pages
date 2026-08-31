# RBNZ’s September 2 Decision: A Fixed-Risk NZD/USD Size Check Before the Release

The Reserve Bank of New Zealand has listed its next Official Cash Rate update for **Wednesday, September 2 at 2:00 p.m. New Zealand time**, together with its Monetary Policy Statement. Reuters has included the decision in the current global week-ahead calendar. That creates a short, factual reason to inspect risk inputs before the release—not a reason to predict the OCR, read the statement in advance, or call the next NZD/USD move.

The practical question is narrower: if the maximum planned price risk is fixed, how does an NZD/USD position size change when the planned stop distance changes?

## Start with the risk budget, not the policy view

Use a deliberately simple teaching setup:

- Account: USD 10,000
- Maximum planned price risk: USD 100
- Pair: NZD/USD
- Teaching pip-value input: approximately USD 10 per pip per standard lot in a USD account

That pip-value input is an approximation for a worked example. A reader should verify it for the actual account currency, contract specification, and quote conditions. It is not a live quote, spread estimate, or claim about event liquidity.

The fixed-risk relationship is:

`position size = maximum planned price risk ÷ (planned stop pips × pip value per standard lot)`

With the USD 100 teaching budget, the arithmetic looks like this:

| Planned stop distance | Calculation | Approximate size before costs |
|---|---|---:|
| 25 pips | USD 100 ÷ (25 × USD 10) | 0.40 lot |
| 50 pips | USD 100 ÷ (50 × USD 10) | 0.20 lot |
| 75 pips | USD 100 ÷ (75 × USD 10) | about 0.13 lot |

The point is not that 25, 50, or 75 pips is the “right” distance for this event. They are three readable inputs that show the same USD 100 budget produces different sizes. A wider planned stop reduces the size needed to keep the planned loss budget unchanged.

## A planned stop is not an event guarantee

Scheduled decisions can change available liquidity and the price at which an order can actually fill. A planned stop distance is useful for sizing a risk budget, but it is not a promise that a position will exit at that exact level after a fast announcement or gap.

That distinction matters here. This calculation does not estimate the decision’s outcome, the NZD/USD move, the chance of any move, or the cost of trading through the release. It only makes the input arithmetic visible before an event that people are already looking up.

Costs also belong in their own line item. Commission, spread and slippage can change the realised result, so the three figures above are explicitly before those inputs. They should not be presented as observed RBNZ-event execution data.

## Where a calculator helps

After the plain formula, use PipGauge to verify the inputs for the actual setup:

1. **Pip Value** checks the NZD/USD value per pip for the account currency and lot convention.
2. **Position Size** checks the USD 100, 25/50/75-pip examples once the real pip value is supplied.
3. **P&L** and **Spread Cost** can test separately labelled hypothetical changes or costs; neither predicts the RBNZ decision or an order fill.

The useful workflow is therefore: confirm the event clock, choose a risk budget, enter the actual account inputs, calculate the planned size, and preserve the difference between a plan and an execution guarantee.

## Time boundary

This is a pre-decision draft only. It expires when the RBNZ publishes the September 2 OCR and Monetary Policy Statement, if the RBNZ changes the timing, or if a later verified fact creates a different question. A post-decision item would require new sources and a new review; it should not reuse this pre-release framing as if it were current.

Sources: [Reserve Bank of New Zealand Official Cash Rate page](https://www.rbnz.govt.nz/monetary-policy/about-monetary-policy/the-official-cash-rate); [Reuters week-ahead coverage](https://www.investing.com/news/economy-news/take-five-summers-over-buckle-up-4882165).

*Draft status: awaiting_human_review. Not investment advice; the worked figures are illustrative and exclude commissions, spreads, taxes, slippage and execution effects.*
