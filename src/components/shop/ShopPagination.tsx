import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ShopPaginationProps = {
    currentPage: number;
    totalPages: number;
    // Builds a crawlable href for a given page number so pagination uses real
    // <a href> links (Google does not click JS pagination buttons).
    hrefForPage: (page: number) => string;
    className?: string;
};

function getPageItems(
    currentPage: number,
    totalPages: number,
): Array<number | "ellipsis"> {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
        return [1, 2, 3, "ellipsis", totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, "ellipsis", currentPage, "ellipsis", totalPages];
}

export function ShopPagination({
    currentPage,
    totalPages,
    hrefForPage,
    className = "",
}: ShopPaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;
    const pageItems = getPageItems(currentPage, totalPages);

    const baseTile =
        "inline-flex h-11 min-w-11 items-center justify-center font-jost text-sm font-semibold uppercase tracking-[0.18em] transition";

    return (
        <nav
            aria-label="Pagination"
            className={`mt-14 flex flex-wrap items-center justify-center gap-2 ${className}`}
        >
            {canGoPrev ? (
                <Link
                    href={hrefForPage(currentPage - 1)}
                    rel="prev"
                    className={`${baseTile} w-11 border border-deep/30 text-deep hover:border-gold hover:text-gold`}
                    aria-label="Previous page"
                >
                    <ChevronLeft size={16} strokeWidth={1.75} />
                </Link>
            ) : (
                <span
                    className={`${baseTile} w-11 border border-deep/30 text-deep opacity-40`}
                    aria-hidden="true"
                >
                    <ChevronLeft size={16} strokeWidth={1.75} />
                </span>
            )}

            {pageItems.map((item, index) => {
                if (item === "ellipsis") {
                    return (
                        <span
                            key={`ellipsis-${index}`}
                            className={`${baseTile} text-deep/40`}
                            aria-hidden="true"
                        >
                            …
                        </span>
                    );
                }

                const active = item === currentPage;

                return (
                    <Link
                        key={item}
                        href={hrefForPage(item)}
                        className={
                            active
                                ? `${baseTile} bg-deep text-gold`
                                : `${baseTile} text-deep/70 hover:text-gold`
                        }
                        aria-label={`Page ${item}`}
                        aria-current={active ? "page" : undefined}
                    >
                        {String(item).padStart(2, "0")}
                    </Link>
                );
            })}

            {canGoNext ? (
                <Link
                    href={hrefForPage(currentPage + 1)}
                    rel="next"
                    className={`${baseTile} w-11 border border-deep/30 text-deep hover:border-gold hover:text-gold`}
                    aria-label="Next page"
                >
                    <ChevronRight size={16} strokeWidth={1.75} />
                </Link>
            ) : (
                <span
                    className={`${baseTile} w-11 border border-deep/30 text-deep opacity-40`}
                    aria-hidden="true"
                >
                    <ChevronRight size={16} strokeWidth={1.75} />
                </span>
            )}
        </nav>
    );
}
