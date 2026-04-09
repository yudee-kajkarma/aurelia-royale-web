import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, ShoppingBag, UserRound, X } from "lucide-react";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { HeaderProfileMenu } from "@/components/layout/header/HeaderProfileMenu";
import {
  aboutItems,
  navItems,
  shopEditionItems,
  type HeaderVisualLinkItem,
} from "@/components/layout/header/header.data";
import type { AuthUser } from "@/services/auth/auth.types";

type HeaderMenuOverlayProps = {
  open: boolean;
  reduceMotion: boolean | null;
  activePanel: "category" | "edition";
  activeShopItems: HeaderVisualLinkItem[];
  isAuthenticated: boolean;
  user: AuthUser | null;
  accountHref: string;
  openProfileMenu: boolean;
  onCloseMenu: () => void;
  onCloseAll: () => void;
  onProfileTrigger: () => void;
  onLogout: () => void | Promise<void>;
  onActivatePanel: (panel: "category" | "edition") => void;
};

export function HeaderMenuOverlay({
  open,
  reduceMotion,
  activePanel,
  activeShopItems,
  isAuthenticated,
  user,
  accountHref,
  openProfileMenu,
  onCloseMenu,
  onCloseAll,
  onProfileTrigger,
  onLogout,
  onActivatePanel,
}: HeaderMenuOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
          onClick={onCloseMenu}
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
                type="button"
                onClick={onCloseMenu}
                className="text-[var(--gold)] transition hover:text-[#e0c261]"
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1.75} />
              </button>

              <HeaderLogo onClick={onCloseMenu} />

              <div className="flex items-center gap-4">
                <div className="relative">
                  <button
                    type="button"
                    className="text-white/95 transition hover:text-[var(--gold)]"
                    aria-label={isAuthenticated ? "Open profile menu" : "Go to login"}
                    onClick={onProfileTrigger}
                  >
                    <UserRound size={29} strokeWidth={2} />
                  </button>

                  <AnimatePresence>
                    {openProfileMenu && user && isAuthenticated && (
                      <HeaderProfileMenu
                        user={user}
                        accountHref={accountHref}
                        reduceMotion={reduceMotion}
                        variant="mobile"
                        onNavigate={onCloseAll}
                        onLogout={onLogout}
                      />
                    )}
                  </AnimatePresence>
                </div>
                <button type="button" className="text-white/95 transition hover:text-[var(--gold)]" aria-label="Wishlist">
                  <Heart size={29} strokeWidth={2} />
                </button>
                <button type="button" className="text-white/95 transition hover:text-[var(--gold)]" aria-label="Shopping bag">
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
                          onClick={onCloseMenu}
                        >
                          About Us
                        </Link>
                        <ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75">
                          {aboutItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block transition hover:text-[var(--gold)]"
                                onClick={onCloseMenu}
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
                          onClick={onCloseMenu}
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
                              onMouseEnter={() => onActivatePanel("category")}
                              onFocus={() => onActivatePanel("category")}
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
                              onMouseEnter={() => onActivatePanel("edition")}
                              onFocus={() => onActivatePanel("edition")}
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
                                      onClick={onCloseMenu}
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
                          onClick={onCloseMenu}
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
                      onClick={onCloseMenu}
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
                  {!isAuthenticated && (
                    <div className="mb-4 rounded-[24px] border border-white/20 bg-white/8 p-5 text-center text-white">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Profile</p>
                      <p className="mt-2 text-sm text-white/72">Sign in to see your account details here.</p>
                      <Link
                        href="/login"
                        className="mt-4 inline-flex rounded-full border border-white/25 px-5 py-2 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                        onClick={onCloseMenu}
                      >
                        Open Login
                      </Link>
                    </div>
                  )}

                  <ul className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                    {[...aboutItems, ...activeShopItems.slice(0, 2), ...navItems].map((item) => (
                      <li key={`mobile-${item.href}`}>
                        <Link
                          href={item.href}
                          className="block border border-white/30 px-4 py-3 text-center transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                          onClick={onCloseMenu}
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
  );
}