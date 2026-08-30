# Broadcom Reports Wednesday: A Simple AVGO Exposure Check Before the Results

Broadcom has scheduled its fiscal third-quarter 2026 results for **Wednesday, September 2, after the market closes**, followed by a 5:00 p.m. ET conference call. Reuters has listed the report among this week’s market focal points. Those facts create a short-lived reason to check exposure before the event—not a reason to predict the results or AVGO’s next price.

The useful question is smaller and more practical: if an account already has an AVGO position, how much dollar exposure is actually sitting in it if the price changes materially after results?

## Start with the exposure, not a forecast

Use a deliberately simple teaching example:

- Account: USD 10,000
- Position: 10 AVGO shares
- Teaching price anchor: USD 400 per share
- Notional exposure: USD 4,000

That is 40% of the account in one stock. The USD 400 input is only a round teaching anchor. It is not a live quote, target, estimate, or view of where AVGO should trade.

Here is what three **symmetric hypothetical** absolute changes would mean for that 10-share position:

| Absolute change | Change per share | Change for 10 shares |
|---|---:|---:|
| 5% | USD 20 | USD 200 |
| 10% | USD 40 | USD 400 |
| 15% | USD 60 | USD 600 |

These are arithmetic stress checks. They do not say Broadcom will move 5%, 10%, or 15%; they do not assign odds, choose up versus down, or interpret the earnings release.

## A planned stop size is a different calculation

Suppose the maximum planned price risk is USD 100 and the planned stop distance is USD 20 per share. The basic position-size math is:

`USD 100 planned risk ÷ USD 20 stop distance = 5 shares`

That can be a useful planned-trade input, but it does not turn into a guaranteed loss cap after an overnight gap. A stop price and the price at which an order could actually fill are not the same thing.

## Where a calculator helps

After doing the plain arithmetic, use PositionMath to verify the inputs:

1. **Position Size** for the USD 100 / USD 20 planned-stop example.
2. **P&L** for the separately labelled 5%, 10%, and 15% hypothetical changes.
3. **Portfolio Heat** to see how USD 4,000 of one-stock exposure sits inside a USD 10,000 account.

The calculation does not answer whether AVGO is a buy, sell, call, put, or hold. It simply makes the account impact visible before a scheduled corporate event.

## Time boundary

This pre-results framing expires when Broadcom publishes the results, if Broadcom corrects the announced timing, or if a later verified fact changes the question. Any post-results piece would need new facts and a new review; it should not reuse this stress table as an implied earnings forecast.

Sources: [Broadcom investor-relations announcement](https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announce-third-quarter-fiscal-year-2026-financial); [Reuters week-ahead coverage](https://www.investing.com/news/economy-news/jobs-report-broadcom-results-pose-next-hurdles-for-stock-market-rally-4882045).

*Draft status: awaiting_human_review. Not investment advice; hypothetical figures exclude fees, taxes, spreads and execution effects.*
