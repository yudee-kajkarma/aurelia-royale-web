"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { createContext, useContext } from "react";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import nl from "../locales/nl.json";
import de from "../locales/de.json";
import it from "../locales/it.json";

const translations: Record<string, any> = { en, es, fr, nl, de, it };

const LocaleContext = createContext<string>("en");

export function LocaleProvider({ locale, children }: { locale: string; children: React.ReactNode }) {
  return React.createElement(LocaleContext.Provider, { value: locale }, children);
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useTranslation() {
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  const router = useRouter();
  const contextLocale = useLocale();

  // Determine locale: server uses context, client uses window location to support dynamic transitions
  let locale = "en";
  if (typeof window === "undefined") {
    locale = contextLocale || "en";
  } else {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/es")) {
      locale = "es";
    } else if (currentPath.startsWith("/fr")) {
      locale = "fr";
    } else if (currentPath.startsWith("/nl")) {
      locale = "nl";
    } else if (currentPath.startsWith("/de")) {
      locale = "de";
    } else if (currentPath.startsWith("/it")) {
      locale = "it";
    }
  }

  const t = (keyPath: string): string => {
    const keys = keyPath.split(".");
    let current: any = translations[locale] || translations["en"];
    
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return keyPath; // fallback
      }
    }
    
    return typeof current === "string" ? current : keyPath;
  };

  const changeLanguage = (newLocale: "en" | "es" | "fr" | "nl" | "de" | "it") => {
    if (newLocale === locale) return;

    const currentPath = typeof window !== "undefined" ? window.location.pathname : pathname;
    let targetPath = currentPath.replace(/^\/(es|fr|nl|de|it)/, "");
    if (!targetPath.startsWith("/")) targetPath = "/" + targetPath;

    if (newLocale !== "en") {
      targetPath = targetPath === "/" ? `/${newLocale}` : `/${newLocale}${targetPath}`;
    }

    if (typeof window !== "undefined") {
      window.location.href = targetPath;
    } else {
      router.push(targetPath);
    }
  };

  const localizeHref = (href: string): string => {
    if (locale !== "en") {
      if (href.startsWith(`/${locale}`) || href.startsWith("http")) return href;
      return href === "/" ? `/${locale}` : `/${locale}${href}`;
    }
    return href;
  };

  return { t, locale, changeLanguage, localizeHref };
}
