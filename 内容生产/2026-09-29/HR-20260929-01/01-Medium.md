# The RBA Raised the Cash Rate to 4.60%. AUD/USD Risk Still Starts With a Number, Not a Forecast

On September 29, the Reserve Bank of Australia raised its cash rate target by 25 basis points to 4.60%. The [RBA's decision statement](https://www.rba.gov.au/media-releases/2026/mr-26-27.html) records the decision, and [ABC News Australia](https://www.abc.net.au/news/2026-09-29/rba-lifts-rates-highest-level-in-15-years-september-2026/107206640) independently reported the move from 4.35% to 4.60%.

That is a useful, dated fact. It is not an AUD/USD target, a view on the next RBA meeting, or proof that a particular trade is appropriate. A rate headline can pull people toward a currency pair very quickly. The practical question that survives the headline is less dramatic: if a planned loss limit stays fixed, how should the position size change when the planned stop is wider?

This is a refresh of an existing RBA/AUD/USD risk note, not another same-shaped macro post. The earlier pre-decision clock has expired. The update replaces it with the published result and a new, explicitly instructional risk table.

## One dollar budget, three planned stops

Assume a USD 10,000 account with a maximum planned price loss of 1%, or USD 100. For AUD/USD in a USD account, use an approximate teaching input of USD 10 per pip for one standard lot. Actual pip value and permitted increments depend on account currency, contract convention and broker rules.

`lot size = dollar risk / (planned stop in pips × pip value per standard lot)`

- 30-pip planned stop: `100 / (30 × 10) = 0.3333 lot`, or about 0.33 lot.
- 60-pip planned stop: `100 / (60 × 10) = 0.1667 lot`, or about 0.17 lot.
- 90-pip planned stop: `100 / (90 × 10) = 0.1111 lot`, or about 0.11 lot before broker rounding.

Each row targets the same USD 100 planned price loss before costs. If a trader kept 0.33 lot while moving a planned stop from 30 to 90 pips, the planned price risk would change from roughly USD 100 to roughly USD 300 before costs. That is just arithmetic. It does not say AUD/USD will move 30, 60 or 90 pips, and it does not infer what the RBA should do next.

## A published decision is not a position-size input

The RBA result is the news hook. The account loss limit, planned stop and pip value are the numerical inputs. Keeping those categories separate helps prevent a common error: choosing a lot size first because the event feels important, then allowing the risk budget to change when the stop changes.

For a process check:

1. Set a maximum dollar loss before selecting a size.
2. Choose a planned stop from the trade structure, not from a preferred lot number.
3. Recalculate the quantity every time the planned stop changes.
4. Treat spread, commission and slippage as separately labelled hypothetical stresses.
5. Do not turn a planned stop into a claim about a guaranteed fill.

For example, at approximately 0.17 lot, a USD-account AUD/USD position has an approximate pip value of USD 1.70. A hypothetical additional two pips of adverse execution cost would add about USD 3.40. That is a teaching stress calculation, not a measurement of RBA-session spreads, liquidity or fills. Event conditions may be different from ordinary conditions, and a calculator cannot observe an individual broker's execution.

After the fact, formula and assumptions are clear, the [PipGauge position size calculator](https://pipgauge.com/position-size-calculator/) can verify the pair, account-currency and fixed-risk inputs. Its companion pip-value calculation can check the assumed per-pip value before sizing. Those tools do not interpret RBA policy, forecast AUD/USD, recommend a long or short position, or guarantee that a stop will fill at its planned level.

## What changes in the existing article

Replace the expired “decision is scheduled” title and every future-tense reference with the September 29 published 4.60% result. Replace the old calendar/preview source set with the RBA statement and ABC same-day report. Replace the former 25/50/75-pip table with the 30/60/90-pip USD 100 teaching table above. Keep the editorial limit: explain a fixed-risk calculation after a verified event; do not convert the event into a price or policy forecast.

The result-day frame is short. Retire it after the September 30 U.S. data window, if the RBA corrects the record, or if a later independently verified fact produces a different calculation question.

## Sources

- [Reserve Bank of Australia: Statement by the Monetary Policy Board, 29 September 2026](https://www.rba.gov.au/media-releases/2026/mr-26-27.html)
- [ABC News Australia: RBA lifts rates to highest level in 15 years, 29 September 2026](https://www.abc.net.au/news/2026-09-29/rba-lifts-rates-highest-level-in-15-years-september-2026/107206640)
- [Public Reddit result-day discussion](https://www.reddit.com/r/AusFinance/comments/1wt0msg/rba_lifts_interest_rates_025pc_to_46pc/) — discovery/heat only, not a factual source

*Educational risk example only. Not financial advice.*
