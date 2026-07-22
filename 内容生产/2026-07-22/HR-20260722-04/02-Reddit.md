# Draft answer

The word “one” is doing too much work in gold discussions.

CME's 1-Ounce Gold future represents one troy ounce. The exchange lists a $0.25 minimum price fluctuation, so one tick is $0.25 per contract. A $25 move in gold is roughly a $25 change for one contract.

Retail XAUUSD often uses a very different convention: one standard lot commonly represents 100 ounces, although the exact broker spec must be checked. Under that assumption, a $25 gold move is about:

- $25 at 0.01 lot
- $250 at 0.10 lot
- $2,500 at 1.00 lot

So 0.01 retail lot may resemble one ounce in terms of raw price exposure, but it is not the same instrument. Venue, tick rules, price feed, spread, commission, margin, settlement and trading hours can all differ.

Also, 24/7 access does not mean no maintenance window or constant liquidity. Check the exact schedule and market depth instead of assuming every weekend hour behaves like the weekday session.

The clean comparison is: first convert each position into ounces, then compare the dollar result of the same gold move. Keep margin separate from exposure and loss.

## Posting note

- Use only where someone is confusing the CME product with retail XAUUSD.
- First Reddit use should not include a PipGauge link.
- Do not present the CFD calculator as a CME futures calculator.
