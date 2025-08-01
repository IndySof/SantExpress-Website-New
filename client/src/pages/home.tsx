import { useEffect } from "react";
import { SEOHead } from "@/components/ui/seo-head";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MarketStats } from "@/components/sections/market-stats";
import { Actors } from "@/components/sections/actors";
import { Vision } from "@/components/sections/vision";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { t, language } = useTranslation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SantExpress",
    "url": "https://santexpress.fr",
    "description": t("hero.subtitle"),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "535 Route des Lucioles",
      "addressLocality": "Valbonne",
      "postalCode": "06560",
      "addressCountry": "FR"
    },
    "email": "contact@santexpress.fr",
    "founder": {
      "@type": "Organization",
      "name": "SantExpress"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "contact@santexpress.fr"
    }
  };

  const seoTitle = language === 'fr' 
    ? "SantExpress - Transport Sanitaire Professionnel en France"
    : language === 'en'
    ? "SantExpress - Professional Medical Transport in France"
    : language === 'de'
    ? "SantExpress - Professioneller Medizintransport in Frankreich"
    : "SantExpress - Trasporto Sanitario Professionale in Francia";

  const seoDescription = t("hero.subtitle");

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords="transport sanitaire, ambulance, VSL, taxi conventionné, hôpital, clinique, EHPAD, assurance maladie, medical transport, ambulance, healthcare"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <MarketStats />
          <Actors />
          <Vision />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
