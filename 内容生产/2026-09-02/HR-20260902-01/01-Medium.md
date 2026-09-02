# RBNZ Raised Its OCR to 2.75%: Refresh the NZD/USD Risk Math, Not a Direction Call

The Reserve Bank of New Zealand has published its September 2 decision: the Official Cash Rate increased by 25 basis points to **2.75%**. An independent English news report also records the 2.75% result.

That closes the old “before the decision” window. It does not turn the published result into a reason to predict NZD/USD, estimate the next rate move, or assume a stop will execute normally in a fast market.

The useful post-release question is smaller: if a trader keeps the same planned dollar-risk limit, how does NZD/USD position size change when the planned stop input changes?

## Begin with the risk budget, not an interpretation of the decision

Use a deliberately simple teaching setup:

- Account: USD 10,000
- Maximum planned price risk: USD 100
- Pair: NZD/USD
- Teaching pip-value input: approximately USD 10 per pip per standard lot in a USD account

The pip-value input is a teaching assumption, not a live quote, a spread estimate, or a statement about post-decision liquidity. Verify it for the actual account currency and contract specification.

`position size = maximum planned price risk ÷ (planned stop pips × pip value per standard lot)`

| Planned stop distance | Calculation | Approximate size before costs |
|---|---|---:|
| 30 pips | USD 100 ÷ (30 × USD 10) | about 0.33 lot |
| 60 pips | USD 100 ÷ (60 × USD 10) | about 0.17 lot |
| 90 pips | USD 100 ÷ (90 × USD 10) | about 0.11 lot |

These are not forecasts of a 30-, 60-, or 90-pip move. They are three readable inputs that make one point visible: a wider planned stop requires a smaller size to keep the same USD 100 planned-loss budget.

## A planned stop is not an event-time guarantee

The completed rate decision can still coincide with changing liquidity or a price that does not fill where a normal-session plan assumed. A planned stop is useful for sizing a risk budget; it is not a promise of the actual exit price after a fast announcement or gap.

Commission, spread and slippage are separate inputs. The table is explicitly before those costs and is not evidence of observed RBNZ-event execution.

## Where the calculators fit

After the event facts and plain arithmetic:

1. **PipGauge Pip Value** verifies NZD/USD pip value for the actual account currency and lot convention.
2. **PipGauge Position Size** checks the USD 100 budget against the reader's chosen planned stop.
3. **P&L** and **Spread Cost** can test separately labelled hypothetical scenarios; they do not interpret the RBNZ decision, forecast NZD/USD, or guarantee an order fill.

The sequence matters: verify the published fact, set a risk budget, choose a planned stop independently of a direction call, then check the actual account inputs.

## Time boundary

This is a short post-decision refresh, not evergreen policy commentary. Retire or rewrite it after September 3, if RBNZ corrects the record, or if a later independently verified fact produces a different calculation question.

Sources: [Reserve Bank of New Zealand decision](https://www.rbnz.govt.nz/news-and-events/news/2026/09/ocr-increased-by-25-basis-points-to-2-75); [RBNZ September Monetary Policy Statement](https://www.rbnz.govt.nz/monetary-policy/monetary-policy-statement/monetary-policy-statement-filtered-listing-page/2026/sep-0209/monetary-policy-statement-september-2026); [Qatar News Agency report](https://qna.org.qa/en/news/news-details?date=2%2F09%2F2026&id=new-zealand-central-bank-raises-official-cash-rate-to-275).

*Draft status: awaiting_human_review. Not investment advice; all worked figures are illustrative and exclude commissions, spreads, taxes, slippage and execution effects.*
