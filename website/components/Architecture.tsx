const steps = [
  { label: "EIP Specs", sub: "Markdown" },
  { label: "Spec Parser", sub: "Extract reqs" },
  { label: "Client Scanner", sub: "Map code" },
  { label: "LLM Engine", sub: "Compare" },
  { label: "Report", sub: "Findings" },
];

export default function Architecture() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white">
        Architecture
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="rounded-lg border border-eth-border bg-eth-card px-5 py-3 text-center">
              <div className="font-semibold text-white">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <span className="text-eth-blue text-xl">&rarr;</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
