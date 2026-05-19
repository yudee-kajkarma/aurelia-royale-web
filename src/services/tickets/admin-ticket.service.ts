import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type { ApiResponse } from "@/services/auth/auth.types";
import type { ProductsPagination } from "@/services/products/product.types";
import type {
  AdminTicketDetail,
  AdminTicketFilters,
  AdminTicketMessage,
  AdminTicketPriority,
  AdminTicketsResult,
  AdminTicketStatus,
  AdminTicketSummary,
} from "@/services/tickets/admin-ticket.types";

type AdminTicketApiResponse = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  ticketId?: string;
  userId?: string;
  subject?: string;
  category?: string;
  priority?: string;
  status?: string;
  isEscalated?: boolean;
  messages?: Array<{
    sender?: string;
    senderRole?: string;
    message?: string;
    attachments?: string[];
    createdAt?: string;
  }>;
};

type AdminTicketMessageApiResponse = {
  sender?: string;
  senderRole?: string;
  message?: string;
  attachments?: string[];
  createdAt?: string;
};

type AdminTicketsListResponse = {
  success: boolean;
  code?: string;
  message?: string;
  data?: AdminTicketApiResponse[];
  pagination?: ProductsPagination;
};

type AdminTicketDetailResponse = ApiResponse<AdminTicketApiResponse>;

function normalizeStatus(status: string | undefined): AdminTicketStatus {
  switch (status) {
    case "open":
    case "in_progress":
    case "waiting_customer":
    case "resolved":
    case "closed":
      return status;
    default:
      return "open";
  }
}

function normalizePriority(priority: string | undefined): AdminTicketPriority {
  switch (priority) {
    case "low":
    case "medium":
    case "high":
    case "urgent":
      return priority;
    default:
      return "medium";
  }
}

function normalizeMessage(message: AdminTicketMessageApiResponse): AdminTicketMessage {
  return {
    sender: message?.sender ?? "",
    senderRole: message?.senderRole ?? "",
    message: message?.message ?? "",
    attachments: Array.isArray(message?.attachments) ? message.attachments : [],
    createdAt: message?.createdAt ?? "",
  };
}

function normalizeSummary(ticket: AdminTicketApiResponse): AdminTicketSummary {
  return {
    id: ticket.id ?? "",
    createdAt: ticket.createdAt ?? "",
    updatedAt: ticket.updatedAt ?? "",
    ticketId: ticket.ticketId ?? "",
    subject: ticket.subject ?? "",
    category: ticket.category ?? "general",
    priority: normalizePriority(ticket.priority),
    isEscalated: Boolean(ticket.isEscalated),
    status: normalizeStatus(ticket.status),
  };
}

function normalizeDetail(ticket: AdminTicketApiResponse): AdminTicketDetail {
  return {
    ...normalizeSummary(ticket),
    userId: ticket.userId ?? "",
    messages: Array.isArray(ticket.messages) ? ticket.messages.map(normalizeMessage) : [],
  };
}

async function getAdminTickets(filters: AdminTicketFilters = {}): Promise<AdminTicketsResult> {
  try {
    const params = new URLSearchParams();

    if (filters.page) {
      params.set("page", String(filters.page));
    }

    if (filters.limit) {
      params.set("limit", String(filters.limit));
    }

    if (filters.status) {
      params.set("status", filters.status);
    }

    const query = params.toString();
    const response = await apiClient.get<AdminTicketsListResponse>(query ? `/tickets/admin/all?${query}` : "/tickets/admin/all");

    return {
      tickets: (response.data.data ?? []).map(normalizeSummary),
      pagination: response.data.pagination ?? null,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getAdminTicket(ticketId: string): Promise<AdminTicketDetail | null> {
  try {
    const response = await apiClient.get<AdminTicketDetailResponse>(`/tickets/admin/${ticketId}`);
    return response.data.data ? normalizeDetail(response.data.data) : null;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateAdminTicketStatus(ticketId: string, status: AdminTicketStatus) {
  try {
    await apiClient.patch(`/tickets/admin/${ticketId}/status`, { status });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateAdminTicketPriority(ticketId: string, priority: AdminTicketPriority) {
  try {
    await apiClient.patch(`/tickets/admin/${ticketId}/priority`, { priority });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function escalateAdminTicket(ticketId: string) {
  try {
    await apiClient.patch(`/tickets/admin/${ticketId}/escalate`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function replyToAdminTicket(ticketId: string, message: string) {
  try {
    await apiClient.post(`/tickets/admin/${ticketId}/messages`, { message });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const adminTicketService = {
  escalateAdminTicket,
  getAdminTicket,
  getAdminTickets,
  replyToAdminTicket,
  updateAdminTicketPriority,
  updateAdminTicketStatus,
};