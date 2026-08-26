# NVIDIA Reports Today. Calculate the Overnight Exposure Before Guessing the Result

NVIDIA has scheduled its second-quarter fiscal 2027 results for today, Wednesday, August 26, after the market closes. The company says written materials will be available at approximately 1:20 p.m. Pacific Time, followed by a 2 p.m. Pacific / 5 p.m. Eastern conference call. Reuters reported on August 26 that the quarterly update remains a current market focus. Those facts establish a deadline for a risk check. They do not establish a direction, an expected move, or a reason to hold a position.

The useful question before the final regular session is narrower: if a stated share position is carried across the report, what absolute dollar exposure does a hypothetical overnight gap represent?

## A reporting clock is not a price call

Earnings conversations often become price targets, option-flow stories, or instructions to buy and sell. None of those are needed to make exposure visible. The fact to retain is only the company’s scheduled reporting time. Public discussion around the date is useful as a signal that people are asking about carrying exposure; it is not evidence that one outcome is more likely than another.

That distinction matters because two calculations that sound similar actually answer different questions. A stop-based position size estimates a planned loss for a chosen structure during normal trading. A gap table shows the amount that is already exposed during a period when the next executable price may be far from a planned stop.

## A transparent teaching example

Assume a USD 10,000 account and eight shares at a **USD 218 teaching anchor**. The anchor is not a live quote, valuation opinion, target, or forecast. It is only a round input that makes the arithmetic readable.

| Hypothetical overnight gap | Dollar move per share | Eight-share dollar change |
|---|---:|---:|
| 5% | USD 10.90 | USD 87.20 |
| 10% | USD 21.80 | USD 174.40 |
| 15% | USD 32.70 | USD 261.60 |

The table works in either direction. It shows the absolute size of hypothetical moves, not an estimate of what NVIDIA will do. A 10% move in this example changes the eight-share position by about USD 174.40, or 1.744% of the USD 10,000 account. A 15% move changes it by about USD 261.60, or 2.616%. Those percentages describe concentration and exposure. They are not probabilities.

## A planned stop does not insure the overnight window

Now take a separate planned-loss calculation. If a trade plan permits USD 100 of price risk and uses a USD 12 stop distance per share:

`share size = dollar risk / stop distance per share = 100 / 12 = 8.33`

Rounding down produces eight shares. At the planned stop, that is roughly USD 96 of price risk before fees. It may be a useful sizing rule for that particular intraday structure. It does not guarantee that an overnight result is limited to USD 96.

If the report changes the price between the close and the next executable price, a stop can be bypassed. The gap table and the stop table should therefore remain separate. One makes a held position visible during a binary time window; the other sizes an ordinary planned loss at a chosen exit distance.

## Check concentration before the materials are public

Before a scheduled company event, write down four inputs: account value, share count, a clearly labelled reference price, and the largest dollar change the account could tolerate. Test several plainly labelled percentage scenarios. That is more informative than treating a single hypothetical move as a forecast.

After the fact-and-math step, the [PositionMath position size calculator](https://positionmath.com/position-size-calculator/) can check the USD 100 / USD 12 share calculation. Portfolio Heat and P&L tools can review the eight-share concentration and the hypothetical dollar amounts. They cannot forecast results, price direction, option-implied moves, or overnight fills.

This is a dated refresh of the existing NVIDIA gap-risk note, not a second earnings article. Retire all pre-release wording immediately when NVIDIA publishes its materials, if the company changes the schedule, or when verified post-result facts create a different question.

## Sources

- [NVIDIA: Q2 FY27 financial-results conference call announcement](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Sets-Conference-Call-for-Second-Quarter-Financial-Results/default.aspx)
- [Reuters: S&P 500, Nasdaq set for lower open after inflation data; Nvidia results awaited](https://www.investing.com/news/economy-news/us-stock-futures-subdued-in-runup-to-nvidia-results-inflation-print-4876659)
- [Public NVIDIA earnings-day discussion](https://www.reddit.com/r/NVDA_Stock/comments/1vym8g7/q22027_earnings_thread_and_discussion_20260826/)

*Educational risk example only. Not financial advice.*
