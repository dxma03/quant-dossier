export function FeaturedProject() {
  return (
    <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 md:grid-cols-[1.6fr_1fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured Project</p>
        <h2 className="mt-3 text-3xl font-medium">Adaptive Liquidity Mapper</h2>
        <p className="mt-4 text-slate-300">
          Placeholder spotlight for a flagship research build. Full demo and live metrics will be wired in a
          subsequent ticket.
        </p>
      </div>
      <div className="rounded-2xl border border-dashed border-slate-600/80 bg-slate-800/60 p-6 text-sm text-slate-300">
        <p className="font-medium text-slate-200">Preview Block</p>
        <p className="mt-3">System snapshot, chart surface, and timeline components reserved here.</p>
      </div>
    </section>
  );
}
