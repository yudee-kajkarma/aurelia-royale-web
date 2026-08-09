export type UserRole = "USER" | "ADMIN" | "SUPER_ADMIN";

/** Roles with admin-area access. SUPER_ADMIN is a strict superset of ADMIN. */
export const ADMIN_ROLES: ReadonlyArray<UserRole> = ["ADMIN", "SUPER_ADMIN"];

export function isAdminRole(role: UserRole | null | undefined): boolean {
  return role === "ADMIN" || role === "SUPER_ADMIN";
}

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

export type AddressPayload = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  addressType: string;
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  countryCode?: string;
  address?: AddressPayload;
  defaultAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
};

export type VerifyOtpRequest = {
  email: string;
  otp: string;
};

export type SendOtpRequest = {
  email: string;
  purpose: "register" | "password_reset";
};

export type ResetPasswordRequest = {
  email: string;
  otp: string;
  newPassword: string;
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
  return isAdminRole(role) ? "/admin/products" : "/";
}

export function getSafeAuthRedirect(role: UserRole, requestedPath: string | null) {
  if (!requestedPath || !requestedPath.startsWith("/")) {
    return getDefaultRouteForRole(role);
  }

  if (!isAdminRole(role) && requestedPath.startsWith("/admin")) {
    return getDefaultRouteForRole(role);
  }

  return requestedPath;
}