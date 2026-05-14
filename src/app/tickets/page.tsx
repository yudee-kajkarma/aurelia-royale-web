"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LifeBuoy, MessageSquareText, Ticket as TicketIcon } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ticketService } from "@/services/tickets/ticket.service";
import type { CreateTicketPayload, Ticket, TicketsPagination } from "@/services/tickets/ticket.types";

const initialForm: CreateTicketPayload = {
  subject: "",
  category: "delivery",
  priority: "medium",
  message: "",
};

function formatTicketDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
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
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [pagination, setPagination] = useState<TicketsPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitFeedback, setSubmitFeedback] = useState("");
  const [form, setForm] = useState<CreateTicketPayload>(initialForm);

  async function loadTickets() {
    setIsLoading(true);

    try {
      const response = await ticketService.getTickets();
      setTickets(response.tickets);
      setPagination(response.pagination);
      setError("");
    } catch (loadError) {
      setTickets([]);
      setPagination(null);
      setError(loadError instanceof Error ? loadError.message : "Unable to load support tickets right now.");
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
      setSubmitFeedback("Subject and message are required.");
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
      setSubmitFeedback("Support ticket created successfully.");
      await loadTickets();

      if (createdTicket?.ticketId) {
        window.location.href = `/tickets/${createdTicket.ticketId}`;
      }
    } catch (submitError) {
      setSubmitFeedback(submitError instanceof Error ? submitError.message : "Unable to create ticket right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Support</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Your Support Tickets</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Track issues, delivery requests, payment concerns, and support replies in one place.
            </p>
          </div>

          <Link
            href="/orders"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
          >
            View Orders
          </Link>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_420px]">
          <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading tickets...</p> : null}
            {!isLoading && error ? <div className="rounded-[28px] border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700">{error}</div> : null}

            {!isLoading && !error && tickets.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 text-deep">
                  <TicketIcon className="h-6 w-6" />
                </div>
                <h2 className="display-font mt-5 text-3xl text-deep">No Tickets Yet</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/65">Create your first support ticket using the form on the right.</p>
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
                        <p className="mt-2 text-sm text-foreground/58">{ticket.category} · {ticket.priority} priority</p>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getStatusClass(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        {ticket.isEscalated ? (
                          <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-rose-700">
                            Escalated
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <p className="mt-4 line-clamp-2 text-sm leading-7 text-foreground/62">{ticket.messages[0]?.message ?? "No message available."}</p>

                    <div className="mt-4 flex flex-col gap-3 border-t border-foreground/10 pt-4 text-sm text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
                      <span>{ticket.messages.length} message{ticket.messages.length === 1 ? "" : "s"}</span>
                      <span>Updated {formatTicketDate(ticket.updatedAt)}</span>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}

            {pagination ? (
              <div className="mt-6 border-t border-foreground/10 pt-4 text-sm text-foreground/58">
                Showing page {pagination.currentPage} of {pagination.totalPages} · {pagination.totalRecords} ticket{pagination.totalRecords === 1 ? "" : "s"}
              </div>
            ) : null}
          </section>

          <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Create Ticket</p>
            <h2 className="display-font mt-3 text-3xl text-deep">Need Help With an Order?</h2>
            <p className="mt-3 text-sm leading-7 text-foreground/65">Share the issue and your support thread will be created immediately.</p>

            <form className="mt-6 grid gap-4" onSubmit={(event) => void handleSubmit(event)}>
              <label className="text-sm font-semibold text-deep">
                Subject
                <input
                  type="text"
                  value={form.subject}
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  placeholder="Order not delivered"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-deep">
                  Category
                  <select
                    value={form.category}
                    onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                    className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  >
                    <option value="delivery">Delivery</option>
                    <option value="order">Order</option>
                    <option value="payment">Payment</option>
                    <option value="product">Product</option>
                    <option value="general">General</option>
                  </select>
                </label>

                <label className="text-sm font-semibold text-deep">
                  Priority
                  <select
                    value={form.priority}
                    onChange={(event) => setForm((current) => ({ ...current, priority: event.target.value }))}
                    className="mt-2 h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-deep outline-none transition focus:border-deep"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </label>
              </div>

              <label className="text-sm font-semibold text-deep">
                Message
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-foreground/12 bg-white px-4 py-3 text-sm text-deep outline-none transition focus:border-deep"
                  placeholder="Describe your issue and include your order number if available."
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
                  {isSubmitting ? "Creating..." : "Create Ticket"}
                </span>
              </button>
            </form>
          </aside>
        </div>
      </main>
    </AuthGuard>
  );
}