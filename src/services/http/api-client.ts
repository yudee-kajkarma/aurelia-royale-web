import axios from "axios";
import {
  clearStoredSession,
  getStoredSession,
} from "@/services/auth/auth.storage";
import { notifySessionExpired } from "@/utils/notify";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const session = getStoredSession();

  if (session?.token) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only warn the user if they were actually signed in — a 401 for an
      // anonymous visitor isn't a session expiry, it's just an auth-required
      // endpoint they shouldn't have reached.
      const hadSession = Boolean(getStoredSession()?.token);
      clearStoredSession();

      if (hadSession) {
        notifySessionExpired();
      }
    }

    return Promise.reject(error);
  },
);

export { apiClient };