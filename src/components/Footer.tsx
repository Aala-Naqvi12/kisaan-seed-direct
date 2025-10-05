import { Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Kisaan Bazaar</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">
              {t({ ur: "رازداری کی پالیسی", en: "Privacy Policy", pa: "ਪ੍ਰਾਈਵੇਸੀ ਨੀਤੀ", sd: "رازداري جي پاليسي", ps: "د محرمیت پالیسي", bal: "رازداری ءِ پالیسی", shina: "رازداری پالیسی" })}
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              {t({ ur: "شرائط و ضوابط", en: "Terms & Conditions", pa: "ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ", sd: "شرطون ۽ ضابطا", ps: "شرایط او احکام", bal: "شرطاں و ضابطہ", shina: "شرائط و ضابطہ" })}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t({ ur: "ہم سے رابطہ کریں", en: "Contact Us", pa: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ", sd: "اسان سان رابطو ڪريو", ps: "موږ سره اړیکه ونیسئ", bal: "ما سوم رابطہ کنیت", shina: "مہ سوم رابطہ کریت" })}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            {t({ ur: "© 2024 کسان بازار۔ تمام حقوق محفوظ ہیں۔", en: "© 2024 Kisaan Bazaar. All rights reserved.", pa: "© 2024 ਕਿਸਾਨ ਬਾਜ਼ਾਰ। ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।", sd: "© 2024 ڪسان بازار۔ سڀ حق محفوظ آهن۔", ps: "© 2024 کسان بازار۔ ټول حقونه خوندي دي۔", bal: "© 2024 کسان بازار۔ گشی حقاں محفوظ اَنت۔", shina: "© 2024 کسان بازار۔ سبھی حق محفوظ۔" })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;