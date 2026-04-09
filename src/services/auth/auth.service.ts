import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type {
  ApiResponse,
  AuthSession,
  LoginRequest,
} from "@/services/auth/auth.types";

function getApiErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message ??
      "Something went wrong."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

async function login(payload: LoginRequest) {
  try {
    const response = await apiClient.post<ApiResponse<AuthSession>>(
      "/users/login",
      payload,
    );

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function logout() {
  try {
    await apiClient.post("/users/logout");
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const authService = {
  login,
  logout,
};