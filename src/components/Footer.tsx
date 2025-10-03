import { Sprout } from "lucide-react";

const Footer = () => {
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
              رازداری کی پالیسی
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              شرائط و ضوابط
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              ہم سے رابطہ کریں
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 کسان بازار۔ تمام حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
