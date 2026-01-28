const features = [
  {
    title: "Spec Parsing",
    description:
      "Extracts structured requirements from EIP markdown specifications, identifying MUSTs, SHOULDs, and SHALLs.",
  },
  {
    title: "Client Analysis",
    description:
      "Scans Ethereum client source code to map implementation details back to specification requirements.",
  },
  {
    title: "LLM Comparison",
    description:
      "Uses large language models to semantically compare spec requirements against client code for compliance.",
  },
  {
    title: "CI Integration",
    description:
      "Ships as a GitHub Action for automated spec-compliance checks on every pull request.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white">
        Features
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-eth-border bg-eth-card p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">
              {f.title}
            </h3>
            <p className="text-sm text-slate-400">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
