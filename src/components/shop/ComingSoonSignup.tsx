"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

const PERK_KEYS = [
    "perkEarlyAccess",
    "perkLaunchUpdates",
    "perkExclusiveOffers",
    "perkNewCollection",
] as const;

export function ComingSoonSignup() {
    const t = useTranslations("ComingSoonSignup");
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
                {t("eyebrow")}
            </p>
            <h3 className="font-cormorant mt-4 text-3xl font-medium text-deep sm:text-4xl">
                {t("heading")}
            </h3>
            <div className="font-jost mt-5 space-y-1 text-[0.95rem] leading-7 text-deep/75">
                <p>{t("craftsmanship")}</p>
                <p>{t("timelessDesign")}</p>
                <p>{t("sustainableDiamonds")}</p>
            </div>
            <p className="font-jost mt-5 text-[0.95rem] leading-7 text-deep/75">
                {t("collectionUnveil")}
            </p>

            <div className="mt-10 border border-gold/30 bg-[#f5efe3] p-6 sm:p-8">
                <h4 className="font-cormorant text-2xl font-medium text-deep sm:text-3xl">
                    {t("beFirstToKnow")}
                </h4>
                <p className="font-jost mt-2 text-sm italic text-deep/70">
                    {t("exclusiveArriving")}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PERK_KEYS.map((perkKey) => (
                        <li key={perkKey} className="flex items-center gap-3">
                            <Check
                                size={16}
                                strokeWidth={2.5}
                                className="shrink-0 text-gold"
                                aria-hidden="true"
                            />
                            <span className="font-jost text-[0.95rem] text-deep/80">
                                {t(perkKey)}
                            </span>
                        </li>
                    ))}
                </ul>

                <p className="font-jost mt-6 text-sm text-deep/70">
                    {t("priorityAccess")}
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
                        placeholder={t("emailPlaceholder")}
                        aria-label={t("emailLabel")}
                        className="font-jost h-11 min-w-0 flex-1 bg-transparent px-3 text-xs text-deep placeholder:text-deep/45 focus:outline-none sm:h-14 sm:px-5 sm:text-sm"
                    />
                    <button
                        type="submit"
                        className="font-jost inline-flex h-11 shrink-0 items-center justify-center whitespace-nowrap bg-deep px-4 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#0a2e28] sm:h-14 sm:px-8 sm:text-xs sm:tracking-[0.24em]"
                    >
                        {t("notifyMe")}
                    </button>
                </form>
            </div>
        </div>
    );
}
