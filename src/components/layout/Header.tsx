"use client";

import { AnimatePresence, useReducedMotion } from "framer-motion";
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
import { useWishlist } from "@/providers/WishlistProvider";
import { getDefaultRouteForRole } from "@/services/auth/auth.types";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [activePanel, setActivePanel] = useState<"category" | "edition">("category");
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady, logout, user } = useAuth();
  const { count } = useWishlist();

  const activeShopItems = activePanel === "category" ? shopCategoryItems : shopEditionItems;
  const accountHref = user ? getDefaultRouteForRole(user.role) : "/login";

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

  function handleProfileTrigger() {
    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      setOpenMenu(false);
      router.push("/login");
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
            <button
              type="button"
              onClick={() => setOpenSearch(true)}
              className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              aria-label="Open search"
            >
              <Search size={18} />
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={handleProfileTrigger}
                className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                aria-label={isAuthenticated ? "Open profile menu" : "Go to login"}
              >
                <UserRound size={18} />
              </button>

              <AnimatePresence>
                {openProfileMenu && isAuthenticated && user && (
                  <HeaderProfileMenu
                    user={user}
                    accountHref={accountHref}
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
            <button type="button" className="rounded-full border border-white/15 p-2 transition hover:border-[var(--gold)] hover:text-[var(--gold)]" aria-label="Shopping bag">
              <ShoppingBag size={18} />
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
        accountHref={accountHref}
        openProfileMenu={openProfileMenu}
        wishlistCount={count}
        onCloseMenu={() => setOpenMenu(false)}
        onCloseAll={closeAllOverlays}
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
