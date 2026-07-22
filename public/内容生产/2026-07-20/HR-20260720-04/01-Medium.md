# Two Earnings Trades Can Be One Portfolio Risk

A portfolio can contain two different tickers and still be making one concentrated bet.

That happens when the positions share the same event window, depend on similar market narratives or are vulnerable to the same change in risk appetite.

Tesla and Alphabet reporting in the same after-hours window create a useful example. This is not a forecast about either company. It is a way to see why sizing each position separately can understate what happens to the account if both move at once.

## A stop does not guarantee an overnight exit price

During regular trading hours, a stop can often turn a planned price level into an executable order with limited slippage. After-hours earnings gaps are different.

If a stock closes at one price and opens or trades after the release at a much lower price, there may be no transaction at the stop level. The fill can occur beyond it.

That means a position sized to lose 1% at a chart stop may lose more than 1% in a gap. The stop remains useful for planning, but it is not a guarantee against discontinuous price movement.

## Stress-test both positions together

Assume a $10,000 account holds:

- $2,000 of TSLA
- $2,000 of GOOGL

Now apply the same adverse gap to both positions:

- 5% gap: $100 loss per position, $200 combined, or 2% of the account
- 10% gap: $200 per position, $400 combined, or 4% of the account
- 15% gap: $300 per position, $600 combined, or 6% of the account

This does not claim that the two stocks will move in the same direction or by the same percentage. A stress test is deliberately simple. Its job is to reveal the scale of a shared adverse scenario before the event happens.

Viewed one at a time, each $2,000 holding may look modest. Viewed as a single event cluster, the account has $4,000 exposed to the same earnings window.

## Reverse the calculation from the portfolio loss budget

Suppose the trader wants a simultaneous 10% adverse gap to cost no more than $200 in total.

The maximum combined position value is:

`$200 ÷ 10% = $2,000`

If the two positions are equally weighted, that is roughly $1,000 in each stock.

At that size, a 10% gap in both positions produces approximately $100 + $100 = $200 of combined loss.

This is different from sizing each stock to a $100 stop loss and assuming the job is done. The gap scenario starts from the position's market value, not from the planned stop distance.

## Portfolio heat is a map, not a promise

Portfolio heat normally adds the planned stop risk across open positions. It is useful because it puts several trades onto one account-level scale.

For earnings, it should be paired with a separate gap stress test. Planned stop heat answers “What happens if the exits occur around the stop?” The gap table answers “What if the market skips those prices?”

The two numbers should not be blended into false precision. They describe different scenarios.

I used PositionMath's [portfolio heat calculator](https://positionmath.com/portfolio-heat-calculator/) to organize the planned stop risk, then kept the 5%–15% gap table as a separate manual stress test.

The broader lesson applies beyond these two companies. Several positions can look diversified by ticker while remaining concentrated by event, sector or narrative. The account only experiences the combined result.

## Sources

- [Tesla investor relations](https://ir.tesla.com/press-release/tesla-second-quarter-2026-production-deliveries-and-deployments)
- [Alphabet investor relations](https://alphabet2025ir.q4web.com/investor/news/news-details/2026/Alphabet-Announces-Date-of-Second-Quarter-2026-Financial-Results-Conference-Call-2026-2h_R0kzZHY/default.aspx)
- [AP market context](https://apnews.com/article/15939a01f378bcec5eec2868e8100ca9)

*Educational stress-test only. Not financial advice.*
