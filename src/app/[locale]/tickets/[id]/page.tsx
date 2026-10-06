"use client";

import { useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { MessageSquareText, SendHorizonal } from "lucide-react";
import { toast } from "sonner";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ticketService } from "@/services/tickets/ticket.service";
import type { Ticket } from "@/services/tickets/ticket.types";
import { notifyError } from "@/utils/notify";

const TICKET_DATE_FORMAT_OPTIONS = {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
} as const;

// Looks up the translated label for a raw status/priority/category value,
// falling back to the untranslated value itself (interpolated) for anything
// outside the known set — mirrors `resolveCategoryLabel` for `shopCategories`.
// The raw value used for styling/comparisons elsewhere is never altered.
function resolveEnumLabel(
  t: ReturnType<typeof useTranslations>,
  scope: "status" | "priority" | "category",
  rawValue: string,
) {
  const key = `${scope}.${rawValue.toLowerCase()}`;
  return t.has(key) ? t(key) : t(`${scope}.fallback`, { status: rawValue });
}

function getStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "open":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "closed":
      return "bg-zinc-100 text-zinc-700 border-zinc-200";
    default:
      return "bg-amber-50 text-amber-700 border-amber-200";
  }
}

export default function TicketDetailPage() {
  const t = useTranslations("TicketDetailPage");
  const tToasts = useTranslations("Toasts");
  const format = useFormatter();
  const params = useParams<{ id: string | string[] }>();
  const ticketId = typeof params.id === "string" ? params.id : "";
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const [reply, setReply] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function loadTicket() {
    setIsLoading(true);

    try {
      const response = await ticketService.getTicketById(ticketId);
      setTicket(response);
      setLoadFailed(false);
    } catch (loadError) {
      setTicket(null);
      setLoadFailed(true);
      notifyError(loadError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!ticketId) {
      return;
    }

    void loadTicket();
  }, [ticketId]);

  async function handleReplySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!reply.trim()) {
      toast.error(tToasts("ticketReplyRequired"));
      return;
    }

    setIsSending(true);
    setFeedback("");

    try {
      await ticketService.addTicketMessage(ticketId, { message: reply.trim() });
      setReply("");
      setFeedback(t("replySentSuccess"));
      await loadTicket();
    } catch (submitError) {
      notifyError(submitError);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <nav className="mb-6 text-sm text-foreground/58">
          <Link href="/tickets" className="transition hover:text-deep">{t("breadcrumbTickets")}</Link>
          <span>{" / "}</span>
          <span className="text-deep">{ticketId}</span>
        </nav>

        {isLoading ? <p className="text-sm font-medium text-foreground/60">{t("loading")}</p> : null}
        {!isLoading && loadFailed ? (
          <div className="rounded-[32px] border border-rose-200 bg-rose-50 px-6 py-8 text-rose-700">
            {t("loadError")}
          </div>
        ) : null}

        {!isLoading && ticket ? (
          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
            <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 border-b border-foreground/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{ticket.ticketId}</p>
                  <h1 className="display-font mt-3 text-4xl text-deep">{ticket.subject}</h1>
                  <p className="mt-3 text-sm text-foreground/58">
                    {t("categoryPriority", {
                      category: resolveEnumLabel(t, "category", ticket.category),
                      priority: resolveEnumLabel(t, "priority", ticket.priority),
                    })}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getStatusClass(ticket.status)}`}>
                    {resolveEnumLabel(t, "status", ticket.status)}
                  </span>
                  {ticket.isEscalated ? (
                    <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-rose-700">
                      {t("escalatedBadge")}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {ticket.messages.map((message, index) => (
                  <article key={`${message.createdAt}-${index}`} className="rounded-[24px] border border-foreground/10 bg-surface p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{message.senderRole}</p>
                        <p className="mt-1 text-sm text-foreground/58">{message.sender}</p>
                      </div>
                      <p className="text-sm text-foreground/42">{format.dateTime(new Date(message.createdAt), TICKET_DATE_FORMAT_OPTIONS)}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-foreground/68">{message.message}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">{t("replyEyebrow")}</p>
              <h2 className="display-font mt-3 text-3xl text-deep">{t("replyHeading")}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/65">{t("replySubtitle")}</p>

              <form className="mt-6 grid gap-4" onSubmit={(event) => void handleReplySubmit(event)}>
                <label className="text-sm font-semibold text-deep">
                  {t("messageLabel")}
                  <textarea
                    value={reply}
                    onChange={(event) => setReply(event.target.value)}
                    rows={8}
                    className="mt-2 w-full rounded-2xl border border-foreground/12 bg-white px-4 py-3 text-sm text-deep outline-none transition focus:border-deep"
                    placeholder={t("messagePlaceholder")}
                  />
                </label>

                {feedback ? <p className="text-sm text-[#8b5f43]">{feedback}</p> : null}

                <button
                  type="submit"
                  disabled={isSending}
                  className="cta-sweep inline-flex items-center justify-center gap-2 border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-60"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <SendHorizonal className="h-4 w-4" />
                    {isSending ? t("sending") : t("sendReplyButton")}
                  </span>
                </button>
              </form>

              <div className="mt-6 border-t border-foreground/10 pt-6 text-sm text-foreground/58">
                <p>{t("createdDate", { date: format.dateTime(new Date(ticket.createdAt), TICKET_DATE_FORMAT_OPTIONS) })}</p>
                <p className="mt-2">{t("lastUpdatedDate", { date: format.dateTime(new Date(ticket.updatedAt), TICKET_DATE_FORMAT_OPTIONS) })}</p>
                <div className="mt-5 rounded-[24px] border border-gold/20 bg-surface p-4">
                  <div className="flex items-start gap-3 text-sm leading-6 text-foreground/62">
                    <MessageSquareText className="mt-0.5 h-4 w-4 text-deep" />
                    <p>{t("threadNotice")}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        ) : null}
      </main>
    </AuthGuard>
  );
}