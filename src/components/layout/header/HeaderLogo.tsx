import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo.png";

type HeaderLogoProps = {
    onClick?: () => void;
};

export function HeaderLogo({ onClick }: HeaderLogoProps) {
    return (
        <Link
            href="/"
            className="flex items-center justify-center select-none"
            aria-label="Aurelia Royale"
            onClick={onClick}
        >
            <Image
                src={logo}
                alt="Aurelia Royale"
                priority
                sizes="(max-width: 640px) 180px, 240px"
                className="h-auto w-28 sm:w-44 lg:w-52.5"
            />
        </Link>
    );
}
