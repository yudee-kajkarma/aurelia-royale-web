"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import DalilaLogo from "@/assets/DalilaLogo.png";

const navItems = [
  { href: "/home", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const aboutItems = [
  { href: "/about#introduction", label: "Introduction" },
  { href: "/about#what-we-do", label: "What We Do" },
  { href: "/about#why-special", label: "Why Our Design is Special" },
];

const shopCategoryItems = [
  {
    href: "/shop?category=bracelets",
    label: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=earrings",
    label: "Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=necklaces",
    label: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=rings",
    label: "Rings",
    imageUrl:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=pendants",
    label: "Pendants",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=sets",
    label: "Sets",
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
  },
];

const shopEditionItems = [
  {
    href: "/shop?edition=classic",
    label: "Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=limited",
    label: "Limited Edition",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=rare",
    label: "Rare",
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=timeless",
    label: "Timeless",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
  },
];

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [activePanel, setActivePanel] = useState<"category" | "edition">("category");
  const reduceMotion = useReducedMotion();

  const activeShopItems = activePanel === "category" ? shopCategoryItems : shopEditionItems;

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[linear-gradient(90deg,#020202,#0a372f)] text-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => setOpenMenu(true)}
            className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
           <Image
                  src={DalilaLogo}
                  alt="Dalila Diamonds"
                  width={150}
                  height={46}
                  className="h-auto w-[100px] sm:w-[150px]"
                />
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenSearch(true)}
              className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
            <Link href="/login" className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]" aria-label="Go to login">
              <UserRound size={18} />
            </Link>
            <button className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>

      </header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
            onClick={() => setOpenMenu(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <motion.div
              className="h-full w-full overflow-y-auto bg-[#074f3a] text-white"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -18 }}
              transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
            <div className="flex h-20 items-center justify-between border-b border-white/20 bg-[linear-gradient(90deg,#020202,#0a4a38)] px-6 sm:px-8">
              <button
                onClick={() => setOpenMenu(false)}
                className="text-[var(--gold)] transition hover:text-[#e0c261]"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1.75} />
              </button>

              <Link href="/" className="inline-flex items-center" aria-label="Go to homepage" onClick={() => setOpenMenu(false)}>
                <Image
                  src={DalilaLogo}
                  alt="Dalila Diamonds"
                  width={150}
                  height={46}
                  className="h-auto w-[100px] sm:w-[150px]"
                />
              </Link>

              <div className="flex items-center gap-4">
                <Link href="/login" className="text-white/95 transition hover:text-[var(--gold)]" aria-label="Go to login" onClick={() => setOpenMenu(false)}>
                  <UserRound size={29} strokeWidth={2} />
                </Link>
                <button className="text-white/95 transition hover:text-[var(--gold)]" aria-label="Shopping bag">
                  <ShoppingBag size={29} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)]">
              <aside className="hidden border-r border-white/45 bg-[#074b37] lg:block">
                <nav className="h-full px-10 py-12">
                  <ul className="space-y-10 text-[2.1rem] uppercase leading-none tracking-[0.03em] text-white/90">
                    <li>
                      <div className="space-y-4">
                        <Link
                          href="/about"
                          className="display-font block transition hover:text-[var(--gold)]"
                          onClick={() => setOpenMenu(false)}
                        >
                          About Us
                        </Link>
                        <ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                          {aboutItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block transition hover:text-[var(--gold)]"
                                onClick={() => setOpenMenu(false)}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="space-y-4">
                        <Link
                          href="/shop"
                          className="display-font block transition hover:text-[var(--gold)]"
                          onClick={() => setOpenMenu(false)}
                        >
                          Shop
                        </Link>
                        <ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                          <li>
                            <button
                              type="button"
                              className={`block transition hover:text-[var(--gold)] ${
                                activePanel === "category" ? "text-[var(--gold)]" : ""
                              }`}
                              onMouseEnter={() => setActivePanel("category")}
                              onFocus={() => setActivePanel("category")}
                            >
                              Shop by Category
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              className={`block transition hover:text-[var(--gold)] ${
                                activePanel === "edition" ? "text-[var(--gold)]" : ""
                              }`}
                              onMouseEnter={() => setActivePanel("edition")}
                              onFocus={() => setActivePanel("edition")}
                            >
                              Shop by Edition
                            </button>
                          </li>

                          {activePanel === "edition" && (
                            <li className="pt-1 text-xs uppercase tracking-[0.16em] text-white/65">
                              <ul className="space-y-2">
                                {shopEditionItems.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block transition hover:text-[var(--gold)]"
                                      onClick={() => setOpenMenu(false)}
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )}
                        </ul>
                      </div>
                    </li>

                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="display-font transition hover:text-[var(--gold)]"
                          onClick={() => setOpenMenu(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12 border-t border-white/25 pt-6 text-xs uppercase tracking-[0.16em] text-white/70">
                    <p className="mb-2">Positioning</p>
                    <p>Personal | Family</p>
                  </div>
                </nav>
              </aside>

              <main className="px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
                <h2 className="display-font text-center text-5xl text-white sm:text-6xl">
                  {activePanel === "category" ? "Shop By Category" : "Shop By Edition"}
                </h2>

                <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-[3px] bg-[#0e5b45] sm:grid-cols-2 lg:grid-cols-3">
                  {activeShopItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenMenu(false)}
                      className="group relative block h-48 overflow-hidden sm:h-52 lg:h-56"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/95">{item.label}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 block lg:hidden">
                  <ul className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                    {[...aboutItems, ...shopCategoryItems.slice(0, 2), ...shopEditionItems.slice(0, 2), ...navItems].map((item) => (
                      <li key={`mobile-${item.href}`}>
                        <Link
                          href={item.href}
                          className="block border border-white/30 px-4 py-3 text-center transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                          onClick={() => setOpenMenu(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </main>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openSearch && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-start bg-black/55 p-4 pt-24"
            onClick={() => setOpenSearch(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="mx-auto flex w-full max-w-2xl items-center gap-2 border border-[var(--gold)]/35 bg-[#0a0f18] p-3"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: reduceMotion ? 0 : -16, scale: reduceMotion ? 1 : 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -12, scale: reduceMotion ? 1 : 0.99 }}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
            <Search size={18} className="text-[var(--gold)]" />
            <input
              autoFocus
              type="text"
              placeholder="What are you looking for"
              className="h-11 flex-1 bg-transparent text-white outline-none placeholder:text-white/55"
            />
            <button onClick={() => setOpenSearch(false)} className="rounded border border-white/20 p-2 text-white/75">
              <X size={16} />
            </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
