# Schwab Now Offers CME Single-Stock Futures Access: Start With Notional, Not Margin

CME's U.S. single-stock futures are live, and Charles Schwab said on July 27 that customers with futures-approved accounts can access CME's larger contracts. That changes the useful question from “when do they launch?” to “what exposure does one contract create before I look at margin?”

Availability is not universal access. Schwab's statement applies to eligible Schwab customers and the larger contracts; it should not be generalized to every broker, account or Micro product.

The cleanest starting point is the standard contract. CME's fact card specifies 100 shares per contract.

`notional value = underlying share price × 100`

Using hypothetical prices—not live quotes:

- At $50 per share, one contract represents $5,000.
- At $200, it represents $20,000.
- At $500, it represents $50,000.

That notional is exposure, not the cash paid upfront and not the maximum possible loss.

## Turn a percentage move into dollars

Once notional is known, a simple scenario follows:

`contract P&L = notional value × percentage move`

A 1% underlying move would therefore correspond to approximately $50, $200 or $500 on the three example contracts. A 5% move would be five times those amounts. The sign depends on position direction; the arithmetic does not predict which direction occurs.

This is where a small contract count can hide a large account-level exposure. A $20,000 notional position inside a $10,000 account is not automatically wrong, but it should be recognized before the trade is sized.

## Margin is a different number

Margin determines how much collateral is required to open and maintain the position. It does not replace the notional calculation and does not cap loss. A broker may also impose requirements above an exchange or regulatory minimum.

Liquidity is another separate input. Schwab warns that early SSF volume may be thinner than the underlying shares, potentially producing wider bid/ask spreads. That is a reason to verify live quotes and order conditions, not a basis for predicting direction.

The practical sequence is:

1. Confirm the exact contract and multiplier on CME.
2. Calculate notional exposure.
3. Stress-test a plausible percentage move in dollars.
4. Combine all positions into total portfolio exposure.
5. Check the broker's actual margin and availability separately.

After the contract math is complete, PositionMath's [position size calculator](https://positionmath.com/) can help frame the account risk, while its portfolio tools can organize combined exposure. The calculator does not verify a contract specification or forecast the stock.

This refresh deliberately uses only the officially documented standard 100-share contract. CME also lists multiple sizes, but a Micro multiplier should be checked for the exact product before it is used in an example.

## Sources

- [CME Globex launch notice](https://www.cmegroup.com/notices/electronic-trading/2026/07/20260706.html)
- [CME single-stock futures release](https://www.cmegroup.com/media-room/press-releases/2026/6/30/cme_group_to_launchsinglestockfuturesonjuly27.html)
- [CFTC product filing 26-255](https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizationProducts/61474)
- [CME fact card](https://www.cmegroup.com/markets/equities/files/single-stock-futures-fact-card.pdf)
- [Charles Schwab: What Are Single Stock Futures?](https://www.schwab.com/learn/story/single-stock-futures-what-they-are-how-to-use)

*Educational example only. Not financial advice.*
