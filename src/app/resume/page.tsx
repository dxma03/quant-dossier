export default function ResumePage() {
  return (
    <section>
      <h1>Resume</h1>
      <div className="card">
        <h2>Summary</h2>
        <p>Quant-focused software engineer building reliable analytics and simulation systems.</p>
      </div>
      <div className="card">
        <h2>Experience</h2>
        <ul>
          <li>Built trading research tools, scenario simulators, and monitoring dashboards.</li>
          <li>Collaborated with research and engineering teams on production-grade systems.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Skills</h2>
        <p>TypeScript, Python, Next.js, data engineering, market microstructure modeling.</p>
      </div>
    </section>
  );
}
