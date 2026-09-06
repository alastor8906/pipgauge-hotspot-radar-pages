# FTMO’s Labor Day Schedule Is a Time Check. Your US100 CFD Exposure Is a Separate Calculation.

FTMO’s CFD trading update dated September 3 lists a U.S. Labor Day schedule for Monday, September 7. For the named `US100.cash` symbol, it says the session closes early at 20:00 in MetaTrader platform time, GMT+3.

That is a useful fact to verify if that is the exact firm, platform, and symbol a reader uses. It is not a forecast for the Nasdaq, a statement about liquidity, or an instruction to open, close, or hold a position. It also is not a universal market-hours schedule: another prop firm, platform, account type, or symbol can have a different timetable.

The practical question that can be answered without making a market call is narrower: what dollar price exposure does a planned US100 CFD quantity represent under the reader’s own point-value specification?

## Keep the two checks separate

The first check is a schedule check. Read the firm’s current announcement in its stated source timezone. FTMO uses GMT+3 in this particular notice, so do not silently convert the source record into a different platform clock and then treat the conversion as the official rule.

The second check is arithmetic. Before costs, planned point exposure can be expressed as:

> quantity × planned point distance × point value

The formula does not decide whether a trade should exist. It only makes an assumption visible. That distinction is especially important around shortened sessions, when a platform’s availability and a trader’s risk decision are separate issues.

## A deliberately hypothetical example

Take a teaching setup, not a live contract specification:

- Quantity: 0.50 contract
- Planned point distance: 30 points
- Hypothetical point value: USD 1 per point

The calculation is:

> 0.50 × 30 × USD 1 = USD 15

So the illustration produces USD 15 of planned price difference before costs. It does not establish that `US100.cash` at FTMO, a broker’s NAS100 contract, or any other CFD has a USD 1 point value. Those conventions can vary by account currency, contract size, symbol naming, minimum increment, and platform. The same 30-point input can represent a different cash amount when any one of those inputs changes.

For example, keeping the hypothetical USD 1 point value but changing quantity changes the arithmetic directly:

| Quantity | Planned distance | Hypothetical point value | Planned price difference before costs |
|---:|---:|---:|---:|
| 0.25 contract | 30 points | USD 1 / point | USD 7.50 |
| 0.50 contract | 30 points | USD 1 / point | USD 15.00 |
| 1.00 contract | 30 points | USD 1 / point | USD 30.00 |

This table is not a suggested position size and does not say that 30 points is an expected move. It simply preserves the same hypothetical assumptions so the effect of quantity is readable.

## What the schedule cannot tell you

An early-close announcement cannot tell a reader the direction of US100, the quality of available liquidity, the size of a future spread, or the price at which an order would be filled. It cannot establish whether a planned stop will execute at a chosen price. Commission, spread, financing, slippage, gaps, minimum-size increments, firm rules, and any automatic-liquidation terms can make actual P&L different from planned arithmetic.

It also cannot be borrowed across firms. FTMO’s stated platform time is the relevant source for the exact FTMO notice. A reader using another firm should verify that firm’s own current update rather than treating an index label as a universal product specification.

## Verify the inputs after understanding the formula

Once the schedule and the formula are clear, [PipGauge’s US100 point-value tools](https://pipgauge.com/) can be used to verify the actual symbol convention, point value, quantity, and a separately labelled P&L or margin input. The useful sequence is facts first, arithmetic second, verification third.

The tool does not determine FTMO’s holiday hours, recommend an action, forecast an index move, or guarantee execution. It only helps a reader replace the deliberately hypothetical USD 1 point-value input with the specification that applies to their own setup.

This dated frame expires after the September 7 named session, if FTMO corrects its update, or whenever the symbol, platform, firm, or contract specification differs. It should not be left online as if it were a permanent holiday-hours or market-behavior claim.

*Draft status: awaiting_human_review. Educational specification and exposure arithmetic only; not investment advice or a trade instruction.*
