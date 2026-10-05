import type { ArticleSection } from "@/components/shared/DynamicArticle";
import type { Locale } from "@/i18n/routing";
import { localePath, localeUrl } from "@/lib/i18n/paths";

/** The shape of content/blogs/<slug>/<locale>.json, as emitted by extract-blogs.mjs. */
export type BlogContent = {
    metaTitle: string;
    metaDescription: string;
    /** Key into the `blogCategories` message namespace. */
    category: string;
    title: string;
    subtitle?: string;
    /** ISO date; formatted per locale at render time. */
    datePublished: string;
    dateModified: string;
    sections: ArticleSection[];
};

export const blogPathFor = (slug: string) => `/blog/${slug}`;

export const blogPath = (slug: string, locale: Locale) =>
    localePath(locale, blogPathFor(slug));

export const blogIndexPath = (locale: Locale) => localePath(locale, "/blog");

export const blogUrl = (slug: string, locale: Locale) =>
    localeUrl(locale, blogPathFor(slug));

export const blogIndexUrl = (locale: Locale) => localeUrl(locale, "/blog");
