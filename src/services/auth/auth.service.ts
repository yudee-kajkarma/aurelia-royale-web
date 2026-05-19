import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type {
  ApiResponse,
  AuthSession,
  LoginRequest,
  ResetPasswordRequest,
  RegisterRequest,
  SendOtpRequest,
  VerifyOtpRequest,
} from "@/services/auth/auth.types";

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

async function register(payload: RegisterRequest) {
  try {
    const response = await apiClient.post<ApiResponse<unknown>>("/users/register", payload);

    return {
      email: payload.email,
      message: response.data.message,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function verifyOtp(payload: VerifyOtpRequest) {
  try {
    const response = await apiClient.post<ApiResponse<AuthSession>>("/users/verify-otp", payload);
    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function sendOtp(payload: SendOtpRequest) {
  try {
    const response = await apiClient.post<ApiResponse<unknown>>("/users/send-otp", payload);

    return {
      message: response.data.message,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function resetPassword(payload: ResetPasswordRequest) {
  try {
    const response = await apiClient.post<ApiResponse<unknown>>("/users/reset-password", payload);

    return {
      message: response.data.message,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const authService = {
  login,
  logout,
  resetPassword,
  register,
  sendOtp,
  verifyOtp,
};