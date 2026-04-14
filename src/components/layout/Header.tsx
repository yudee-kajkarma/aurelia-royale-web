"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HeaderLogo } from "@/components/layout/header/HeaderLogo";
import { HeaderMenuOverlay } from "@/components/layout/header/HeaderMenuOverlay";
import { HeaderProfileMenu } from "@/components/layout/header/HeaderProfileMenu";
import { HeaderSearchOverlay } from "@/components/layout/header/HeaderSearchOverlay";
import {
  shopCategoryItems,
  shopEditionItems,
} from "@/components/layout/header/header.data";
import { useAuth } from "@/providers/AuthProvider";
import { useCart } from "@/providers/CartProvider";
import { useWishlist } from "@/providers/WishlistProvider";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [activePanel, setActivePanel] = useState<"category" | "edition">("category");
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady, logout, user } = useAuth();
  const { count: cartCount } = useCart();
  const { count } = useWishlist();

  const activeShopItems = activePanel === "category" ? shopCategoryItems : shopEditionItems;
  const profileHref = user ? "/profile" : "/login";

  function closeAllOverlays() {
    setOpenMenu(false);
    setOpenSearch(false);
    setOpenProfileMenu(false);
  }

  async function handleLogout() {
    await logout();
    closeAllOverlays();
    router.push("/");
  }

  function handleGuestNavigate(href: string) {
    closeAllOverlays();
    router.push(href);
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
      router.push(`/login?redirect=${encodeURIComponent(redirectPath === "/login" ? wishlistPath : wishlistPath)}`);
      return;
    }

    closeAllOverlays();
    router.push(wishlistPath);
  }

  function handleCartOpen() {
    const cartPath = "/cart";

    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      closeAllOverlays();
      router.push(`/login?redirect=${encodeURIComponent(cartPath)}`);
      return;
    }

    closeAllOverlays();
    router.push(cartPath);
  }

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[linear-gradient(90deg,#020202,#0a372f)] text-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setOpenMenu(true)}
            className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <HeaderLogo />

          <div className="flex items-center gap-2">
            {/* <button
              type="button"
              onClick={() => setOpenSearch(true)}
              className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Open search"
            >
              <Search size={18} />
            </button> */}
            <div className="relative">
              <button
                type="button"
                onClick={handleProfileTrigger}
                className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label={isAuthenticated ? "Open profile menu" : "Open account menu"}
              >
                <UserRound size={18} />
              </button>

              <AnimatePresence>
                {openProfileMenu && !isAuthenticated && isReady && (
                  <motion.div
                    className="absolute right-0 top-14 w-64 overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion ? 1 : 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: reduceMotion ? 1 : 0.98 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Welcome</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">Sign in to access your profile, orders, wishlist, and checkout history.</p>

                    <div className="mt-5 grid gap-2">
                      <button
                        type="button"
                        onClick={() => handleGuestNavigate("/login")}
                        className="inline-flex items-center justify-center rounded-2xl bg-[var(--gold)] px-4 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428]"
                      >
                        Login
                      </button>
                      <button
                        type="button"
                        onClick={() => handleGuestNavigate("/register")}
                        className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                      >
                        Register
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
                    onNavigate={() => setOpenProfileMenu(false)}
                    onLogout={handleLogout}
                  />
                )}
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={handleWishlistOpen}
              className="relative rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Wishlist"
            >
              <Heart size={18} />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[10px] font-extrabold text-[#15110a]">
                {count}
              </span>
            </button>
            <button type="button" onClick={handleCartOpen} className="relative rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]" aria-label="Shopping bag">
              <ShoppingBag size={18} />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[10px] font-extrabold text-[#15110a]">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>

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
