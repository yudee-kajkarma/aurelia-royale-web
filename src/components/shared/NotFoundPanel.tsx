// Server Component — no "use client".
// The body of the 404 page, rendered by `src/app/[locale]/not-found.tsx`.
// Kept as its own component so the markup stays out of the file-convention
// file, which carries the long explanation of how 404s resolve here. It sits
// inside `SiteShell`'s document (supplied by `[locale]/layout.tsx`), so it
// renders page content only — no <html>/<body> of its own.
//
// Copy lives in the `NotFound` message namespace; the home link is the
// locale-aware <Link> from "@/i18n/navigation", so on /es/… it points at /es/.

import { Home } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFoundPanel() {
  const t = await getTranslations("NotFound");

  return (
    <div className="bg-[#efefe8] text-foreground font-jost">
      <section className="relative overflow-hidden border-b border-white/5 bg-[#153f35] px-6 py-24 text-center text-[#efefe8] md:py-32">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-gold/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t("eyebrow")}
          </span>
          <h1 className="mt-4 font-cormorant text-4xl font-medium uppercase leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-jost text-base font-light leading-relaxed text-[#efefe8]/70">
            {t("body")}
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded border border-gold bg-gold px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#031b16] transition-all duration-300 hover:bg-transparent hover:text-gold"
          >
            <Home className="h-4 w-4" strokeWidth={1.75} />
            {t("backHome")}
          </Link>
        </div>
      </section>
    </div>
  );
}
