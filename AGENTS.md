# AGENTS.md

You are building Daniel Ma's public quant trading resume website and research portfolio.

## Mission

Build a visually elite, technically rigorous, public-safe quant dossier for recruiting into top quant trading and quant research firms.

The site should communicate:
- market microstructure intuition
- derivatives and PDE depth
- systematic research hygiene
- risk management
- clean software engineering
- public-safe professional credibility

## Non-negotiables

1. Do not invent performance metrics.
2. Do not use proprietary employer data, strategies, code, or confidential details.
3. Do not publish Daniel's street address.
4. Do not expose private phone number unless explicitly requested in a ticket.
5. Do not write "this will get me into Jane Street/Citadel" on the public site.
6. Do not create fake live trading, fake P&L, or fake backtest results.
7. Every model result must include assumptions and limitations.
8. Every project page must have a "Failure Modes" section.
9. Prefer simple, correct code over clever abstractions.
10. Do not modify unrelated files.

## Design direction

Visual identity:
- Bloomberg terminal meets research lab
- dark background
- precise typography
- restrained motion
- interactive charts
- no stock photos
- no crypto-bro visuals
- no fake trading floor imagery

Tone:
- direct
- rigorous
- humble
- technical but readable

## Routes

Required routes:
- /
- /projects
- /projects/market-making-lab
- /projects/options-pde-engine
- /projects/stat-arb-research-lab
- /projects/optimal-execution
- /resume
- /notes
- /about
- /contact

## Engineering standards

Before coding:
- inspect relevant files
- explain plan briefly
- identify files to modify

After coding:
- run pnpm lint
- run pnpm test if tests exist
- run pnpm build
- summarize changed files
- summarize risks

## Styling standards

Use:
- TypeScript
- Tailwind
- shadcn/ui where useful
- reusable components
- accessible semantic HTML
- responsive layouts

Avoid:
- giant client components
- unnecessary dependencies
- hardcoded repeated styles
- animation that hurts readability

## Project page structure

Each flagship project page must include:
1. Thesis
2. Interactive demo or visual
3. Why this matters for trading
4. Model assumptions
5. Implementation details
6. Results
7. Failure modes
8. What I would improve
9. GitHub/reproducibility section

## Definition of done

A task is done only if:
- code builds
- page is responsive
- no obvious visual regressions
- no hallucinated claims
- no confidential information
- tests pass where applicable
- changed files are summarized
