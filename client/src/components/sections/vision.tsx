import { AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useRef } from "react";

export function Vision() {
  const { t } = useTranslation();
  const transportersRef = useRef<HTMLDivElement>(null);
  const healthcareRef = useRef<HTMLDivElement>(null);

  const getDifficulties = () => {
    const difficultyKeys = t("vision.difficulties.items", { returnObjects: true });
    return Array.isArray(difficultyKeys) ? difficultyKeys : [];
  };

  const getSolutions = () => {
    const solutionKeys = t("vision.solution.items", { returnObjects: true });
    return Array.isArray(solutionKeys) ? solutionKeys : [];
  };

  const getHealthcareDifficulties = () => {
    const difficultyKeys = t("vision.healthcare.difficulties.items", { returnObjects: true });
    return Array.isArray(difficultyKeys) ? difficultyKeys : [];
  };

  const getHealthcareSolutions = () => {
    const solutionKeys = t("vision.healthcare.solution.items", { returnObjects: true });
    return Array.isArray(solutionKeys) ? solutionKeys : [];
  };

  const difficulties = getDifficulties();
  const solutions = getSolutions();
  const healthcareDifficulties = getHealthcareDifficulties();
  const healthcareSolutions = getHealthcareSolutions();

  return (
    <section id="vision" className="py-16 bg-gradient-to-br from-medical-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-gray-900 mb-4">
            {t("vision.title")}
          </h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-6"></div>
        </div>

        {/* Transporters Section */}
        <div ref={transportersRef} data-section="transporters" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-medical-blue">{t("vision.transporters.subtitle")}</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Difficulties */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-medical-gray-900">
                  {t("vision.difficulties.title")}
                </h3>
              </div>
              <div className="space-y-4">
                {difficulties.map((difficulty, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-medical-gray-700 leading-relaxed">{difficulty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="text-medical-green" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-medical-gray-900">
                  {t("vision.solution.title")}
                </h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-medical-green rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-medical-gray-700 leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare Facilities Section */}
        <div ref={healthcareRef} data-section="healthcare" className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-medical-blue">{t("vision.healthcare.subtitle")}</h3>
          </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Healthcare Difficulties */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-medical-gray-900">
                  {t("vision.healthcare.difficulties.title")}
                </h3>
              </div>
              <div className="space-y-4">
                {healthcareDifficulties.map((difficulty, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-medical-gray-700 leading-relaxed">{difficulty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Healthcare Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="text-medical-green" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-medical-gray-900">
                  {t("vision.healthcare.solution.title")}
                </h3>
              </div>
              <div className="space-y-4">
                {healthcareSolutions.map((solution, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-medical-green rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-medical-gray-700 leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Platform */}
        <div className="bg-gradient-to-r from-medical-blue to-green-700 rounded-2xl p-8 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Plateforme SantExpress</h3>
            <p className="text-lg opacity-90">Une solution technologique complète et intégrée</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center">Application Mobile</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Interface intuitive et moderne</li>
                <li>• Notifications automatiques</li>
                <li>• Gestion des demandes</li>
                <li>• Géolocalisation en temps réel</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🚑</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center">Gestion de Flotte</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Optimisation des trajets</li>
                <li>• Suivi du véhicule</li>
                <li>• Planification intelligente</li>
                <li>• Réduction trajets à vide</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💳</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-center">Facturation CPAM</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Télétransmission automatique</li>
                <li>• Conformité réglementaire</li>
                <li>• Suivi des paiements</li>
                <li>• Comptabilité simplifiée</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}