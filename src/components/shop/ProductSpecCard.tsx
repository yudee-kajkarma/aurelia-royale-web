import { getFormatter, getTranslations } from "next-intl/server";
import { SpecialDateInfo } from "@/components/shop/SpecialDateInfo";
import type { ProductDetail } from "@/services/products/product.types";

type ProductSpecCardProps = {
    product: ProductDetail;
    /** The special-date offer is an IGI certificate, so it is hidden on pieces IGI does not certify (e.g. watches). */
    showSpecialDate: boolean;
};

type SpecItem = { label: string; value: string };

// The API is untyped at runtime and these fields are new, so accept numeric
// strings and treat blanks or zero as "not provided" (0 FLGD = no FLGD row).
function toPositiveNumber(value: unknown) {
    const number = typeof value === "string" ? Number(value) : value;
    return typeof number === "number" && Number.isFinite(number) && number > 0
        ? number
        : null;
}

function sumKnown(...values: Array<number | null>) {
    const known = values.filter((value): value is number => value !== null);
    return known.length > 0 ? known.reduce((total, value) => total + value, 0) : null;
}

export async function ProductSpecCard({
    product,
    showSpecialDate,
}: ProductSpecCardProps) {
    const t = await getTranslations("ShopDetailsPage");
    const format = await getFormatter();

    const twoDecimals = (value: number) =>
        format.number(value, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    // "10 pcs / 5.04 ct", or whichever half is known.
    const stones = (pcs: number | null, carat: number | null) =>
        [
            pcs !== null ? t("specPieces", { count: pcs }) : null,
            carat !== null ? t("specCarat", { value: twoDecimals(carat) }) : null,
        ]
            .filter(Boolean)
            .join(" / ");

    const wlgdPcs = toPositiveNumber(product.wlgdPcs);
    const wlgdCarat = toPositiveNumber(product.wlgdCarat);
    const flgdPcs = toPositiveNumber(product.flgdPcs);
    const flgdCarat = toPositiveNumber(product.flgdCarat);
    const goldWeight = toPositiveNumber(product.goldWeight);
    const goldKarat = product.goldKarat?.trim() ?? "";
    const certificateNo = product.certificateNo?.trim() ?? "";

    // Left column: the diamond split. Right column: totals. A column with no
    // data is dropped so the divider never sits next to empty space.
    const columns: SpecItem[][] = [
        [
            { label: "WLGD", value: stones(wlgdPcs, wlgdCarat) },
            { label: "FLGD", value: stones(flgdPcs, flgdCarat) },
        ],
        [
            {
                label: t("specTotalDiamonds"),
                value: stones(
                    sumKnown(wlgdPcs, flgdPcs),
                    sumKnown(wlgdCarat, flgdCarat),
                ),
            },
            {
                label: t("specGoldWeight"),
                value: [
                    goldWeight !== null
                        ? t("specGrams", { value: twoDecimals(goldWeight) })
                        : null,
                    goldKarat || null,
                ]
                    .filter(Boolean)
                    .join(" | "),
            },
        ],
    ]
        .map((column) => column.filter((item) => item.value.length > 0))
        .filter((column) => column.length > 0);

    return (
        <section aria-labelledby="product-spec-title" className="mt-10">
            {/* lining-nums: Cormorant defaults to old-style figures, which make "10 pcs / 5.04 ct" read unevenly. */}
            <div className="rounded-2xl border border-gold/50 bg-deep px-5 py-8 text-center lining-nums shadow-[0_24px_48px_-28px_rgba(3,27,22,0.7)] sm:px-10 sm:py-10">
                <h2
                    id="product-spec-title"
                    className="font-cormorant text-[1.75rem] font-semibold leading-tight text-gold sm:text-4xl"
                >
                    {product.title}
                </h2>

                {certificateNo ? (
                    <p className="font-cormorant mt-3 text-lg text-surface/75 sm:text-xl">
                        {t("certificateNo")}
                        <span className="ml-2 tracking-[0.06em] text-surface">
                            {certificateNo}
                        </span>
                    </p>
                ) : null}

                {showSpecialDate ? <SpecialDateInfo /> : null}

                {columns.length > 0 ? (
                    <div
                        className={`mt-8 grid border-t border-gold/25 pt-7 ${
                            columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                    >
                        {columns.map((column, index) => (
                            <dl
                                key={index}
                                className={`space-y-5 ${
                                    index > 0
                                        ? "border-l border-gold/50 pl-3 sm:pl-6"
                                        : columns.length > 1
                                          ? "pr-3 sm:pr-6"
                                          : ""
                                }`}
                            >
                                {column.map((item) => (
                                    <div key={item.label}>
                                        <dt className="font-cormorant text-base text-surface/65 sm:text-lg">
                                            {item.label}
                                        </dt>
                                        <dd className="font-cormorant mt-0.5 text-lg font-medium leading-snug text-surface sm:text-2xl">
                                            {item.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        ))}
                    </div>
                ) : null}
            </div>

            {columns.length > 0 ? (
                <p className="font-jost mt-4 text-xs leading-5 text-deep/60">
                    {t("specDisclaimer")}
                </p>
            ) : null}
        </section>
    );
}
