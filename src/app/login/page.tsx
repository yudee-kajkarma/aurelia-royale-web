import { Metadata } from "next";
import { LoginContent } from "@/components/auth/LoginContent";

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Sign In - Aurelia Royale",
  description: "Sign in to your Aurelia Royale account to track orders and manage your fine diamond jewellery collection.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/login/",
  },
};

export const metadataEs: Metadata = {
  title: "Iniciar Sesión - Aurelia Royale",
  description: "Inicie sesión en su cuenta de Aurelia Royale para hacer seguimiento de sus pedidos y gestionar su colección de joyas.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/login/",
  },
};

export const metadataFr: Metadata = {
  title: "Se Connecter - Aurelia Royale",
  description: "Connectez-vous à votre compte Aurelia Royale pour suivre vos commandes et gérer votre collection.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/login/",
  },
};

export const metadataDe: Metadata = {
  title: "Anmelden - Aurelia Royale",
  description: "Melden Sie sich bei Ihrem Aurelia Royale-Konto an, um Bestellungen zu verfolgen und Ihre Diamantschmuck-Kollektion zu verwalten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/login/",
  },
};

export const metadataIt: Metadata = {
  title: "Accedi - Aurelia Royale",
  description: "Accedi al tuo account Aurelia Royale per tracciare gli ordini e gestire la tua collezione di gioielli con diamanti pregiati.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/login/",
  },
};

export const metadataNl: Metadata = {
  title: "Inloggen - Aurelia Royale",
  description: "Meld u aan bij uw Aurelia Royale-account om bestellingen te volgen en uw collectie diamanten juwelen te beheren.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/login/",
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

export default function LoginPage() {
    return <LoginContent />;
}
