"use client";

import Link from "next/link";
import { Layers3 } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";

type AdminPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function AdminPlaceholderPage({
  eyebrow,
  title,
  description,
}: AdminPlaceholderPageProps) {
  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-6 py-16 sm:px-8">
        <section className="overflow-hidden rounded-[30px] border border-foreground/10 bg-[linear-gradient(180deg,#0a211a_0%,#092a21_55%,#0f382f_100%)] p-8 text-white shadow-[0_24px_80px_rgba(3,27,22,0.18)] sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
            <h1 className="display-font mt-4 text-4xl sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{description}</p>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-white/10 bg-white/6 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <Layers3 size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Workspace reserved for admin tools</p>
                <p className="mt-1 text-sm text-white/65">Use the products area now. Additional modules can be added here next.</p>
              </div>
            </div>

            <Link
              href="/admin/products"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428]"
            >
              Back To Products
            </Link>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}