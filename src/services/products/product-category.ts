const DEFAULT_CATEGORY_IMAGE = "/category/Necklace.png";

type ShopCategoryTile = {
  labelKey: string;
  queryValue: string;
  imageUrl: string;
  aliases: string[];
};

export const SHOP_CATEGORY_LIMIT = 6;

// Categories intentionally removed from the storefront. Backend data may still
// return these, so they are filtered out everywhere categories surface.
const EXCLUDED_CATEGORY_ALIASES = ["watches", "watch"];

export const SHOP_CATEGORY_TILES: ShopCategoryTile[] = [
  {
    labelKey: "bracelets",
    queryValue: "bracelets",
    imageUrl: "/category/Bracelete.png",
    aliases: ["bracelets", "bracelet"],
  },
  {
    labelKey: "earrings",
    queryValue: "earrings",
    imageUrl: "/category/Earring.png",
    aliases: ["earrings", "earring", "ear rings", "ear ring"],
  },
  {
    labelKey: "necklaces",
    queryValue: "necklaces",
    imageUrl: "/category/Necklace.png",
    aliases: ["necklaces", "necklace"],
  },
  {
    labelKey: "rings",
    queryValue: "rings",
    imageUrl: "/category/Ring.png",
    aliases: ["rings", "ring"],
  },
  {
    labelKey: "pendants",
    queryValue: "pendants",
    imageUrl: "/category/Pendant.png",
    aliases: ["pendants", "pendant"],
  },
  {
    labelKey: "sets",
    queryValue: "sets",
    imageUrl: "/category/SET.png",
    aliases: ["sets", "set", "necklace + earring", "necklace+earring", "matching sets"],
  },
];

function normalizeCategory(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function isExcludedCategory(value: string) {
  const normalizedValue = normalizeCategory(value);

  return EXCLUDED_CATEGORY_ALIASES.some((alias) => normalizeCategory(alias) === normalizedValue);
}

function getTileByCategory(value: string) {
  const normalizedValue = normalizeCategory(value);

  return SHOP_CATEGORY_TILES.find((tile) => tile.aliases.some((alias) => normalizeCategory(alias) === normalizedValue));
}

export function resolveCategoryValue(value: string | undefined, availableCategories: string[]) {
  if (!value || isExcludedCategory(value)) {
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

// Drops storefront-excluded categories (e.g. watches) while preserving order.
// Use for any UI that lists the full set of categories rather than the curated tiles.
export function getStorefrontCategories(availableCategories: string[]) {
  return availableCategories.filter((category) => !isExcludedCategory(category));
}

export function getPrimaryShopCategories(availableCategories: string[]) {
  const allowedCategories = availableCategories.filter((category) => !isExcludedCategory(category));
  const selected: string[] = [];

  SHOP_CATEGORY_TILES.forEach((tile) => {
    const match = allowedCategories.find((category) => tile.aliases.some((alias) => normalizeCategory(alias) === normalizeCategory(category)));

    if (match && !selected.some((item) => normalizeCategory(item) === normalizeCategory(match))) {
      selected.push(match);
    }
  });

  allowedCategories.forEach((category) => {
    if (selected.length >= SHOP_CATEGORY_LIMIT) {
      return;
    }

    if (!selected.some((item) => normalizeCategory(item) === normalizeCategory(category))) {
      selected.push(category);
    }
  });

  return selected.slice(0, SHOP_CATEGORY_LIMIT);
}

export function getCategoryLabelKey(category: string): string {
  return getTileByCategory(category)?.labelKey ?? category;
}

export function getCategoryImage(category: string) {
  return getTileByCategory(category)?.imageUrl ?? DEFAULT_CATEGORY_IMAGE;
}