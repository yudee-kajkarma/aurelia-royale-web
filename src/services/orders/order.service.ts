import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type {
  CancelOrderResponse,
  CreateOrderPayload,
  CreateOrderResponse,
  GetPaymentHistoryResponse,
  GetOrderByIdResponse,
  GetOrdersResponse,
  RegenerateOrderPaymentPayload,
  RegenerateOrderPaymentResponse,
} from "@/services/orders/order.types";

function getApiErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "Something went wrong.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

async function createOrder(payload: CreateOrderPayload) {
  try {
    const response = await apiClient.post<CreateOrderResponse>("/orders", payload);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getOrders() {
  try {
    const response = await apiClient.get<GetOrdersResponse>("/orders");
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getOrderById(orderId: string) {
  try {
    const response = await apiClient.get<GetOrderByIdResponse>(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function regenerateOrderPayment(orderId: string, payload: RegenerateOrderPaymentPayload) {
  try {
    const response = await apiClient.post<RegenerateOrderPaymentResponse>(`/orders/${orderId}/regenerate-payment`, payload);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function cancelOrder(orderId: string) {
  try {
    const response = await apiClient.delete<CancelOrderResponse>(`/orders/${orderId}/cancel`);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getPaymentHistory() {
  try {
    const response = await apiClient.get<GetPaymentHistoryResponse>("/orders/payments/history");
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const orderService = {
  cancelOrder,
  createOrder,
  getPaymentHistory,
  getOrderById,
  getOrders,
  regenerateOrderPayment,
};