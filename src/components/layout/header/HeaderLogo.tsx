import Link from "next/link";
import { BrandWordmark } from "@/components/brand/BrandWordmark";

type HeaderLogoProps = {
  onClick?: () => void;
};

export function HeaderLogo({ onClick }: HeaderLogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Go to homepage" onClick={onClick}>
      <BrandWordmark size="header" />
    </Link>
  );
}