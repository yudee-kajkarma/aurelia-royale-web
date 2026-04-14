"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthGuard } from "@/components/auth/AuthGuard";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/products");
  }, [router]);

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto grid min-h-[60vh] max-w-6xl place-items-center px-6 py-16 sm:px-8">
        <div className="text-center">
          <p className="display-font text-3xl text-[var(--foreground)]">Opening products workspace</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--foreground)]/65">Redirecting admin session</p>
        </div>
      </main>
    </AuthGuard>
  );
}