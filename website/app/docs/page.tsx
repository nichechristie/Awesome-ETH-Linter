export default function DocsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 text-slate-300">
      <h1 className="mb-12 text-4xl font-bold text-white">Documentation</h1>

      <Section title="Installation">
        <Code>{`pip install eth-spec-lint

# Or from source
git clone https://github.com/nichechristie/eth-spec-lint.git
cd eth-spec-lint
pip install -e .`}</Code>
      </Section>

      <Section title="Configuration">
        <p>
          Create a <code className="text-eth-blue">config.yml</code> in your
          project root:
        </p>
        <Code>{`specs:
  - EIP-1559
  - EIP-4844

client:
  path: ./go-ethereum
  language: go

llm:
  provider: openai
  model: gpt-4

output:
  format: json
  path: ./report.json`}</Code>
      </Section>

      <Section title="CLI Commands">
        <Code>{`# Basic lint run
eth-spec-lint --spec EIP-1559 --client-path ./geth

# Use a config file
eth-spec-lint --config config.yml

# Output as markdown report
eth-spec-lint --config config.yml --output-format markdown

# Verbose logging
eth-spec-lint --config config.yml --verbose`}</Code>
      </Section>

      <Section title="GitHub Action">
        <p>
          Add to your workflow at{" "}
          <code className="text-eth-blue">.github/workflows/spec-lint.yml</code>
          :
        </p>
        <Code>{`name: Spec Lint
on: [pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: nichechristie/eth-spec-lint@v1
        with:
          specs: "EIP-1559,EIP-4844"
          client-path: "."
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}`}</Code>
      </Section>

      <Section title="Finding Categories">
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-white">MISSING</strong> &mdash;
            Specification requirement has no corresponding implementation.
          </li>
          <li>
            <strong className="text-white">DIVERGENT</strong> &mdash;
            Implementation behavior differs from spec requirement.
          </li>
          <li>
            <strong className="text-white">INCOMPLETE</strong> &mdash; Partial
            implementation that does not fully satisfy the requirement.
          </li>
          <li>
            <strong className="text-white">COMPLIANT</strong> &mdash;
            Implementation correctly satisfies the requirement.
          </li>
        </ul>
      </Section>

      <Section title="Development">
        <Code>{`# Clone and install dev deps
git clone https://github.com/nichechristie/eth-spec-lint.git
cd eth-spec-lint
pip install -e ".[dev]"

# Run tests
pytest

# Run linter on itself
eth-spec-lint --config config.example.yml`}</Code>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-eth-border bg-eth-card p-4 text-sm leading-relaxed">
      <code>{children}</code>
    </pre>
  );
}
