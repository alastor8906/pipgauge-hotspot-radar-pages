# Reddit draft — native discussion, no first-round link

**Title:** Reading a prop daily-loss rule as a planned-risk budget, not a position-size target

FTMO Futures beta has put a lot of attention on new futures-prop rule pages. One detail that seems easy to misread is the difference between a daily-loss ceiling and the amount you can sensibly plan to risk on one idea.

For a neutral arithmetic example, take a stated USD 1,000 day-one daily-loss boundary on a 50K Pro Evaluation. If I reserve USD 200 for costs, open P&L movement and input error, the planned price-risk budget is USD 800 before costs.

With a 40-point planned stop, I would not assume a universal dollar-per-point number. The check is:

`whole quantity = floor(800 / (40 × my verified USD-per-point value))`

The important part is verifying the exact plan, phase and contract specification first. That calculation is not a trade recommendation, and it does not make a stop fill certain. It also is not a comparison of firms; it is just a way to keep a day-level rule from being mistaken for per-trade buying power.

What do you use to keep daily-loss limits, open P&L and a per-trade risk budget separate when a firm’s rules use equity rather than only closed P&L?

Draft status: `awaiting_human_review`. First Reddit post intentionally has no link.
