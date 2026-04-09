import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#050606,#010101)] px-4 py-14 text-white sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="display-font text-4xl">Dalila</p>
        <p className="text-sm uppercase tracking-[0.25em] text-white/65">Diamonds</p>
        <p className="mt-5 text-sm text-white/70">info@dalila.com · +09 666 888 999</p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase tracking-[0.15em]">
          <Link href="/" className="transition hover:text-[var(--gold)]">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-[var(--gold)]">
            About
          </Link>
          <Link href="/shop" className="transition hover:text-[var(--gold)]">
            Shop
          </Link>
          <Link href="/contact" className="transition hover:text-[var(--gold)]">
            Contact
          </Link>
        </nav>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/45">
          Copyright 2026 Dalila. All rights reserved by Dalila.
        </p>
      </div>
    </footer>
  );
}
