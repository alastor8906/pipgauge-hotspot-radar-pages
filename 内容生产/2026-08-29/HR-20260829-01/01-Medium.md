# Jackson Hole Remarks Are Out. Recalculate EUR/USD Fixed Risk Before Making a Directional Claim

Kevin Warsh’s August 28 Jackson Hole keynote is now an event with a public record, not a countdown. AP reported that the Federal Reserve chair said policymakers would still have work to do if they were not confident inflation was moving back to target at a sufficient pace. Reuters independently reported the same keynote and its 2% inflation framing.

Those facts explain why people are looking up Jackson Hole and EUR/USD after the speech. They do not tell us where EUR/USD will trade, whether the Federal Reserve will change policy, or whether anyone should buy or sell a currency pair. AP explicitly noted that the speech did not imply an imminent rate increase.

The useful follow-up is not a prediction. It is a sizing check: if a trade plan has a stated stop distance, what position size keeps the planned dollar loss unchanged?

## Start with a stated pip-value assumption

For a USD-denominated account, EUR/USD is commonly approximated as **USD 10 per pip for one standard lot**. Treat that as a teaching assumption to verify for the account, pair specification, and current conversion setup; it is not a live quote or a promise about execution.

Assume a USD 10,000 account and a USD 100 maximum planned price loss. The planning formula is:

`lot size = maximum planned dollar risk / (planned stop in pips × dollar value per pip for 1.00 lot)`

With the stated USD 10-per-pip teaching assumption, the arithmetic looks like this before spread, commission, slippage, financing, or gaps:

| Planned stop | Approximate risk at 1.00 lot | Fixed-risk size before rounding | Rounded down |
|---|---:|---:|---:|
| 25 pips | USD 250 | 0.400 lot | 0.40 lot |
| 50 pips | USD 500 | 0.200 lot | 0.20 lot |
| 100 pips | USD 1,000 | 0.100 lot | 0.10 lot |

The point is deliberately mechanical. A wider planned stop changes the size required to keep the same USD 100 limit. It does not say a 25-, 50-, or 100-pip move is likely, and it does not turn a macro speech into an entry signal.

## Separate the event from the risk rule

The news hook is the completed Jackson Hole speech. The calculation rule is separate:

- First state the maximum amount of price risk the plan is designed to accept.
- Then state the stop distance before choosing the lot size.
- Use the smallest permitted increment and round down if necessary.
- Add trading costs separately rather than silently treating a price-risk table as an all-in loss guarantee.

A stop can also fill at a worse level than the plan during thin liquidity or a gap. That is why “USD 100 planned price risk” is a constraint for sizing, not a certainty about the realized result.

After the dated facts and the arithmetic are clear, [PipGauge](https://pipgauge.com/) can be used to verify the pair’s pip value, account currency, and the planned position size. Its P&L and Spread Cost tools are useful for clearly labelled hypothetical stress checks. They do not interpret the keynote, forecast a central-bank decision, or forecast EUR/USD.

This is a dated refresh of the existing Jackson Hole/EUR/USD risk note, not a second Federal Reserve article. Retire the post-speech frame when an official text correction, a subsequent formal policy decision, or a genuinely different verified calculation question replaces it.

## Sources

- [Federal Reserve Bank of Kansas City: 2026 Jackson Hole symposium](https://www.kansascityfed.org/research/jackson-hole-economic-symposium/2026/)
- [AP: Fed Chair Warsh signals rate hikes may be needed with inflation elevated](https://apnews.com/article/federal-reserve-warsh-interest-trump-inflation-ab896df808df3a5a3fa8b943ac5f3867)
- [Reuters: Warsh signals policy may need to tighten if inflation persists](https://www.marketscreener.com/news/will-warsh-s-jackson-hole-speech-be-a-course-correction-or-detour-ce7858dfdb8bf62c)

*Educational risk example only. Not financial advice.*
