type PriceDisplayProps = {
  value: number | string;
  className?: string;
};

function normalizePrice(value: number | string) {
  if (typeof value === "number") {
    return `$${value.toFixed(2)}`;
  }

  const trimmedValue = value.trim();

  if (trimmedValue.startsWith("$")) {
    return trimmedValue;
  }

  const numericValue = Number(trimmedValue);

  if (!Number.isNaN(numericValue)) {
    return `$${numericValue.toFixed(2)}`;
  }

  return trimmedValue;
}

export function PriceDisplay({ value, className = "" }: PriceDisplayProps) {
  return <span className={className}>{normalizePrice(value)}</span>;
}
