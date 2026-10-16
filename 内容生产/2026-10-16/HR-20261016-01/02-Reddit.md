# FTMO lists HK50.cash as closed Oct 19 — how are you checking the contract inputs before an altered session?

FTMO’s Oct 8 update lists `HK50.cash` as closed for the whole day on Monday, Oct 19, for Chung Yeung Festival, using MetaTrader platform time (GMT+3). The useful first step seems to be checking the exact firm, symbol and platform rather than assuming another broker’s holiday hours apply.

For anyone who has verified their own contract specification, the neutral exposure arithmetic is:

`quantity × planned point distance × currency value per point`

For example, `0.20 × 25 × reader-verified value`. If a platform’s own specification says USD 2 per point, that conditional example is USD 10 before any costs. The USD 2 is not a claim about FTMO or a universal HK50 point value.

No market call here, and a closure notice does not prove anything about spreads, liquidity, slippage, or what to do with a position. Curious about the process: do you keep a saved contract-specification check for indices before holiday sessions, and what fields do you verify besides symbol, timezone, point value and account currency?
