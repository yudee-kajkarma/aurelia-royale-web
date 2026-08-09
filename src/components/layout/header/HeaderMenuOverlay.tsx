import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/utils/i18n";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ShoppingBag, UserRound, X } from "lucide-react";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { HeaderProfileMenu } from "@/components/layout/header/HeaderProfileMenu";
import {
    ADMIN_NAV_ITEMS,
    aboutItems,
    navItems,
    shopCategoryItems,
    type HeaderVisualLinkItem,
} from "@/components/layout/header/header.data";
import type { AuthUser } from "@/services/auth/auth.types";
import { isAdminRole } from "@/services/auth/auth.types";

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
    const { t, localizeHref } = useTranslation();
    const isAdmin = isAdminRole(user?.role);
    const listVariants = reduceMotion ? undefined : desktopListVariants;
    const mobileVariants = reduceMotion ? undefined : mobileListVariants;
    const itemVariants = reduceMotion ? undefined : linkItemVariants;
    const contentVariants = reduceMotion ? undefined : panelContentVariants;
    const gridVariants = reduceMotion ? undefined : cardGridVariants;
    const tileVariants = reduceMotion ? undefined : cardItemVariants;
    const pathname = usePathname();
    const desktopSidebarItems = [
        { href: "/", label: t("navigation.home").toUpperCase() },
        { href: "/about", label: t("navigation.about").toUpperCase() },
        { href: "/shop", label: t("navigation.shop").toUpperCase() },
        { href: "/contact", label: t("navigation.contact").toUpperCase() },
        { href: "/blog", label: t("navigation.blog").toUpperCase() },
    ];
    const mobileAdminItems = isAdmin
        ? ADMIN_NAV_ITEMS.map((item) => ({
              href: item.href,
              label: item.label,
          }))
        : [];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px]"
                    onClick={onCloseMenu}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: reduceMotion ? 0 : 0.22,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="h-full w-full overflow-y-auto bg-[#efefe8] text-[#153f35]"
                        onClick={(event) => event.stopPropagation()}
                        initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: reduceMotion ? 0 : -18 }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.28,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="flex h-20 items-center justify-between border-b border-white/20 bg-[linear-gradient(90deg,#020202,#0a4a38)] px-6 sm:px-8">
                            <button
                                type="button"
                                onClick={onCloseMenu}
                                className="text-gold transition hover:text-[#e0c261]"
                                aria-label="Close menu"
                            >
                                <X size={32} strokeWidth={1.75} />
                            </button>

                            <HeaderLogo onClick={onCloseMenu} />

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="text-white/95 transition hover:text-gold"
                                        aria-label={
                                            isAuthenticated
                                                ? "Open profile menu"
                                                : "Go to login"
                                        }
                                        onClick={onProfileTrigger}
                                    >
                                        <UserRound size={29} strokeWidth={2} />
                                    </button>

                                    <AnimatePresence>
                                        {openProfileMenu &&
                                            user &&
                                            isAuthenticated && (
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
                                <button
                                    type="button"
                                    className="relative text-white/95 transition hover:text-gold"
                                    aria-label="Shopping bag"
                                    onClick={onCartOpen}
                                >
                                    <ShoppingBag size={29} strokeWidth={2} />
                                    {cartCount > 0 ? (
                                        <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-extrabold text-[#15110a]">
                                            {cartCount}
                                        </span>
                                    ) : null}
                                </button>
                            </div>
                        </div>

                        <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)]">
                            <motion.aside
                                className="hidden border-r border-[#e7e7de] bg-[#f3f3ed] lg:block"
                                variants={contentVariants}
                                initial={reduceMotion ? false : "hidden"}
                                animate={reduceMotion ? undefined : "visible"}
                                exit={reduceMotion ? undefined : "exit"}
                            >
                                <nav className="h-full px-10 py-24">
                                    <motion.ul
                                        className="space-y-10 text-[2.6rem] uppercase leading-none tracking-[0.03em] text-[#153f35]"
                                        variants={listVariants}
                                        initial={
                                            reduceMotion ? false : "hidden"
                                        }
                                        animate={
                                            reduceMotion ? undefined : "visible"
                                        }
                                        exit={reduceMotion ? undefined : "exit"}
                                    >
                                        {desktopSidebarItems.map((item) => {
                                            const isActive =
                                                item.href === "/"
                                                    ? pathname === "/" ||
                                                      pathname === "/home"
                                                    : pathname?.startsWith(
                                                          item.href,
                                                      );

                                            return (
                                                <motion.li
                                                    key={item.href}
                                                    variants={itemVariants}
                                                >
                                                    <Link
                                                        href={localizeHref(item.href)}
                                                        className={`display-font inline-block border-b border-transparent px-1 transition ${isActive ? "text-[#0f5f49] border-[#0f5f49]" : "hover:text-[#0f5f49]"}`}
                                                        onClick={onCloseMenu}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </motion.li>
                                            );
                                        })}

                                        {isAdmin ? (
                                            <motion.li variants={itemVariants}>
                                                <div className="mt-3 border-t border-[#d8d8cd] pt-6">
                                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f5f49]">
                                                        Admin
                                                    </p>
                                                    <ul className="mt-3 space-y-2">
                                                        {ADMIN_NAV_ITEMS.map(
                                                            (item) => (
                                                                <li
                                                                    key={
                                                                        item.key ??
                                                                        item.href
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            item.href
                                                                        }
                                                                        className="block text-base font-semibold uppercase tracking-[0.12em] text-[#153f35] transition hover:text-[#0f5f49]"
                                                                        onClick={
                                                                            onCloseMenu
                                                                        }
                                                                    >
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </motion.li>
                                        ) : null}
                                    </motion.ul>
                                </nav>
                            </motion.aside>

                            <motion.main
                                className="bg-[#efefe8] px-6 py-10 sm:px-10 lg:px-14 lg:py-16"
                                variants={contentVariants}
                                initial={reduceMotion ? false : "hidden"}
                                animate={reduceMotion ? undefined : "visible"}
                                exit={reduceMotion ? undefined : "exit"}
                            >
                                <motion.ul
                                    className="mb-6 grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#153f35] lg:hidden"
                                    variants={mobileVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    animate={
                                        reduceMotion ? undefined : "visible"
                                    }
                                    exit={reduceMotion ? undefined : "exit"}
                                >
                                    {desktopSidebarItems.map((item) => (
                                        <motion.li
                                            key={`mobile-primary-${item.href}`}
                                            variants={itemVariants}
                                        >
                                            <Link
                                                href={localizeHref(item.href)}
                                                className="block border border-[#d6d6ca] bg-white/70 px-4 py-3 text-center transition hover:border-[#0e5b45] hover:text-[#0e5b45]"
                                                onClick={onCloseMenu}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <motion.h2
                                    className="display-font text-center text-5xl text-[#113d34] sm:text-6xl"
                                    variants={itemVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    animate={
                                        reduceMotion ? undefined : "visible"
                                    }
                                    exit={reduceMotion ? undefined : "exit"}
                                >
                                    {activePanel === "category"
                                        ? t("home.shopByCategory")
                                        : t("home.shopByEdition")}
                                </motion.h2>

                                <motion.div
                                    className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-[2px] bg-[#ecebe3] sm:grid-cols-2 lg:grid-cols-3"
                                    variants={gridVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    animate={
                                        reduceMotion ? undefined : "visible"
                                    }
                                    exit={reduceMotion ? undefined : "exit"}
                                >
                                    {activeShopItems.map((item) => (
                                        <motion.div
                                            key={item.href}
                                            variants={tileVariants}
                                        >
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={onCloseMenu}
                                                className="group relative block overflow-hidden aspect-3/4 m-2 "
                                            >
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                                                    style={{
                                                        backgroundImage: `url(${item.imageUrl})`,
                                                    }}
                                                    aria-hidden="true"
                                                />
                                                <div className="absolute inset-0 bg-black/12 transition group-hover:bg-black/5" />
                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3">
                                                    <p className="text-xs uppercase tracking-[0.16em] text-white">
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="mt-10 block lg:hidden"
                                    variants={contentVariants}
                                    initial={reduceMotion ? false : "hidden"}
                                    animate={
                                        reduceMotion ? undefined : "visible"
                                    }
                                    exit={reduceMotion ? undefined : "exit"}
                                >
                                    {!isAuthenticated && (
                                        <motion.div
                                            className="mb-4 rounded-[24px] border border-white/20 bg-white/8 p-5 text-center text-white"
                                            variants={itemVariants}
                                        >
                                            <p className="text-xs uppercase tracking-[0.18em] text-gold">
                                                Profile
                                            </p>
                                            <p className="mt-2 text-sm text-white/72">
                                                Sign in to see your account
                                                details here.
                                            </p>
                                            <Link
                                                href={localizeHref("/login")}
                                                className="mt-4 inline-flex rounded-full border border-white/25 px-5 py-2 text-sm font-semibold transition hover:border-gold hover:text-gold"
                                                onClick={onCloseMenu}
                                            >
                                                Open Login
                                            </Link>
                                        </motion.div>
                                    )}

                                    {mobileAdminItems.length > 0 ? (
                                        <>
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f5f49]">
                                                Admin
                                            </p>
                                            <motion.ul
                                                className="grid grid-cols-2 gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#153f35]"
                                                variants={mobileVariants}
                                                initial={
                                                    reduceMotion
                                                        ? false
                                                        : "hidden"
                                                }
                                                animate={
                                                    reduceMotion
                                                        ? undefined
                                                        : "visible"
                                                }
                                                exit={
                                                    reduceMotion
                                                        ? undefined
                                                        : "exit"
                                                }
                                            >
                                                {mobileAdminItems.map(
                                                    (item) => (
                                                        <motion.li
                                                            key={`mobile-admin-${item.href}`}
                                                            variants={
                                                                itemVariants
                                                            }
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="block border border-[#d6d6ca] bg-white/60 px-4 py-3 text-center transition hover:border-[#0e5b45] hover:text-[#0e5b45]"
                                                                onClick={
                                                                    onCloseMenu
                                                                }
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        </motion.li>
                                                    ),
                                                )}
                                            </motion.ul>
                                        </>
                                    ) : null}
                                </motion.div>
                            </motion.main>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
