import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type { CreateOrderPayload, CreateOrderResponse } from "@/services/orders/order.types";

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

export const orderService = {
  createOrder,
};