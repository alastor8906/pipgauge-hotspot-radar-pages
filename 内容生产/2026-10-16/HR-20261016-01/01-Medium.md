# FTMO Lists HK50.cash as Closed on October 19. Verify the Contract Inputs Before You Calculate Exposure

FTMO’s October 8 CFD trading update lists `HK50.cash` as closed for the whole day on Monday, October 19, for Chung Yeung Festival. The update says its times use MetaTrader platform time (GMT+3).

That is a schedule-verification question first. It is not an HK50 forecast, a reason to place a trade, or evidence that every broker uses the same hours.

## Confirm the schedule before doing any math

Hong Kong’s [2026 general-holiday notice](https://www.info.gov.hk/gia/general/202505/16/P2025051300353p.htm) confirms October 19 as the day following Chung Yeung Festival. An independent [October market-hours schedule from HFM](https://www.hfm.com/int/en/trading-instruments/trading-hours) also marks its HK50 as closed that day.

Those sources confirm the date and a market-hours impact. FTMO’s own [October 8 update](https://ftmo.com/en/blog/trading-updates/trading-update-8-oct-2026/) remains the source for whether this specific `HK50.cash` schedule applies to a reader. A different firm, platform, account, symbol, or contract can have different terms.

## The calculation is variable by design

After checking the exact symbol and contract specification, planned price exposure can be expressed as:

`quantity × planned point distance × currency value per point`

Here is a deliberately conditional teaching example:

| Input | Teaching value |
|---|---:|
| Quantity | 0.20 contract |
| Planned point distance | 25 points |
| Point value | reader-verified |
| Planned price exposure | `0.20 × 25 × reader-verified value` |

If a reader’s own specification says one point is USD 2, the arithmetic is USD 10: `0.20 × 25 × 2`. That USD 2 is not an FTMO term, a live quote, or a universal HK50 contract value. It is only an example of how the formula changes once the specification has been verified.

The calculation also does not include spread, commission, financing, slippage, gaps, minimum-size rules, margin calls, or an execution outcome. A holiday schedule alone does not establish any of those conditions.

## A short verification sequence

1. Open the current FTMO update and confirm the date, symbol and GMT+3 platform-time wording.
2. Confirm the reader’s actual firm, account, platform and `HK50.cash` contract specification.
3. Record the planned quantity, planned point distance and account-currency point value.
4. Multiply those inputs; keep the result separate from costs and execution assumptions.

Only after those checks, [PipGauge](https://pipgauge.com/) can help make position-size, P&L and margin inputs transparent. It does not decide whether the FTMO schedule applies, supply a point value, recommend opening/closing/holding a position, or guarantee an order fill.

This is a narrow pre-closure note for October 16–18. It should be retired when the October 19 closed session begins, if FTMO changes the schedule, or when the exact product and contract inputs cannot be verified.

Sources: [FTMO CFD Trading Update, 8 October 2026](https://ftmo.com/en/blog/trading-updates/trading-update-8-oct-2026/); [Hong Kong 2026 general holidays](https://www.info.gov.hk/gia/general/202505/16/P2025051300353p.htm); [HFM October 2026 trading schedule](https://www.hfm.com/int/en/trading-instruments/trading-hours).
