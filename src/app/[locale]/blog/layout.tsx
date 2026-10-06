// Deliberately exports NO `metadata`.
//
// This layout sits inside `[locale]`, but a static `metadata` object cannot
// see the locale, so the English title/description/openGraph it used to carry
// leaked into all six locales together with a locale-less
// `alternates.canonical` of `${SITE_URL}/blog/`. Metadata merging is SHALLOW
// and last-segment-wins, so the listing page's own locale-aware
// generateMetadata happened to replace it — but `blog/[slug]/page.tsx` does
// not define `openGraph`, so every article in every locale inherited the
// English og:title/og:description and an og:url pointing at the English blog
// index instead of the article.
//
// Blog metadata is therefore single-sourced in the two generateMetadata
// functions below this layout, each of which has the real request locale.
// Do not add a `metadata` export here.
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
