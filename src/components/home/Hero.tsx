"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/utils/i18n";
import HeroBanner from "@/assets/Hero-Banner.png";

export function Hero() {
    const { t, localizeHref } = useTranslation();

    const marqueeItems = [
        t("marquee.shipping"),
        t("marquee.diamond"),
        t("marquee.jewelry"),
        t("marquee.crafted"),
        t("marquee.certified"),
    ];

    return (
        <section className="rise relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#efeff1]">
            <div className="relative min-h-[560px] sm:min-h-[680px] lg:min-h-[780px]">
                <Image
                    src={HeroBanner}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-right"
                    aria-hidden="true"
                />

                <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16 sm:min-h-[680px] sm:px-12 sm:py-20 lg:min-h-[780px] lg:px-20 lg:py-24">
                    <div className="max-w-xl">
                        <h1 className="font-cormorant text-[2.6rem] font-medium leading-[1.02] tracking-[-0.01em] text-[#111] sm:text-[3.6rem] lg:text-[4.6rem]">
                            <span className="block">{t("hero.titleLine1")}</span>
                            <span className="block">{t("hero.titleLine2")}</span>
                        </h1>
                        <p className="mt-8 max-w-md font-jost text-[0.95rem] leading-7 text-[#3b3b3b] sm:text-base">
                            {t("hero.description")}
                        </p>
                        <Link
                            href={localizeHref("/shop")}
                            className="mt-10 inline-flex h-14 min-w-44 items-center justify-center bg-deep px-10 text-sm font-semibold uppercase tracking-[0.32em] text-gold transition hover:bg-[#0a2e28]"
                        >
                            {t("hero.cta")}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden bg-[#1B3D2F] py-4">
                <div
                    className="marquee-track flex w-max items-center whitespace-nowrap text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-white sm:text-sm"
                    aria-hidden="true"
                >
                    {Array.from({ length: 2 }).map((_, loopIndex) => (
                        <div key={loopIndex} className="flex items-center">
                            {marqueeItems.map((item, itemIndex) => (
                                <div
                                    key={`${loopIndex}-${itemIndex}`}
                                    className="flex items-center"
                                >
                                    <span className="px-6 sm:px-8 font-jost text-[#FAE9BD]">
                                        {item}
                                    </span>
                                    <span
                                        className="inline-block h-2 w-2 shrink-0 rounded-full bg-gold"
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <span className="sr-only">{marqueeItems.join(". ")}.</span>
            </div>
        </section>
    );
}
