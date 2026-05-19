const notes = [
  "Microstructure regime shifts and queue-position decay heuristics.",
  "Robust hedge overlays under implied-volatility expansion periods.",
  "Signal half-life evaluation for medium-frequency stat-arb clusters.",
];

export function NotesPreview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-300">Research Notes</p>
      <h2 className="mt-3 text-2xl font-medium">Latest notebook highlights</h2>
      <ul className="mt-6 space-y-3 text-slate-300">
        {notes.map((note) => (
          <li key={note} className="rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 text-sm">
            {note}
          </li>
        ))}
      </ul>
    </section>
  );
}
