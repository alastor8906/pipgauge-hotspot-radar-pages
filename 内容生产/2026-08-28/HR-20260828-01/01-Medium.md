# Tokyo Core CPI Is Out. Calculate USD/JPY Fixed Risk Before Making a BOJ Call

Japan’s Statistics Bureau published Tokyo’s preliminary August CPI results on August 28. Reuters reported that Tokyo core CPI rose **1.8%** year over year, against a **1.7%** consensus, after a revised **1.7%** prior reading.

Those are dated facts. They do not say what the Bank of Japan will do next, where USD/JPY will trade, or whether anyone should enter or exit a trade.

The useful calculation is more basic: at a stated USD/JPY conversion input, what is one pip worth in a USD account, and how does a fixed dollar-risk limit change planned lot size as the chosen stop gets wider?

## Convert pip value before choosing size

For one standard lot of USD/JPY, one pip is JPY 1,000. Use **159.30** only as a clearly labelled teaching conversion input:

USD value per pip = JPY 1,000 / 159.30 = approximately **USD 6.28**

That input is not a quote, target, forecast, or promised execution price.

## Keep the dollar-risk limit fixed

Assume a USD 10,000 account with a USD 100 maximum planned price loss. The table excludes spread, commission, and slippage.

| Planned stop | Approximate USD risk per 1.00 lot | Fixed-risk size before rounding | Size rounded down |
|---|---:|---:|---:|
| 50 pips | USD 313.90 | 0.319 | 0.31 lot |
| 100 pips | USD 627.80 | 0.159 | 0.15 lot |
| 200 pips | USD 1,255.60 | 0.080 | 0.07 lot |

The table does not predict a 50-, 100-, or 200-pip move. It keeps the stated dollar-risk limit fixed while the planned stop distance changes. A position-size formula also cannot guarantee a stop fill, especially when costs or price gaps matter.

After the facts and arithmetic are clear, [PipGauge](https://pipgauge.com/) can verify the pair, account currency, pip value, and planned size. P&L and Spread Cost can test explicitly labelled hypothetical inputs. They do not interpret Tokyo CPI, predict a BOJ decision, or forecast USD/JPY.

This is a dated refresh of the existing USD/JPY event-risk note, not a second BOJ article. Retire the Tokyo-CPI/159.30 frame after the August 28 same-day window, if official statistics are corrected, or if a BOJ decision or another verified fact creates a genuinely different calculation question.

## Sources

- [Japan Statistics Bureau: CPI results](https://www.stat.go.jp/data/cpi/1.html?guid=ON)
- [Reuters: Tokyo core inflation edges toward the BOJ target](https://www.marketscreener.com/news/tokyo-core-inflation-accelerates-in-august-nears-boj-target-ce7858dfd981ff21)
- [ForexFactory: August 28 calendar](https://www.forexfactory.com/calendar?day=aug28.2026&event=148675)

*Educational risk example only. Not financial advice.*
