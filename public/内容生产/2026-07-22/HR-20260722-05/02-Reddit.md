# Draft answer

The main difference is the contract multiplier.

CME's published structure uses 100 shares for the standard single-stock future and 10 shares for the Micro. So the Micro is one tenth of the standard contract for the same underlying, but neither has a fixed dollar size.

Use:

`notional exposure = stock price × multiplier`

Examples for one contract:

- $50 stock: standard $5,000, Micro $500
- $200 stock: standard $20,000, Micro $2,000
- $500 stock: standard $50,000, Micro $5,000

For a $200 stock, a 1% move is $2 per share. That is about $200 on the standard contract and $20 on the Micro. A 5% move would be about $1,000 versus $100.

The important warning is that notional exposure is not the same as margin. A broker may require much less cash than the notional amount, but the P/L still responds to all 100 or 10 represented shares. Lower margin does not shrink the underlying exposure.

The Micro gives finer sizing, not automatic safety. On a $10k account, one Micro on a $500 stock is still $5k notional; a 10% adverse move is roughly $500 before costs.

Before using the numbers, verify the final CME contract specs, actual launch status and broker availability. This is contract-size arithmetic, not a directional trade idea or tax advice.

## Posting note

- Use in a thread specifically asking about standard vs Micro contract size.
- Do not include a product link on first Reddit use.
- Do not make claims about Section 1256, tax treatment, margin savings or launch liquidity.
