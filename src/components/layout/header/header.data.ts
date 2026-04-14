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

export const shopCategoryItems: HeaderVisualLinkItem[] = [
  {
    href: "/shop?category=bracelets",
    label: "Bracelets",
    imageUrl:
      "https://images.unsplash.com/photo-1600721391689-2564bb8055de?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=earrings",
    label: "Earrings",
    imageUrl:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=necklaces",
    label: "Necklaces",
    imageUrl:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=rings",
    label: "Rings",
    imageUrl:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=pendants",
    label: "Pendants",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
  },
  {
    href: "/shop?category=sets",
    label: "Sets",
    imageUrl:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
  },
];

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