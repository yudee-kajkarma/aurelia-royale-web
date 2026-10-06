"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/providers/AuthProvider";
import {
  getDefaultRouteForRole,
  type UserRole,
} from "@/services/auth/auth.types";

type AuthGuardProps = {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
};

/**
 * Returns true if `actual` satisfies the `allowed` list. SUPER_ADMIN is a
 * superset of ADMIN — a page that lists `["ADMIN"]` is also accessible to
 * a SUPER_ADMIN without every caller having to spell that out.
 */
function isRoleAllowed(allowed: UserRole[], actual: UserRole): boolean {
  if (allowed.includes(actual)) {
    return true;
  }
  if (actual === "SUPER_ADMIN" && allowed.includes("ADMIN")) {
    return true;
  }
  return false;
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const t = useTranslations("AuthGuard");
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady, user } = useAuth();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      const redirectPath = pathname ? `?redirect=${encodeURIComponent(pathname)}` : "";
      router.replace(`/login${redirectPath}`);
      return;
    }

    if (allowedRoles && user && !isRoleAllowed(allowedRoles, user.role)) {
      router.replace(getDefaultRouteForRole(user.role));
    }
  }, [allowedRoles, isAuthenticated, isReady, pathname, router, user]);

  if (!isReady || !isAuthenticated) {
    return (
      <main className="grid min-h-[60vh] place-items-center px-6 py-16 text-center">
        <div>
          <p className="display-font text-3xl text-foreground">{t("checkingAccess")}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-foreground/65">
            {t("preparingSession")}
          </p>
        </div>
      </main>
    );
  }

  if (allowedRoles && user && !isRoleAllowed(allowedRoles, user.role)) {
    return null;
  }

  return <>{children}</>;
}