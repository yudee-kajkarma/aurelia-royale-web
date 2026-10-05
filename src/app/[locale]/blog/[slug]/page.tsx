import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DynamicArticle from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { routing } from "@/i18n/routing";
import { assertLocale } from "@/i18n/locale-guard";
import { BLOG_SLUGS } from "@/lib/blogs/registry";
import { loadBlogContent } from "@/lib/blogs/load";
import { blogPathFor, blogUrl } from "@/lib/blogs/content";
import { localeAlternates } from "@/lib/i18n/paths";
import { buildBlogSchema } from "@/lib/blogs/schema";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        BLOG_SLUGS.map((slug) => ({ locale, slug })),
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: raw, slug } = await params;
    const locale = assertLocale(raw);
    const content = await loadBlogContent(slug, locale);
    if (!content) return {};

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        alternates: {
            canonical: blogUrl(slug, locale),
            languages: localeAlternates(blogPathFor(slug)),
        },
        robots: { index: true, follow: true },
    };
}

export default async function BlogArticlePage({ params }: PageProps) {
    const { locale: raw, slug } = await params;
    const locale = assertLocale(raw);
    setRequestLocale(locale);

    const content = await loadBlogContent(slug, locale);
    if (!content) notFound();

    const tCategories = await getTranslations("blogCategories");
    const published = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(content.datePublished));
    const tBlog = await getTranslations("BlogArticle");

    return (
        <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(buildBlogSchema(content, slug, locale)),
                }}
            />

            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                        {tCategories(content.category)}
                    </span>
                    <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
                        {content.title}
                    </h1>
                    <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
                        {content.subtitle
                            ? `${content.subtitle} • ${tBlog("published", { date: published })}`
                            : tBlog("published", { date: published })}
                    </p>
                </div>
            </section>

            <DynamicArticle sections={content.sections} />
            <RelatedArticles currentSlug={slug} />
            <NewsletterSection />
        </main>
    );
}
