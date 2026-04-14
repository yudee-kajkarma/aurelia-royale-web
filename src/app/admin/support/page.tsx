"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCheck,
  Clock3,
  LoaderCircle,
  MessageSquareText,
  Ticket,
} from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { adminTicketService } from "@/services/tickets/admin-ticket.service";
import type { AdminTicketDetail, AdminTicketPriority, AdminTicketStatus, AdminTicketSummary } from "@/services/tickets/admin-ticket.types";
import type { ProductsPagination } from "@/services/products/product.types";

const STATUS_FILTERS: Array<"all" | AdminTicketStatus> = [
  "all",
  "open",
  "in_progress",
  "waiting_customer",
  "resolved",
  "closed",
];

const PRIORITIES: AdminTicketPriority[] = ["low", "medium", "high", "urgent"];

const STATUS_STYLES: Record<AdminTicketStatus, string> = {
  open: "border-sky-200 bg-sky-50 text-sky-700",
  in_progress: "border-amber-200 bg-amber-50 text-amber-700",
  waiting_customer: "border-orange-200 bg-orange-50 text-orange-700",
  resolved: "border-emerald-200 bg-emerald-50 text-emerald-700",
  closed: "border-zinc-200 bg-zinc-100 text-zinc-700",
};

const PRIORITY_STYLES: Record<AdminTicketPriority, string> = {
  low: "border-zinc-200 bg-zinc-100 text-zinc-700",
  medium: "border-sky-200 bg-sky-50 text-sky-700",
  high: "border-orange-200 bg-orange-50 text-orange-700",
  urgent: "border-rose-200 bg-rose-50 text-rose-700",
};

const RECORDS_PER_PAGE = 10;

function formatTicketDate(value: string) {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function TicketListShimmer() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="rounded-[28px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-4">
          <div className="h-4 w-28 animate-pulse rounded-full bg-[var(--foreground)]/10" />
          <div className="mt-3 h-6 w-3/4 animate-pulse rounded-full bg-[var(--foreground)]/10" />
          <div className="mt-3 flex gap-2">
            <div className="h-7 w-24 animate-pulse rounded-full bg-[var(--foreground)]/10" />
            <div className="h-7 w-20 animate-pulse rounded-full bg-[var(--foreground)]/10" />
          </div>
          <div className="mt-4 h-12 animate-pulse rounded-2xl bg-[var(--foreground)]/10" />
        </div>
      ))}
    </div>
  );
}

function TicketDetailShimmer() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-24 animate-pulse rounded-full bg-[var(--foreground)]/10" />
      <div className="h-8 w-2/3 animate-pulse rounded-full bg-[var(--foreground)]/10" />
      <div className="h-24 animate-pulse rounded-[28px] bg-[var(--foreground)]/10" />
      <div className="h-24 animate-pulse rounded-[28px] bg-[var(--foreground)]/10" />
      <div className="h-44 animate-pulse rounded-[28px] bg-[var(--foreground)]/10" />
    </div>
  );
}

export default function AdminSupportPage() {
  const [tickets, setTickets] = useState<AdminTicketSummary[]>([]);
  const [pagination, setPagination] = useState<ProductsPagination | null>(null);
  const [statusFilter, setStatusFilter] = useState<(typeof STATUS_FILTERS)[number]>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [selectedTicket, setSelectedTicket] = useState<AdminTicketDetail | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [listLoading, setListLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      setListLoading(true);
      setErrorMessage(null);

      try {
        const result = await adminTicketService.getAdminTickets({
          page: currentPage,
          limit: RECORDS_PER_PAGE,
          status: statusFilter === "all" ? undefined : statusFilter,
        });

        if (cancelled) {
          return;
        }

        setTickets(result.tickets);
        setPagination(result.pagination);

        const nextSelectedTicketId = selectedTicketId && result.tickets.some((ticket) => ticket.ticketId === selectedTicketId)
          ? selectedTicketId
          : result.tickets[0]?.ticketId ?? "";

        setSelectedTicketId(nextSelectedTicketId);

        if (!nextSelectedTicketId) {
          setSelectedTicket(null);
          return;
        }

        setDetailLoading(true);
        const ticket = await adminTicketService.getAdminTicket(nextSelectedTicketId);

        if (!cancelled) {
          setSelectedTicket(ticket);
        }
      } catch (error) {
        if (!cancelled) {
          setTickets([]);
          setPagination(null);
          setSelectedTicket(null);
          setSelectedTicketId("");
          setErrorMessage(error instanceof Error ? error.message : "Unable to load support queue.");
        }
      } finally {
        if (!cancelled) {
          setListLoading(false);
          setDetailLoading(false);
          setRefreshing(false);
        }
      }
    }

    void loadData();

    return () => {
      cancelled = true;
    };
  }, [currentPage, refreshKey, statusFilter]);

  const summaryCards = useMemo(() => {
    const summary = tickets.reduce(
      (accumulator, ticket) => {
        accumulator.total += 1;
        if (ticket.status === "open") accumulator.open += 1;
        if (ticket.status === "in_progress") accumulator.inProgress += 1;
        if (ticket.status === "resolved") accumulator.resolved += 1;
        if (ticket.status === "closed") accumulator.closed += 1;
        if (ticket.isEscalated) accumulator.escalated += 1;
        return accumulator;
      },
      { total: 0, open: 0, inProgress: 0, resolved: 0, closed: 0, escalated: 0 },
    );

    return [
      { label: "Total", value: summary.total },
      { label: "Open", value: summary.open },
      { label: "In Progress", value: summary.inProgress },
      { label: "Resolved", value: summary.resolved },
      { label: "Closed", value: summary.closed },
      { label: "Escalated", value: summary.escalated },
    ];
  }, [tickets]);

  async function handleSelectTicket(ticketId: string) {
    if (!ticketId || ticketId === selectedTicketId) {
      return;
    }

    setDetailLoading(true);
    setSelectedTicketId(ticketId);

    try {
      const ticket = await adminTicketService.getAdminTicket(ticketId);
      setSelectedTicket(ticket);
    } catch (error) {
      setSelectedTicket(null);
      setErrorMessage(error instanceof Error ? error.message : "Unable to load ticket details.");
    } finally {
      setDetailLoading(false);
    }
  }

  async function refreshCurrentState() {
    setRefreshing(true);
    setRefreshKey((value) => value + 1);
  }

  async function handleStatusChange(nextStatus: AdminTicketStatus) {
    if (!selectedTicket) {
      return;
    }

    setActionLoading("status");

    try {
      await adminTicketService.updateAdminTicketStatus(selectedTicket.ticketId, nextStatus);
      await refreshCurrentState();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update ticket status.");
    } finally {
      setActionLoading(null);
    }
  }

  async function handlePriorityChange(nextPriority: AdminTicketPriority) {
    if (!selectedTicket) {
      return;
    }

    setActionLoading("priority");

    try {
      await adminTicketService.updateAdminTicketPriority(selectedTicket.ticketId, nextPriority);
      await refreshCurrentState();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update ticket priority.");
    } finally {
      setActionLoading(null);
    }
  }

  async function handleEscalate() {
    if (!selectedTicket) {
      return;
    }

    setActionLoading("escalate");

    try {
      await adminTicketService.escalateAdminTicket(selectedTicket.ticketId);
      await refreshCurrentState();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to escalate ticket.");
    } finally {
      setActionLoading(null);
    }
  }

  async function handleReplySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedTicket || !replyMessage.trim()) {
      return;
    }

    setActionLoading("reply");

    try {
      await adminTicketService.replyToAdminTicket(selectedTicket.ticketId, replyMessage.trim());
      setReplyMessage("");
      await refreshCurrentState();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send reply.");
    } finally {
      setActionLoading(null);
    }
  }

  function handleFilterChange(status: (typeof STATUS_FILTERS)[number]) {
    if (listLoading || actionLoading) {
      return;
    }

    setCurrentPage(1);
    setStatusFilter(status);
  }

  function handlePageChange(page: number) {
    if (page === currentPage || listLoading || Boolean(actionLoading)) {
      return;
    }

    setCurrentPage(page);
  }

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Admin Support</p>
              <h1 className="display-font mt-3 text-3xl text-[var(--foreground)] sm:text-4xl">Support Queue Workspace</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--foreground)]/65 sm:text-base">
                Review tickets, update status and priority, escalate urgent cases, and reply to customers from a single admin panel.
              </p>
            </div>

            <button
              type="button"
              onClick={() => void refreshCurrentState()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              {refreshing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CheckCheck className="h-4 w-4" />}
              Refresh
            </button>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {summaryCards.map((card) => (
              <div key={card.label} className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">{card.label}</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {STATUS_FILTERS.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => handleFilterChange(status)}
                disabled={listLoading || Boolean(actionLoading)}
                className={statusFilter === status
                  ? "rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white"
                  : "rounded-full border border-[var(--foreground)]/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]/65 transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:pointer-events-none disabled:opacity-50"
                }
              >
                {status.replaceAll("_", " ")}
              </button>
            ))}
          </div>

          {errorMessage ? (
            <div className="mt-5 rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          ) : null}
        </section>

        <div className="mt-5 grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
          <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--foreground)]/10 px-1 pb-4">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">Support Tickets</p>
                <p className="mt-1 text-sm text-[var(--foreground)]/60">
                  {pagination ? `Page ${pagination.currentPage} of ${pagination.totalPages}` : "Current queue"}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--gold)]">
                <Ticket className="h-3.5 w-3.5" />
                {pagination?.totalRecords ?? tickets.length}
              </div>
            </div>

            {listLoading ? <TicketListShimmer /> : null}

            {!listLoading && tickets.length === 0 ? (
              <div className="rounded-[22px] border border-dashed border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-10 text-center text-sm text-[var(--foreground)]/60">
                No tickets matched the current status filter.
              </div>
            ) : null}

            {!listLoading && tickets.length > 0 ? (
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    type="button"
                    onClick={() => void handleSelectTicket(ticket.ticketId)}
                    className={selectedTicketId === ticket.ticketId
                      ? "w-full rounded-[28px] border border-[var(--gold)]/45 bg-[var(--gold)]/8 p-4 text-left shadow-sm transition"
                      : "w-full rounded-[28px] border border-[var(--foreground)]/10 bg-white p-4 text-left transition hover:border-[var(--gold)]/40 hover:bg-[var(--surface)]"
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">
                          {ticket.ticketId}
                        </p>
                        <h2 className="mt-2 text-base font-semibold text-[var(--foreground)]">{ticket.subject}</h2>
                        <p className="mt-2 text-sm text-[var(--foreground)]/60">{ticket.category}</p>
                      </div>
                      <Clock3 className="h-4 w-4 text-[var(--gold)]" />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${STATUS_STYLES[ticket.status]}`}>
                        {ticket.status.replaceAll("_", " ")}
                      </span>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${PRIORITY_STYLES[ticket.priority]}`}>
                        {ticket.priority}
                      </span>
                      {ticket.isEscalated ? (
                        <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-rose-700">
                          Escalated
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 text-sm text-[var(--foreground)]/60">
                      Created {formatTicketDate(ticket.createdAt)}
                    </p>
                  </button>
                ))}
              </div>
            ) : null}

            {pagination ? (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--foreground)]/10 px-1 pt-4 text-sm text-[var(--foreground)]/60">
                <span>{pagination.totalRecords} ticket{pagination.totalRecords === 1 ? "" : "s"}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.hasPrevPage || listLoading}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--foreground)]/10 px-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.hasNextPage || listLoading}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--foreground)]/10 px-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </section>

          <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm">
            {detailLoading ? <TicketDetailShimmer /> : null}

            {!detailLoading && !selectedTicket ? (
              <div className="rounded-[22px] border border-dashed border-[var(--foreground)]/10 bg-[var(--surface)] px-6 py-12 text-center text-sm text-[var(--foreground)]/60">
                Select a ticket to view the full conversation.
              </div>
            ) : null}

            {!detailLoading && selectedTicket ? (
              <>
                <div className="flex flex-col gap-4 border-b border-[var(--foreground)]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">
                      {selectedTicket.ticketId}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                      {selectedTicket.subject}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--foreground)]/60">
                      <span>{selectedTicket.category}</span>
                      <span>Updated {formatTicketDate(selectedTicket.updatedAt)}</span>
                      <span>User ID: {selectedTicket.userId}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${STATUS_STYLES[selectedTicket.status]}`}>
                      {selectedTicket.status.replaceAll("_", " ")}
                    </span>
                    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${PRIORITY_STYLES[selectedTicket.priority]}`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
                  <div className="space-y-4">
                    {selectedTicket.messages.map((message, index) => (
                      <article key={`${message.createdAt}-${index}`} className="rounded-[28px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">
                              {message.senderRole}
                            </p>
                            <p className="mt-1 text-sm text-[var(--foreground)]/60">{message.sender}</p>
                          </div>
                          <p className="text-sm text-[var(--foreground)]/45">{formatTicketDate(message.createdAt)}</p>
                        </div>
                        <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[var(--foreground)]">
                          {message.message}
                        </p>
                      </article>
                    ))}
                  </div>

                  <aside className="space-y-4 rounded-[28px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-4">
                    <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">
                        Status
                      </p>
                      <div className="mt-3 grid gap-2">
                        {(["open", "in_progress", "waiting_customer", "resolved", "closed"] as AdminTicketStatus[]).map((status) => (
                          <button
                            key={status}
                            type="button"
                            disabled={actionLoading === "status" || selectedTicket.status === status}
                            onClick={() => void handleStatusChange(status)}
                            className="rounded-full border border-[var(--foreground)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]/65 transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:pointer-events-none disabled:opacity-50"
                          >
                            {status.replaceAll("_", " ")}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-white p-4">
                      <label className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">
                        Priority
                        <select
                          value={selectedTicket.priority}
                          disabled={actionLoading === "priority"}
                          onChange={(event) => void handlePriorityChange(event.target.value as AdminTicketPriority)}
                          className="mt-3 h-11 w-full rounded-2xl border border-[var(--foreground)]/10 bg-white px-4 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
                        >
                          {PRIORITIES.map((priority) => (
                            <option key={priority} value={priority}>
                              {priority}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-white p-4">
                      <button
                        type="button"
                        disabled={actionLoading === "escalate" || selectedTicket.isEscalated}
                        onClick={() => void handleEscalate()}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#0f342c] disabled:pointer-events-none disabled:opacity-50"
                      >
                        <AlertTriangle className="h-4 w-4" />
                        {selectedTicket.isEscalated ? "Escalated" : "Escalate"}
                      </button>
                    </div>

                    <form className="rounded-[22px] border border-[var(--foreground)]/10 bg-white p-4" onSubmit={(event) => void handleReplySubmit(event)}>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]/45">Reply</p>
                      <textarea
                        value={replyMessage}
                        onChange={(event) => setReplyMessage(event.target.value)}
                        rows={6}
                        className="mt-3 w-full rounded-2xl border border-[var(--foreground)]/10 px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
                        placeholder="We are checking with the team and will update you shortly."
                      />
                      <button
                        type="submit"
                        disabled={actionLoading === "reply"}
                        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#0f342c] disabled:pointer-events-none disabled:opacity-50"
                      >
                        <MessageSquareText className="h-4 w-4" />
                        {actionLoading === "reply" ? "Sending..." : "Send Reply"}
                      </button>
                    </form>
                  </aside>
                </div>
              </>
            ) : null}
          </section>
        </div>
      </main>
    </AuthGuard>
  );
}