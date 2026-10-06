"use client";

import { useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock3, CreditCard, ReceiptText } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { orderService } from "@/services/orders/order.service";
import type { OrdersPagination, PaymentHistoryItem } from "@/services/orders/order.types";
import { notifyError } from "@/utils/notify";

const PAYMENT_DATE_FORMAT_OPTIONS = {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
} as const;

// Looks up the translated label for a raw status/method value, falling back
// to the untranslated value itself (interpolated) for anything outside the
// known set — mirrors `resolveCategoryLabel` for `shopCategories`. The raw
// value used for styling/comparisons elsewhere is never altered.
function resolveEnumLabel(
  t: ReturnType<typeof useTranslations>,
  scope: "orderStatus" | "paymentStatus",
  rawValue: string,
) {
  const key = `${scope}.${rawValue.toLowerCase()}`;
  return t.has(key) ? t(key) : t(`${scope}.fallback`, { status: rawValue });
}

function resolvePaymentMethodLabel(
  t: ReturnType<typeof useTranslations>,
  rawValue: string,
) {
  const key = `paymentMethod.${rawValue}`;
  return t.has(key) ? t(key) : t("paymentMethod.fallback", { method: rawValue });
}

function getPaymentStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "failed":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-amber-50 text-amber-700 border-amber-200";
  }
}

function getOrderStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "confirmed":
    case "delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "cancelled":
    case "canceled":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-zinc-100 text-zinc-700 border-zinc-200";
  }
}

export default function PaymentHistoryPage() {
  const t = useTranslations("PaymentsHistoryPage");
  const format = useFormatter();
  const [payments, setPayments] = useState<PaymentHistoryItem[]>([]);
  const [pagination, setPagination] = useState<OrdersPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPaymentHistory() {
      setIsLoading(true);

      try {
        const response = await orderService.getPaymentHistory();

        if (!isMounted) {
          return;
        }

        setPayments(response.data);
        setPagination(response.pagination);
        setLoadFailed(false);
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setPayments([]);
        setPagination(null);
        setLoadFailed(true);
        notifyError(loadError);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadPaymentHistory();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">{t("eyebrow")}</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">{t("heading")}</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              {t("subtitle")}
            </p>
          </div>

          <Link
            href="/orders"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
          >
            {t("viewOrders")}
          </Link>
        </div>

        <section className="mt-8 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
          {isLoading ? <p className="text-sm font-medium text-foreground/60">{t("loading")}</p> : null}
          {!isLoading && loadFailed ? (
            <div className="rounded-[28px] border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700">
              {t("loadError")}
            </div>
          ) : null}

          {!isLoading && !loadFailed && payments.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 text-deep">
                <ReceiptText className="h-6 w-6" />
              </div>
              <h2 className="display-font mt-5 text-3xl text-deep">{t("emptyTitle")}</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/65">
                {t("emptyBody")}
              </p>
              <Link
                href="/shop"
                className="cta-sweep mt-6 inline-flex items-center justify-center border border-deep bg-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep"
              >
                <span className="relative z-10">{t("shopNow")}</span>
              </Link>
            </div>
          ) : null}

          {!isLoading && payments.length > 0 ? (
            <div className="space-y-5">
              {payments.map((payment) => (
                <article key={`${payment.orderId}-${payment.sessionId}`} className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,248,245,0.94)_100%)] p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{payment.orderNumber}</p>
                      <Link href={`/orders/${payment.orderId}`} className="mt-2 block text-2xl font-bold text-deep transition hover:text-gold">
                        {t("paymentForOrder", { orderNumber: payment.orderNumber })}
                      </Link>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground/58">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-4 w-4" />
                          {format.dateTime(new Date(payment.createdAt), PAYMENT_DATE_FORMAT_OPTIONS)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CreditCard className="h-4 w-4" />
                          {resolvePaymentMethodLabel(t, payment.paymentMethod)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getPaymentStatusClass(payment.paymentStatus)}`}>
                        {resolveEnumLabel(t, "paymentStatus", payment.paymentStatus)}
                      </span>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getOrderStatusClass(payment.orderStatus)}`}>
                        {resolveEnumLabel(t, "orderStatus", payment.orderStatus)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 rounded-[22px] border border-foreground/10 bg-white p-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{t("sessionIdLabel")}</p>
                      <p className="mt-2 break-all text-sm text-foreground/62">{payment.sessionId}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{t("transactionIdLabel")}</p>
                      <p className="mt-2 break-all text-sm text-foreground/62">{payment.transactionId ?? t("notAvailableYet")}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-foreground/10 pt-4 text-sm text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
                    {/* <span>
                      Amount <PriceDisplay value={payment.amount} className="font-semibold text-deep" />
                    </span> */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <span>{t("updatedOn", { date: format.dateTime(new Date(payment.updatedAt), PAYMENT_DATE_FORMAT_OPTIONS) })}</span>
                      <Link href={`/orders/${payment.orderId}`} className="font-bold text-deep transition hover:text-gold">
                        {t("viewOrder")}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {pagination ? (
            <div className="mt-6 border-t border-foreground/10 pt-4 text-sm text-foreground/58">
              {t("paginationSummary", {
                currentPage: pagination.currentPage,
                totalPages: pagination.totalPages,
                totalRecords: pagination.totalRecords,
              })}
            </div>
          ) : null}
        </section>
      </main>
    </AuthGuard>
  );
}