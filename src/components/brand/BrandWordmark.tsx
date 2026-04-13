type BrandWordmarkProps = {
  size?: "header" | "hero";
  className?: string;
};

export function BrandWordmark({ size = "header", className = "" }: BrandWordmarkProps) {
  const sizeClassName =
    size === "hero"
      ? "text-[2.2rem] leading-[0.92] sm:text-[3.35rem]"
      : "text-[1.45rem] leading-none sm:text-[1.9rem]";

  const secondarySizeClassName =
    size === "hero"
      ? "text-[0.48em] tracking-[0.36em] sm:tracking-[0.4em]"
      : "text-[0.5em] tracking-[0.28em] sm:tracking-[0.34em]";

  return (
    <span
      className={`display-font inline-flex items-baseline gap-2 whitespace-nowrap font-semibold uppercase text-white ${sizeClassName} ${className}`.trim()}
      aria-label="Aurelia Royale"
    >
      <span className="text-white">Aurelia Royale</span>
      {/* <span className={`border-l border-white/25 pl-2 font-sans font-semibold text-white/92 ${secondarySizeClassName}`}> */}
      
      {/* </span> */}
    </span>
  );
}
