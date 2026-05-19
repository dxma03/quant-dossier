const stats = [
  { label: "Years in Quant Research", value: "10+" },
  { label: "Strategies Prototyped", value: "70" },
  { label: "Markets Covered", value: "18" },
  { label: "Team Collaboration", value: "Global" },
];

export function ExperienceStrip() {
  return (
    <section className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-6 md:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-xl bg-slate-800/70 p-4">
          <p className="text-2xl font-semibold text-cyan-200">{item.value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
