import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700"],
});

type BrandWordmarkProps = {
  size?: "header" | "hero";
  className?: string;
};

export function BrandWordmark({ size = "header", className = "" }: BrandWordmarkProps) {
  const sizeClassName =
    size === "hero"
      ? "text-[2.4rem] leading-none sm:text-[3.4rem]"
      : "text-[1.6rem] leading-none sm:text-[2rem]";

  return (
    <span
      className={`${baloo.className} inline-flex items-baseline gap-2 whitespace-nowrap ${sizeClassName} ${className}`.trim()}
      aria-label="Aurelia Royale"
    >
      <span className="text-white">
        Aurelia
      </span>
      <span className="tracking-[0.08em] text-white">Royale</span>
    </span>
  );
}
