// Funnels every unmatched URL inside the locale tree into the localised 404.
//
// Without this route, /es/nonexistent/ matches no segment under `[locale]` at
// all, so Next never enters the locale tree and the 404 falls through to the
// app-wide fallback — an English page for a Spanish visitor. This catch-all
// matches instead (and only ever matches last: static and dynamic segments
// both take priority over a catch-all, so /es/blog/, /es/blog/<slug>/ and
// every other real route are untouched), then throws `notFound()` so the
// nearest boundary, `[locale]/not-found.tsx`, renders in the request locale.
//
// No `generateStaticParams`: there is nothing to enumerate, so the route stays
// server-rendered on demand and prerenders no pages.

import { notFound } from "next/navigation";

export default function LocaleCatchAll() {
  notFound();
}
