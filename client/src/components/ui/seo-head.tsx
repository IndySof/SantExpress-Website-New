import { useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: object;
}

export function SEOHead({
  title = "SantExpress - Transport Sanitaire Professionnel",
  description = "Solutions innovantes pour optimiser et sécuriser le transport des patients en France. Connectez tous les acteurs du transport sanitaire avec SantExpress.",
  keywords = "transport sanitaire, ambulance, VSL, taxi conventionné, hôpital, clinique, EHPAD, assurance maladie",
  ogTitle,
  ogDescription,
  structuredData,
}: SEOHeadProps) {
  const { language } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update language
    document.documentElement.lang = language;

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', ogTitle || title);
    updateOGTag('og:description', ogDescription || description);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', window.location.href);

    // Update structured data
    if (structuredData) {
      let jsonLd = document.querySelector('script[type="application/ld+json"]');
      if (!jsonLd) {
        jsonLd = document.createElement('script');
        jsonLd.setAttribute('type', 'application/ld+json');
        document.head.appendChild(jsonLd);
      }
      jsonLd.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogTitle, ogDescription, structuredData, language]);

  return null;
}
