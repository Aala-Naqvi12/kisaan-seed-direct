import { Star, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProof = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          {/* Rating */}
          <div className="flex flex-col items-center animate-fade-in">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground">
              {t({ ur: "10,000 سے زائد کسان", en: "10,000+ Farmers", pa: "10,000+ ਕਿਸਾਨ", sd: "10,000+ هاري", ps: "10,000+ کروندګران", bal: "10,000+ کشتکار", shina: "10,000+ کسان" })}
            </p>
            <p className="text-muted-foreground">
              {t({ ur: "اور خریدار منسلک", en: "and Buyers Connected", pa: "ਅਤੇ ਖਰੀਦਦਾਰ ਜੁੜੇ", sd: "۽ خريد ڪندڙ ڳنڍيل", ps: "او پیرودونکي وصل شوي", bal: "و جہڑندوک جوڑ بوتگ", shina: "و جھڑندوک جوڑ بیتل" })}
            </p>
          </div>

          {/* Verified Suppliers */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <ShieldCheck className="h-12 w-12 text-primary mb-2" />
            <p className="text-lg font-semibold text-foreground">
              {t({ ur: "تصدیق شدہ فراہم کنندگان", en: "Verified Suppliers", pa: "ਪ੍ਰਮਾਣਿਤ ਸਪਲਾਇਰ", sd: "تصديق ٿيل سپلائر", ps: "تصدیق شوي چمتو کوونکي", bal: "تصدیق بوتگیں سپلائر", shina: "تصدیق بیتل سپلائر" })}
            </p>
            <p className="text-muted-foreground">
              {t({ ur: "بیج اور کیڑے مار دوا", en: "Seeds and Pesticides", pa: "ਬੀਜ ਅਤੇ ਕੀਟਨਾਸ਼ਕ", sd: "ٻج ۽ ڪيڙن جي دوا", ps: "تخمونه او حشراتو وژونکي", bal: "بیج و کیڑو مار دوا", shina: "بیج و کیڑو مار دوا" })}
            </p>
          </div>

          {/* Testimonial Preview */}
          <div className="flex flex-col items-center animate-fade-in max-w-md" style={{ animationDelay: "0.2s" }}>
            <Users className="h-12 w-12 text-secondary mb-2" />
            <p className="text-lg font-semibold text-foreground">
              {t({ ur: "حقیقی نتائج", en: "Real Results", pa: "ਅਸਲ ਨਤੀਜੇ", sd: "حقيقي نتيجا", ps: "ریښتیني پایلې", bal: "اصلی نتیجہ", shina: "اصلی نتیجہ" })}
            </p>
            <p className="text-muted-foreground italic">
              "{t({ ur: "کسان پلان پر عمل کرنے کے بعد میری گندم کی پیداوار میں 28% اضافہ ہوا۔", en: "My wheat yield increased by 28% after following the crop plan.", pa: "ਫਸਲ ਯੋਜਨਾ ਦੀ ਪਾਲਣਾ ਕਰਨ ਤੋਂ ਬਾਅਦ ਮੇਰੀ ਕਣਕ ਦੀ ਪੈਦਾਵਾਰ 28% ਵਧੀ।", sd: "فصل جي منصوبي جي پيروي ڪرڻ کان پوءِ منهنجي ڪڻڪ جي پيداوار ۾ 28٪ اضافو ٿيو۔", ps: "د فصل پلان تعقیب وروسته زما د غنمو حاصل 28٪ زیات شو۔", bal: "فصل منصوبہ ءِ عمل کنگ ءِ پسئے میں گندم ءِ پیداوار ءَ 28٪ زیاتی بوت۔", shina: "فصل منصوبہ عمل کنگ پسئے میں گندم پیداوار 28٪ زیات بیت۔" })}"
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              — {t({ ur: "پنجاب سے کسان", en: "Farmer from Punjab", pa: "ਪੰਜਾਬ ਤੋਂ ਕਿਸਾਨ", sd: "پنجاب مان هاري", ps: "د پنجاب څخه کروندګر", bal: "پنجاب نو کشتکار", shina: "پنجاب نو کسان" })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;