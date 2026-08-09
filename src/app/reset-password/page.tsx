import { Metadata } from "next";
import { ResetPasswordContent } from "@/components/auth/ResetPasswordContent";

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Reset Password - Aurelia Royale",
  description: "Reset your Aurelia Royale account password.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/reset-password/",
  },
};

export const metadataEs: Metadata = {
  title: "Restablecer Contraseña - Aurelia Royale",
  description: "Restablezca la contraseña de su cuenta de Aurelia Royale.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/reset-password/",
  },
};

export const metadataFr: Metadata = {
  title: "Réinitialiser le Mot de Passe - Aurelia Royale",
  description: "Réinitialisez le mot de passe de votre compte Aurelia Royale.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/reset-password/",
  },
};

export const metadataDe: Metadata = {
  title: "Passwort Zurücksetzen - Aurelia Royale",
  description: "Setzen Sie das Passwort für Ihr Aurelia Royale-Konto zurück.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/reset-password/",
  },
};

export const metadataIt: Metadata = {
  title: "Reimposta Password - Aurelia Royale",
  description: "Reimposta la password del tuo account Aurelia Royale.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/reset-password/",
  },
};

export const metadataNl: Metadata = {
  title: "Wachtwoord Herstellen - Aurelia Royale",
  description: "Herstel het wachtwoord van uw Aurelia Royale-account.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/reset-password/",
  },
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = params.locale;
  if (locale === "it") return metadataIt;
  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
}

export default function ResetPasswordPage() {
    return <ResetPasswordContent />;
}