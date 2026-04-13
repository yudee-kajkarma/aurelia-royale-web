"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { reviewService } from "@/services/reviews/review.service";
import type { ProductReview } from "@/services/reviews/review.types";
import type { ProductDetail } from "@/services/products/product.types";

type ProductDetailsTabsProps = {
  product: ProductDetail;
  initialReviews: ProductReview[];
};

type TabKey = "details" | "specifications" | "reviews";

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "details", label: "Product Details" },
  { key: "specifications", label: "Specifications" },
  { key: "reviews", label: "Review" },
];

function formatReviewDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[var(--gold)]" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.max(0, Math.min(1, rating - index));

        return (
          <span key={index} className="relative inline-block text-xl leading-none">
            <span className="text-white/15">★</span>
            <span
              className="absolute left-0 top-0 overflow-hidden text-[var(--gold)]"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function ProductDetailsTabs({ product, initialReviews }: ProductDetailsTabsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isReady } = useAuth();
  const [activeTab, setActiveTab] = useState<TabKey>("details");
  const [reviews, setReviews] = useState<ProductReview[]>(initialReviews);
  const [isLoadingReviews, setIsLoadingReviews] = useState(initialReviews.length === 0);
  const [reviewsError, setReviewsError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");

  const loadReviews = useCallback(async () => {
    setIsLoadingReviews(true);
    setReviewsError(null);

    try {
      const response = await reviewService.getReviews(product.id);
      setReviews(response.reviews);
    } catch (error) {
      setReviewsError(error instanceof Error ? error.message : "Unable to load reviews.");
    } finally {
      setIsLoadingReviews(false);
    }
  }, [product.id]);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  const editableReview = reviews.find((item) => item.isEditable) ?? null;
  const hasOwnReview = Boolean(editableReview);
  const reviewCount = reviews.length > 0 ? reviews.length : product.reviews_count;

  useEffect(() => {
    if (!editableReview || editingReviewId) {
      return;
    }

    setRating(String(editableReview.rating));
    setComment(editableReview.comment);
  }, [editableReview, editingReviewId]);

  function handleRequireLogin() {
    const redirectPath = pathname ?? `/shop-details/${product.slug}`;
    router.push(`/login?redirect=${encodeURIComponent(redirectPath)}`);
  }

  function startEditing(review: ProductReview) {
    setEditingReviewId(review.id);
    setRating(String(review.rating));
    setComment(review.comment);
    setActiveTab("reviews");
  }

  function resetForm() {
    setEditingReviewId(null);
    setRating(hasOwnReview && editableReview ? String(editableReview.rating) : "5");
    setComment(hasOwnReview && editableReview ? editableReview.comment : "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isAuthenticated) {
      handleRequireLogin();
      return;
    }

    const numericRating = Number(rating);

    if (!numericRating || numericRating < 1 || numericRating > 5) {
      setReviewsError("Rating must be between 1 and 5.");
      return;
    }

    if (!comment.trim()) {
      setReviewsError("Comment is required.");
      return;
    }

    setIsSubmitting(true);
    setReviewsError(null);

    try {
      if (editingReviewId) {
        await reviewService.updateReview(editingReviewId, { rating: numericRating, comment: comment.trim() });
      } else {
        if (hasOwnReview) {
          setReviewsError("You have already reviewed this product.");
          return;
        }

        await reviewService.createReview(product.id, { rating: numericRating, comment: comment.trim() });
      }

      await loadReviews();
      resetForm();
    } catch (error) {
      setReviewsError(error instanceof Error ? error.message : "Unable to save review.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(reviewId: string) {
    setIsSubmitting(true);
    setReviewsError(null);

    try {
      await reviewService.deleteReview(reviewId);
      await loadReviews();
      resetForm();
    } catch (error) {
      setReviewsError(error instanceof Error ? error.message : "Unable to delete review.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-[#20252f]">
      <div className="flex flex-wrap items-center gap-12 border-b border-[#20252f] px-6 py-6 text-xl font-extrabold uppercase">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={isActive ? "text-[var(--gold)]" : "text-[#a6a7ab] transition hover:text-white"}
            >
              {tab.key === "reviews" ? `${tab.label} (${reviewCount})` : tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "details" ? (
        <div className="bg-[#0f1623] px-8 py-12 text-[#8f9195] sm:px-12">
          <h3 className="text-xl font-bold text-white">Product Overview</h3>
          <p className="mt-8 max-w-6xl text-[1.1rem] font-semibold leading-9">{product.description}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Vendor</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.vendor}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Category</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.category}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">SKU</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.sku}</p>
            </div>
          </div>

          {product.videoUrls.length > 0 || product.certificateUrls.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.videoUrls.length > 0 ? (
                <div className="border border-white/8 bg-white/2 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Product Video</p>
                  <a href={product.videoUrls[0]} target="_blank" rel="noreferrer" className="mt-3 inline-block text-base font-semibold text-white underline decoration-[var(--gold)] underline-offset-4">
                    View product video
                  </a>
                </div>
              ) : null}
              {product.certificateUrls.length > 0 ? (
                <div className="border border-white/8 bg-white/2 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Certificate File</p>
                  <a href={product.certificateUrls[0]} target="_blank" rel="noreferrer" className="mt-3 inline-block text-base font-semibold text-white underline decoration-[var(--gold)] underline-offset-4">
                    Open certificate
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}

          {product.tags.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {product.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/75">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {activeTab === "specifications" ? (
        <div className="bg-[#0f1623] px-8 py-12 text-[#8f9195] sm:px-12">
          <h3 className="text-xl font-bold text-white">Why Choose This Product?</h3>
          <p className="mt-8 max-w-6xl text-[1.1rem] font-semibold leading-9">{product.details}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <p className="text-[1rem] font-semibold">Stone: {product.stoneType}</p>
            <p className="text-[1rem] font-semibold">Color: {product.color}</p>
            <p className="text-[1rem] font-semibold">Shape: {product.shape}</p>
            <p className="text-[1rem] font-semibold">Carat: {product.carat}</p>
            <p className="text-[1rem] font-semibold">Treatment: {product.treatment}</p>
            <p className="text-[1rem] font-semibold">Diamond Pieces: {product.diamondPcs}</p>
            <p className="text-[1rem] font-semibold">Stock: {product.stock}</p>
            <p className="text-[1rem] font-semibold">Featured: {product.is_featured ? "Yes" : "No"}</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Certificate</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.certificate}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Measurement</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.measurement}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Origin</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.origin}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Treatment</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.treatment}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Stone & Shape</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.stoneType} • {product.shape}</p>
            </div>
            <div className="border border-white/8 bg-white/2 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--gold)]">Color & Carat</p>
              <p className="mt-3 text-lg font-semibold text-white">{product.color} • {product.carat} Ct</p>
            </div>
          </div>
        </div>
      ) : null}

      {activeTab === "reviews" ? (
        <div className="bg-[#0f1623] px-8 py-12 text-[#8f9195] sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-xl font-bold text-white">Customer Reviews</h3>
              {isLoadingReviews ? <p className="mt-6 text-base font-semibold">Loading reviews...</p> : null}
              {reviewsError ? <p className="mt-6 border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200">{reviewsError}</p> : null}
              {!isLoadingReviews && reviews.length === 0 ? (
                <p className="mt-6 text-base font-semibold">No reviews yet. Be the first to review this product.</p>
              ) : null}

              <div className="mt-6 space-y-4">
                {reviews.map((review) => (
                  <article key={review.id} className="border border-white/8 bg-white/3 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold text-white">{review.reviewerName}</p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#8f9195]">{formatReviewDate(review.createdAt)}</p>
                      </div>
                      <Stars rating={review.rating} />
                    </div>
                    <p className="mt-4 text-base font-semibold leading-8">{review.comment}</p>
                    {review.isEditable ? (
                      <div className="mt-4 flex gap-3">
                        <button
                          type="button"
                          onClick={() => startEditing(review)}
                          className="border border-[var(--gold)] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--gold)]"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => void handleDelete(review.id)}
                          className="border border-red-300/40 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-red-200 disabled:opacity-60"
                        >
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div className="border border-white/8 bg-white/3 p-6">
              <h3 className="text-xl font-bold text-white">{editingReviewId ? "Edit Your Review" : "Write A Review"}</h3>
              {!isReady ? <p className="mt-4 text-sm font-semibold">Checking session...</p> : null}
              {isReady && !isAuthenticated ? (
                <div className="mt-4 space-y-4">
                  <p className="text-sm font-semibold leading-7">You need to log in before you can review this product.</p>
                  <button
                    type="button"
                    onClick={handleRequireLogin}
                    className="bg-[var(--gold)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#1a1710]"
                  >
                    Login First
                  </button>
                </div>
              ) : null}

              {isReady && isAuthenticated ? (
                <>
                  {!editingReviewId && hasOwnReview ? (
                    <p className="mt-4 text-sm font-semibold leading-7">
                      You can keep only one review for this product. Use edit to update your existing review.
                    </p>
                  ) : (
                    <p className="mt-4 text-sm font-semibold leading-7">Share your experience with this product.</p>
                  )}

                  <form className="mt-6 grid gap-4" onSubmit={(event) => void handleSubmit(event)}>
                    <label className="grid gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#8f9195]">Rating</span>
                      <select
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                        disabled={!editingReviewId && hasOwnReview}
                        className="h-12 border border-white/10 bg-[#0d1420] px-4 text-sm font-semibold text-white outline-none disabled:opacity-60"
                      >
                        {[5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="grid gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#8f9195]">Comment</span>
                      <textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        rows={6}
                        disabled={!editingReviewId && hasOwnReview}
                        className="border border-white/10 bg-[#0d1420] px-4 py-3 text-sm font-semibold leading-7 text-white outline-none disabled:opacity-60"
                        placeholder="Write your review here"
                      />
                    </label>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting || (!editingReviewId && hasOwnReview)}
                        className="bg-[var(--gold)] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-[#1a1710] disabled:opacity-60"
                      >
                        {isSubmitting ? "Saving..." : editingReviewId ? "Update Review" : "Submit Review"}
                      </button>
                      {editingReviewId ? (
                        <button
                          type="button"
                          onClick={resetForm}
                          className="border border-white/15 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white"
                        >
                          Cancel
                        </button>
                      ) : null}
                    </div>
                  </form>
                </>
              ) : null}

              {isReady && !isAuthenticated ? (
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#8f9195]">
                  Need an account? <Link href="/login" className="text-[var(--gold)]">Login</Link>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
