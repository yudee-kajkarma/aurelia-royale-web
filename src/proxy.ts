import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);

  // Match locale prefixes such as /es, /fr, /nl, /de, or /it
  const localeMatch = pathname.match(/^\/(es|fr|nl|de|it)(\/.*)?$/);
  if (localeMatch) {
    const lang = localeMatch[1];
    let targetPath = localeMatch[2] || "/";

    requestHeaders.set("x-locale", lang);

    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    url.searchParams.set("locale", lang);
    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      }
    });
  }

  requestHeaders.set("x-locale", "en");
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}

export const middleware = proxy;

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. api (API routes)
     * 2. _next (Next.js internals like static files, images, etc.)
     * 3. Static files in the public folder (e.g. favicon.ico, images, robots.txt)
     */
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|icon.png|logo.png|manifest.json|robots.txt).*)",
  ],
};
