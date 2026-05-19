import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        <article className="card">
          <h2>Market-Making Lab</h2>
          <p>Interactive TypeScript simulation for inventory-aware quoting.</p>
          <Link href="/projects/market-making-lab">Open lab</Link>
        </article>
        <article className="card">
          <h2>Options PDE Engine</h2>
          <p>Finite-difference pricing notes and implementation details.</p>
          <Link href="/projects/options-pde-engine">Open page</Link>
        </article>
      </div>
    </section>
  );
}
