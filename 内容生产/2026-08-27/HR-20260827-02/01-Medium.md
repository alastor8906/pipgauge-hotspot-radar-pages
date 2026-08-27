# The BOJ Speech Is Public. Calculate USD/JPY Fixed Risk Before Making a Policy Call

The Bank of Japan lists Deputy Governor Ryozo Himino’s August 27 speech in Saitama. Reuters reported that he stressed timely responses to inflation risk while stopping short of an explicit signal on the next meeting. In a separate Reuters foreign-exchange report, USD/JPY was near 159.29 after the speech.

Those are dated facts. They do not tell a reader what the Bank of Japan will do next, where USD/JPY will trade, or whether a position should be opened or closed.

The useful calculation is simpler: at a stated USD/JPY reference rate, what is one pip worth in a USD account, and how does a fixed dollar-risk rule change the lot size as the planned stop gets wider?

## Convert the pip value first

For one standard lot of USD/JPY, one pip is JPY 1,000. Using the Reuters reference of 159.29:

USD value per pip = JPY 1,000 / 159.29 = approximately USD 6.28

The 159.29 input is a reported reference for conversion. It is not a target, forecast, or execution price.

## Keep the dollar-risk limit fixed

Assume a USD 10,000 account with a USD 100 maximum planned price loss. The calculation below excludes spread, commission, and slippage.

| Planned stop | Approximate USD risk per 1.00 lot | Fixed-risk size before rounding | Size rounded down |
|---|---:|---:|---:|
| 50 pips | USD 314.00 | 0.318 | 0.31 lot |
| 100 pips | USD 628.00 | 0.159 | 0.15 lot |
| 200 pips | USD 1,256.00 | 0.080 | 0.07 lot |

The table does not say that USD/JPY will move 50, 100, or 200 pips. It shows how a stated risk limit changes the planned lot size when a trader chooses a different stop distance.

## A speech is not a stop-fill guarantee

A position-size formula controls the size entered into a plan. It does not make a stop guaranteed, and it does not turn a central-bank speech into a direction call. Spread, commission, slippage, and any gap between prices are separate inputs. If those costs matter to the claim, they need their own measured evidence; they are not being asserted here.

After the facts and arithmetic are clear, [PipGauge](https://pipgauge.com/) can verify the pair, account currency, pip value, and planned size. P&L and Spread Cost can test explicitly labelled hypothetical inputs. They do not interpret the speech, predict a BOJ decision, or forecast USD/JPY.

This is a dated refresh of an existing USD/JPY event-risk note, not a second policy article. Retire this speech/159.29 frame when the August 28 material or press-conference window changes the factual hook, if the BOJ corrects the record, or when a new official policy decision creates a different calculation question.

## Sources

- [Bank of Japan: speeches and statements](https://www.boj.or.jp/en/about/press)
- [Bank of Japan: release schedule](https://www.boj.or.jp/en/about/calendar/)
- [Reuters: BOJ deputy chief calls for timely rate hike](https://www.marketscreener.com/news/boj-deputy-governor-himino-calls-for-timely-rate-hike-ce7858ded98af220)
- [Reuters: dollar steady after Himino speech](https://ca.investing.com/news/economy-news/dollar-steady-before-jackson-hole-yen-little-changed-after-bojs-himino-speech-4818615)

*Educational risk example only. Not financial advice.*
