"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/i18n/locale-labels";

/**
 * Switches locale while staying on the same page. `usePathname` from our
 * navigation helpers returns the path WITHOUT the locale prefix, so passing it
 * straight back to `router.replace` with a new locale is correct.
 *
 * Presented as a fourth member of the header's circular icon-button set rather
 * than as a <select>. Two reasons beyond looks: a native select renders its
 * option list in OS chrome (white ground, system font) that cannot be themed
 * to the header, and its closed width tracked the language name — "Nederlands"
 * is 2.5x "English", so it shoved the icon cluster around on every locale. A
 * two-letter code is the same width in all six.
 *
 * The native element also carried keyboard and screen-reader behaviour for
 * free, so that is reimplemented here deliberately: listbox semantics, roving
 * selection with the arrow keys, Home/End, Enter/Space to choose, Escape to
 * dismiss, and focus returned to the trigger afterwards.
 */
export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const t = useTranslations("Header");
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const reduceMotion = useReducedMotion();

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(() =>
        routing.locales.indexOf(locale),
    );
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

    function close(returnFocus = true) {
        setOpen(false);
        if (returnFocus) triggerRef.current?.focus();
    }

    function selectLocale(next: Locale) {
        setOpen(false);
        triggerRef.current?.focus();
        if (next === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: next });
        });
    }

    // Dismiss on an outside press or Escape. Pointerdown rather than click so
    // the menu closes before the press lands on whatever is underneath.
    useEffect(() => {
        if (!open) return;

        function onPointerDown(event: PointerEvent) {
            if (!containerRef.current?.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                event.stopPropagation();
                close();
            }
        }

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    // Move real focus onto the highlighted option so screen readers announce it
    // and the visible ring follows the arrow keys.
    useEffect(() => {
        if (open) optionRefs.current[activeIndex]?.focus();
    }, [open, activeIndex]);

    function openMenu(startAt = routing.locales.indexOf(locale)) {
        setActiveIndex(startAt < 0 ? 0 : startAt);
        setOpen(true);
    }

    function onTriggerKeyDown(event: React.KeyboardEvent) {
        if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openMenu();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            openMenu(routing.locales.length - 1);
        }
    }

    function onOptionKeyDown(event: React.KeyboardEvent, index: number) {
        const last = routing.locales.length - 1;
        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                setActiveIndex(index === last ? 0 : index + 1);
                break;
            case "ArrowUp":
                event.preventDefault();
                setActiveIndex(index === 0 ? last : index - 1);
                break;
            case "Home":
                event.preventDefault();
                setActiveIndex(0);
                break;
            case "End":
                event.preventDefault();
                setActiveIndex(last);
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                selectLocale(routing.locales[index]);
                break;
            case "Tab":
                setOpen(false);
                break;
        }
    }

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={triggerRef}
                type="button"
                onClick={() => (open ? close(false) : openMenu())}
                onKeyDown={onTriggerKeyDown}
                disabled={isPending}
                aria-label={`${t("language")}: ${LOCALE_LABELS[locale]}`}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-[0.72rem] font-semibold uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a3525] disabled:opacity-60 sm:h-11 sm:w-11 ${
                    open
                        ? "border-gold bg-gold/10 text-gold"
                        : "border-gold/40 text-gold hover:border-gold hover:bg-gold/10"
                }`}
            >
                {locale}
            </button>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        className="absolute right-0 top-12 z-30 w-56 overflow-hidden rounded-[22px] border border-white/10 bg-[#08140f] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:top-14"
                        initial={{
                            opacity: 0,
                            y: reduceMotion ? 0 : 10,
                            scale: reduceMotion ? 1 : 0.98,
                        }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{
                            opacity: 0,
                            y: reduceMotion ? 0 : 8,
                            scale: reduceMotion ? 1 : 0.98,
                        }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.18,
                            ease: "easeOut",
                        }}
                    >
                        <ul role="listbox" aria-label={t("language")}>
                            {routing.locales.map((value, index) => {
                                const isActive = value === locale;
                                return (
                                    <li
                                        key={value}
                                        ref={(node) => {
                                            optionRefs.current[index] = node;
                                        }}
                                        role="option"
                                        aria-selected={isActive}
                                        tabIndex={-1}
                                        onClick={() => selectLocale(value)}
                                        onKeyDown={(event) =>
                                            onOptionKeyDown(event, index)
                                        }
                                        className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-sm transition focus-visible:outline-none ${
                                            isActive
                                                ? "bg-gold/10 text-gold"
                                                : "text-white/75 hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:text-white"
                                        }`}
                                    >
                                        {/* Language names stay in their own
                                            language and their own casing —
                                            upper-casing would strip the
                                            accents readers look for. */}
                                        <span>{LOCALE_LABELS[value]}</span>
                                        <span className="flex items-center gap-2">
                                            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white/35">
                                                {value}
                                            </span>
                                            {isActive ? (
                                                <Check
                                                    size={14}
                                                    strokeWidth={2.5}
                                                    className="text-gold"
                                                />
                                            ) : null}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
