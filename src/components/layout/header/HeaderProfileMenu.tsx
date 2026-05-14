import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, Shield, UserRound } from "lucide-react";
import type { AuthUser } from "@/services/auth/auth.types";

type HeaderProfileMenuProps = {
  user: AuthUser;
  accountHref: string;
  reduceMotion: boolean | null;
  variant: "desktop" | "mobile" | "panel";
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
  const isPanel = variant === "panel";
  const isAdmin = user.role === "ADMIN";

  return (
    <motion.div
      className={isPanel
        ? "w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
        : isDesktop
          ? "absolute right-0 top-14 w-72 overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
          : "absolute right-0 top-12 w-[280px] rounded-[22px] border border-white/10 bg-[#08140f] p-4 text-left text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
      }
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10, scale: reduceMotion || !isDesktop ? 1 : 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : 8, scale: reduceMotion || !isDesktop ? 1 : 0.98 }}
      transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
    >
      {isDesktop || isPanel ? (
        <div className="border-b border-white/10 bg-[linear-gradient(135deg,#05241d,#0f5d47)] px-5 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Signed In</p>
          <p className="mt-2 text-base font-semibold">{user.username}</p>
          <p className="mt-1 text-sm text-white/70">{user.email}</p>
        </div>
      ) : (
        <>
          <p className="text-xs uppercase tracking-[0.16em] text-gold">My Profile</p>
          <p className="mt-2 text-base font-semibold text-white">{user.username}</p>
          <p className="mt-1 text-sm text-white/70">{user.email}</p>
        </>
      )}

      <div className={isDesktop || isPanel ? "px-4 py-4" : "mt-4"}>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
          <span className="text-white/65">Role</span>
          <span className="inline-flex items-center gap-2 font-semibold text-gold">
            <Shield size={15} />
            {user.role}
          </span>
        </div>

        <div className="mt-4 grid gap-2">
          <Link
            href={accountHref}
            className={isDesktop || isPanel
              ? "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold"
              : "inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            }
            onClick={onNavigate}
          >
            <UserRound size={16} />
            {isAdmin ? "Admin Dashboard" : "Profile"}
          </Link>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold text-[#17120a] transition hover:bg-[#b89428]"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}