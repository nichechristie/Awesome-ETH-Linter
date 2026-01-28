export default function QuickStart() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Quick Start
      </h2>
      <pre className="overflow-x-auto rounded-xl border border-eth-border bg-eth-card p-6 text-sm leading-relaxed text-slate-300">
        <code>{`# Install
pip install eth-spec-lint

# Run against a client repo
eth-spec-lint \\
  --spec EIP-1559 \\
  --client-path ./go-ethereum \\
  --output report.json`}</code>
      </pre>
    </section>
  );
}
