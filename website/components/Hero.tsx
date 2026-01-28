import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        Awesome Smart Linter
      </h1>
      <p className="max-w-2xl text-lg text-slate-400">
        Automatically verify Ethereum client implementations against official
        EIP specifications using LLM-powered analysis.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="rounded-lg bg-eth-blue px-6 py-3 font-medium text-white transition-colors hover:bg-eth-purple"
        >
          Get Started
        </Link>
        <a
          href="https://github.com/nichechristie/eth-spec-lint"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-eth-border px-6 py-3 font-medium text-slate-300 transition-colors hover:border-eth-blue"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
