import Link from "next/link";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const translations: Record<string, any> = { en, es };

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

type CategoryTile = {
    name: string;
    label: string;
    imageUrl: string;
};

type ShopByCategoryProps = {
    categories: CategoryTile[];
    locale: string;
};

export function ShopByCategory({ categories, locale }: ShopByCategoryProps) {
    if (categories.length === 0) {
        return null;
    }

    return (
        <section className="mt-20 py-20 bg-[#EDE8DF]  ">
            <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-10">
                <div className="mb-12 px-1 ">
                    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        {getTranslation("home.ourCategories", locale)}
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                        {getTranslation("home.shopByCategory", locale)}
                    </h2>
                </div>

                <div className="grid grid-flow-col gap-2 sm:gap-4 auto-cols-[45%] overflow-x-auto sm:auto-cols-[38%] md:auto-cols-[28%] lg:auto-cols-fr lg:overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={locale === "en" ? `/shop?category=${encodeURIComponent(category.name)}` : `/${locale}/shop?category=${encodeURIComponent(category.name)}`}
                            className="group relative block aspect-[3/5] overflow-hidden bg-[#e9e4d8]"
                            aria-label={`Shop ${category.label}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${category.imageUrl})`,
                                }}
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />
                            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                                <span className="font-cormorant bg-black/45 px-5 py-2 text-2xl uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                                    {category.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
