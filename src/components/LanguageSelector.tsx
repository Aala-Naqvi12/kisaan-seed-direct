import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const languages = [
  { code: "punjabi", name: "پنجابی", label: "Punjabi" },
  { code: "sindhi", name: "سنڌي", label: "Sindhi" },
  { code: "pashto", name: "پښتو", label: "Pashto" },
  { code: "balochi", name: "بلوچی", label: "Balochi" },
  { code: "gilgiti", name: "گلگتی", label: "Gilgiti" }
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem("userLanguage");
    if (!savedLanguage) {
      // Show modal on first visit
      setOpen(true);
    } else {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    localStorage.setItem("userLanguage", languageCode);
    setOpen(false);
  };

  return (
    <>
      {/* Language indicator in header */}
      {selectedLanguage && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(true)}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-card/95 backdrop-blur-sm hover:bg-card"
        >
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find(l => l.code === selectedLanguage)?.name}
          </span>
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold">
              اپنی زبان منتخب کریں
            </DialogTitle>
            <DialogDescription className="text-center text-lg">
              براہ کرم اپنی علاقائی زبان منتخب کریں
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-3 py-4">
            {languages.map((language) => (
              <Button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                variant="outline"
                className="h-auto py-4 text-lg justify-between hover:bg-primary/10 hover:border-primary transition-all"
              >
                <span className="text-xl">{language.name}</span>
                <span className="text-sm text-muted-foreground">{language.label}</span>
              </Button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            آپ بعد میں بھی اپنی زبان تبدیل کر سکتے ہیں
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LanguageSelector;
