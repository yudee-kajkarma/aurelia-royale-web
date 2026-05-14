import Link from "next/link";

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="bg-[linear-gradient(180deg,#0d3a2d,#06241b)] px-6 py-14 text-white sm:px-10 md:py-20">
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 md:items-center md:text-center">
                <Link
                    href="/"
                    aria-label="Aurelia Royale"
                    className="flex flex-col leading-none md:items-center"
                >
                    <span className="font-cormorant text-4xl font-medium uppercase tracking-[0.04em] text-white sm:text-5xl md:text-6xl">
                        Aurelia
                    </span>
                    <span className="font-jost mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-white/90 sm:text-xs sm:tracking-[0.62em]">
                        Royale
                    </span>
                </Link>

                <p className="font-jost max-w-2xl text-[0.78rem] italic text-gold/90 sm:text-sm md:text-center">
                    Fine jewelry crafted for those who value beauty, heritage,
                    and permanence above all.
                </p>

                <nav
                    aria-label="Footer"
                    className="flex flex-col gap-5 text-[0.78rem] font-semibold uppercase tracking-[0.28em] sm:text-sm md:flex-row md:gap-12"
                >
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition hover:text-gold"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="w-full border-t border-white/15 pt-6 md:pt-8">
                    <p className="font-jost text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-xs md:text-center">
                        Copyright 2026 Aurelia Royale. All rights reserved by
                        Aurelia Royale.
                    </p>
                </div>
            </div>
        </footer>
    );
}
