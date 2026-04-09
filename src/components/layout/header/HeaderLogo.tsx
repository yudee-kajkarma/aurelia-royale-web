import Image from "next/image";
import Link from "next/link";
import DalilaLogo from "@/assets/DalilaLogo.png";

type HeaderLogoProps = {
  onClick?: () => void;
};

export function HeaderLogo({ onClick }: HeaderLogoProps) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Go to homepage" onClick={onClick}>
      <Image
        src={DalilaLogo}
        alt="Dalila Diamonds"
        width={150}
        height={46}
        className="h-auto w-[100px] sm:w-[150px]"
      />
    </Link>
  );
}