const cards = [
  {
    title: "Volatility Surface Studio",
    text: "Elegant placeholder for calibration workflows, model diagnostics, and export-ready analytics.",
  },
  {
    title: "Cross-Asset Signal Radar",
    text: "Stub card for factor map visualizations and real-time anomaly detectors across core markets.",
  },
  {
    title: "Execution Quality Lens",
    text: "Reserved area for slippage decomposition, venue heatmaps, and order-book microstructure views.",
  },
];

export function ProjectCards() {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-2xl font-medium">Featured Builds</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Placeholders</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-lg font-medium">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
