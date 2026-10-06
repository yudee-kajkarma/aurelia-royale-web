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

// i18n note (Task 10a): "Request failed" below is the only string in this
// file that is real user-facing copy (it becomes a FamilyApiError.message
// shown in a toast) — the other "Empty ... response" strings are thrown
// Errors for developers and intentionally stay English. This is a plain
// .ts service module with no component tree or request scope, so it cannot
// call useTranslations/getTranslations itself (same constraint documented
// on header.data.ts). We keep this as literal English text rather than
// swapping in a lookup key (the getCategory/header.data.ts pattern),
// because the only call sites (src/components/profile/family/FamilySection.tsx,
// src/services/family/useDiscount.ts) are outside this slice's scope —
// shipping a bare key now would surface the raw key string in the toast for
// every locale, including English, until those call sites are updated.
// Whichever slice touches FamilySection.tsx / useDiscount.ts should
// translate this exact string via the Toasts namespace at the point the
// toast is rendered.
function getFamilyError(error: unknown): { code?: string; message: string } {
  if (axios.isAxiosError(error)) {
    const body = error.response?.data as ApiEnvelope<unknown> | undefined;
    if (body?.error) {
      return { code: body.error.code, message: body.error.message };
    }
    return { message: body?.message ?? error.message ?? "Request failed" };
  }

  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Request failed" };
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
