import { Ambulance, Building2, UserCheck, Brain, Truck, FileText, Shield, Heart, Building, Stethoscope, Car, UserRound } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Services() {
  const { t } = useTranslation();

  const getServiceItems = (key: string, fallback: string[]) => {
    const items = t(key, { returnObjects: true });
    return Array.isArray(items) ? items : fallback;
  };

  const transporterItems = getServiceItems("services.transporter.items", [
    "Répondre rapidement à une demande de transport",
    "Organiser la charge de travail",
    "Optimiser le trajet (navigation intégrée)",
    "Suivre le trajet des véhicules",
    "Réduire les trajets à vide"
  ]);

  const healthcareItems = getServiceItems("services.healthcare.items", [
    "Libérer plus rapidement les lits",
    "Augmenter le taux d'occupation",
    "Satisfaire les patients",
    "Réduire la charge de travail du personnel",
    "Harmoniser l'organisation de la réservation"
  ]);

  const patientItems = getServiceItems("services.patients.items", [
    "Application Mobile demandes centralisées",
    "Fiche complète",
    "Gestion des retards",
    "Envoi de pièces justificatives",
    "Navigation intégrée"
  ]);

  const intelligentItems = getServiceItems("services.platform.intelligent.items", [
    "Gestion des demandes assistée par IA",
    "Planification intelligente des trajets",
    "Partage de trajets optimisé"
  ]);

  const fleetItems = getServiceItems("services.platform.fleet.items", [
    "Suivi temps réel",
    "Optimisation des plannings",
    "Gestion des chauffeurs"
  ]);

  const billingItems = getServiceItems("services.platform.billing.items", [
    "Télétransmission CPAM",
    "Gestion documents PMT",
    "Suivi des paiements",
    "Pré-Comptabilité"
  ]);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-gray-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-medical-gray-600">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Transporter Services */}
          <div className="bg-medical-gray-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Ambulance className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-medical-gray-900">
                {t("services.transporter.title")}
              </h3>
            </div>
            <ul className="space-y-3 text-medical-gray-700">
              {transporterItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-medical-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Services */}
          <div className="bg-medical-gray-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-medical-gray-900">
                {t("services.healthcare.title")}
              </h3>
            </div>
            <ul className="space-y-3 text-medical-gray-700">
              {healthcareItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-medical-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Services */}
          <div className="bg-medical-gray-50 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-medical-gray-900">
                {t("services.patients.title")}
              </h3>
            </div>
            <ul className="space-y-3 text-medical-gray-700">
              {patientItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-medical-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Complete Logistics Suite */}
        <div className="bg-gradient-to-br from-medical-blue to-blue-800 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {t("services.platform.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Brain className="text-medical-orange mr-2" size={24} />
                {t("services.platform.intelligent.title")}
              </h4>
              <ul className="space-y-2 text-blue-100">
                {intelligentItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Truck className="text-medical-orange mr-2" size={24} />
                {t("services.platform.fleet.title")}
              </h4>
              <ul className="space-y-2 text-blue-100">
                {fleetItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <FileText className="text-medical-orange mr-2" size={24} />
                {t("services.platform.billing.title")}
              </h4>
              <ul className="space-y-2 text-blue-100">
                {billingItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-900 mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-lg text-center text-medical-gray-600 mb-12">
            {t("partners.subtitle")}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {getServiceItems("partners.items", [
              "Mutuelles", "Assurance maladie", "ARS", "Établissements de santé", "Transporteurs", "Infirmiers/ères"
            ]).map((partner, index) => {
              // Define icons for each partner type
              const getPartnerIcon = (partnerName: string, index: number) => {
                const lowerName = partnerName.toLowerCase();
                if (lowerName.includes('mutuelle')) return Heart;
                if (lowerName.includes('assurance')) return Shield;
                if (lowerName.includes('ars')) return Building;
                if (lowerName.includes('établissement')) return Building2;
                if (lowerName.includes('transporteur')) return Car;
                if (lowerName.includes('infirmier')) return Stethoscope;
                
                // Fallback based on index for translations
                const icons = [Heart, Shield, Building, Building2, Car, Stethoscope];
                return icons[index] || UserRound;
              };
              
              const IconComponent = getPartnerIcon(partner, index);
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <p className="font-medium text-medical-gray-900">{partner}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
