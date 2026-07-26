# CME Single-Stock Futures: Add the 15% Margin Floor After Calculating Notional

CME's planned launch of single-stock futures creates a new set of contract names, but the first calculation is familiar:

> How many shares does one contract represent, and what is that worth at the current stock price?

The published structure uses two multipliers. A standard single-stock futures contract represents 100 shares. A Micro contract represents 10 shares.

That makes the Micro one tenth the size of the standard contract for the same underlying stock. It does not make either contract a fixed dollar amount. The underlying share price still decides the notional exposure.

## Turn the multiplier into dollars

The basic formula is:

`notional exposure = stock price × contract multiplier`

At a $50 share price:

- One standard 100-share contract represents $5,000 of notional exposure.
- One 10-share Micro represents $500.

At $200 per share:

- Standard: $20,000
- Micro: $2,000

At $500 per share:

- Standard: $50,000
- Micro: $5,000

This is why “one contract” is not enough information. One standard contract on a $50 stock and one standard contract on a $500 stock use the same multiplier but represent exposures that differ by $45,000.

## What a 1% move means

The same multiplication can translate a percentage move into a simplified dollar result.

For a $200 stock, a 1% move is $2 per share. Multiplying by the contract size gives:

- Standard 100-share contract: $200 change
- Micro 10-share contract: $20 change

A 5% move in the same stock is $10 per share:

- Standard: $1,000
- Micro: $100

At a $500 share price, a 5% move is $25 per share. That creates a $2,500 change in the standard contract and a $250 change in the Micro.

These figures isolate the contract multiplier. They do not include fees, slippage, daily settlement or changing margin requirements.

## Notional exposure is not margin

A $20,000 notional contract does not necessarily require $20,000 in cash to open. Futures use margin, and the required amount can be lower than the notional value.

That lower deposit does not reduce the position's dollar response to the underlying stock. If the 100-share contract loses $2 per share, the futures position changes by approximately $200 regardless of the initial margin deposit.

Three numbers should therefore remain separate:

- **Notional exposure:** stock price multiplied by the number of shares represented.
- **Margin requirement:** capital the clearing system or broker requires to support the position.
- **Risk:** the loss under a stated adverse price move, including realistic costs and execution effects.

Confusing notional and margin can make leverage look like smaller exposure. It is not. Leverage changes the capital posted against the exposure.

## Apply the 15% regulatory floor

CME's FAQ states that initial and maintenance margin for outright long or short single-stock futures must be at least 15% of current notional value under the applicable CFTC and SEC rules. This is a floor, not a promise that every broker will require exactly 15%.

Using the same examples:

| Stock price | Standard notional | 15% floor | Micro notional | 15% floor |
|---:|---:|---:|---:|---:|
| $50 | $5,000 | $750 | $500 | $75 |
| $200 | $20,000 | $3,000 | $2,000 | $300 |
| $500 | $50,000 | $7,500 | $5,000 | $750 |

The calculation is simply `notional × 15%`. Actual clearing or broker requirements can be higher and can change. A $3,000 minimum deposit against $20,000 notional also does not cap the loss at $3,000.

## Micro solves granularity, not judgment

A ten-share Micro gives smaller sizing increments. For a $10,000 account, that can be much easier to fit than a 100-share standard contract.

Consider a $500 stock. One standard contract represents $50,000 of notional exposure, five times the account balance. One Micro represents $5,000, half the account balance.

The Micro is clearly smaller, but “smaller” is not automatically “appropriate.” A 10% adverse move in that $5,000 Micro exposure is still about $500, or 5% of the account, before costs.

The correct question is not whether the Micro sounds small. It is whether the dollar loss under a plausible adverse scenario fits the account's risk budget.

## Multiple contracts add linearly

If one Micro represents ten shares, three Micros represent thirty shares. At a $200 stock price, the notional exposure is:

`3 × 10 × $200 = $6,000`

A 5% adverse move would be approximately $300.

This linear relationship makes the exposure easy to scale, but it can also hide concentration when several contracts or several stocks are held together. The same event, sector or index move may affect them at once.

## Where portfolio tools enter the workflow

The exchange specification must come first. After confirming the multiplier and calculating notional exposure, a position-sizing or portfolio-heat tool can help organize the account-level result.

For example, PositionMath's [portfolio heat calculator](https://positionmath.com/portfolio-heat-calculator/) can combine several planned positions after their dollar-risk scenarios are defined. It does not supply CME specifications and it does not predict the underlying stock.

That order matters:

1. Verify the exchange contract and multiplier.
2. Multiply by the current stock price.
3. Choose an adverse percentage or dollar move.
4. Translate that move into dollar risk.
5. Apply the current margin requirement, treating 15% only as the regulatory floor.
6. Combine the position with the rest of the portfolio.

The new contract label is the news. The useful calculation is still the number of shares behind it.

## Sources

- [CME launch release](https://www.cmegroup.com/media-room/press-releases/2026/6/30/cme_group_to_launchsinglestockfuturesonjuly27.html)
- [CME Single Stock Futures FAQ](https://www.cmegroup.com/articles/faqs/faq-single-stock-futures.html)
- [CME SER-9974](https://www.cmegroup.com/content/dam/cmegroup/notices/ser/2026/06/ser-9974.pdf)
- [CFTC product filings](https://www.cftc.gov/IndustryOversight/IndustryFilings/TradingOrganizationProducts?Type=Future&col=Date&dir=DESC&page=0)

*Educational example only. Not financial or tax advice. Verify the actual launch status, final contract specifications, margin and broker availability before publication or trading.*
