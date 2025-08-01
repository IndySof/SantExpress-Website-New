import { useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";
import medicalImage from "@assets/online-marketing-hIgeoQjS_iE-unsplash_1754051695783.jpg";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);

      if (now >= endTime) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div id={`counter-${end}`} className="text-4xl font-bold text-medical-blue mb-2">
      {count}{suffix}
    </div>
  );
}

export function MarketStats() {
  const { t } = useTranslation();

  return (
    <section id="market-stats" className="py-16 bg-medical-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-medical-gray-900 mb-4">
            {t("market.title")}
          </h2>
          <p className="text-medical-gray-600 max-w-3xl mx-auto text-[15px]">
            {t("market.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <AnimatedCounter end={6} suffix=" milliards €" />
            <p className="text-medical-gray-600 mt-2">{t("market.stats.consumption")}</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-medical-green mb-2">+17,7%</div>
            <div className="text-lg font-medium text-medical-gray-700 mb-2">2021</div>
            <p className="text-medical-gray-600">{t("market.stats.growth2021")}</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-4xl font-bold text-medical-green mb-2">+7,7%</div>
            <div className="text-lg font-medium text-medical-gray-700 mb-2">2022</div>
            <p className="text-medical-gray-600">{t("market.stats.growth2022")}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <p className="text-lg text-medical-gray-700">
              {t("market.coverage")}
            </p>
          </div>
          <img 
            src={medicalImage}
            alt="Professionnel de santé avec stéthoscope"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
