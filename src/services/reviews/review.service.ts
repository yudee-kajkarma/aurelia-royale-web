import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type {
  ProductReview,
  ProductReviewsResponse,
  ReviewMutationPayload,
} from "@/services/reviews/review.types";

function getApiBaseUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL or API_BASE_URL environment variable.");
  }

  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

function createApiUrl(path: string) {
  return new URL(path.replace(/^\//, ""), getApiBaseUrl()).toString();
}

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

async function getReviews(productId: string) {
  try {
    const response = await apiClient.get<ProductReviewsResponse>(`/reviews/${productId}`);

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getPublicReviews(productId: string) {
  const response = await fetch(createApiUrl(`/reviews/${productId}`), {
    cache: "no-store",
  });

  if (response.status === 404) {
    return {
      reviews: [],
      pagination: {
        current: 1,
        total: 1,
        limit: 10,
        totalReviews: 0,
      },
    };
  }

  if (!response.ok) {
    throw new Error(`Request failed for /reviews/${productId}: ${response.status} ${response.statusText}`);
  }

  const payload = (await response.json()) as ProductReviewsResponse;

  return payload.data;
}

async function createReview(productId: string, payload: ReviewMutationPayload) {
  try {
    const response = await apiClient.post<{ data: ProductReview }>(`/reviews/${productId}`, payload);

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateReview(reviewId: string, payload: ReviewMutationPayload) {
  try {
    const response = await apiClient.put<{ data: ProductReview }>(`/reviews/${reviewId}`, payload);

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function deleteReview(reviewId: string) {
  try {
    await apiClient.delete(`/reviews/${reviewId}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const reviewService = {
  getReviews,
  getPublicReviews,
  createReview,
  updateReview,
  deleteReview,
};
