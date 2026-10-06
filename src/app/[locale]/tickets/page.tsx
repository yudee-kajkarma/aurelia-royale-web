"use client";

import { useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LifeBuoy, Ticket as TicketIcon } from "lucide-react";
import { toast } from "sonner";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ticketService } from "@/services/tickets/ticket.service";
import type { CreateTicketPayload, Ticket, TicketsPagination } from "@/services/tickets/ticket.types";
import { notifyError } from "@/utils/notify";

const initialForm: CreateTicketPayload = {
  subject: "",
  category: "delivery",
  priority: "medium",
  message: "",
};

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

export default function TicketsPage() {
  const t = useTranslations("TicketsPage");
  const tToasts = useTranslations("Toasts");
  const format = useFormatter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [pagination, setPagination] = useState<TicketsPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [form, setForm] = useState<CreateTicketPayload>(initialForm);

  async function loadTickets() {
    setIsLoading(true);

    try {
      const response = await ticketService.getTickets();
      setTickets(response.tickets);
      setPagination(response.pagination);
      setLoadFailed(false);
    } catch (loadError) {
      setTickets([]);
      setPagination(null);
      setLoadFailed(true);
      notifyError(loadError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadTickets();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.subject.trim() || !form.message.trim()) {
      toast.error(tToasts("ticketSubjectAndMessageRequired"));
      return;
    }

    setIsSubmitting(true);
    setSubmitFeedback("");

    try {
      const createdTicket = await ticketService.createTicket({
        subject: form.subject.trim(),
        category: form.category,
        priority: form.priority,
        message: form.message.trim(),
      });

      setForm(initialForm);
      setSubmitFeedback(t("ticketCreatedSuccess"));
      await loadTickets();

      if (createdTicket?.ticketId) {
        window.location.href = `/tickets/${createdTicket.ticketId}`;
      }
    } catch (submitError) {
      notifyError(submitError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">{t("eyebrow")}</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">{t("heading")}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/orders"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
          >
            {t("viewOrders")}
          </Link>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_420px]">
          <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            {isLoading ? <p className="text-sm font-medium text-foreground/60">{t("loading")}</p> : null}
            {!isLoading && loadFailed ? (
              <div className="rounded-[28px] border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700">
                {t("loadError")}
              </div>
            ) : null}

            {!isLoading && !loadFailed && tickets.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 text-deep">
                  <TicketIcon className="h-6 w-6" />
                </div>
                <h2 className="display-font mt-5 text-3xl text-deep">{t("emptyTitle")}</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/65">{t("emptyBody")}</p>
              </div>
            ) : null}

            {!isLoading && tickets.length > 0 ? (
              <div className="space-y-5">
                {tickets.map((ticket) => (
                  <article key={ticket.id} className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,248,245,0.94)_100%)] p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{ticket.ticketId}</p>
                        <Link href={`/tickets/${ticket.ticketId}`} className="mt-2 block text-2xl font-bold text-deep transition hover:text-gold">
                          {ticket.subject}
                        </Link>
                        <p className="mt-2 text-sm text-foreground/58">
                          {t("categoryPriority", {
                            category: resolveEnumLabel(t, "category", ticket.category),
                            priority: resolveEnumLabel(t, "priority", ticket.priority),
                          })}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:justify-end">
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

                    <p className="mt-4 line-clamp-2 text-sm leading-7 text-foreground/62">{ticket.messages[0]?.message ?? t("noMessageAvailable")}</p>

                    <div className="mt-4 flex flex-col gap-3 border-t border-foreground/10 pt-4 text-sm text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
                      <span>{t("messageCount", { count: ticket.messages.length })}</span>
                      <span>{t("updatedDate", { date: format.dateTime(new Date(ticket.updatedAt), TICKET_DATE_FORMAT_OPTIONS) })}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {pagination ? (
              <div className="mt-6 border-t border-foreground/10 pt-4 text-sm text-foreground/58">
                {t("paginationSummary", {
                  currentPage: pagination.currentPage,
                  totalPages: pagination.totalPages,
                  totalRecords: pagination.totalRecords,
                })}
              </div>
            ) : null}
          </section>

          <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">{t("createTicketEyebrow")}</p>
            <h2 className="display-font mt-3 text-3xl text-deep">{t("createTicketHeading")}</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/65">{t("createTicketSubtitle")}</p>

            <form className="mt-6 grid gap-4" onSubmit={(event) => void handleSubmit(event)}>
              <label className="text-sm font-semibold text-deep">
                {t("subjectLabel")}
                <input
                  type="text"
                  value={form.subject}
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  placeholder={t("subjectPlaceholder")}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-deep">
                  {t("categoryLabel")}
                  <select
                    value={form.category}
                    onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                    className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  >
                    <option value="delivery">{t("category.delivery")}</option>
                    <option value="order">{t("category.order")}</option>
                    <option value="payment">{t("category.payment")}</option>
                    <option value="product">{t("category.product")}</option>
                    <option value="general">{t("category.general")}</option>
                  </select>
                </label>

                <label className="text-sm font-semibold text-deep">
                  {t("priorityLabel")}
                  <select
                    value={form.priority}
                    onChange={(event) => setForm((current) => ({ ...current, priority: event.target.value }))}
                    className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  >
                    <option value="low">{t("priority.low")}</option>
                    <option value="medium">{t("priority.medium")}</option>
                    <option value="high">{t("priority.high")}</option>
                    <option value="urgent">{t("priority.urgent")}</option>
                  </select>
                </label>
              </div>

              <label className="text-sm font-semibold text-deep">
                {t("messageLabel")}
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-foreground/12 bg-white px-4 py-3 text-sm text-deep outline-none transition focus:border-deep"
                  placeholder={t("messagePlaceholder")}
                />
              </label>

              {submitFeedback ? <p className="text-sm text-[#8b5f43]">{submitFeedback}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-sweep inline-flex items-center justify-center gap-2 border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-60"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <LifeBuoy className="h-4 w-4" />
                  {isSubmitting ? t("creating") : t("createTicketButton")}
                </span>
              </button>
            </form>
          </aside>
        </div>
      </main>
    </AuthGuard>
  );
}