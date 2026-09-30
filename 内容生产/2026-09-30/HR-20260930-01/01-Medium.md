# Australia’s August CPI Is 4.0%. An AUD/USD Risk Budget Still Needs Its Own Inputs

Australia’s Consumer Price Index rose 4.0% in the 12 months to August 2026, up from 3.5% in July. The [Australian Bureau of Statistics release](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release) records the result; [ABC News Australia](https://www.abc.net.au/news/2026-09-30/asx-markets-business-live-news/107210136) independently reported the same 4.0% annual figure.

That is a timely, verifiable inflation result. It is not an AUD/USD target, a prediction about the next RBA meeting, or evidence that a particular stop distance is appropriate. A headline can focus attention on a currency pair, but it does not supply the numerical inputs for a position size.

This refresh replaces the short RBA-result snapshot in an existing AUD/USD risk note. The question is deliberately narrower: if a planned dollar-loss limit is unchanged, how does quantity change when a trader’s planned stop is wider?

## Keep the loss budget fixed; let the quantity move

Use teaching inputs, not a claim about the CPI release: a USD 10,000 account, maximum planned price risk of 1% (USD 100), and AUD/USD in a USD account at an approximate USD 10 per pip for one standard lot. Actual pip value and allowed increments depend on account currency, contract convention and broker rules.

`lot size = dollar risk / (planned stop in pips × pip value per standard lot)`

| Planned stop | Calculation | Approximate size |
|---|---:|---:|
| 40 pips | `100 / (40 × 10)` | 0.25 lot |
| 80 pips | `100 / (80 × 10)` | 0.12 lot |
| 120 pips | `100 / (120 × 10)` | 0.08 lot |

Every row aims at the same USD 100 planned price loss before costs. The 40/80/120-pip inputs are not a forecast of an inflation-day move, a typical range, or a recommendation for where a stop belongs. They merely show the relationship: when the planned stop doubles, the quantity must halve if the loss budget is to stay fixed.

If someone retained 0.25 lot while changing a planned stop from 40 to 120 pips, planned price risk would rise from about USD 100 to about USD 300 before costs. That is arithmetic, not an inflation view.

## The news fact and risk calculation answer different questions

The CPI result is the discovery hook. The account loss limit, planned stop and pip value are the sizing inputs. Mixing those categories creates a predictable mistake: selecting a preferred lot size because an event feels important, then quietly allowing the planned loss to change.

For a practical process check:

1. Set the maximum dollar loss before calculating quantity.
2. Select a planned stop from the trade structure, not from the news headline or a preferred lot number.
3. Recalculate quantity whenever the planned stop changes.
4. Treat commission, spread and slippage as separately labelled hypothetical stresses.
5. Treat a planned stop as a plan, never as a guaranteed fill.

For instance, an approximate 0.12-lot USD-account AUD/USD position has an approximate pip value of USD 1.20. A separately labelled hypothetical two-pip adverse execution cost would add about USD 2.40. It is not a measurement of CPI-session spreads, liquidity or fill quality, and it should not be presented as one.

After the facts, formula and assumptions are clear, the [PipGauge position size calculator](https://pipgauge.com/position-size-calculator/) can check the reader’s pair, account currency and fixed-risk inputs. Its pip-value calculation can verify the per-pip convention before sizing. The tools do not interpret the ABS release, forecast AUD/USD, recommend long or short exposure, or guarantee an execution price.

## What this refresh changes

Replace the prior RBA-result title and its 4.60% rate fact with the published August CPI result: 4.0% annual CPI after 3.5% in July. Replace the former 30/60/90-pip teaching grid with the explicitly instructional 40/80/120-pip table. Keep the boundary intact: use a verified current event to introduce fixed-risk arithmetic, never to make a currency, rate, volatility or profit call.

Retire this result-day frame after the October 1 Australian session, if the ABS or ABC corrects material facts, or when a later independently verified fact produces a different reader question.

## Sources

- [Australian Bureau of Statistics: Consumer Price Index, Australia, August 2026](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release)
- [ABC News Australia: Inflation rises to 4 per cent, 30 September 2026](https://www.abc.net.au/news/2026-09-30/asx-markets-business-live-news/107210136)
- [Public r/AusFinance discussion](https://www.reddit.com/r/AusFinance/comments/1wts9da/cpi_rose_40_in_the_year_to_august_2026/) — discovery/heat only, not a factual source

*Educational risk example only. Not financial advice.*
