# The BOJ speech is public. How do you calculate USD/JPY risk without turning it into a policy forecast?

The BOJ lists Deputy Governor Himino’s August 27 speech. Reuters reported that the remarks did not explicitly signal the next meeting, and a Reuters FX report put USD/JPY near 159.29 after the speech. Those are timing and conversion inputs, not a view on the next BOJ decision or the yen.

Example only: for a USD account, one standard-lot USD/JPY pip is JPY 1,000. At a 159.29 reference rate, that is about USD 6.28 per pip.

With a USD 10,000 account and a USD 100 maximum planned price loss:

- 50-pip planned stop: about 0.31 lot after rounding down
- 100-pip planned stop: about 0.15 lot after rounding down
- 200-pip planned stop: about 0.07 lot after rounding down

The calculation does not say the pair will move 50, 100, or 200 pips. It only keeps the stated dollar-risk limit fixed while the chosen stop distance changes. Spread, commission, slippage, and gaps are separate inputs, and a stop is not a guaranteed fill.

How do you make that distinction in an event-driven FX plan without converting a central-bank headline into a directional call?

*Awaiting human review. No link in the first post.*
