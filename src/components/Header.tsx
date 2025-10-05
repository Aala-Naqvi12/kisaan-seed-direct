import { Button } from "@/components/ui/button";
import { Sprout, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: t('ہوم', 'Home') },
    { id: 'marketplace', label: t('مارکیٹ پلیس', 'Marketplace') },
    { id: 'agristore', label: t('ایگری سٹور', 'Agri Store') },
    { id: 'nutrition', label: t('غذائیت منصوبہ', 'Nutrition Plan') },
    { id: 'how-it-works', label: t('کیسے کام کرتا ہے', 'How It Works') },
    { id: 'pricing', label: t('قیمتیں', 'Pricing') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Kisaan Bazaar</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Languages className="h-4 w-4" />
            <span>{language === 'ur' ? 'English' : 'اردو'}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
