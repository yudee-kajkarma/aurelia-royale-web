import { SHOP_CATEGORY_TILES } from "@/services/products/product-category";

export type HeaderLinkItem = {
  key?: string;
  href: string;
  label: string;
};

export type HeaderVisualLinkItem = HeaderLinkItem & {
  imageUrl: string;
};

export const navItems: HeaderLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export const ADMIN_NAV_ITEMS: HeaderLinkItem[] = [
  { key: "product_management", href: "/admin/products", label: "Product Management" },
  { key: "orders_all", href: "/admin/orders", label: "All Orders" },
  { key: "wishlists_all", href: "/admin/wishlists", label: "All Wishlists" },
  { key: "carts_all", href: "/admin/carts", label: "All Carts" },
  { key: "tickets_all", href: "/admin/support", label: "Support Tickets" },
];

export const aboutItems: HeaderLinkItem[] = [
  { href: "/about#introduction", label: "Introduction" },
  { href: "/about#what-we-do", label: "What We Do" },
  { href: "/about#why-special", label: "Why Our Design is Special" },
];

export const shopCategoryItems: HeaderVisualLinkItem[] = SHOP_CATEGORY_TILES.map((tile) => ({
  href: `/shop?category=${encodeURIComponent(tile.queryValue)}`,
  label: tile.label,
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