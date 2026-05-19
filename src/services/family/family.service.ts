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
