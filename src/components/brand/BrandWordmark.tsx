type BrandWordmarkProps = {
  size?: "header" | "hero";
  className?: string;
};

export function BrandWordmark({ size = "header", className = "" }: BrandWordmarkProps) {
  const sizeClassName =
    size === "hero"
      ? "text-[2.2rem] leading-[0.92] sm:text-[3.35rem]"
      : "text-[1.45rem] leading-none sm:text-[1.9rem]";

  const hasColorClass = className.includes("text-");
  const textColorClass = hasColorClass ? "" : "text-[#153f35]";

  return (
    <span
      className={`display-font inline-flex items-baseline gap-2 whitespace-nowrap font-semibold uppercase ${sizeClassName} ${textColorClass} ${className}`.trim()}
      aria-label="Aurelia Royale"
    >
      <span>Aurelia Royale</span>
    </span>
  );
}
