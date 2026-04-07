type ShopPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function getPageItems(currentPage: number, totalPages: number): Array<number | "ellipsis"> {
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

export function ShopPagination({ currentPage, totalPages, onPageChange, className = "" }: ShopPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  const pageItems = getPageItems(currentPage, totalPages);

  return (
    <div className={`mt-8 inline-flex border border-black/45 bg-white ${className}`}>
      <button
        onClick={() => canGoPrev && onPageChange(currentPage - 1)}
        disabled={!canGoPrev}
        className="h-12 w-11 bg-[#090f1a] text-xl text-white disabled:cursor-not-allowed disabled:opacity-45"
        aria-label="Previous page"
      >
        «
      </button>

      {pageItems.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span key={`ellipsis-${index}`} className="inline-flex h-12 w-11 items-center justify-center border-l border-black/45 text-lg font-bold text-[#8f9195]">
              …
            </span>
          );
        }

        const active = item === currentPage;

        return (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={
              active
                ? "h-12 w-11 border-l border-black/45 bg-[#090f1a] text-lg font-bold text-white"
                : "h-12 w-11 border-l border-black/45 text-lg font-bold text-[#8f9195]"
            }
            aria-label={`Page ${item}`}
            aria-current={active ? "page" : undefined}
          >
            {item}
          </button>
        );
      })}

      <button
        onClick={() => canGoNext && onPageChange(currentPage + 1)}
        disabled={!canGoNext}
        className="h-12 w-11 border-l border-black/45 bg-[#090f1a] text-xl text-white disabled:cursor-not-allowed disabled:opacity-45"
        aria-label="Next page"
      >
        »
      </button>
    </div>
  );
}