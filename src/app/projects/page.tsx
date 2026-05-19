const projects = [
  "Market-Making Lab",
  "Options PDE Engine",
  "Statistical Arbitrage Research Lab",
  "Optimal Execution Control",
  "Structured Credit Waterfall Simulator",
  "Commodities Futures Curve Risk Dashboard",
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-sm text-gray-600">
          Quant research and engineering initiatives across pricing, execution,
          and risk.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Project index">
        {projects.map((project) => (
          <article
            key={project}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold leading-snug">{project}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
