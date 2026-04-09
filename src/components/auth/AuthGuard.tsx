"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import {
  getDefaultRouteForRole,
  type UserRole,
} from "@/services/auth/auth.types";

type AuthGuardProps = {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
};

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
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

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
      router.replace(getDefaultRouteForRole(user.role));
    }
  }, [allowedRoles, isAuthenticated, isReady, pathname, router, user]);

  if (!isReady || !isAuthenticated) {
    return (
      <main className="grid min-h-[60vh] place-items-center px-6 py-16 text-center">
        <div>
          <p className="display-font text-3xl text-[var(--foreground)]">Checking access</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--foreground)]/65">
            Preparing your session
          </p>
        </div>
      </main>
    );
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}