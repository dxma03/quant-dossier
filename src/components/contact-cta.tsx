export function ContactCta() {
  return (
    <section className="rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Contact</p>
      <h2 className="mt-3 text-3xl font-medium">Let’s build the next quant edge together.</h2>
      <p className="mt-4 max-w-2xl text-slate-300">
        Placeholder call-to-action for advisory, collaboration, and research partnerships.
      </p>
      <button
        type="button"
        className="mt-6 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
      >
        Start a conversation
      </button>
    </section>
  );
}
