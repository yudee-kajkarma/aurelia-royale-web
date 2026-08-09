import { Metadata } from "next";
import { RegisterContent } from "@/components/auth/RegisterContent";

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Create Account - Aurelia Royale",
  description: "Create an account with Aurelia Royale for exclusive benefits, saved wishlists, and order tracking.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/register/",
  },
};

export const metadataEs: Metadata = {
  title: "Crear Cuenta - Aurelia Royale",
  description: "Cree una cuenta en Aurelia Royale para disfrutar de beneficios exclusivos, listas de deseos guardadas y seguimiento de pedidos.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/register/",
  },
};

export const metadataFr: Metadata = {
  title: "Créer un Compte - Aurelia Royale",
  description: "Créez un compte chez Aurelia Royale pour profiter d'avantages exclusifs et suivre vos commandes.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/register/",
  },
};

export const metadataDe: Metadata = {
  title: "Konto Erstellen - Aurelia Royale",
  description: "Erstellen Sie ein Konto bei Aurelia Royale für exklusive Vorteile, gespeicherte Wunschlisten und Bestellverfolgung.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/register/",
  },
};

export const metadataIt: Metadata = {
  title: "Crea Account - Aurelia Royale",
  description: "Crea un account con Aurelia Royale per vantaggi esclusivi, liste dei desideri salvate e tracciamento degli ordini.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/register/",
  },
};

export const metadataNl: Metadata = {
  title: "Account Aanmaken - Aurelia Royale",
  description: "Maak een account aan bij Aurelia Royale voor exclusieve voordelen, bewaarde verlanglijstjes en het volgen van bestellingen.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/register/",
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

export default function RegisterPage() {
    return <RegisterContent />;
}
