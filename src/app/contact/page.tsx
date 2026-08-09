import { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

type PageProps = {
    searchParams: Promise<{ locale?: string }>;
};

export const metadataEn: Metadata = {
  title: "Contact Us - Aurelia Royale",
  description: "Get in touch with Aurelia Royale's fine jewellery specialists for assistance, inquiries, or bespoke orders.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/contact/",
  },
};

export const metadataEs: Metadata = {
  title: "Contacto - Aurelia Royale",
  description: "Póngase en contacto con los especialistas en alta joyería de Aurelia Royale para asistencia, consultas o pedidos personalizados.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/contact/",
  },
};

export const metadataFr: Metadata = {
  title: "Contact - Aurelia Royale",
  description: "Contactez les spécialistes en haute joaillerie d'Aurelia Royale pour toute assistance ou commande sur mesure.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/contact/",
  },
};

export const metadataDe: Metadata = {
  title: "Kontakt - Aurelia Royale",
  description: "Wenden Sie sich an die Echtschmuck-Spezialisten von Aurelia Royale, um Unterstützung, Anfragen oder Sonderanfertigungen zu erhalten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/contact/",
  },
};

export const metadataIt: Metadata = {
  title: "Contatti - Aurelia Royale",
  description: "Contatta gli specialisti di alta gioielleria di Aurelia Royale per assistenza, informazioni o ordini personalizzati.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/contact/",
  },
};

export const metadataNl: Metadata = {
  title: "Contact - Aurelia Royale",
  description: "Neem contact op met de specialisten in fijne juwelen van Aurelia Royale voor ondersteuning, vragen of maatwerk.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/contact/",
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

export default function ContactPage() {
    return <ContactContent />;
}
