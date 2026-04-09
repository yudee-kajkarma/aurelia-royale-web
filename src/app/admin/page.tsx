"use client";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { useAuth } from "@/providers/AuthProvider";

export default function AdminPage() {
  const { user } = useAuth();

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[var(--foreground)]/10 bg-[#07150f] text-white shadow-[0_20px_80px_rgba(3,27,22,0.18)]">
          <div className="grid gap-8 px-8 py-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">Admin Control</p>
              <h1 className="display-font mt-4 text-4xl sm:text-5xl">Administrative Access Verified</h1>
              <p className="mt-4 max-w-2xl text-white/72">
                This page is restricted to ADMIN accounts. Standard USER accounts are redirected away automatically.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Current Admin</p>
              <p className="mt-4 text-2xl font-semibold">{user?.username}</p>
              <p className="mt-2 text-sm text-white/70">{user?.email}</p>
              <p className="mt-5 inline-flex rounded-full border border-[var(--gold)]/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                {user?.role}
              </p>
            </div>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}