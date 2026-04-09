export type UserRole = "USER" | "ADMIN";

export type AuthUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  email: string;
  status: string;
  role: UserRole;
};

export type AuthSession = {
  user: AuthUser;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type ApiResponse<T> = {
  success: boolean;
  code: string;
  message: string;
  data: T;
};

export const AUTH_STORAGE_KEY = "dalila.auth.session";
export const AUTH_STATE_CHANGE_EVENT = "dalila:auth-state-change";

export function getDefaultRouteForRole(role: UserRole) {
  return role === "ADMIN" ? "/admin" : "/";
}

export function getSafeAuthRedirect(role: UserRole, requestedPath: string | null) {
  if (!requestedPath || !requestedPath.startsWith("/")) {
    return getDefaultRouteForRole(role);
  }

  if (role !== "ADMIN" && requestedPath.startsWith("/admin")) {
    return getDefaultRouteForRole(role);
  }

  return requestedPath;
}