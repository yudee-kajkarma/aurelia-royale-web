"use client";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
    type Variants,
} from "framer-motion";
import { Heart, Menu, ShoppingBag, UserRound, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/utils/i18n";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { HeaderMenuOverlay } from "@/components/layout/header/HeaderMenuOverlay";
import { HeaderProfileMenu } from "@/components/layout/header/HeaderProfileMenu";
import { HeaderSearchOverlay } from "@/components/layout/header/HeaderSearchOverlay";
import {
    shopCategoryItems,
    shopEditionItems,
} from "@/components/layout/header/header.data";
import { useAuth } from "@/providers/AuthProvider";
import { isAdminRole } from "@/services/auth/auth.types";
import { useCart } from "@/providers/CartProvider";
import { useWishlist } from "@/providers/WishlistProvider";

const shopDropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: { duration: 0.18, ease: "easeInOut" },
    },
};

const shopCardGridVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
    exit: {
        transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
};

const shopCardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        y: 10,
        scale: 0.98,
        transition: { duration: 0.18, ease: "easeInOut" },
    },
};

const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "de", label: "German" },
    { code: "es", label: "Spanish" },
    { code: "nl", label: "Dutch" },
    { code: "fr", label: "French" },
    { code: "it", label: "Italian" },
] as const;

export function Header() {
    const { t, locale, changeLanguage, localizeHref } = useTranslation();
    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const [openShopDropdown, setOpenShopDropdown] = useState(false);
    const [showLangDropdown, setShowLangDropdown] = useState(false);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
                setShowLangDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [activePanel, setActivePanel] = useState<"category" | "edition">(
        "category",
    );
    const closeShopTimerRef = useRef<number | null>(null);
    const reduceMotion = useReducedMotion();
    const pathname = usePathname();
    const router = useRouter();
    const { isAuthenticated, isReady, logout, user } = useAuth();
    const { count: cartCount } = useCart();
    const { count } = useWishlist();

    const translatedShopCategoryItems = shopCategoryItems.map((item) => {
        const categoryKey = item.href.split("category=")[1];
        const translationKey = `categories.${categoryKey.toLowerCase()}`;
        const translatedLabel = t(translationKey);
        return {
            ...item,
            href: localizeHref(item.href),
            label: (translatedLabel !== translationKey ? translatedLabel : item.label).toUpperCase(),
        };
    });

    const translatedShopEditionItems = shopEditionItems.map((item) => {
        const editionKey = item.href.split("edition=")[1];
        const translationKey = `editionsList.${editionKey}`;
        const translatedLabel = t(translationKey);
        return {
            ...item,
            href: localizeHref(item.href),
            label: (translatedLabel !== translationKey ? translatedLabel : item.label).toUpperCase(),
        };
    });

    const activeShopItems =
        activePanel === "category" ? translatedShopCategoryItems : translatedShopEditionItems;
    // Profile button destination — admins land on the admin dashboard,
    // normal users on their profile page. (Distinct from the post-login
    // default route, which sends normal users to "/".)
    const profileHref = localizeHref(
        user
            ? isAdminRole(user.role)
                ? "/admin/products"
                : "/profile"
            : "/login"
    );

    function closeAllOverlays() {
        setOpenMenu(false);
        setOpenSearch(false);
        setOpenProfileMenu(false);
    }

    async function handleLogout() {
        await logout();
        closeAllOverlays();
        router.push(localizeHref("/"));
    }

    function handleGuestNavigate(href: string) {
        closeAllOverlays();
        router.push(localizeHref(href));
    }

    function handleProfileTrigger() {
        if (!isReady) {
            return;
        }

        if (!isAuthenticated) {
            setOpenMenu(false);
            setOpenProfileMenu((currentValue) => !currentValue);
            return;
        }

        setOpenProfileMenu((currentValue) => !currentValue);
    }

    function handleWishlistOpen() {
        const wishlistPath = "/wishlist";

        if (!isReady) {
            return;
        }

        if (!isAuthenticated) {
            const redirectPath = pathname ?? wishlistPath;
            closeAllOverlays();
            router.push(
                localizeHref(`/login?redirect=${encodeURIComponent(redirectPath === "/login" ? wishlistPath : wishlistPath)}`),
            );
            return;
        }

        closeAllOverlays();
        router.push(localizeHref(wishlistPath));
    }

    function handleCartOpen() {
        const cartPath = "/cart";

        if (!isReady) {
            return;
        }

        if (!isAuthenticated) {
            closeAllOverlays();
            router.push(localizeHref(`/login?redirect=${encodeURIComponent(cartPath)}`));
            return;
        }

        closeAllOverlays();
        router.push(localizeHref(cartPath));
    }

    const primaryNavLinks = [
        { href: "/", label: t("navigation.home") },
        { href: "/about", label: t("navigation.about") },
        { href: "/shop", label: t("navigation.shop") },
        { href: "/contact", label: t("navigation.contact") },
        { href: "/blog", label: t("navigation.blog") },
    ];

    function openShopDropdownNow() {
        if (closeShopTimerRef.current !== null) {
            window.clearTimeout(closeShopTimerRef.current);
            closeShopTimerRef.current = null;
        }
        setOpenShopDropdown(true);
    }

    function scheduleCloseShopDropdown() {
        if (closeShopTimerRef.current !== null) {
            window.clearTimeout(closeShopTimerRef.current);
        }
        closeShopTimerRef.current = window.setTimeout(() => {
            setOpenShopDropdown(false);
            closeShopTimerRef.current = null;
        }, 140);
    }

    return (
        <>
            <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A362E] text-white">
                <div className="mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:h-28 sm:gap-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-8 text-[0.72rem] xl:text-[0.78rem] font-semibold uppercase tracking-[0.14em] xl:tracking-[0.22em] text-gold">
                        {primaryNavLinks.map((link) => {
                            const isShop = link.href === "/shop";
                            return (
                                <div
                                    key={link.href}
                                    onMouseEnter={
                                        isShop ? openShopDropdownNow : undefined
                                    }
                                    onMouseLeave={
                                        isShop
                                            ? scheduleCloseShopDropdown
                                            : undefined
                                    }
                                >
                                    <Link
                                        href={localizeHref(link.href)}
                                        className="transition hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    <button
                        type="button"
                        onClick={() => setOpenMenu(true)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold hover:text-gold sm:h-10 sm:w-10 lg:hidden"
                        aria-label="Open menu"
                    >
                        <Menu size={18} className="sm:size-5" />
                    </button>

                    <div className="flex justify-center">
                        <HeaderLogo />
                    </div>

                    <div className="flex items-center justify-end gap-1.5 sm:gap-4">
                        {/* Language Selector Dropdown */}
                        <div
                            ref={langDropdownRef}
                            className="relative"
                        >
                            <button
                                type="button"
                                onClick={() => setShowLangDropdown((prev) => !prev)}
                                className="inline-flex h-8 px-2.5 items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-gold/40 text-[10px] font-bold uppercase tracking-wider text-gold transition hover:border-gold hover:bg-gold/10 sm:h-11 sm:px-3.5 sm:text-xs"
                                aria-label="Select language"
                            >
                                <span>{locale.toUpperCase()}</span>
                                <ChevronDown size={12} className={`transition-transform duration-200 ${showLangDropdown ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {showLangDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className="absolute right-0 top-full z-30 mt-2 w-32 overflow-hidden rounded-2xl border border-white/10 bg-[#08140f] p-1 text-white shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                                    >
                                        {LANGUAGES.map((lang) => (
                                            <button
                                                key={lang.code}
                                                type="button"
                                                onClick={() => {
                                                    changeLanguage(lang.code as any);
                                                    setShowLangDropdown(false);
                                                }}
                                                className={`w-full rounded-xl px-3 py-2 text-left font-jost text-xs font-medium tracking-wide transition-colors ${
                                                    locale === lang.code
                                                        ? "bg-gold text-[#17120a]"
                                                        : "text-white/80 hover:bg-gold/10 hover:text-gold"
                                                }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={handleProfileTrigger}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:border-gold hover:bg-gold/10 sm:h-11 sm:w-11"
                                aria-label={
                                    isAuthenticated
                                        ? "Open profile menu"
                                        : "Open account menu"
                                }
                            >
                                <UserRound size={16} strokeWidth={1.5} className="sm:size-4.5" />
                            </button>

                            <AnimatePresence>
                                {openProfileMenu &&
                                    !isAuthenticated &&
                                    isReady && (
                                        <motion.div
                                            className="absolute right-0 top-14 w-64 overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                                            initial={{
                                                opacity: 0,
                                                y: reduceMotion ? 0 : 10,
                                                scale: reduceMotion ? 1 : 0.98,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: reduceMotion ? 0 : 8,
                                                scale: reduceMotion ? 1 : 0.98,
                                            }}
                                            transition={{
                                                duration: reduceMotion
                                                    ? 0
                                                    : 0.18,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <p className="text-xs uppercase tracking-[0.18em] text-gold">
                                                {t("profile.welcome")}
                                            </p>
                                            <p className="mt-2 text-sm leading-6 text-white/72">
                                                {t("profile.welcomeText")}
                                            </p>

                                            <div className="mt-5 grid gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleGuestNavigate(
                                                            "/login",
                                                        )
                                                    }
                                                    className="inline-flex items-center justify-center rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428]"
                                                >
                                                    {t("profile.login")}
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleGuestNavigate(
                                                            "/register",
                                                        )
                                                    }
                                                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
                                                >
                                                    {t("profile.register")}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                {openProfileMenu && isAuthenticated && user && (
                                    <HeaderProfileMenu
                                        user={user}
                                        accountHref={profileHref}
                                        reduceMotion={reduceMotion}
                                        variant="desktop"
                                        onNavigate={() =>
                                            setOpenProfileMenu(false)
                                        }
                                        onLogout={handleLogout}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                        <button
                            type="button"
                            onClick={handleWishlistOpen}
                            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:border-gold hover:bg-gold/10 sm:h-11 sm:w-11"
                            aria-label="Wishlist"
                        >
                            <Heart size={16} strokeWidth={1.5} className="sm:size-4.5" />
                            {count > 0 ? (
                                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-extrabold text-[#15110a]">
                                    {count}
                                </span>
                            ) : null}
                        </button>
                        <button
                            type="button"
                            onClick={handleCartOpen}
                            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition hover:border-gold hover:bg-gold/10 sm:h-11 sm:w-11"
                            aria-label="Shopping bag"
                        >
                            <ShoppingBag size={16} strokeWidth={1.5} className="sm:size-4.5" />
                            {cartCount > 0 ? (
                                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-extrabold text-[#15110a]">
                                    {cartCount}
                                </span>
                            ) : null}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {openShopDropdown ? (
                        <motion.div
                            key="shop-dropdown"
                            className="absolute inset-x-0 top-full hidden lg:block"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={
                                reduceMotion ? undefined : shopDropdownVariants
                            }
                            onMouseEnter={openShopDropdownNow}
                            onMouseLeave={scheduleCloseShopDropdown}
                        >
                            <div className="bg-[#f5efe3] max-w-7xl mx-auto text-deep shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
                                <div className="mx-auto max-w-7xl px-8 py-10 lg:px-12">
                                    <h3 className="font-cormorant text-center text-4xl font-medium text-deep sm:text-5xl">
                                        {t("home.shopByCategory")}
                                    </h3>

                                    <motion.div
                                        className="mt-8 grid grid-cols-6 gap-4"
                                        variants={
                                            reduceMotion
                                                ? undefined
                                                : shopCardGridVariants
                                        }
                                        initial={
                                            reduceMotion ? false : "hidden"
                                        }
                                        animate={
                                            reduceMotion ? undefined : "visible"
                                        }
                                        exit={reduceMotion ? undefined : "exit"}
                                    >
                                        {translatedShopCategoryItems.map((item) => (
                                            <motion.div
                                                key={item.href}
                                                variants={
                                                    reduceMotion
                                                        ? undefined
                                                        : shopCardVariants
                                                }
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() =>
                                                        setOpenShopDropdown(
                                                            false,
                                                        )
                                                    }
                                                    className="group block"
                                                >
                                                    <div className="relative aspect-[3/4] overflow-hidden bg-[#e9e4d8]">
                                                        <div
                                                            className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.06]"
                                                            style={{
                                                                backgroundImage: `url(${item.imageUrl})`,
                                                            }}
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <p className="font-cormorant mt-3 text-center text-lg uppercase tracking-[0.16em] text-deep transition group-hover:text-gold">
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </header>

            <HeaderMenuOverlay
                open={openMenu}
                reduceMotion={reduceMotion}
                activePanel={activePanel}
                activeShopItems={activeShopItems}
                isAuthenticated={isAuthenticated}
                user={user}
                accountHref={profileHref}
                openProfileMenu={openProfileMenu}
                cartCount={cartCount}
                wishlistCount={count}
                onCloseMenu={() => setOpenMenu(false)}
                onCloseAll={closeAllOverlays}
                onCartOpen={handleCartOpen}
                onProfileTrigger={handleProfileTrigger}
                onWishlistOpen={handleWishlistOpen}
                onLogout={handleLogout}
                onActivatePanel={setActivePanel}
            />

            <HeaderSearchOverlay
                open={openSearch}
                reduceMotion={reduceMotion}
                onClose={() => setOpenSearch(false)}
            />
        </>
    );
}
