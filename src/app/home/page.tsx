import Link from "next/link";
import { connection } from "next/server";
import {
  ArrowRight,
  ArrowUp,
  Menu,
  Search,
  Send,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const products = [
  { name: "Emerald Bracelet", price: "$755", tag: "Bracelet" },
  { name: "Ruby Halo Band", price: "$955", tag: "Bracelet" },
  { name: "Silver Cluster", price: "$555", tag: "Bracelet" },
  { name: "Monogram Chain", price: "$355", tag: "Bracelet" },
  { name: "Crimson Drops", price: "$745", tag: "Ear Rings" },
  { name: "Sapphire Teardrop", price: "$745", tag: "Ear Rings" },
  { name: "Pearl Twins", price: "$745", tag: "Ear Rings" },
  { name: "Blue Swan Pearl", price: "$745", tag: "Ear Rings" },
];

const categories = [
  "Bridal Rings",
  "Necklaces",
  "Ear Art",
  "Bracelets",
  "Watches",
  "Signature Sets",
];

export default async function HomePage() {
  // Forces request-time rendering for the home route.
  await connection();

  return (
    <div id="top" className="grain bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[linear-gradient(90deg,#020202,#0a372f)] text-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
            <Menu size={20} />
          </button>

          <div className="text-center">
            <p className="display-font text-2xl leading-none tracking-wide">Dalila</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Diamonds</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <Search size={18} />
            </button>
            <button className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <UserRound size={18} />
            </button>
            <button className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>

        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-center gap-8 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 sm:px-6">
          <Link href="/home" className="transition hover:text-[var(--gold)]">
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
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <section className="hero-glow rise overflow-hidden rounded-3xl border border-black/5 bg-[var(--surface)]">
          <div className="grid min-h-[500px] items-center md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">New Collection</p>
              <h1 className="display-font text-5xl leading-none text-[var(--deep)] sm:text-6xl">
                Earrings <span className="text-[var(--gold)]">Look</span>
              </h1>
              <p className="mt-4 max-w-md text-sm font-semibold uppercase tracking-[0.18em] text-[var(--deep)]/70">
                Designed for a refined luxury showcase layout.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 bg-[var(--deep)] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#0a2e28]">
                Shop Now
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="relative h-full min-h-[380px] bg-[radial-gradient(circle_at_25%_25%,rgba(199,166,61,0.32),transparent_40%),linear-gradient(160deg,#d8c5b3,#8d6f5d_40%,#3c2a26)]">
              <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
              <div className="absolute bottom-8 left-8 h-44 w-44 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
              <div className="absolute inset-x-10 bottom-10 border-t border-white/30 pt-3 text-xs uppercase tracking-[0.3em] text-white/90">
                Editorial Hero Placeholder
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Find New-In</p>
          <h2 className="display-font mt-3 text-5xl text-[var(--deep)]">Top Trending</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-sm border border-black/5 bg-[#f7f7f7] p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-white to-[#ecebe5]">
                  <span className="display-font text-sm tracking-[0.3em] text-[var(--deep)]/45">{product.tag}</span>
                </div>
                <p className="mt-4 text-center text-sm text-[var(--deep)]/80">{product.name}</p>
                <p className="text-center text-lg font-bold text-[var(--gold)]">{product.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-[var(--deep)] px-10 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#0a2e28]">
              View All
            </button>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Our Categories</p>
          <h2 className="display-font mt-3 text-center text-5xl text-[var(--deep)]">Shop By Category</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={category}
                className="relative h-48 overflow-hidden border border-black/5 bg-gradient-to-br from-[#1a1f1e] via-[#2f4a43] to-[#8a7a63] p-4"
              >
                <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.28),transparent_45%)]" />
                <p className="relative z-10 text-sm uppercase tracking-[0.2em] text-white/80">0{index + 1}</p>
                <h3 className="display-font relative z-10 mt-2 text-3xl text-white">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-3xl border border-black/5 bg-[#f9f9f8]">
          <div className="grid md:grid-cols-2">
            <div className="min-h-[300px] bg-[linear-gradient(145deg,#f5d7bb,#d49f7d_45%,#784f40)]" />
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Client Testimonials</p>
              <h2 className="display-font mt-3 text-5xl text-[var(--deep)]">Our Happy Clients</h2>
              <p className="mt-6 leading-8 text-[var(--deep)]/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--deep)]">- Alaxander Lee -</p>
            </div>
          </div>
        </section>

        <section className="mt-20 mb-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Our Newsletter</p>
          <h2 className="display-font mt-3 text-center text-5xl text-[var(--deep)]">Get Our Latest Update</h2>
          <p className="mt-3 text-center text-[var(--deep)]/55">Sign up for updates on offers, launches, and style edits.</p>

          <form className="mx-auto mt-8 flex w-full max-w-2xl flex-col border border-black/70 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 bg-[#111320] px-4 text-white outline-none placeholder:text-white/60"
            />
            <button className="inline-flex h-14 items-center justify-center gap-2 bg-[var(--surface)] px-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--gold)] transition hover:bg-[#ecebe5]">
              <Send size={16} />
              Subscribe
            </button>
          </form>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-52 border border-black/5 bg-[linear-gradient(130deg,#cfb393,#9d6f4d_40%,#2d201b)]"
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#050606,#010101)] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="display-font text-4xl">Dalila</p>
          <p className="text-sm uppercase tracking-[0.25em] text-white/65">Diamonds</p>
          <p className="mt-5 text-sm text-white/70">info@dalila.com · +09 666 888 999</p>

          <nav className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase tracking-[0.15em]">
            <Link href="/home" className="transition hover:text-[var(--gold)]">
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

      <a
        href="#top"
        className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--gold)] bg-[#d3b442] text-white shadow-xl transition hover:scale-105"
      >
        <ArrowUp size={18} />
      </a>
    </div>
  );
}
