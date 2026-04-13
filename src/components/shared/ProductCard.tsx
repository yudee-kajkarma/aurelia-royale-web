import { ShoppingBag } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
  category?: string;
  imageUrl?: string;
  description?: string;
  showAddToCart?: boolean;
  compact?: boolean;
};

export function ProductCard({
  name,
  price,
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
          ? "group border border-black/5 bg-[#f7f7f7] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
          : "group rounded-2xl border border-black/5 bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:shadow-lg"
      }
    >
      <div
        className={
          compact
            ? "relative flex h-44 items-center justify-center overflow-hidden bg-[#f9f9f9] sm:h-48"
            : "relative flex h-48 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-white to-[#ecebe5]"
        }
      >
        {compact ? (
          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat"
            style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
            aria-hidden="true"
          />
        ) : category ? (
          <span className="display-font text-sm tracking-[0.3em] text-[var(--deep)]/45">{category}</span>
        ) : null}
        {showAddToCart ? (
          <button
            className={
              compact
                ? "absolute bottom-3 inline-flex translate-y-10 items-center gap-1 bg-[var(--deep)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                : "absolute bottom-3 inline-flex translate-y-12 items-center gap-1 border border-[var(--deep)]/20 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--deep)] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
            }
          >
            <ShoppingBag size={12} />
            Add to Cart
          </button>
        ) : null}
      </div>

      <p className="mt-4 text-center text-sm font-semibold text-[var(--deep)]/85">{name}</p>
      {compact && category ? <p className="mt-1 text-center text-xs uppercase tracking-[0.12em] text-[var(--deep)]/45">{category}</p> : null}
      {description ? <p className="text-center text-sm text-[var(--deep)]/60">{description}</p> : null}
      <p className="text-center text-lg font-bold text-[var(--gold)]">{price}</p>
    </article>
  );
}
