// The localised 404, and the ONLY not-found file in this app.
//
// Placement, per node_modules/next/dist/docs/01-app/03-api-reference/
// 03-file-conventions/not-found.md: `not-found.tsx` renders when `notFound()`
// is thrown in its own segment or below, wrapped by that segment's layout.
// Sitting here means `[locale]/layout.tsx` has already run, so the request
// locale is set and `SiteShell` has supplied <html lang>, Header and Footer —
// this file renders page content only and must not add a document of its own.
//
// It covers both kinds of 404 inside the locale tree: an explicit `notFound()`
// (an unknown blog slug, or `assertLocale` rejecting a bad locale) and a URL
// that matches no route at all, which `[locale]/[...rest]/page.tsx` funnels in
// here. A `not-found.tsx` cannot export metadata, so the <title> comes from
// the locale layout's siteMetadata default; Next adds `noindex` itself for the
// 404 status.
//
// Why there is deliberately NO root `src/app/not-found.tsx`
// --------------------------------------------------------
// The docs say a root `not-found.tsx` also catches URLs unmatched anywhere in
// the app, so one was built and measured. It made things WORSE: with it in
// place /es/nonexistent/ rendered the ENGLISH copy; with it removed, Spanish.
//
// The cause is in Next's `createNotFoundLoaderTree` (see
// node_modules/next/dist/server/app-render/app-render.js): for every 404 HTML
// response Next assembles a separate tree whose page is the ROOT
// `not-found.tsx` and which drops all layouts. That extra tree renders on
// locale 404s too, and anything in it that reads next-intl resolves the config
// for the whole request — `getRequestConfig` has no request locale there, so
// it falls back to `defaultLocale` and React caches that config. The locale
// tree's own `setRequestLocale` then loses, and every message in the Spanish
// 404 comes back English.
//
// Dropping the root file leaves genuinely unmatched paths outside the locale
// tree (/admin/<unknown>/, anything with a file extension — `src/proxy.ts`
// excludes both from locale handling) on Next's built-in English 404, which is
// what they already got before this change, and admin is English-only by
// decision anyway.
//
// Known limitation, pre-existing and unchanged: because this app's root layout
// (`src/app/layout.tsx`) returns `children` and owns no <html>/<body> — the
// document comes from `SiteShell` in `[locale]/layout.tsx` and
// `admin/layout.tsx` — a 404's server-rendered HTML is Next's error shell, and
// the real tree arrives as RSC payload for the client to render. Before this
// change a 404 had no document at all. Fixing the shell itself would mean
// either `experimental.globalNotFound` (which bypasses layouts, so it cannot
// be localised from the route) or moving <html> up into the root layout, which
// would cost the per-locale `lang` attribute.

import NotFoundPanel from "@/components/shared/NotFoundPanel";

export default function LocaleNotFound() {
  return <NotFoundPanel />;
}
