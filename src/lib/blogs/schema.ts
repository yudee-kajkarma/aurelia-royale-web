import type { ArticleSection, FaqItem } from "@/components/shared/DynamicArticle";
import { SITE_NAME, SITE_URL } from "@/config/site";
import type { Locale } from "@/i18n/routing";
import { localeUrl } from "@/lib/i18n/paths";
import { blogIndexUrl, blogUrl, type BlogContent } from "./content";

/**
 * Gather every FAQ item from a blog's own `faq` content blocks.
 *
 * The 99 blogs keep their FAQs inside `articleSections`, so this is the single
 * source for both the rendered accordion and the FAQPage structured data. The
 * old handwritten schemaMarkup duplicated this text in 62 files, which is
 * exactly the drift this removes.
 */
export function collectFaqs(sections: ArticleSection[]): FaqItem[] {
    const out: FaqItem[] = [];
    for (const section of sections) {
        for (const block of section.content) {
            if (block.type === "faq") out.push(...block.items);
        }
    }
    return out;
}

/** First image block in the article, used as the page's primary image. */
function primaryImage(sections: ArticleSection[]) {
    for (const section of sections) {
        for (const block of section.content) {
            if (block.type === "image") return block;
        }
    }
    return undefined;
}

export function buildBlogSchema(
    content: BlogContent,
    slug: string,
    locale: Locale,
): object {
    const pageUrl = blogUrl(slug, locale);
    const homeUrl = localeUrl(locale, "/");
    const image = primaryImage(content.sections);
    const faqs = collectFaqs(content.sections);

    const graph: Array<Record<string, unknown>> = [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "ImageObject",
            "@id": `${pageUrl}#primaryimage`,
            url: image ? `${SITE_URL}${image.src}` : `${SITE_URL}/icon.png`,
            caption: image?.caption ?? image?.alt ?? content.title,
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: content.title,
            inLanguage: locale,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            datePublished: content.datePublished,
            dateModified: content.dateModified,
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#article`,
            headline: content.title,
            description: content.metaDescription,
            image: { "@id": `${pageUrl}#primaryimage` },
            inLanguage: locale,
            datePublished: content.datePublished,
            dateModified: content.dateModified,
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
                { "@type": "ListItem", position: 2, name: "Blog", item: blogIndexUrl(locale) },
                { "@type": "ListItem", position: 3, name: content.title, item: pageUrl },
            ],
        },
    ];

    if (faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        });
    }

    return { "@context": "https://schema.org", "@graph": graph };
}
