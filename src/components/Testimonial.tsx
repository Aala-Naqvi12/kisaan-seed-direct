import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonial = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 border border-primary/20 animate-fade-in">
            <Quote className="h-12 w-12 text-primary mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
              "{t({ 
                ur: "کسان بازار سے پہلے، میں گندم مارکیٹ سے 25% کم قیمت پر بیچتا تھا۔ براہ راست فروخت سے، میں منصفانہ قیمتیں کماتا ہوں۔ فصل غذائیت منصوبہ نے میری پیداوار میں 28% اضافہ کیا۔ اب، میں اپنی تمام کاشتکاری کی ضروریات کے لیے کسان بازار پر بھروسہ کرتا ہوں۔",
                en: "Before Kisaan Bazaar, I was selling wheat at 25% below market rates. With direct selling, I'm earning fair prices. The crop nutrition plan increased my yield by 28%. Now, I rely on Kisaan Bazaar for all my farming needs.",
                pa: "ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਤੋਂ ਪਹਿਲਾਂ, ਮੈਂ ਕਣਕ ਨੂੰ ਬਾਜ਼ਾਰ ਦਰਾਂ ਤੋਂ 25% ਘੱਟ 'ਤੇ ਵੇਚ ਰਿਹਾ ਸੀ। ਸਿੱਧੀ ਵਿਕਰੀ ਨਾਲ, ਮੈਂ ਨਿਰਪੱਖ ਕੀਮਤਾਂ ਕਮਾ ਰਿਹਾ ਹਾਂ। ਫਸਲ ਪੋਸ਼ਣ ਯੋਜਨਾ ਨੇ ਮੇਰੀ ਪੈਦਾਵਾਰ 28% ਵਧਾਈ। ਹੁਣ, ਮੈਂ ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਖੇਤੀ ਲੋੜਾਂ ਲਈ ਕਿਸਾਨ ਬਾਜ਼ਾਰ 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹਾਂ।",
                sd: "ڪسان بازار کان اڳ، آئون ڪڻڪ کي بازار جي قيمت کان 25٪ گهٽ تي وڪرو ڪري رهيو هوس। سڌي وڪڻڻ سان، آئون منصفانه قيمتون ڪمائي رهيو آهيان۔ فصل جي غذائيت واري منصوبي منهنجي پيداوار ۾ 28٪ اضافو ڪيو۔ هاڻي، آئون پنهنجي سڀني زراعت جي ضرورتن لاءِ ڪسان بازار تي ڀروسو ڪريان ٿو۔",
                ps: "د کسان بازار دمخه، زه غنم د بازار نرخونو څخه 25٪ کم نرخ کې خرڅول. د مستقیم خرڅلو سره، زه منصفانه بیې ګټم. د فصل تغذیې پلان زما حاصل 28٪ زیات کړ. اوس، زه د خپلو ټولو کرنیز اړتیاو لپاره کسان بازار باندې تکیه کوم.",
                bal: "کسان بازار ءِ پیش ءَ، من گندم بازار ءِ نرخ ءَ 25٪ کم ءَ واڑدار کتگ۔ سیدھی واڑدار ءِ ئی، من منصفانہ نرخ کمانگا۔ فصل غذائیت منصوبہ ءَ میں پیداوار ءَ 28٪ زیاتی کت۔ ایشی، من وتی مزگیں کِرش ءِ لوٹ ءِ ئی کسان بازار ءَ بھروسہ کنگا۔",
                shina: "کسان بازار پیش، مے گندم بازار نرخ نو 25٪ کم واڑدار کتم۔ سیدھی واڑدار، مے منصفانہ نرخ کماتم۔ فصل غذائیت منصوبہ میں پیداوار 28٪ زیات کتم۔ ایشی، مے وتی مزگیں کرش لوٹ کسان بازار بھروسہ کریتم۔"
              })}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl text-primary-foreground font-bold">
                AR
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">
                  {t({ ur: "علی رضا", en: "Ali Raza", pa: "ਅਲੀ ਰਜ਼ਾ", sd: "علي رضا", ps: "علي رضا", bal: "علی رضا", shina: "علی رضا" })}
                </p>
                <p className="text-muted-foreground">
                  {t({ ur: "ملتان سے کسان", en: "Farmer from Multan", pa: "ਮੁਲਤਾਨ ਤੋਂ ਕਿਸਾਨ", sd: "ملتان مان هاري", ps: "د ملتان څخه کروندګر", bal: "ملتان نو کشتکار", shina: "ملتان نو کسان" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;