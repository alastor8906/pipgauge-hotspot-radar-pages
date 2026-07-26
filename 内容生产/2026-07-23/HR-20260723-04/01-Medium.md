# One Gold Contract, One Gold Lot and One Ounce Are Not the Same Thing

Gold trading gained a new weekend angle when CME prepared continuous access for its one-ounce futures product. The headline is easy to understand: more hours in which the market can trade.

The sizing is easier to misunderstand.

“One contract” in the CME product represents one troy ounce. “One lot” in retail XAUUSD often represents 100 ounces. The same gold-price move can therefore create dollar results that differ by a factor of one hundred.

Before comparing platforms or trading hours, the unit behind the position has to be made explicit.

## Start with the CME contract

CME publishes a contract unit of one troy ounce for the 1-Ounce Gold future. Its minimum price fluctuation is $0.25 per ounce.

Because the contract represents one ounce, the arithmetic is direct:

- One tick is worth $0.25 per contract.
- Five ticks are worth $1.25.
- Ten ticks are worth $2.50.
- A $10 move in gold is approximately a $10 change per contract.
- A $25 move is approximately a $25 change per contract.

Those numbers describe price exposure. They do not describe the margin required to hold the contract, the bid-ask spread, commission or the maximum possible loss.

## Now compare a common retail XAUUSD convention

Many retail brokers define one standard XAUUSD lot as 100 troy ounces. That convention is common, not universal, so the exact broker specification must be checked before using it.

Under the 100-ounce convention:

- 0.01 lot represents approximately one ounce.
- 0.10 lot represents approximately ten ounces.
- 1.00 lot represents approximately 100 ounces.

For a $25 move in gold, the approximate position changes are:

- 0.01 lot: $25
- 0.10 lot: $250
- 1.00 lot: $2,500

At 0.01 lot, the ounce exposure happens to resemble one CME one-ounce contract. That does not make the products interchangeable. They still have different venues, specifications, trading rules, spreads, commissions, margin systems and settlement mechanics.

## A clearer comparison table

Using the same common CFD assumption, the dollar effect of several gold moves is:

| Position | Ounce exposure | $10 move | $25 move | $50 move |
|---|---:|---:|---:|---:|
| CME 1-Ounce, 1 contract | 1 oz | $10 | $25 | $50 |
| XAUUSD, 0.01 lot | about 1 oz | $10 | $25 | $50 |
| XAUUSD, 0.10 lot | about 10 oz | $100 | $250 | $500 |
| XAUUSD, 1.00 lot | about 100 oz | $1,000 | $2,500 | $5,000 |

The table is not a statement that the instruments have identical execution. It isolates one variable: the number of ounces represented by the position.

## Trading for more hours does not remove market structure

Continuous access is sometimes read as “the market is always equally tradable.” That is not what a longer schedule guarantees.

CME's official notice includes a maintenance window. Liquidity, depth and spreads can also vary across time zones and weekend sessions. A position may be technically tradable while still facing different execution conditions from the main weekday session.

Retail XAUUSD adds another layer. A broker may not follow the exchange schedule, may use a separate price feed and may set different weekend availability, spread and margin rules.

The practical questions are therefore:

1. Which exact product is open?
2. How many ounces does the position represent?
3. What is one minimum tick worth?
4. What are the venue's maintenance hours?
5. What spread, commission and margin rules apply at that time?

## Keep four numbers separate

Gold risk becomes easier to read when four values are not mixed together:

- **Contract size:** the number of ounces represented.
- **Tick value:** the dollar change from one minimum price increment.
- **Margin:** the capital reserved to hold the position.
- **Risk:** the loss created by a chosen adverse price move, plus costs and slippage.

Leverage can reduce the margin deposit. It does not reduce the profit or loss produced by a fixed number of ounces moving by one dollar.

For example, a ten-ounce position loses roughly $100 when gold falls $10, before costs. That remains true whether the required margin was $50 or $500.

## Where a retail calculator fits

For the CFD side only, I used PipGauge's [XAUUSD pip value calculator](https://pipgauge.com/xauusd-pip-value-calculator/) to check the dollar value after entering the broker-style lot assumption. Its [position size calculator](https://pipgauge.com/position-size-calculator/) can then work backward from a chosen dollar-risk budget and stop distance.

Those tools should not be used as a substitute for the CME contract specification. The futures side begins with CME's own contract unit and tick rule.

The useful lesson is smaller than the weekend-trading headline: before calculating any gold position, translate the label into ounces.

## Sources

- [CME Globex notice](https://www.cmegroup.com/notices/electronic-trading/2026/07/20260713.html)
- [CME 1-Ounce Gold overview](https://www.cmegroup.com/markets/metals/precious/1-ounce-gold.html)
- [CME SER-9766](https://www.cmegroup.com/content/dam/cmegroup/notices/ser/2026/06/ser-9766.pdf)

*Educational example only. Not financial advice. Retail XAUUSD specifications vary by broker. Revalidate the current CME schedule and contract specification before publication.*
