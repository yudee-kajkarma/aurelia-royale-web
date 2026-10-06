import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type {
  FamilyInviteResult,
  FamilyOverview,
  FamilyRelation,
  FamilySearchResult,
} from "@/services/family/family.types";

type ApiEnvelope<T> = {
  success: boolean;
  code: string;
  message: string;
  data?: T;
  error?: { code: string; message: string };
};

// i18n note (Task 10c2): resolves the carry-forward left by Task 10a.
// FAMILY_REQUEST_FAILED is a stable, non-prose sentinel — not real
// user-facing copy — used only for the rare case where neither the
// backend error envelope nor a native Error carries a message (e.g. a
// network failure with no response body). This is a plain .ts service
// module with no component tree or request scope, so it cannot call
// useTranslations/getTranslations itself (same constraint documented on
// header.data.ts). The only consumer, FamilySection.tsx, maps this exact
// sentinel to a translated string (FamilySection.genericRequestFailed) at
// the point of render. Any other message that reaches here — a real
// backend `body.message`, or a thrown Error's own `.message` — is a
// genuine server/error message and is passed through unchanged; it must
// never be swallowed behind the translated fallback.
export const FAMILY_REQUEST_FAILED = "FAMILY_REQUEST_FAILED";

function getFamilyError(error: unknown): { code?: string; message: string } {
  if (axios.isAxiosError(error)) {
    const body = error.response?.data as ApiEnvelope<unknown> | undefined;
    if (body?.error) {
      return { code: body.error.code, message: body.error.message };
    }
    return { message: body?.message ?? error.message ?? FAMILY_REQUEST_FAILED };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: FAMILY_REQUEST_FAILED };
}

export class FamilyApiError extends Error {
  code?: string;
  constructor(message: string, code?: string) {
    super(message);
    this.code = code;
  }
}

async function getFamily(): Promise<FamilyOverview> {
  try {
    const response = await apiClient.get<ApiEnvelope<FamilyOverview>>("/family");
    if (!response.data.data) {
      throw new FamilyApiError("Empty family response");
    }
    return response.data.data;
  } catch (error) {
    const { message, code } = getFamilyError(error);
    throw new FamilyApiError(message, code);
  }
}

async function searchEligibleMember(email: string): Promise<FamilySearchResult> {
  try {
    const response = await apiClient.post<ApiEnvelope<FamilySearchResult>>("/family/search", { email });
    if (!response.data.data) {
      throw new FamilyApiError("Empty search response");
    }
    return response.data.data;
  } catch (error) {
    const { message, code } = getFamilyError(error);
    throw new FamilyApiError(message, code);
  }
}

async function sendInvite(email: string, relation: FamilyRelation): Promise<FamilyInviteResult> {
  try {
    const response = await apiClient.post<ApiEnvelope<FamilyInviteResult>>("/family/invite", {
      email,
      relation,
    });
    if (!response.data.data) {
      throw new FamilyApiError("Empty invite response");
    }
    return response.data.data;
  } catch (error) {
    const { message, code } = getFamilyError(error);
    throw new FamilyApiError(message, code);
  }
}

async function verifyInvite(email: string, otp: string): Promise<FamilyOverview> {
  try {
    const response = await apiClient.post<ApiEnvelope<FamilyOverview>>("/family/verify", {
      email,
      otp,
    });
    if (!response.data.data) {
      throw new FamilyApiError("Empty verify response");
    }
    return response.data.data;
  } catch (error) {
    const { message, code } = getFamilyError(error);
    throw new FamilyApiError(message, code);
  }
}

export const familyService = {
  getFamily,
  searchEligibleMember,
  sendInvite,
  verifyInvite,
};
