const placeholderSeries = [
  { tenor: "1M", value: 0.21 },
  { tenor: "3M", value: 0.24 },
  { tenor: "6M", value: 0.27 },
  { tenor: "1Y", value: 0.3 },
  { tenor: "2Y", value: 0.28 },
];

function PlaceholderChart({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
      <header className="mb-3">
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </header>

      <div className="space-y-2">
        {placeholderSeries.map((point) => (
          <div key={point.tenor} className="space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{point.tenor}</span>
              <span>{point.value.toFixed(2)}</span>
            </div>
            <div className="h-2 rounded bg-slate-800">
              <div
                className="h-2 rounded bg-cyan-400/70"
                style={{ width: `${Math.round(point.value * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Placeholder visualization only. Full PDE-backed charting will be wired in a
        later ticket.
      </p>
    </section>
  );
}

export default function OptionsPdeEnginePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-slate-100">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
          Project Page / Quant Engine
        </p>
        <h1 className="text-3xl font-bold">Options PDE Engine</h1>
        <p className="max-w-3xl text-sm text-slate-300">
          This page is the shell for a future finite-difference options pricing
          engine. It outlines goals, model assumptions, and validation plans while
          using static placeholders for numerical output.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <PlaceholderChart
          title="Implied Surface Snapshot"
          subtitle="Sample tenor progression with dummy values"
        />
        <PlaceholderChart
          title="Solver Convergence Preview"
          subtitle="Illustrative residual decay shape (static)"
        />
      </section>

      <section className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
        <h2 className="text-lg font-semibold">Model Scope (Current)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>Page shell and narrative scaffolding only.</li>
          <li>No PDE grid construction, calibration, or Monte Carlo bridging yet.</li>
          <li>No market data ingestion or persistence logic implemented.</li>
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
          <h2 className="text-lg font-semibold">Numerical Method Notes</h2>
          <p className="mt-2 text-sm text-slate-300">
            Planned implementation will evaluate Crank–Nicolson and fully implicit
            discretization schemes, with boundary condition variants for vanilla and
            dividend-bearing underlyings.
          </p>
        </article>

        <article className="rounded-xl border border-slate-700 bg-slate-900/40 p-5">
          <h2 className="text-lg font-semibold">Validation Plan</h2>
          <p className="mt-2 text-sm text-slate-300">
            Future work will benchmark solver output against closed-form Black–Scholes
            prices, stress test stability under coarse meshes, and compare Greeks
            sensitivity to finite-difference step size.
          </p>
        </article>
      </section>

      <section className="rounded-xl border border-dashed border-slate-600 bg-slate-900/20 p-5">
        <h2 className="text-lg font-semibold">Implementation Backlog</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-slate-300">
          <li>Define PDE state and parameter schema.</li>
          <li>Build tridiagonal solver core and time-stepping loop.</li>
          <li>Integrate market inputs and scenario controls.</li>
          <li>Replace placeholders with live chart components.</li>
        </ol>
      </section>
    </main>
  );
}
