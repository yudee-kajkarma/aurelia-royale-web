"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import TestimonialImg from "@/assets/Testimonial-Img.png";

type Testimonial = {
    name: string;
    location: string;
    rating: number;
    quote: string;
    avatarUrl: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Isabelle Laurent",
        location: "Paris, France",
        rating: 5,
        quote: "The earrings I received were beyond anything I had imagined — flawlessly crafted, packaged like a dream. Aurelia Royale feels genuinely couture.",
        avatarUrl:
            "https://jewellery-bay-two.vercel.app/assets/our_image/tstimonal/1.jpg",
    },
    {
        name: "Alexander Lee",
        location: "London, UK",
        rating: 5,
        quote: "Premium service and elegant finishing made every order memorable. Their design language feels timeless while still modern and wearable.",
        avatarUrl:
            "https://jewellery-bay-two.vercel.app/assets/our_image/tstimonal/1.jpg",
    },
];

export function TestimonialSlider() {
    const [index, setIndex] = useState(0);
    const current = testimonials[index];

    useEffect(() => {
        if (testimonials.length <= 1) return;
        const id = window.setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 7000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <section className="relative left-1/2 mt-24 w-screen -translate-x-1/2 overflow-hidden bg-[#efeae0]">
            <div className="mx-auto grid max-w-7xl items-center px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] md:px-0">
                <div className="hidden p-10 md:block lg:p-16">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <Image
                            src={TestimonialImg}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 0px, 38vw"
                            className="object-cover object-center"
                            aria-hidden="true"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center max-w-lg mx-auto py-14  md:py-20 ">
                    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        Client Testimonial
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                        Our Happy Clients
                    </h2>

                    <div className="mt-10 flex items-center">
                        <div
                            className="h-10 w-10 shrink-0 rounded-full border border-gold/40 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${current.avatarUrl})`,
                            }}
                            aria-label={current.name}
                        />
                        <span
                            className="mx-5 h-px w-32 bg-gold sm:w-48"
                            aria-hidden="true"
                        />
                        <div
                            className="flex items-center gap-1.5 text-gold"
                            aria-label={`${current.rating} out of 5 stars`}
                        >
                            {Array.from({ length: current.rating }).map(
                                (_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                ),
                            )}
                        </div>
                    </div>

                    <div className="mt-1">
                        <p className="font-jost text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-deep sm:text-base">
                            {current.name}
                        </p>
                        <p className="font-jost mt-1 text-[0.72rem] uppercase tracking-[0.22em] text-deep/55 sm:text-[0.78rem]">
                            {current.location}
                        </p>
                    </div>

                    <div className="mt-1 h-px w-full max-w-md bg-gold/70" />

                    <p className="font-jost mt-1 max-w-md text-[0.95rem] italic  text-deep sm:text-base ">
                        &quot;{current.quote}&quot;
                    </p>

                    {testimonials.length > 1 ? (
                        <div
                            className="mt-8 flex items-center gap-2"
                            role="tablist"
                            aria-label="Testimonials"
                        >
                            {testimonials.map((t, i) => (
                                <button
                                    key={t.name}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === index}
                                    aria-label={`Show testimonial from ${t.name}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        i === index
                                            ? "w-8 bg-gold"
                                            : "w-3 bg-deep/20 hover:bg-deep/40"
                                    }`}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
