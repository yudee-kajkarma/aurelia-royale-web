import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type {
  AddTicketMessagePayload,
  CreateTicketPayload,
  Ticket,
  TicketMessage,
  TicketPriority,
  TicketsPagination,
  TicketsResult,
  TicketStatus,
} from "@/services/tickets/ticket.types";

type TicketMessageApiResponse = {
  sender?: string;
  senderRole?: string;
  message?: string;
  attachments?: string[];
  createdAt?: string;
};

type TicketApiResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  ticketId: string;
  userId: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  isEscalated: boolean;
  messages: TicketMessageApiResponse[];
};

type TicketsListApiResponse = {
  success: boolean;
  code: string;
  message: string;
  data: TicketApiResponse[];
  pagination: TicketsPagination;
};

type TicketDetailApiResponse = {
  success: boolean;
  code: string;
  message: string;
  data: TicketApiResponse;
};

type TicketCreateApiResponse = {
  success: boolean;
  code: string;
  message: string;
  data?: TicketApiResponse;
};

function normalizeTicketMessage(message: TicketMessageApiResponse): TicketMessage {
  return {
    sender: message.sender ?? "",
    senderRole: message.senderRole ?? "",
    message: message.message ?? "",
    attachments: Array.isArray(message.attachments) ? message.attachments : [],
    createdAt: message.createdAt ?? "",
  };
}

function normalizeTicketStatus(status: string): TicketStatus {
  return status === "closed" ? "closed" : "open";
}

function normalizeTicketPriority(priority: string): TicketPriority {
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

function normalizeTicket(ticket: TicketApiResponse): Ticket {
  return {
    id: ticket.id,
    createdAt: ticket.createdAt,
    updatedAt: ticket.updatedAt,
    ticketId: ticket.ticketId,
    userId: ticket.userId,
    subject: ticket.subject,
    category: ticket.category,
    priority: normalizeTicketPriority(ticket.priority),
    status: normalizeTicketStatus(ticket.status),
    isEscalated: ticket.isEscalated,
    messages: (ticket.messages ?? []).map(normalizeTicketMessage),
  };
}

async function getTickets(): Promise<TicketsResult> {
  try {
    const response = await apiClient.get<TicketsListApiResponse>("/tickets");

    return {
      tickets: (response.data.data ?? []).map(normalizeTicket),
      pagination: response.data.pagination,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function createTicket(payload: CreateTicketPayload): Promise<Ticket | null> {
  try {
    const response = await apiClient.post<TicketCreateApiResponse>("/tickets", payload);
    return response.data.data ? normalizeTicket(response.data.data) : null;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getTicketById(ticketId: string): Promise<Ticket> {
  try {
    const response = await apiClient.get<TicketDetailApiResponse>(`/tickets/${ticketId}`);
    return normalizeTicket(response.data.data);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function addTicketMessage(ticketId: string, payload: AddTicketMessagePayload): Promise<void> {
  try {
    await apiClient.post(`/tickets/${ticketId}/messages`, payload);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const ticketService = {
  addTicketMessage,
  createTicket,
  getTicketById,
  getTickets,
};