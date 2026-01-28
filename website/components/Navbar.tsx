import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-eth-border bg-eth-dark/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          Awesome Smart Linter
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/docs" className="hover:text-eth-blue transition-colors">
            Docs
          </Link>
          <a
            href="https://github.com/nichechristie/eth-spec-lint"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-eth-blue transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
