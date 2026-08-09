"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/utils/i18n";

export function ContactContent() {
    const { t, localizeHref } = useTranslation();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleInvalid = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement;
        if (target.validity.valueMissing) {
            target.setCustomValidity(t("validation.required"));
        } else if (target.validity.typeMismatch) {
            target.setCustomValidity(t("validation.emailMismatch"));
        }
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        setter: (val: string) => void
    ) => {
        setter(event.target.value);
        event.target.setCustomValidity("");
    };

    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                <div
                    className="relative h-[320px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/bg.jpg")' }}
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-black/18" />
                    <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 sm:px-8">
                        <div>
                            <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">
                                {t("contact.heroTitle")}
                            </h1>
                            <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-gold">
                                <Link href={localizeHref("/")} className="hover:underline">
                                    {t("contact.home")}
                                </Link>{" "}
                                <span className="text-gold">&gt;</span>{" "}
                                <span className="text-white">
                                    {t("contact.heroTitle")}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
            </section>

            <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 sm:px-8">
                <div className="w-full max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                        {t("contact.infoTag")}
                    </p>
                    <h2 className="display-font mt-3 text-5xl uppercase leading-[1.04] text-deep sm:text-6xl">
                        {t("contact.getInTouch")}
                    </h2>
                </div>

                <form className="mt-8 grid w-full max-w-3xl gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => handleChange(e, setName)}
                            onInvalid={handleInvalid}
                            placeholder={t("contact.firstNamePlaceholder")}
                            className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
                        />
                        <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => handleChange(e, setLastName)}
                            onInvalid={handleInvalid}
                            placeholder={t("contact.lastNamePlaceholder")}
                            className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => handleChange(e, setEmail)}
                            onInvalid={handleInvalid}
                            placeholder={t("contact.emailPlaceholder")}
                            className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
                        />
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => handleChange(e, setPhone)}
                            onInvalid={handleInvalid}
                            placeholder={t("contact.phonePlaceholder")}
                            className="h-14 border border-black/25 bg-[#090f1a] px-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
                        />
                    </div>

                    <textarea
                        required
                        value={message}
                        onChange={(e) => handleChange(e, setMessage)}
                        onInvalid={handleInvalid}
                        placeholder={t("contact.messagePlaceholder")}
                        className="h-44 resize-none border border-black/25 bg-[#090f1a] px-4 py-4 text-base font-semibold text-white outline-none placeholder:text-[#8f9298]"
                    />

                    <div>
                        <button className="cta-sweep border border-deep bg-deep px-8 py-4 text-lg font-extrabold uppercase tracking-[0.04em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep">
                            <span className="relative z-10">
                                {t("contact.submit")}
                            </span>
                        </button>
                    </div>
                </form>
            </section>

            <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
                <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gold">
                    {t("contact.findUsTag")}
                </p>
                <h2 className="display-font mt-3 text-center text-5xl uppercase text-deep">
                    {t("contact.locationMap")}
                </h2>

                <div className="mt-8 overflow-hidden border border-black/15 bg-white">
                    <iframe
                        title="Dalila Location Map"
                        src="https://maps.google.com/maps?q=Dubai&t=&z=12&ie=UTF8&iwloc=&output=embed"
                        className="h-[380px] w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </section>
        </main>
    );
}
