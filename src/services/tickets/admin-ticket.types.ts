import type { ProductsPagination } from "@/services/products/product.types";

export type AdminTicketStatus = "open" | "in_progress" | "waiting_customer" | "resolved" | "closed";

export type AdminTicketPriority = "low" | "medium" | "high" | "urgent";

export type AdminTicketMessage = {
  sender: string;
  senderRole: string;
  message: string;
  attachments: string[];
  createdAt: string;
};

export type AdminTicketSummary = {
  id: string;
  createdAt: string;
  updatedAt: string;
  ticketId: string;
  subject: string;
  category: string;
  priority: AdminTicketPriority;
  isEscalated: boolean;
  status: AdminTicketStatus;
};

export type AdminTicketDetail = AdminTicketSummary & {
  userId: string;
  messages: AdminTicketMessage[];
};

export type AdminTicketsResult = {
  tickets: AdminTicketSummary[];
  pagination: ProductsPagination | null;
};

export type AdminTicketFilters = {
  page?: number;
  limit?: number;
  status?: AdminTicketStatus;
};