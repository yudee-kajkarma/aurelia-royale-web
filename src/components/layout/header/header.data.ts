import { SHOP_CATEGORY_TILES } from "@/services/products/product-category";

export type HeaderLinkItem = {
  key?: string;
  href: string;
  label: string;
};

export type HeaderVisualLinkItem = HeaderLinkItem & {
  imageUrl: string;
};

// This is a plain `.ts` data module: it has no component tree and no request
// scope, so it cannot call `useTranslations` (needs a component) or
// `getTranslations` (needs a request). So storefront entries carry a stable
// `labelKey` instead of English text, and the consuming component resolves
// it against a message namespace at render time — the same split `getCategory`
// uses for blog filters. Admin entries are the exception: the admin panel is
// English-only by decision, so `ADMIN_NAV_ITEMS` keeps a literal `label` and
// is never looked up against a namespace.
export type HeaderKeyedLinkItem = {
  key?: string;
  href: string;
  labelKey: string;
};

export type HeaderVisualKeyedLinkItem = HeaderKeyedLinkItem & {
  imageUrl: string;
};

// `labelKey` resolves against the `Header` namespace (see Header.tsx /
// HeaderMenuOverlay.tsx).
export const navItems: HeaderKeyedLinkItem[] = [
  { href: "/", labelKey: "home" },
  { href: "/contact", labelKey: "contact" },
];

// Admin menu stays English by explicit product decision - do not add
// message keys for these.
export const ADMIN_NAV_ITEMS: HeaderLinkItem[] = [
  { key: "product_management", href: "/admin/products", label: "Product Management" },
  { key: "orders_all", href: "/admin/orders", label: "All Orders" },
  { key: "wishlists_all", href: "/admin/wishlists", label: "All Wishlists" },
  { key: "carts_all", href: "/admin/carts", label: "All Carts" },
  { key: "tickets_all", href: "/admin/support", label: "Support Tickets" },
];

// `labelKey` resolves against the `Header` namespace (see Header.tsx /
// HeaderMenuOverlay.tsx).
export const aboutItems: HeaderKeyedLinkItem[] = [
  { href: "/about#introduction", labelKey: "aboutIntroduction" },
  { href: "/about#what-we-do", labelKey: "aboutWhatWeDo" },
  { href: "/about#why-special", labelKey: "aboutWhySpecial" },
];

// `labelKey` here is `tile.labelKey` off `SHOP_CATEGORY_TILES`, which
// resolves against the `shopCategories` namespace (see Header.tsx).
export const shopCategoryItems: HeaderVisualKeyedLinkItem[] = SHOP_CATEGORY_TILES.map((tile) => ({
  href: `/shop?category=${encodeURIComponent(tile.queryValue)}`,
  labelKey: tile.labelKey,
  imageUrl: tile.imageUrl,
}));

export const shopEditionItems: HeaderVisualLinkItem[] = [
  {
    href: "/shop?edition=classic",
    label: "Classic",
    imageUrl:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=limited",
    label: "Limited Edition",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=rare",
    label: "Rare",
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?edition=timeless",
    label: "Timeless",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
  },
];