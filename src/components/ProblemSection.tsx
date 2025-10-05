import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();
  
  const problems = [
    t({ ur: "درمیانی افراد کی وجہ سے کسان 40% تک آمدنی کھو دیتے ہیں", en: "Farmers lose up to 40% income due to middlemen", pa: "ਵਿਚੋਲਿਆਂ ਕਾਰਨ ਕਿਸਾਨ 40% ਤੱਕ ਆਮਦਨ ਗੁਆ ਦਿੰਦੇ ਹਨ", sd: "وچولن جي ڪري هارين 40٪ آمدني وڃائي ويھن ٿا", ps: "کروندګران د منځګړو له امله تر 40٪ عاید له لاسه ورکوي", bal: "وچولئاں تی وجھ گوں کشتکار 40٪ آمدنی گم کنت", shina: "درمیان مردن وجہ نو کسان 40% تک آمدنی ہاریلو" }),
    t({ ur: "جعلی بیج اور کیڑے مار دوائیں فصل کی صحت کو کم کرتی ہیں", en: "Fake seeds and pesticides reduce crop health", pa: "ਨਕਲੀ ਬੀਜ ਅਤੇ ਕੀਟਨਾਸ਼ਕ ਫਸਲ ਦੀ ਸਿਹਤ ਘਟਾਉਂਦੇ ਹਨ", sd: "جعلي ٻج ۽ ڪيڙن جي دوا فصلن جي صحت کي گھٽائي ٿي", ps: "جعلي تخمونه او حشراتو وژونکي د فصل صحت کموي", bal: "جعلی بیج و کیڑو مار دوائیں فصل ای تندرستی کم کنت", shina: "جعلی بیج و کیڑو مار دوائیں فصل ای صحت کم کریلو" }),
    t({ ur: "غیر متوقع موسم پیداوار اور اعتماد کو کم کرتا ہے", en: "Unpredictable weather reduces yield and confidence", pa: "ਅਨਿਸ਼ਚਿਤ ਮੌਸਮ ਪੈਦਾਵਾਰ ਅਤੇ ਭਰੋਸਾ ਘਟਾਉਂਦਾ ਹੈ", sd: "اڻڄاتل موسم پيداوار ۽ اعتماد کي گھٽائي ٿي", ps: "ناڅاپي هوا د حاصلاتو او باور کموي", bal: "نامعلوم موسم پیداوار و اعتماد کم کنت", shina: "نامعلوم موسم پیداوار و اعتماد کم کریلو" })
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            {t({ ur: "وہ مسائل جن کا کسان ہر روز سامنا کرتے ہیں", en: "Problems Farmers Face Every Day", pa: "ਸਮੱਸਿਆਵਾਂ ਜਿਨ੍ਹਾਂ ਦਾ ਕਿਸਾਨ ਰੋਜ਼ਾਨਾ ਸਾਹਮਣਾ ਕਰਦੇ ਹਨ", sd: "مسئلا جيڪي هارين کي روزاني منهن ڏئي ٿا", ps: "ستونزې چې کروندګران ورځني ورسره مخامخ دي", bal: "مسئلہ یاں کہ کشتکار ہر روز سامنا کنت", shina: "مسائل یاں کسان ہر دیس سامنا کریلو" })}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-4" />
                <p className="text-lg text-foreground">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20">
            <p className="text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
              <span className="text-primary">👉</span>
              {t({ ur: "کسان بازار براہ راست، شفاف، اور کسان دوست مارکیٹ بنا کر ان مسائل کو حل کرتا ہے۔", en: "Kisaan Bazaar solves these by building a direct, transparent, and farmer-friendly market.", pa: "ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਇਹਨਾਂ ਨੂੰ ਸਿੱਧੇ, ਪਾਰਦਰਸ਼ੀ, ਅਤੇ ਕਿਸਾਨ-ਅਨੁਕੂਲ ਬਾਜ਼ਾਰ ਬਣਾ ਕੇ ਹੱਲ ਕਰਦਾ ਹੈ।", sd: "ڪسان بازار انهن کي سڌو، شفاف، ۽ هارين جي دوست بازار ٺاهي حل ڪري ٿو۔", ps: "کسان بازار دا مستقیم، شفاف، او کروندګرو دوستانه بازار جوړولو سره حل کوي۔", bal: "کسان بازار ایں سیدھا، شفاف، و کشتکار دوست بازار جوڑ ءِ ئی حل کنت۔", shina: "کسان بازار ای براہ راست، شفاف، و کسان دوست بازار جوڑ ای حل کریلو۔" })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
