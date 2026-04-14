import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Heart, ShoppingBag, UserRound, X } from "lucide-react";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { HeaderProfileMenu } from "@/components/layout/header/HeaderProfileMenu";
import {
  ADMIN_NAV_ITEMS,
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
  cartCount: number;
  wishlistCount: number;
  onCloseMenu: () => void;
  onCloseAll: () => void;
  onCartOpen: () => void;
  onProfileTrigger: () => void;
  onWishlistOpen: () => void;
  onLogout: () => void | Promise<void>;
  onActivatePanel: (panel: "category" | "edition") => void;
};

const desktopListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const mobileListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
};

const linkItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
    y: 12,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -12,
    y: -6,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
};

const panelContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: 14,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.16,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 18,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: "easeInOut",
    },
  },
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
  cartCount,
  wishlistCount,
  onCloseMenu,
  onCloseAll,
  onCartOpen,
  onProfileTrigger,
  onWishlistOpen,
  onLogout,
  onActivatePanel,
}: HeaderMenuOverlayProps) {
  const isAdmin = user?.role === "ADMIN";
  const listVariants = reduceMotion ? undefined : desktopListVariants;
  const mobileVariants = reduceMotion ? undefined : mobileListVariants;
  const itemVariants = reduceMotion ? undefined : linkItemVariants;
  const contentVariants = reduceMotion ? undefined : panelContentVariants;
  const gridVariants = reduceMotion ? undefined : cardGridVariants;
  const tileVariants = reduceMotion ? undefined : cardItemVariants;

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
                <button type="button" className="relative text-white/95 transition hover:text-[var(--gold)]" aria-label="Wishlist" onClick={onWishlistOpen}>
                  <Heart size={29} strokeWidth={2} />
                  <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[10px] font-extrabold text-[#15110a]">
                    {wishlistCount}
                  </span>
                </button>
                <button type="button" className="relative text-white/95 transition hover:text-[var(--gold)]" aria-label="Shopping bag" onClick={onCartOpen}>
                  <ShoppingBag size={29} strokeWidth={2} />
                  {cartCount > 0 ? (
                    <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[10px] font-extrabold text-[#15110a]">
                      {cartCount}
                    </span>
                  ) : null}
                </button>
              </div>
            </div>

            <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)]">
              <motion.aside className="hidden border-r border-white/45 bg-[#074b37] lg:block" variants={contentVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                <nav className="h-full px-10 py-12">
                  <motion.ul className="space-y-10 text-[2.1rem] uppercase leading-none tracking-[0.03em] text-white/90" variants={listVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                    <motion.li variants={itemVariants}>
                      <div className="space-y-4">
                        <Link
                          href="/about"
                          className="display-font block transition hover:text-[var(--gold)]"
                          onClick={onCloseMenu}
                        >
                          About Us
                        </Link>
                        <motion.ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75" variants={mobileVariants}>
                          {aboutItems.map((item) => (
                            <motion.li key={item.href} variants={itemVariants}>
                              <Link
                                href={item.href}
                                className="block transition hover:text-[var(--gold)]"
                                onClick={onCloseMenu}
                              >
                                {item.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.li>

                    <motion.li variants={itemVariants}>
                      <div className="space-y-4">
                        <Link
                          href="/shop"
                          className="display-font block transition hover:text-[var(--gold)]"
                          onClick={onCloseMenu}
                        >
                          Shop
                        </Link>
                        <motion.ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75" variants={mobileVariants}>
                          <motion.li variants={itemVariants}>
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
                          </motion.li>
                          <motion.li variants={itemVariants}>
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
                          </motion.li>

                          {activePanel === "edition" && (
                            <motion.li className="pt-1 text-xs uppercase tracking-[0.16em] text-white/65" variants={itemVariants}>
                              <motion.ul className="space-y-2" variants={mobileVariants}>
                                {shopEditionItems.map((item) => (
                                  <motion.li key={item.href} variants={itemVariants}>
                                    <Link
                                      href={item.href}
                                      className="block transition hover:text-[var(--gold)]"
                                      onClick={onCloseMenu}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            </motion.li>
                          )}
                        </motion.ul>
                      </div>
                    </motion.li>

                    {navItems.map((item) => (
                      <motion.li key={item.href} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className="display-font transition hover:text-[var(--gold)]"
                          onClick={onCloseMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}

                    {isAdmin && (
                      <motion.li variants={itemVariants}>
                        <div className="space-y-4">
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--gold)]">Admin</p>
                          <motion.ul className="space-y-3 pl-1 text-sm font-medium uppercase tracking-[0.14em] text-white/75" variants={mobileVariants}>
                            {ADMIN_NAV_ITEMS.map((item) => (
                              <motion.li key={item.key ?? item.href} variants={itemVariants}>
                                <Link
                                  href={item.href}
                                  className="block transition hover:text-[var(--gold)]"
                                  onClick={onCloseMenu}
                                >
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </motion.li>
                    )}
                  </motion.ul>

                  <motion.div className="mt-12 border-t border-white/25 pt-6 text-xs uppercase tracking-[0.16em] text-white/70" variants={contentVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                    {isAuthenticated && user ? (
                      <div className="mb-6">
                        <HeaderProfileMenu
                          user={user}
                          accountHref={accountHref}
                          reduceMotion={reduceMotion}
                          variant="panel"
                          onNavigate={onCloseAll}
                          onLogout={onLogout}
                        />
                      </div>
                    ) : null}
                    <p className="mb-2">Positioning</p>
                    <p>Personal | Family</p>
                  </motion.div>
                </nav>
              </motion.aside>

              <motion.main className="px-6 py-10 sm:px-10 lg:px-14 lg:py-16" variants={contentVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                <motion.h2 className="display-font text-center text-5xl text-white sm:text-6xl" variants={itemVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                  {activePanel === "category" ? "Shop By Category" : "Shop By Edition"}
                </motion.h2>

                <motion.div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-[3px] bg-[#0e5b45] sm:grid-cols-2 lg:grid-cols-3" variants={gridVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                  {activeShopItems.map((item) => (
                    <motion.div key={item.href} variants={tileVariants}>
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
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div className="mt-10 block lg:hidden" variants={contentVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                  {!isAuthenticated && (
                    <motion.div className="mb-4 rounded-[24px] border border-white/20 bg-white/8 p-5 text-center text-white" variants={itemVariants}>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Profile</p>
                      <p className="mt-2 text-sm text-white/72">Sign in to see your account details here.</p>
                      <Link
                        href="/login"
                        className="mt-4 inline-flex rounded-full border border-white/25 px-5 py-2 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                        onClick={onCloseMenu}
                      >
                        Open Login
                      </Link>
                    </motion.div>
                  )}

                  <motion.ul className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/90" variants={mobileVariants} initial={reduceMotion ? false : "hidden"} animate={reduceMotion ? undefined : "visible"} exit={reduceMotion ? undefined : "exit"}>
                    {[...aboutItems, ...activeShopItems.slice(0, 2), ...navItems, ...(isAdmin ? ADMIN_NAV_ITEMS : [])].map((item) => (
                      <motion.li key={`mobile-${item.href}`} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className="block border border-white/30 px-4 py-3 text-center transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                          onClick={onCloseMenu}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.main>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}