"use client";

import Image from "next/image";
import { useState } from "react";
import NewsletterImg from "@/assets/Newsletter-Img.png";

export function NewsletterSection() {
    const [email, setEmail] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setEmail("");
    }

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f5efe3]">
            <div className="absolute inset-0 md:hidden" aria-hidden="true">
                <Image
                    src={NewsletterImg}
                    alt=""
                    fill
                    sizes="100vw"
                    priority={false}
                    className="object-cover object-center opacity-25"
                />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] md:px-0">
                <div className="mx-auto flex max-w-lg flex-col justify-center py-14 md:py-20">
                    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        Stay Connected
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium leading-[1.05] text-deep sm:text-6xl">
                        Get Our Latest Updates
                    </h2>
                    <p className="font-jost mt-6 max-w-md text-[0.95rem] leading-7 text-deep/70 sm:text-base">
                        Be first to discover new collections, exclusive events,
                        and the quiet privileges reserved for our inner circle.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex w-full max-w-md border border-gold bg-transparent"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Your E-Mail Address"
                            aria-label="Email address"
                            className="font-jost h-14 flex-1 bg-transparent px-5 text-sm text-deep placeholder:text-deep/45 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="font-jost inline-flex h-14 shrink-0 items-center justify-center bg-deep px-7 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[#0a2e28] sm:px-10 sm:text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="hidden p-10 md:block lg:p-16">
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src={NewsletterImg}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 0px, 45vw"
                            className="object-cover object-center"
                            aria-hidden="true"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
