import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {t({ ur: "آج ہی فروخت اور ہوشیاری سے اگانا شروع کریں", en: "Start Selling and Growing Smarter Today", pa: "ਅੱਜ ਹੀ ਵੇਚਣਾ ਅਤੇ ਸਮਾਰਟ ਤਰੀਕੇ ਨਾਲ ਉਗਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ", sd: "اڄ ئي وڪڻڻ ۽ سمارٽ طريقي سان پوک ڪرڻ شروع ڪريو", ps: "نن ورځ خرڅول او هوښیارانه کرل پیل کړئ", bal: "امروچ واڑدار کنگ و ہوشیار ءِ ئی کِرش شروع کنیت", shina: "امروچ واڑدار و ہوشیاری ای کرش شروع کریت" })}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            {t({ ur: "ہزاروں کسانوں میں شامل ہوں جو پہلے ہی کسان بازار کے ساتھ اپنے کاروبار کو تبدیل کر رہے ہیں", en: "Join thousands of farmers already transforming their business with Kisaan Bazaar", pa: "ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ ਜੋ ਪਹਿਲਾਂ ਹੀ ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਨਾਲ ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਬਦਲ ਰਹੇ ਹਨ", sd: "هزارين هارين ۾ شامل ٿيو جيڪي اڳ ۾ ئي ڪسان بازار سان پنهنجي ڪاروبار کي تبديل ڪري رهيا آهن", ps: "په زرګونو کروندګرانو کې شامل شئ چې دمخه د کسان بازار سره خپل کاروبار بدلوي", bal: "ہزاراں کشتکاراں ءَ شامل بیت کہ پیش ءِ ئی کسان بازار گوں وتی کاروبار بدل کنت اَنت", shina: "ہزاراں کساناں شامل بیت کہ پیش ای کسان بازار سوم وتی کاروبار بدل کرونت" })}
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105 text-lg px-10 py-7"
          >
            {t({ ur: "آج ہی کسان بازار میں شامل ہوں", en: "Join Kisaan Bazaar Today", pa: "ਅੱਜ ਹੀ ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ", sd: "اڄ ئي ڪسان بازار ۾ شامل ٿيو", ps: "نن ورځ کسان بازار کې شامل شئ", bal: "امروچ کسان بازار ءَ شامل بیت", shina: "امروچ کسان بازار شامل بیت" })}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;