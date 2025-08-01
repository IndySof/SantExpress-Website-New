
import { useTranslation } from "@/lib/i18n";
import logoImage from "@assets/santexpresslogo_1754049458697.png";

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-medical-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logoImage} 
              alt="SantExpress Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">
              {t("footer.description")}
            </p>

          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-gray-300">
              {(() => {
                const services = t("footer.servicesList", { returnObjects: true });
                const servicesList = Array.isArray(services) ? services : [
                  "Transport sanitaire", "Gestion de flotte", "Facturation CPAM", "Application mobile"
                ];
                return servicesList.map((service: string, index: number) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="hover:text-medical-green transition-colors"
                  >
                    {service}
                  </button>
                </li>
                ));
              })()}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contact@santexpress.fr</li>
              <li>535 Route des Lucioles</li>
              <li>Valbonne (06560)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SantExpress. {t("footer.rights")}. Powered by <a href="https://sofiaconseil.com" target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:text-blue-400 transition-colors">Sofia Conseil</a></p>
        </div>
      </div>
    </footer>
  );
}
