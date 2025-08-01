import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import heroImage from "@assets/image_1754051528048.png";

import ChatGPT_Image_1_ao_t_2025__14_35_05 from "@assets/ChatGPT Image 1 août 2025, 14_35_05.png";

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-medical-blue to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue via-blue-600 to-medical-green opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-black/30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
          <div className="lg:col-span-1">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {t("hero.title")}
              <span className="text-medical-green"> {t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg mb-8 text-blue-200">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("vision")}
                className="bg-medical-green hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                {t("hero.cta1")}
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-medical-blue hover:bg-gray-100 border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:block lg:col-span-2">
            <img 
              src={ChatGPT_Image_1_ao_t_2025__14_35_05}
              alt="Véhicule médical avec stéthoscope et dossier médical"
              className="w-full h-auto max-w-7xl mx-auto relative z-10 scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
