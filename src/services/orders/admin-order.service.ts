import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type {
  AdminOrder,
  AdminOrderItem,
  AdminOrderListFilters,
  AdminOrdersPagination,
  AdminOrdersResult,
  AdminOrderStatus,
  AdminShippingAddress,
  UpdateAdminOrderStatusPayload,
  VerifyAdminOrderDeliveryPayload,
} from "@/services/orders/admin-order.types";

type AdminOrderItemApi = Partial<AdminOrderItem> & {
  productId?: string;
  sku?: string;
  title?: string;
  price?: number | string;
  quantity?: number | string;
  thumbnail?: string;
};

type AdminShippingAddressApi = Partial<AdminShippingAddress>;

type AdminOrderApi = Partial<AdminOrder> & {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  orderNumber?: string;
  items?: AdminOrderItemApi[];
  shippingAddress?: AdminShippingAddressApi;
  paymentMethod?: string;
  paymentStatus?: string;
  orderStatus?: string;
  totalAmount?: number | string;
  totalItems?: number | string;
  refundStatus?: string;
};

type AdminOrdersListResponse = {
  success?: boolean;
  code?: string;
  message?: string;
  data?: AdminOrderApi[];
  pagination?: Partial<AdminOrdersPagination>;
};

function getApiErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "Something went wrong.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

function toNumber(value: number | string | undefined, fallback = 0) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : fallback;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  return fallback;
}

function normalizeOrderItem(item: AdminOrderItemApi): AdminOrderItem {
  return {
    productId: item.productId ?? "",
    sku: item.sku ?? "",
    title: item.title ?? "Untitled item",
    price: toNumber(item.price),
    quantity: toNumber(item.quantity),
    thumbnail: item.thumbnail ?? "",
  };
}

function normalizeShippingAddress(address?: AdminShippingAddressApi): AdminShippingAddress {
  return {
    street: address?.street ?? "",
    city: address?.city ?? "",
    state: address?.state ?? "",
    postalCode: address?.postalCode ?? "",
    country: address?.country ?? "",
    isDefault: Boolean(address?.isDefault),
  };
}

function normalizeOrderStatus(status?: string): AdminOrderStatus {
  if (status === "CONFIRMED" || status === "SHIPPED" || status === "DELIVERED" || status === "CANCELLED") {
    return status;
  }

  return "PENDING";
}

function normalizeOrder(order: AdminOrderApi): AdminOrder {
  return {
    id: order.id ?? "",
    createdAt: order.createdAt ?? "",
    updatedAt: order.updatedAt ?? order.createdAt ?? "",
    orderNumber: order.orderNumber ?? "--",
    items: Array.isArray(order.items) ? order.items.map(normalizeOrderItem) : [],
    shippingAddress: normalizeShippingAddress(order.shippingAddress),
    paymentMethod: order.paymentMethod ?? "--",
    paymentStatus: order.paymentStatus ?? "PENDING",
    orderStatus: normalizeOrderStatus(order.orderStatus),
    totalAmount: toNumber(order.totalAmount),
    totalItems: toNumber(order.totalItems),
    refundStatus: order.refundStatus ?? "NONE",
  };
}

function normalizePagination(
  pagination: Partial<AdminOrdersPagination> | undefined,
  itemCount: number,
  page: number,
  limit: number,
): AdminOrdersPagination {
  const totalRecords = toNumber(pagination?.totalRecords, itemCount);
  const recordsPerPage = toNumber(pagination?.recordsPerPage, limit);
  const totalPages = toNumber(pagination?.totalPages, Math.max(1, Math.ceil(totalRecords / Math.max(recordsPerPage, 1))));
  const currentPage = toNumber(pagination?.currentPage, page);

  return {
    currentPage,
    totalPages,
    totalRecords,
    recordsPerPage,
    hasNextPage: typeof pagination?.hasNextPage === "boolean" ? pagination.hasNextPage : currentPage < totalPages,
    hasPrevPage: typeof pagination?.hasPrevPage === "boolean" ? pagination.hasPrevPage : currentPage > 1,
  };
}

async function getAdminOrders(filters: AdminOrderListFilters = {}): Promise<AdminOrdersResult> {
  const page = filters.page ?? 1;
  const limit = filters.limit ?? 20;

  try {
    const response = await apiClient.get<AdminOrdersListResponse>("/orders/admin/all", {
      params: { page, limit },
    });

    const orders = Array.isArray(response.data.data) ? response.data.data.map(normalizeOrder) : [];

    return {
      orders,
      pagination: normalizePagination(response.data.pagination, orders.length, page, limit),
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateAdminOrderStatus(orderId: string, payload: UpdateAdminOrderStatusPayload) {
  try {
    await apiClient.put(`/orders/admin/${orderId}/status`, payload);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function shipAdminOrder(orderId: string) {
  try {
    await apiClient.put(`/orders/admin/${orderId}/ship`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function verifyAdminOrderDelivery(orderId: string, payload: VerifyAdminOrderDeliveryPayload) {
  try {
    await apiClient.post(`/orders/${orderId}/verify-delivery`, payload);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const adminOrderService = {
  getAdminOrders,
  shipAdminOrder,
  updateAdminOrderStatus,
  verifyAdminOrderDelivery,
};