import { redirect } from "@/i18n/navigation";
import { assertLocale } from "@/i18n/locale-guard";

export default async function ShopDetailsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = assertLocale(raw);

  // Locale is passed explicitly: next-intl's wrapped `redirect()` forwards
  // its argument straight into `getPathname()`, which reads `href`/`locale`
  // off an object and has no hook to fall back on in a Server Component —
  // unlike `useRouter()` and `<Link>`, it does NOT infer the active locale
  // on its own. A bare `redirect("/shop")` would silently destructure to
  // `href: undefined` and break the redirect for every locale.
  redirect({ href: "/shop", locale });
}