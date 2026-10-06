"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ShoppingBag } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { useCart } from "@/providers/CartProvider";
import { setPendingCartItem } from "@/services/cart/cart.pending";
import { notifyError } from "@/utils/notify";

type AddToCartButtonProps = {
  productId: string;
  quantity?: number;
  className?: string;
  iconOnly?: boolean;
  label?: string;
  redirectToCart?: boolean;
};

export function AddToCartButton({
  productId,
  quantity = 1,
  className = "",
  iconOnly = false,
  label,
  redirectToCart = false,
}: AddToCartButtonProps) {
  const t = useTranslations("AddToCartButton");
  const buttonLabel = label ?? t("defaultLabel");
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const { addItem } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      setPendingCartItem({ productId, quantity });
      const redirectPath = pathname ?? "/cart";
      router.push(`/login?redirect=${encodeURIComponent(redirectPath)}`);
      return;
    }

    setIsSubmitting(true);

    try {
      await addItem(productId, quantity);

      if (redirectToCart) {
        router.push("/cart");
      }
    } catch (error) {
      notifyError(error, t("unableToAddItem"));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={(event) => void handleClick(event)}
      disabled={isSubmitting}
      className={className || "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/90 px-3 py-2 text-sm font-bold text-deep shadow-sm transition hover:border-gold hover:text-gold disabled:opacity-60"}
      aria-label={buttonLabel}
    >
      {/* <ShoppingBag size={18} /> */}
      {iconOnly ? null : isSubmitting ? t("adding") : buttonLabel}
    </button>
  );
}
