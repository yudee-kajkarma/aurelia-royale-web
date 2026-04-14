import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, LifeBuoy, LogOut, ReceiptText, Shield, UserRound } from "lucide-react";
import type { AuthUser } from "@/services/auth/auth.types";

type HeaderProfileMenuProps = {
  user: AuthUser;
  accountHref: string;
  reduceMotion: boolean | null;
  variant: "desktop" | "mobile";
  onNavigate: () => void;
  onLogout: () => void | Promise<void>;
};

export function HeaderProfileMenu({
  user,
  accountHref,
  reduceMotion,
  variant,
  onNavigate,
  onLogout,
}: HeaderProfileMenuProps) {
  const isDesktop = variant === "desktop";

  return (
    <motion.div
      className={isDesktop
        ? "absolute right-0 top-14 w-72 overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
        : "absolute right-0 top-12 w-[280px] rounded-[22px] border border-white/10 bg-[#08140f] p-4 text-left text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
      }
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion || !isDesktop ? 1 : 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: reduceMotion || !isDesktop ? 1 : 0.98 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
    >
      {isDesktop ? (
        <div className="border-b border-white/10 bg-[linear-gradient(135deg,#05241d,#0f5d47)] px-5 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">Signed In</p>
          <p className="mt-2 text-base font-semibold">{user.username}</p>
          <p className="mt-1 text-sm text-white/70">{user.email}</p>
        </div>
      ) : (
        <>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">My Profile</p>
          <p className="mt-2 text-base font-semibold text-white">{user.username}</p>
          <p className="mt-1 text-sm text-white/70">{user.email}</p>
        </>
      )}

      <div className={isDesktop ? "px-4 py-4" : "mt-4"}>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
          <span className="text-white/65">Role</span>
          <span className="inline-flex items-center gap-2 font-semibold text-[var(--gold)]">
            <Shield size={15} />
            {user.role}
          </span>
        </div>

        <div className="mt-4 grid gap-2">
          <Link
            href={accountHref}
            className={isDesktop
              ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              : "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }
            onClick={onNavigate}
          >
            <UserRound size={16} />
            Profile
          </Link>
          <Link
            href="/orders"
            className={isDesktop
              ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              : "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }
            onClick={onNavigate}
          >
            <ReceiptText size={16} />
            My Orders
          </Link>
          <Link
            href="/payments/history"
            className={isDesktop
              ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              : "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }
            onClick={onNavigate}
          >
            <CreditCard size={16} />
            Payment History
          </Link>
          <Link
            href="/tickets"
            className={isDesktop
              ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
              : "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            }
            onClick={onNavigate}
          >
            <LifeBuoy size={16} />
            My Tickets
          </Link>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--gold)] px-4 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428]"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}