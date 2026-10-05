// scripts/i18n/lib/blog-categories.mjs

/**
 * Hero eyebrow text -> `blogCategories` message key.
 *
 * Keys are the entity-DECODED eyebrow strings. Counts are from the 99 existing
 * blog files; "Certification & Diamond Quality" and "Certification and Diamond
 * Quality" are the same category written two ways and share a key.
 */
export const BLOG_CATEGORY_KEYS = {
    "Lab-Grown Diamond Education": "labGrownDiamondEducation",        // 67
    "Coloured Stones and Diamonds": "colouredStonesAndDiamonds",      // 10
    "Lab-Grown Diamond Care": "labGrownDiamondCare",                  //  9
    "Certification and Diamond Quality": "certificationAndDiamondQuality", // 4
    "Certification & Diamond Quality": "certificationAndDiamondQuality",    // 3
    "Buying Lab-Grown Diamond Jewellery": "buyingLabGrownDiamondJewellery", // 4
    "Product-Category Guides": "productCategoryGuides",               //  1
    "Jewellery Care and Maintenance": "jewelleryCareAndMaintenance",  //  1
};

/** English display label per key, for `messages/en.json` -> blogCategories. */
export const BLOG_CATEGORY_LABELS = {
    labGrownDiamondEducation: "Lab-Grown Diamond Education",
    colouredStonesAndDiamonds: "Coloured Stones and Diamonds",
    labGrownDiamondCare: "Lab-Grown Diamond Care",
    certificationAndDiamondQuality: "Certification and Diamond Quality",
    buyingLabGrownDiamondJewellery: "Buying Lab-Grown Diamond Jewellery",
    productCategoryGuides: "Product-Category Guides",
    jewelleryCareAndMaintenance: "Jewellery Care and Maintenance",
};
