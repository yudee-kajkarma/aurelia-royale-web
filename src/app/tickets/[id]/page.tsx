"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MessageSquareText, SendHorizonal } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ticketService } from "@/services/tickets/ticket.service";
import type { Ticket } from "@/services/tickets/ticket.types";

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

export default function TicketDetailPage() {
  const params = useParams<{ id: string | string[] }>();
  const ticketId = typeof params.id === "string" ? params.id : "";
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [reply, setReply] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function loadTicket() {
    setIsLoading(true);

    try {
      const response = await ticketService.getTicketById(ticketId);
      setTicket(response);
      setError("");
    } catch (loadError) {
      setTicket(null);
      setError(loadError instanceof Error ? loadError.message : "Unable to load this support ticket right now.");
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
      setFeedback("Reply message is required.");
      return;
    }

    setIsSending(true);
    setFeedback("");

    try {
      await ticketService.addTicketMessage(ticketId, { message: reply.trim() });
      setReply("");
      setFeedback("Reply sent successfully.");
      await loadTicket();
    } catch (submitError) {
      setFeedback(submitError instanceof Error ? submitError.message : "Unable to send reply right now.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <nav className="mb-6 text-sm text-[var(--foreground)]/58">
          <Link href="/tickets" className="transition hover:text-[var(--deep)]">Support Tickets</Link>
          <span>{" / "}</span>
          <span className="text-[var(--deep)]">{ticketId}</span>
        </nav>

        {isLoading ? <p className="text-sm font-medium text-[var(--foreground)]/60">Loading ticket...</p> : null}
        {!isLoading && error ? <div className="rounded-[32px] border border-rose-200 bg-rose-50 px-6 py-8 text-rose-700">{error}</div> : null}

        {!isLoading && ticket ? (
          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
            <section className="rounded-[34px] border border-[var(--foreground)]/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 border-b border-[var(--foreground)]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]/42">{ticket.ticketId}</p>
                  <h1 className="display-font mt-3 text-4xl text-[var(--deep)]">{ticket.subject}</h1>
                  <p className="mt-3 text-sm text-[var(--foreground)]/58">{ticket.category} · {ticket.priority} priority</p>
                </div>

                <div className="flex flex-wrap gap-2">
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

              <div className="mt-6 space-y-5">
                {ticket.messages.map((message, index) => (
                  <article key={`${message.createdAt}-${index}`} className="rounded-[24px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--foreground)]/42">{message.senderRole}</p>
                        <p className="mt-1 text-sm text-[var(--foreground)]/58">{message.sender}</p>
                      </div>
                      <p className="text-sm text-[var(--foreground)]/42">{formatTicketDate(message.createdAt)}</p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/68">{message.message}</p>
                  </article>
                ))}
              </div>
            </section>

            <aside className="rounded-[34px] border border-[var(--foreground)]/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--foreground)]/45">Reply</p>
              <h2 className="display-font mt-3 text-3xl text-[var(--deep)]">Send a Message</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/65">Add more details or respond to the support team from here.</p>

              <form className="mt-6 grid gap-4" onSubmit={(event) => void handleReplySubmit(event)}>
                <label className="text-sm font-semibold text-[var(--deep)]">
                  Message
                  <textarea
                    value={reply}
                    onChange={(event) => setReply(event.target.value)}
                    rows={8}
                    className="mt-2 w-full rounded-2xl border border-[var(--foreground)]/12 bg-white px-4 py-3 text-sm text-[var(--deep)] outline-none transition focus:border-[var(--deep)]"
                    placeholder="Thanks for the quick response. Please expedite."
                  />
                </label>

                {feedback ? <p className="text-sm text-[#8b5f43]">{feedback}</p> : null}

                <button
                  type="submit"
                  disabled={isSending}
                  className="cta-sweep inline-flex items-center justify-center gap-2 border border-[var(--deep)] bg-[var(--deep)] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-[var(--gold)] hover:text-[var(--deep)] focus-visible:border-[var(--gold)] focus-visible:text-[var(--deep)] disabled:opacity-60"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <SendHorizonal className="h-4 w-4" />
                    {isSending ? "Sending..." : "Send Reply"}
                  </span>
                </button>
              </form>

              <div className="mt-6 border-t border-[var(--foreground)]/10 pt-6 text-sm text-[var(--foreground)]/58">
                <p>Created {formatTicketDate(ticket.createdAt)}</p>
                <p className="mt-2">Last updated {formatTicketDate(ticket.updatedAt)}</p>
                <div className="mt-5 rounded-[24px] border border-[var(--gold)]/20 bg-[var(--surface)] p-4">
                  <div className="flex items-start gap-3 text-sm leading-6 text-[var(--foreground)]/62">
                    <MessageSquareText className="mt-0.5 h-4 w-4 text-[var(--deep)]" />
                    <p>Keep all order-related communication in this thread so the support team can resolve issues faster.</p>
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