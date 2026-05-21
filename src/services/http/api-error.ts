import axios from "axios";

/**
 * Extracts a human-readable message from an API error.
 *
 * Backend error shape: { success: false, error: { code, message } }.
 * A few endpoints return a flat `message` instead, so both are handled.
 */
export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;
    const nestedError = data?.error;

    return (
      (typeof nestedError === "object" ? nestedError?.message : nestedError) ??
      data?.message ??
      error.message ??
      "Something went wrong."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  // Redux thunks reject with a plain string via rejectWithValue.
  if (typeof error === "string" && error.trim()) {
    return error;
  }

  return "Something went wrong.";
}
