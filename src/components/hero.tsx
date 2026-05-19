export function Hero() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 shadow-2xl shadow-black/30">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300">Quant Dossier</p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
        Research-grade insights and systems for modern quantitative portfolios.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg">
        Elegant placeholder hero for upcoming live dashboards, simulation tooling, and strategy notebooks.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
        <span className="rounded-full border border-cyan-400/40 px-4 py-2">Market Making Labs</span>
        <span className="rounded-full border border-violet-400/40 px-4 py-2">Options Engine</span>
        <span className="rounded-full border border-emerald-400/40 px-4 py-2">Stat Arb Research</span>
      </div>
    </section>
  );
}
