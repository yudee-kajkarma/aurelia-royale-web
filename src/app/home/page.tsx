import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { BestSellingTabs } from "@/components/home/BestSellingTabs";
import { ShopByEdition } from "@/components/home/ShopByEdition";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProductImage } from "@/components/shared/ProductImage";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import nl from "@/locales/nl.json";
import de from "@/locales/de.json";
import it from "@/locales/it.json";
import {
    getAllProductFilters,
    getAllProducts,
    toProductCardModel,
} from "@/services/products/product.service";
import {
    getCategoryDisplayLabel,
    getCategoryImage,
    getPrimaryShopCategories,
    getStorefrontCategories,
} from "@/services/products/product-category";

const translations: Record<string, any> = { en, es, fr, nl, de, it };

function getTranslation(keyPath: string, locale: string): string {
    const keys = keyPath.split(".");
    let current: any = translations[locale];
    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = current[key];
        } else {
            return keyPath;
        }
    }
    return typeof current === "string" ? current : keyPath;
}

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Aurelia Royale - Luxury Jewelry Store",
  description: "Discover timeless elegance with our fine lab-grown diamond jewellery collection.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/",
  },
};

export const metadataEs: Metadata = {
  title: "Aurelia Royale - Tienda de Joyería de Lujo",
  description: "Descubra la elegancia intemporal con nuestra colección de alta joyería de diamantes cultivados en laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/",
  },
};

export const metadataFr: Metadata = {
  title: "Aurelia Royale - Joaillerie de Luxe",
  description: "Découvrez l'élégance intemporelle avec notre collection de bijoux raffinés en diamants de laboratoire.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/",
  },
};

export const metadataNl: Metadata = {
  title: "Aurelia Royale - Luxe Juwelierszaak",
  description: "Ontdek tijdloze elegantie met onze fijne collectie laboratoriumdiamanten sieraden.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/",
  },
};

export const metadataDe: Metadata = {
  title: "Aurelia Royale - Luxus-Schmuckgeschäft",
  description: "Entdecken Sie zeitlose Eleganz mit unserer Kollektion feiner laborgezüchteter Diamanten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/",
  },
};

export const metadataIt: Metadata = {
  title: "Aurelia Royale - Boutique di alta gioielleria",
  description: "Scopri l'eleganza senza tempo con la nostra collezione di alta gioielleria con diamanti coltivati in laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/",
  },
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = params.locale;
  if (locale === "de") return metadataDe;
  if (locale === "it") return metadataIt;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
}

export default async function HomePage({ searchParams }: PageProps) {
    const params = await searchParams;
    const locale = params.locale ?? "en";

    const [products, filterOptions] = await Promise.all([
        getAllProducts()
            .then((items) => items.map(toProductCardModel))
            .catch(() => []),
        getAllProductFilters().catch(() => ({
            categories: [],
            stoneTypes: [],
            colors: [],
            shapes: [],
            origins: [],
            treatments: [],
            certificates: [],
            measurements: [],
            vendors: [],
            tags: [],
            priceRange: { min: 0, max: 0 },
            ratingRange: { min: 0, max: 0 },
            caratRange: { min: 0, max: 0 },
        })),
    ]);

    const featuredProducts = products.slice(0, 4);

    const localizeHref = (href: string): string => {
        if (locale !== "en") {
            if (href.startsWith(`/${locale}`) || href.startsWith("http")) return href;
            return href === "/" ? `/${locale}` : `/${locale}${href}`;
        }
        return href;
    };

    const categoryTiles = getPrimaryShopCategories(
        filterOptions.categories,
    ).map((category) => {
        const rawLabel = getCategoryDisplayLabel(category);
        const translationKey = `categories.${category.toLowerCase()}`;
        const translatedLabel = getTranslation(translationKey, locale);
        return {
            name: category,
            label: translatedLabel !== translationKey ? translatedLabel : rawLabel,
            imageUrl: getCategoryImage(category),
        };
    });

    return (
        <>
            <Hero />

            <div className=" overflow-x-clip ">
                <section className="mx-auto max-w-7xl mt-14 px-4 py-6 sm:px-6 sm:py-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                                <span
                                    className="inline-block h-px w-8 bg-gold"
                                    aria-hidden="true"
                                />
                                {getTranslation("home.findNewIn", locale)}
                            </p>
                            <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                                {getTranslation("home.topTrending", locale)}
                            </h2>
                        </div>
                        <Link
                            href={localizeHref("/shop")}
                            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold underline decoration-[1px] underline-offset-[6px] transition hover:text-[#a8862c]"
                        >
                            {getTranslation("home.viewAllPieces", locale)}
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                        {featuredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={localizeHref(`/shop-details/${product.slug}`)}
                                className="group block"
                            >
                                <div className="aspect-square overflow-hidden ">
                                    <ProductImage
                                        src={product.imageUrl}
                                        alt={product.title}
                                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="mt-5">
                                    {product.category ? (
                                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6b6b6b]">
                                            {product.category}
                                        </p>
                                    ) : null}
                                    <p className="font-jost mt-2 text-md font-semibold tracking-[0.04em] text-[#111]">
                                        {product.title}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <ShopByCategory categories={categoryTiles} locale={locale} />

                <ShopByEdition products={products} />
            </div>

            <TestimonialSlider />

            <NewsletterSection />
        </>
    );
}
