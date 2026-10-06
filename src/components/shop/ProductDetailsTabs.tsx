"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { reviewService } from "@/services/reviews/review.service";
import type { ProductReview } from "@/services/reviews/review.types";
import type { ProductDetail } from "@/services/products/product.types";

type ProductDetailsTabsProps = {
    product: ProductDetail;
    initialReviews: ProductReview[];
};

type TabKey = "details" | "specifications" | "reviews";

const TAB_KEYS: TabKey[] = ["details", "specifications", "reviews"];

const REVIEW_DATE_FORMAT_OPTIONS = {
    year: "numeric",
    month: "short",
    day: "numeric",
} as const;

function Stars({ rating, label }: { rating: number; label: string }) {
    return (
        <div
            className="flex items-center gap-1 text-gold"
            aria-label={label}
        >
            {Array.from({ length: 5 }, (_, index) => {
                const fill = Math.max(0, Math.min(1, rating - index));

                return (
                    <span
                        key={index}
                        className="relative inline-block text-base leading-none"
                    >
                        <span className="text-gold/25">★</span>
                        <span
                            className="absolute left-0 top-0 overflow-hidden text-gold"
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

function MetaCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="border border-deep/10 bg-[#f8f3e7] p-5">
            <p className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                {label}
            </p>
            <p className="font-jost mt-3 text-sm font-semibold uppercase tracking-[0.04em] text-deep">
                {value || "—"}
            </p>
        </div>
    );
}

export function ProductDetailsTabs({
    product,
    initialReviews,
}: ProductDetailsTabsProps) {
    const t = useTranslations("ProductDetailsTabs");
    const format = useFormatter();
    const pathname = usePathname();
    const router = useRouter();
    const { isAuthenticated, isReady } = useAuth();
    const [activeTab, setActiveTab] = useState<TabKey>("details");
    const [reviews, setReviews] = useState<ProductReview[]>(initialReviews);
    const [isLoadingReviews, setIsLoadingReviews] = useState(
        initialReviews.length === 0,
    );
    const [reviewsError, setReviewsError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editingReviewId, setEditingReviewId] = useState<string | null>(
        null,
    );
    const [rating, setRating] = useState("5");
    const [comment, setComment] = useState("");

    const loadReviews = useCallback(async () => {
        setIsLoadingReviews(true);
        setReviewsError(null);

        try {
            const response = await reviewService.getReviews(product.id);
            setReviews(response.reviews);
        } catch (error) {
            setReviewsError(
                error instanceof Error
                    ? error.message
                    : t("unableToLoadReviews"),
            );
        } finally {
            setIsLoadingReviews(false);
        }
    }, [product.id, t]);

    useEffect(() => {
        void loadReviews();
    }, [loadReviews]);

    const editableReview =
        reviews.find((item) => item.isEditable) ?? null;
    const hasOwnReview = Boolean(editableReview);
    const reviewCount =
        reviews.length > 0 ? reviews.length : product.reviews_count;

    useEffect(() => {
        if (!editableReview || editingReviewId) {
            return;
        }

        setRating(String(editableReview.rating));
        setComment(editableReview.comment);
    }, [editableReview, editingReviewId]);

    function handleRequireLogin() {
        const redirectPath =
            pathname ?? `/shop-details/${product.slug}`;
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
        setRating(
            hasOwnReview && editableReview
                ? String(editableReview.rating)
                : "5",
        );
        setComment(
            hasOwnReview && editableReview ? editableReview.comment : "",
        );
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isAuthenticated) {
            handleRequireLogin();
            return;
        }

        const numericRating = Number(rating);

        if (
            !numericRating ||
            numericRating < 1 ||
            numericRating > 5
        ) {
            setReviewsError(t("ratingRangeError"));
            return;
        }

        if (!comment.trim()) {
            setReviewsError(t("commentRequired"));
            return;
        }

        setIsSubmitting(true);
        setReviewsError(null);

        try {
            if (editingReviewId) {
                await reviewService.updateReview(editingReviewId, {
                    rating: numericRating,
                    comment: comment.trim(),
                });
            } else {
                if (hasOwnReview) {
                    setReviewsError(t("alreadyReviewed"));
                    return;
                }

                await reviewService.createReview(product.id, {
                    rating: numericRating,
                    comment: comment.trim(),
                });
            }

            await loadReviews();
            resetForm();
        } catch (error) {
            setReviewsError(
                error instanceof Error
                    ? error.message
                    : t("unableToSaveReview"),
            );
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
            setReviewsError(
                error instanceof Error
                    ? error.message
                    : t("unableToDeleteReview"),
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    const fieldClasses =
        "font-jost border border-deep/20 bg-transparent px-4 text-sm font-medium text-deep placeholder:text-deep/35 focus:border-gold focus:outline-none";

    return (
        <div>
            <div
                role="tablist"
                aria-label={t("sectionsLabel")}
                className="flex flex-wrap items-center gap-x-10 gap-y-3 border-b border-deep/15 pb-3"
            >
                {TAB_KEYS.map((key) => {
                    const isActive = activeTab === key;
                    const label =
                        key === "details"
                            ? t("tabDetails")
                            : key === "specifications"
                              ? t("tabSpecifications")
                              : t("tabReviews");

                    return (
                        <button
                            key={key}
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => setActiveTab(key)}
                            className={`font-jost relative -mb-3 pb-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] transition ${
                                isActive
                                    ? "text-gold after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:bg-gold"
                                    : "text-deep/70 hover:text-deep"
                            }`}
                        >
                            {key === "reviews"
                                ? `${label} (${reviewCount})`
                                : label}
                        </button>
                    );
                })}
            </div>

            {activeTab === "details" ? (
                <div className="pt-10">
                    <h3 className="font-cormorant text-3xl font-medium text-deep sm:text-4xl">
                        {t("productOverview")}
                    </h3>
                    <p className="font-jost mt-6 max-w-4xl text-[0.95rem] leading-7 text-deep/75 sm:text-base">
                        {product.description}
                    </p>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <MetaCard label={t("vendor")} value={product.vendor} />
                        <MetaCard
                            label={t("category")}
                            value={product.category}
                        />
                        <MetaCard label={t("sku")} value={product.sku} />
                    </div>

                    {product.videoUrls.length > 0 ||
                    product.certificateUrls.length > 0 ? (
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {product.videoUrls.length > 0 ? (
                                <div className="border border-deep/10 bg-[#f8f3e7] p-5">
                                    <p className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                                        {t("productVideo")}
                                    </p>
                                    <a
                                        href={product.videoUrls[0]}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-jost mt-3 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-deep underline decoration-gold underline-offset-4 hover:text-gold"
                                    >
                                        {t("viewProductVideo")}
                                    </a>
                                </div>
                            ) : null}
                            {product.certificateUrls.length > 0 ? (
                                <div className="border border-deep/10 bg-[#f8f3e7] p-5">
                                    <p className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold">
                                        {t("certificateFile")}
                                    </p>
                                    <a
                                        href={product.certificateUrls[0]}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-jost mt-3 inline-block text-sm font-semibold uppercase tracking-[0.08em] text-deep underline decoration-gold underline-offset-4 hover:text-gold"
                                    >
                                        {t("openCertificate")}
                                    </a>
                                </div>
                            ) : null}
                        </div>
                    ) : null}

                    {product.tags.length > 0 ? (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-jost border border-deep/15 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-deep/70"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : null}

            {activeTab === "specifications" ? (
                <div className="pt-10">
                    <h3 className="font-cormorant text-3xl font-medium text-deep sm:text-4xl">
                        {t("whyChooseThisProduct")}
                    </h3>
                    <p className="font-jost mt-6 max-w-4xl text-[0.95rem] leading-7 text-deep/75 sm:text-base">
                        {product.details}
                    </p>

                    <ul className="font-jost mt-10 grid gap-x-10 gap-y-3 border-y border-deep/10 py-6 text-sm text-deep/80 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("stone")}
                            </span>{" "}
                            {product.stoneType}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("colour")}
                            </span>{" "}
                            {product.color}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("shape")}
                            </span>{" "}
                            {product.shape}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("carat")}
                            </span>{" "}
                            {product.carat}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("treatment")}
                            </span>{" "}
                            {product.treatment}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("diamondPieces")}
                            </span>{" "}
                            {product.diamondPcs}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("stock")}
                            </span>{" "}
                            {product.stock}
                        </li>
                        <li>
                            <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                {t("featured")}
                            </span>{" "}
                            {product.is_featured ? t("yes") : t("no")}
                        </li>
                    </ul>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <MetaCard
                            label={t("certificate")}
                            value={product.certificate}
                        />
                        <MetaCard
                            label={t("measurement")}
                            value={product.measurement}
                        />
                        <MetaCard label={t("origin")} value={product.origin} />
                        <MetaCard
                            label={t("treatment")}
                            value={product.treatment}
                        />
                        <MetaCard
                            label={t("stoneAndShape")}
                            value={`${product.stoneType} • ${product.shape}`}
                        />
                        <MetaCard
                            label={t("colourAndCarat")}
                            value={`${product.color} • ${product.carat} Ct`}
                        />
                    </div>
                </div>
            ) : null}

            {activeTab === "reviews" ? (
                <div className="pt-10">
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                        <div>
                            <h3 className="font-cormorant text-3xl font-medium text-deep sm:text-4xl">
                                {t("customerReviews")}
                            </h3>

                            {isLoadingReviews ? (
                                <p className="font-jost mt-6 text-sm text-deep/65">
                                    {t("loadingReviews")}
                                </p>
                            ) : null}

                            {reviewsError ? (
                                <p className="font-jost mt-6 border border-red-500/30 bg-red-50/60 px-4 py-3 text-sm font-medium text-red-700">
                                    {reviewsError}
                                </p>
                            ) : null}

                            {!isLoadingReviews && reviews.length === 0 ? (
                                <p className="font-jost mt-6 text-sm text-deep/65">
                                    {t("noReviewsYet")}
                                </p>
                            ) : null}

                            <div className="mt-6 space-y-4">
                                {reviews.map((review) => (
                                    <article
                                        key={review.id}
                                        className="border border-deep/10 bg-[#f8f3e7] p-5"
                                    >
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <p className="font-jost text-sm font-semibold uppercase tracking-[0.16em] text-deep">
                                                    {review.reviewerName}
                                                </p>
                                                <p className="font-jost mt-1 text-[0.7rem] uppercase tracking-[0.22em] text-deep/55">
                                                    {format.dateTime(
                                                        new Date(review.createdAt),
                                                        REVIEW_DATE_FORMAT_OPTIONS,
                                                    )}
                                                </p>
                                            </div>
                                            <Stars
                                                rating={review.rating}
                                                label={t("ratingOutOf5", {
                                                    rating: review.rating,
                                                })}
                                            />
                                        </div>
                                        <p className="font-jost mt-4 text-[0.95rem] leading-7 text-deep/80">
                                            {review.comment}
                                        </p>
                                        {review.isEditable ? (
                                            <div className="mt-4 flex gap-3">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        startEditing(review)
                                                    }
                                                    className="font-jost inline-flex items-center justify-center border border-gold px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold transition hover:bg-gold/10"
                                                >
                                                    {t("edit")}
                                                </button>
                                                <button
                                                    type="button"
                                                    disabled={isSubmitting}
                                                    onClick={() =>
                                                        void handleDelete(
                                                            review.id,
                                                        )
                                                    }
                                                    className="font-jost inline-flex items-center justify-center border border-red-500/40 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-red-600 transition hover:bg-red-50 disabled:opacity-60"
                                                >
                                                    {t("delete")}
                                                </button>
                                            </div>
                                        ) : null}
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="border border-deep/10 bg-[#f8f3e7] p-6">
                            <h3 className="font-cormorant text-3xl font-medium text-deep">
                                {editingReviewId
                                    ? t("editYourReview")
                                    : t("writeAReview")}
                            </h3>

                            {!isReady ? (
                                <p className="font-jost mt-4 text-sm text-deep/65">
                                    {t("checkingSession")}
                                </p>
                            ) : null}

                            {isReady && !isAuthenticated ? (
                                <div className="mt-4 space-y-4">
                                    <p className="font-jost text-sm leading-7 text-deep/75">
                                        {t("needLoginToReview")}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleRequireLogin}
                                        className="font-jost inline-flex h-12 items-center justify-center bg-deep px-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold transition hover:bg-[#0a2e28]"
                                    >
                                        {t("loginFirst")}
                                    </button>
                                </div>
                            ) : null}

                            {isReady && isAuthenticated ? (
                                <>
                                    {!editingReviewId && hasOwnReview ? (
                                        <p className="font-jost mt-4 text-sm leading-7 text-deep/75">
                                            {t("oneReviewOnly")}
                                        </p>
                                    ) : (
                                        <p className="font-jost mt-4 text-sm leading-7 text-deep/75">
                                            {t("shareExperience")}
                                        </p>
                                    )}

                                    <form
                                        className="mt-6 grid gap-4"
                                        onSubmit={(event) =>
                                            void handleSubmit(event)
                                        }
                                    >
                                        <label className="grid gap-2">
                                            <span className="font-jost text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-deep/55">
                                                {t("rating")}
                                            </span>
                                            <select
                                                value={rating}
                                                onChange={(event) =>
                                                    setRating(
                                                        event.target.value,
                                                    )
                                                }
                                                disabled={
                                                    !editingReviewId &&
                                                    hasOwnReview
                                                }
                                                className={`${fieldClasses} h-12 disabled:opacity-60`}
                                            >
                                                {[
                                                    5, 4.5, 4, 3.5, 3, 2.5,
                                                    2, 1.5, 1,
                                                ].map((value) => (
                                                    <option
                                                        key={value}
                                                        value={value}
                                                    >
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                        <label className="grid gap-2">
                                            <span className="font-jost text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-deep/55">
                                                {t("comment")}
                                            </span>
                                            <textarea
                                                value={comment}
                                                onChange={(event) =>
                                                    setComment(
                                                        event.target.value,
                                                    )
                                                }
                                                rows={6}
                                                disabled={
                                                    !editingReviewId &&
                                                    hasOwnReview
                                                }
                                                className={`${fieldClasses} py-3 leading-7 disabled:opacity-60`}
                                                placeholder={t(
                                                    "writeYourReviewPlaceholder",
                                                )}
                                            />
                                        </label>

                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                type="submit"
                                                disabled={
                                                    isSubmitting ||
                                                    (!editingReviewId &&
                                                        hasOwnReview)
                                                }
                                                className="font-jost inline-flex h-12 items-center justify-center bg-deep px-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold transition hover:bg-[#0a2e28] disabled:opacity-60"
                                            >
                                                {isSubmitting
                                                    ? t("saving")
                                                    : editingReviewId
                                                    ? t("updateReview")
                                                    : t("submitReview")}
                                            </button>
                                            {editingReviewId ? (
                                                <button
                                                    type="button"
                                                    onClick={resetForm}
                                                    className="font-jost inline-flex h-12 items-center justify-center border border-deep/30 px-6 text-xs font-semibold uppercase tracking-[0.28em] text-deep transition hover:border-gold hover:text-gold"
                                                >
                                                    {t("cancel")}
                                                </button>
                                            ) : null}
                                        </div>
                                    </form>
                                </>
                            ) : null}

                            {isReady && !isAuthenticated ? (
                                <p className="font-jost mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-deep/55">
                                    {t("needAccount")}{" "}
                                    <Link
                                        href="/login"
                                        className="text-gold hover:underline"
                                    >
                                        {t("login")}
                                    </Link>
                                </p>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
