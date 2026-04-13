"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { useWishlist } from "@/providers/WishlistProvider";
import { setPendingWishlistProduct } from "@/services/wishlist/wishlist.pending";

type WishlistToggleButtonProps = {
  productId: string;
  className?: string;
  iconOnly?: boolean;
};

export function WishlistToggleButton({ productId, className = "", iconOnly = false }: WishlistToggleButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const { isInWishlist, addItem, removeItem } = useWishlist();
  const inWishlist = isInWishlist(productId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      setPendingWishlistProduct(productId);
      const redirectPath = pathname ?? "/";
      router.push(`/login?redirect=${encodeURIComponent(redirectPath)}`);
      return;
    }

    setIsSubmitting(true);

    try {
      if (inWishlist) {
        await removeItem(productId);
      } else {
        await addItem(productId);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={(event) => void handleClick(event)}
      disabled={isSubmitting}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
      className={className || "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/90 px-3 py-2 text-sm font-bold text-[var(--deep)] shadow-sm transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:opacity-60"}
    >
      <Heart size={18} className={inWishlist ? "fill-current text-[var(--gold)]" : ""} />
      {iconOnly ? null : inWishlist ? "Wishlisted" : "Add To Wishlist"}
    </button>
  );
}
