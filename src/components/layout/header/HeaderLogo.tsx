import Link from "next/link";

type HeaderLogoProps = {
    onClick?: () => void;
};

export function HeaderLogo({ onClick }: HeaderLogoProps) {
    return (
        <Link
            href="/"
            className="flex flex-col items-center justify-center leading-none select-none"
            aria-label="Aurelia Royale"
            onClick={onClick}
        >
            <span className="display-font text-[1.65rem] font-semibold uppercase tracking-[0.06em] text-white sm:text-[2.25rem]">
                Aurelia
            </span>
            <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.5em] text-white/90 sm:text-[0.7rem] sm:tracking-[0.62em]">
                Royale
            </span>
        </Link>
    );
}
