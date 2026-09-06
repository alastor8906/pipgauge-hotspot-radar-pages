# Draft title

FTMO lists an early Labor Day close for US100.cash — how do you separate the schedule check from the exposure math?

# Draft body

FTMO’s September 3 CFD update says that its named `US100.cash` symbol is scheduled to close early at 20:00 MetaTrader platform time (GMT+3) on Monday, September 7 for U.S. Labor Day. That is a firm-specific schedule, so I would not assume it applies to another platform, firm, account type, or NAS100/US100 symbol.

The mechanical part I think is worth separating from the holiday-hours question is point-value exposure. A schedule does not tell anyone what the index will do, whether to be in a position, or what a fill will look like. It only says that the normal session availability is altered.

Teaching arithmetic only, not a live specification or a suggested trade:

- 0.50 contract
- 30 planned points
- hypothetical USD 1 per point

That is 0.50 × 30 × 1 = USD 15 before costs. The USD 1 input is intentionally hypothetical: actual point value can change with the symbol specification, contract size, account currency, and platform. Spread, commission, financing, slippage, gaps, minimum size, and firm rules can also make realised P&L different.

For people who trade CFDs or prop accounts, what is your process for documenting the source timezone, the exact symbol specification, and the difference between a planned exposure calculation and the firm’s actual holiday schedule?

*Draft status: awaiting_human_review. First-round Reddit draft intentionally contains no link, tracking parameter, or product pitch.*
