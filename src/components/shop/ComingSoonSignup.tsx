"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const PERKS = [
    "Early access",
    "Launch updates",
    "Exclusive offers",
    "New collection announcements",
];

export function ComingSoonSignup() {
    const [email, setEmail] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setEmail("");
    }

    return (
        <div className="mt-12 border-t border-gold/30 pt-10">
            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                <span
                    className="inline-block h-px w-8 bg-gold"
                    aria-hidden="true"
                />
                Coming Soon
            </p>
            <h3 className="font-cormorant mt-4 text-3xl font-medium text-deep sm:text-4xl">
                A New Era of Luxury is Coming
            </h3>
            <div className="font-jost mt-5 space-y-1 text-[0.95rem] leading-7 text-deep/75">
                <p>Exceptional craftsmanship.</p>
                <p>Timeless design.</p>
                <p>Sustainably created diamonds.</p>
            </div>
            <p className="font-jost mt-5 text-[0.95rem] leading-7 text-deep/75">
                Our first collection will be unveiled soon.
            </p>

            <div className="mt-10 border border-gold/30 bg-[#f5efe3] p-6 sm:p-8">
                <h4 className="font-cormorant text-2xl font-medium text-deep sm:text-3xl">
                    Be the First to Know
                </h4>
                <p className="font-jost mt-2 text-sm italic text-deep/70">
                    Our exclusive collections are arriving soon
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PERKS.map((perk) => (
                        <li key={perk} className="flex items-center gap-3">
                            <Check
                                size={16}
                                strokeWidth={2.5}
                                className="shrink-0 text-gold"
                                aria-hidden="true"
                            />
                            <span className="font-jost text-[0.95rem] text-deep/80">
                                {perk}
                            </span>
                        </li>
                    ))}
                </ul>

                <p className="font-jost mt-6 text-sm text-deep/70">
                    Enter your email to receive priority access.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex w-full max-w-md border border-gold bg-transparent"
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
                        className="font-jost inline-flex h-14 shrink-0 items-center justify-center bg-deep px-6 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#0a2e28] sm:px-8"
                    >
                        Notify Me
                    </button>
                </form>
            </div>
        </div>
    );
}
