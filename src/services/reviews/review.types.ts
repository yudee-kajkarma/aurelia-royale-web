export type ProductReview = {
  id: string;
  createdAt: string;
  updatedAt: string;
  productId: string;
  userId: string;
  username: string;
  userEmail: string;
  rating: number;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
  helpfulCount: number;
  isEditable: boolean;
};

export type ProductReviewsPagination = {
  current: number;
  total: number;
  limit: number;
  totalReviews: number;
};

export type ProductReviewsResponse = {
  success: boolean;
  code: string;
  message: string;
  data: {
    reviews: ProductReview[];
    pagination: ProductReviewsPagination;
  };
};

export type ReviewMutationPayload = {
  rating: number;
  comment: string;
};
