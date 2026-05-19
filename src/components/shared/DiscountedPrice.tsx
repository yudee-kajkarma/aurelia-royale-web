"use client";

import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useDiscount } from "@/services/family/useDiscount";

type DiscountedPriceProps = {
  value: number | string;
  className?: string;
  originalClassName?: string;
  discountedClassName?: string;
};

function toNumber(value: number | string): number | null {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const trimmed = value.trim().replace(/^\$/, "");
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

/**
 * Renders the user's discounted price next to a strikethrough original.
 * Falls back to a plain price when the user is signed out or has no discount.
 */
export function DiscountedPrice({
  value,
  className = "",
  originalClassName = "text-deep/45 line-through",
  discountedClassName = "",
}: DiscountedPriceProps) {
  const { discountPercent } = useDiscount();
  const numericPrice = toNumber(value);

  if (!discountPercent || numericPrice === null) {
    return <PriceDisplay value={value} className={className} />;
  }

  const discountedPrice = numericPrice * (1 - discountPercent / 100);

  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <PriceDisplay value={numericPrice} className={`text-sm ${originalClassName}`} />
      <PriceDisplay value={discountedPrice} className={discountedClassName} />
    </span>
  );
}
