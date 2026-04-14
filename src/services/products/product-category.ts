const DEFAULT_CATEGORY_IMAGE = "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/necklace.webp";

type ShopCategoryTile = {
  label: string;
  queryValue: string;
  imageUrl: string;
  aliases: string[];
};

export const SHOP_CATEGORY_LIMIT = 6;

export const SHOP_CATEGORY_TILES: ShopCategoryTile[] = [
  {
    label: "Bracelets",
    queryValue: "bracelets",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/bracelet.webp",
    aliases: ["bracelets", "bracelet"],
  },
  {
    label: "Earrings",
    queryValue: "earrings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/ear-ring.webp",
    aliases: ["earrings", "earring", "ear rings", "ear ring"],
  },
  {
    label: "Necklaces",
    queryValue: "necklaces",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/necklace.webp",
    aliases: ["necklaces", "necklace"],
  },
  {
    label: "Rings",
    queryValue: "rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/ring.webp",
    aliases: ["rings", "ring"],
  },
  {
    label: "Pendants",
    queryValue: "pendants",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/necklace.webp",
    aliases: ["pendants", "pendant"],
  },
  {
    label: "Sets",
    queryValue: "sets",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/nacklace.png",
    aliases: ["sets", "set", "necklace + earring", "necklace+earring", "matching sets"],
  },
];

function normalizeCategory(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function getTileByCategory(value: string) {
  const normalizedValue = normalizeCategory(value);

  return SHOP_CATEGORY_TILES.find((tile) => tile.aliases.some((alias) => normalizeCategory(alias) === normalizedValue));
}

export function resolveCategoryValue(value: string | undefined, availableCategories: string[]) {
  if (!value) {
    return null;
  }

  const normalizedValue = normalizeCategory(value);
  const exactMatch = availableCategories.find((category) => normalizeCategory(category) === normalizedValue);

  if (exactMatch) {
    return exactMatch;
  }

  const matchingTile = SHOP_CATEGORY_TILES.find((tile) => tile.aliases.some((alias) => normalizeCategory(alias) === normalizedValue));

  if (!matchingTile) {
    return null;
  }

  return availableCategories.find((category) => matchingTile.aliases.some((alias) => normalizeCategory(alias) === normalizeCategory(category))) ?? null;
}

export function getPrimaryShopCategories(availableCategories: string[]) {
  const selected: string[] = [];

  SHOP_CATEGORY_TILES.forEach((tile) => {
    const match = availableCategories.find((category) => tile.aliases.some((alias) => normalizeCategory(alias) === normalizeCategory(category)));

    if (match && !selected.some((item) => normalizeCategory(item) === normalizeCategory(match))) {
      selected.push(match);
    }
  });

  availableCategories.forEach((category) => {
    if (selected.length >= SHOP_CATEGORY_LIMIT) {
      return;
    }

    if (!selected.some((item) => normalizeCategory(item) === normalizeCategory(category))) {
      selected.push(category);
    }
  });

  return selected.slice(0, SHOP_CATEGORY_LIMIT);
}

export function getCategoryDisplayLabel(category: string) {
  return getTileByCategory(category)?.label ?? titleCase(category);
}

export function getCategoryImage(category: string) {
  return getTileByCategory(category)?.imageUrl ?? DEFAULT_CATEGORY_IMAGE;
}