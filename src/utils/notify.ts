import { toast } from "sonner";
import { getApiErrorMessage } from "@/services/http/api-error";

// Errors that follow a 401 (cart sync, wishlist sync, profile fetch, etc.)
// are usually the same expiry cascading through several in-flight requests.
// Suppress them briefly so the user sees one clear "signed out" warning
// instead of a stack of red toasts on top of it.
const SESSION_EXPIRED_SUPPRESSION_MS = 3000;
let sessionExpiredAt: number | null = null;

/**
 * Show a warning toast informing the user their session has ended.
 * Called by the api-client interceptor when a 401 is observed for a
 * previously-authenticated user.
 */
export function notifySessionExpired(): void {
  sessionExpiredAt = Date.now();
  toast.warning("You've been signed out. Please sign in again to continue.");
}

function recentlyExpired(): boolean {
  return (
    sessionExpiredAt !== null &&
    Date.now() - sessionExpiredAt < SESSION_EXPIRED_SUPPRESSION_MS
  );
}

/**
 * Show an error toast, extracting a readable message from any thrown error.
 * Returns the displayed message in case the caller also needs it, or
 * `undefined` if the toast was suppressed (e.g. right after a session expiry).
 */
export function notifyError(
  error: unknown,
  fallbackMessage?: string,
): string | undefined {
  if (recentlyExpired()) {
    return undefined;
  }

  const message = getApiErrorMessage(error);
  const display =
    fallbackMessage && message === "Something went wrong."
      ? fallbackMessage
      : message;

  toast.error(display);
  return display;
}

/** Show a success toast. */
export function notifySuccess(message: string): void {
  toast.success(message);
}
