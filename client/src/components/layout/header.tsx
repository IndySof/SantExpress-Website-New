import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "@/lib/i18n";
import logoPath from "@assets/santexpresslogo_1754049458697.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToVisionSection = (section: 'transporters' | 'healthcare') => {
    // First scroll to vision section
    const visionElement = document.getElementById('vision');
    if (visionElement) {
      visionElement.scrollIntoView({ behavior: "smooth" });
      
      // Then scroll to specific subsection after a short delay
      setTimeout(() => {
        const targetSelector = section === 'transporters' 
          ? '[data-section="transporters"]' 
          : '[data-section="healthcare"]';
        const targetElement = document.querySelector(targetSelector) as HTMLElement;
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "market-stats", label: t("nav.market") },
    { id: "actors", label: t("nav.actors") },
    { id: "services", label: t("nav.services") },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-medical-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="SantExpress" 
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-medical-gray-700 hover:text-medical-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Vision Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-medical-gray-700 hover:text-medical-blue px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1">
                    {t("nav.vision")}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-64">
                  <DropdownMenuItem 
                    onClick={() => scrollToVisionSection('transporters')}
                    className="cursor-pointer"
                  >
                    {t("vision.dropdown.transporters")}
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => scrollToVisionSection('healthcare')}
                    className="cursor-pointer"
                  >
                    {t("vision.dropdown.healthcare")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-medical-green hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("nav.contact")}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-medical-gray-700 hover:text-medical-blue px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Mobile Vision Menu */}
                  <div className="px-3 py-2">
                    <div className="text-base font-medium text-medical-gray-700 mb-2">
                      {t("nav.vision")}
                    </div>
                    <div className="ml-4 space-y-2">
                      <button
                        onClick={() => scrollToVisionSection('transporters')}
                        className="block w-full text-left text-sm text-medical-gray-600 hover:text-medical-blue py-1"
                      >
                        {t("vision.dropdown.transporters")}
                      </button>
                      <button
                        onClick={() => scrollToVisionSection('healthcare')}
                        className="block w-full text-left text-sm text-medical-gray-600 hover:text-medical-blue py-1"
                      >
                        {t("vision.dropdown.healthcare")}
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-medical-green hover:bg-green-600 text-white w-full mt-4"
                  >
                    {t("nav.contact")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
