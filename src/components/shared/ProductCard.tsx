import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductImage } from "./ProductImage";
import { DiscountedPrice } from "@/components/shared/DiscountedPrice";
import { WishlistToggleButton } from "@/components/wishlist/WishlistToggleButton";

type ProductCardProps = {
  name: string;
  price: number | string;
  productId?: string;
  href?: string;
  category?: string;
  imageUrl?: string;
  description?: string;
  showAddToCart?: boolean;
  compact?: boolean;
};

export function ProductCard({
  name,
  price,
  productId,
  href,
  category,
  imageUrl,
  description,
  showAddToCart = true,
  compact = false,
}: ProductCardProps) {
  return (
    <article
      className={
        compact
          ? "group relative overflow-hidden border border-black/5 bg-[#f7f7f7] pb-4 transition hover:-translate-y-0.5 hover:shadow-md"
          : "group relative rounded-2xl border border-black/5 bg-surface p-5 transition hover:-translate-y-1 hover:shadow-lg"
      }
    >
      {href ? <Link href={href} className="absolute inset-0 z-10" aria-label={`Open ${name}`} /> : null}
      {productId ? (
        <WishlistToggleButton
          productId={productId}
          iconOnly
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/90 text-deep shadow-sm transition hover:border-gold hover:text-gold disabled:opacity-60"
        />
      ) : null}

      <div
        className={
          compact
            ? "relative z-0 flex h-52 items-center justify-center overflow-hidden bg-[#f3f1ec] sm:h-56"
            : "relative z-0 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-white to-[#ecebe5]"
        }
      >
        {compact ? (
          <ProductImage src={imageUrl} alt={name} className="block h-full w-full object-cover object-center" />
        ) : category ? (
          <span className="display-font text-sm tracking-[0.3em] text-deep/45">{category}</span>
        ) : null}
        {showAddToCart ? (
          productId ? (
            <AddToCartButton
              productId={productId}
              iconOnly={false}
              className={
              compact
                ? "absolute bottom-3 z-20 inline-flex translate-y-10 items-center gap-1 bg-deep px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                : "absolute bottom-3 z-20 inline-flex translate-y-12 items-center gap-1 border border-deep/20 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-deep opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
              }
            />
          ) : null
        ) : null}
      </div>

      <div className={compact ? "px-4 pt-4" : ""}>
        <p className="relative z-0 text-center text-sm font-semibold text-deep/85">{name}</p>
        {compact && category ? <p className="relative z-0 mt-1 text-center text-xs uppercase tracking-[0.12em] text-deep/45">{category}</p> : null}
        {description ? <p className="relative z-0 text-center text-sm text-deep/60">{description}</p> : null}
        <DiscountedPrice
          value={price}
          className="relative z-0 mt-1 flex justify-center text-lg font-bold text-gold"
          discountedClassName="text-gold"
        />
      </div>
    </article>
  );
}
