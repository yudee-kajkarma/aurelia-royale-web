"use client";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { useAuth } from "@/providers/AuthProvider";

export default function AccountPage() {
  const { user } = useAuth();

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-5xl px-6 py-16 sm:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[var(--foreground)]/10 bg-white/80 shadow-[0_20px_80px_rgba(3,27,22,0.08)]">
          <div className="bg-[linear-gradient(135deg,#02241d,#0d5c47)] px-8 py-10 text-white sm:px-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">User Space</p>
            <h1 className="display-font mt-4 text-4xl sm:text-5xl">Welcome back, {user?.username}</h1>
            <p className="mt-4 max-w-2xl text-white/78">
              Your account session is active. This page is available to both USER and ADMIN roles.
            </p>
          </div>

          <div className="grid gap-4 px-8 py-8 sm:grid-cols-2 sm:px-10">
            <section className="rounded-3xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Profile</p>
              <dl className="mt-4 space-y-3 text-sm text-[var(--foreground)]/88">
                <div>
                  <dt className="font-semibold">Email</dt>
                  <dd>{user?.email}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Role</dt>
                  <dd>{user?.role}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Status</dt>
                  <dd>{user?.status}</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-3xl border border-[var(--foreground)]/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Session</p>
              <p className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                Signed in since {user ? new Date(user.createdAt).toLocaleString() : "-"}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/72">
                Use the header profile menu to inspect your details or sign out from any page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}