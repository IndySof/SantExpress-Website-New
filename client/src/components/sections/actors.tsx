import { Ambulance, Building2, Shield, UserCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export function Actors() {
  const { t } = useTranslation();

  const getActorData = () => {
    const transporterItems = t("actors.transporter.items", { returnObjects: true });
    const healthcareItems = t("actors.healthcare.items", { returnObjects: true });
    const stateItems = t("actors.state.items", { returnObjects: true });
    const patientItems = t("actors.patients.items", { returnObjects: true });

    return [
      {
        icon: Ambulance,
        title: t("actors.transporter.title") || "Transporteur sanitaire",
        items: Array.isArray(transporterItems) ? transporterItems : ["Taxis conventionnés", "Ambulances", "VSL (Véhicules Sanitaires Légers)"],
        color: "bg-medical-blue"
      },
      {
        icon: Building2,
        title: t("actors.healthcare.title") || "Établissements de santé",
        items: Array.isArray(healthcareItems) ? healthcareItems : ["Hôpitaux", "Cliniques", "EPHAD"],
        color: "bg-medical-green"
      },
      {
        icon: Shield,
        title: t("actors.state.title") || "ÉTAT - Assurance maladie - ARS",
        items: Array.isArray(stateItems) ? stateItems : ["Réglementation", "Financement", "Contrôle qualité"],
        color: "bg-medical-gray-base"
      },
      {
        icon: UserCheck,
        title: t("actors.patients.title") || "Les Patients",
        items: Array.isArray(patientItems) ? patientItems : ["Bénéficiaires", "Accompagnants", "Familles"],
        color: "bg-purple-600"
      }
    ];
  };

  const actors = getActorData();

  return (
    <section id="actors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-medical-gray-900 mb-4">
          {t("actors.title")}
        </h2>
        <p className="text-lg text-center text-medical-gray-600 mb-12">
          {t("actors.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actors.map((actor, index) => {
            const IconComponent = actor.icon;
            return (
              <div key={index} className="text-center p-6 bg-medical-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${actor.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white text-2xl" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-medical-gray-900 mb-3">
                  {actor.title}
                </h3>
                <ul className="text-medical-gray-600 space-y-1">
                  {actor.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
