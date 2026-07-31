# BOJ Held at 1.0% in an 8–1 Vote. Here Is the USD/JPY Risk Math That Matters

The Bank of Japan kept its uncollateralized overnight call rate at around 1.0% on July 31. The vote was 8–1. Hajime Takata dissented and proposed 1.25%, but that proposal was defeated.

Those are useful facts. They are not a directional trading signal.

For a USD/JPY position, the more practical question is: if the pair moves 50, 100 or 300 pips against the trade, how much money is at risk?

## Start with a transparent reference rate

Use USD/JPY 160.00 as a round historical scenario, not a live quote. For a US-dollar account, a standard lot of 100,000 dollars and a JPY pip of 0.01, the approximate pip value is:

`100,000 × 0.01 ÷ 160.00 = $6.25 per pip`

That gives a simple stress table:

| Position | 50 pips | 100 pips | 300 pips |
|---|---:|---:|---:|
| 0.10 lot | $31.25 | $62.50 | $187.50 |
| 0.50 lot | $156.25 | $312.50 | $937.50 |
| 1.00 lot | $312.50 | $625.00 | $1,875.00 |

The BOJ headline is the same in every row. The account impact is not.

## Reverse the calculation from a fixed loss budget

Suppose the account is $10,000 and the maximum planned loss is $100.

The theoretical lot size is:

`dollar risk ÷ (stop distance × pip value per standard lot)`

At the same 160.00 reference rate:

- 50 pips supports about 0.32 lot.
- 100 pips supports about 0.16 lot.
- 300 pips supports about 0.053 lot, or 0.05 lot after rounding down to a 0.01 lot step.

This is the useful discipline around a policy event: a wider risk distance requires a smaller position if the dollar loss budget stays fixed.

## The clean table is only a baseline

Fast currency moves can widen spreads, create slippage or skip the intended stop price. Broker contract sizes and lot increments also vary. A planned $100 loss is therefore a sizing baseline, not a guaranteed final loss.

There is also a reporting boundary around the intervention story. Reuters reported intervention activity using market sources, but Japan's Ministry of Finance had not yet published the monthly official data covering July 30 onward when this draft was prepared. The article should not convert a market-source report into an official confirmation.

The BOJ did confirm three numbers: 1.0%, an 8–1 vote and a defeated 1.25% proposal. Those facts are enough to explain why USD/JPY attention is elevated without guessing what happens next.

I used PipGauge's [pip value calculator](https://pipgauge.com/pip-value-calculator/) to check the per-pip estimate and its [position size calculator](https://pipgauge.com/position-size-calculator/) to reverse the $100 risk budget. The arithmetic appears first so the assumptions stay visible.

## Sources

- [Bank of Japan: July 31, 2026 Statement on Monetary Policy](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260731a.pdf)
- [Reuters: BOJ keeps rates steady](https://www.reuters.com/world/asia-pacific/boj-keep-rates-steady-deliver-hawkish-signal-price-pressures-mount-2026-07-30/)
- [Japan Ministry of Finance: official intervention operations](https://www.mof.go.jp/english/policy/international_policy/reference/feio/monthly/index.html)

*Educational scenario only. Not financial advice.*
