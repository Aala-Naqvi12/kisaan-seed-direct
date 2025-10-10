import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueSection = () => {
  const { t } = useLanguage();
  
  const values = [
    t({ ur: "فصلوں کو فوری طور پر منصفانہ مارکیٹ قیمتوں پر فروخت کریں", en: "Sell crops instantly at fair market prices", pa: "ਫਸਲਾਂ ਨੂੰ ਤੁਰੰਤ ਨਿਰਪੱਖ ਬਾਜ਼ਾਰ ਕੀਮਤਾਂ 'ਤੇ ਵੇਚੋ", sd: "فصلن کي فوري طور تي منصفانه بازار جي قيمتن تي وڪرو", ps: "فصلونه سمدلاسه په منصفانه بازار بیو کې خرڅ کړئ", bal: "فصلاں فوری نرخ ءَ ئی منصفانہ بازار نرخ ءَ ئی واڑدار کنیت", shina: "فصلاں فوری منصفانہ بازار قیمتاں واڑدار کریت" }),
    t({ ur: "صرف تصدیق شدہ بیج، کھاد اور کیڑے مار دوا تک رسائی", en: "Access only verified seeds, fertilizers, and pesticides", pa: "ਸਿਰਫ਼ ਪ੍ਰਮਾਣਿਤ ਬੀਜ, ਖਾਦ, ਅਤੇ ਕੀਟਨਾਸ਼ਕਾਂ ਤੱਕ ਪਹੁੰਚ", sd: "صرف تصديق ٿيل ٻج، ڀاڻ ۽ ڪيڙن جي دوا تائين رسائي", ps: "یوازې تصدیق شوي تخمونو، سرو، او حشراتو وژونکو ته لاسرسی", bal: "پد تصدیق بوتگیں بیج، کھاد، و کیڑو مار دوا ءِ ئی دسترسی", shina: "پد تصدیق بیتل بیج، کھاد، و کیڑو مار دوا لاسرسی" }),
    t({ ur: "موسم پر مبنی اپ ڈیٹس کے ساتھ ذاتی فصل غذائیت منصوبہ", en: "Personalized crop nutrition plan with weather-based updates", pa: "ਮੌਸਮ-ਆਧਾਰਿਤ ਅਪਡੇਟਾਂ ਦੇ ਨਾਲ ਨਿੱਜੀ ਫਸਲ ਪੋਸ਼ਣ ਯੋਜਨਾ", sd: "موسم تي ٻڌل اپڊيٽس سان ذاتي فصل جي غذائيت جو منصوبو", ps: "د هوا پر بنسټ اپډیټونو سره شخصي د فصل تغذیې پلان", bal: "موسم ئے بنیاد ءَ ئی اپڈیٹاں گون ذاتی فصل غذائیت منصوبہ", shina: "موسم بنسٹ اپڈیٹاں سوم ذاتی فصل غذائیت منصوبہ" }),
    t({ ur: "روایتی اوسط سے 20-30% زیادہ پیداوار میں اضافہ", en: "20-30% higher yield increase over traditional averages", pa: "ਰਵਾਇਤੀ ਔਸਤ ਤੋਂ 20-30% ਵੱਧ ਪੈਦਾਵਾਰ ਵਾਧਾ", sd: "روايتي اوسط کان 20-30٪ وڌيڪ پيداوار ۾ اضافو", ps: "د دودیزو اوسط څخه 20-30٪ لوړ حاصل زیاتوالی", bal: "روایتی اوسط ئے 20-30٪ گیش پیداوار ءَ ئی زیاتی", shina: "روایتی اوسط نو 20-30٪ گیش پیداوار زیاتی" }),
    t({ ur: "کسان کی درجہ بندی اور جائزوں سے اعتماد قائم کریں", en: "Build trust with farmer ratings and reviews", pa: "ਕਿਸਾਨ ਦਰਜੇਬੰਦੀ ਅਤੇ ਸਮੀਖਿਆਵਾਂ ਨਾਲ ਵਿਸ਼ਵਾਸ ਬਣਾਓ", sd: "هارين جي درجه بندي ۽ جائزن سان اعتماد قائم ڪريو", ps: "د کروندګرو درجه بندۍ او بیاکتنو سره باور جوړ کړئ", bal: "کشتکار ئی درجہ بندی و جائزو سوم اعتماد جوڑیت", shina: "کسان درجہ بندی و جائزو سوم اعتماد جوڑیت" }),
    t({ ur: "اردو اور انگریزی میں آسان ایپ نیویگیشن سے وقت بچائیں", en: "Save time with easy app navigation in multiple languages", pa: "ਕਈ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਆਸਾਨ ਐਪ ਨੈਵੀਗੇਸ਼ਨ ਨਾਲ ਸਮਾਂ ਬਚਾਓ", sd: "ڪيترن ئي ٻولين ۾ آسان ايپ نيويگيشن سان وقت بچايو", ps: "په څو ژبو کې د اسانه ایپ نیویګیشن سره وخت خوندي کړئ", bal: "چوانک زبانا ءَ ئی آسان ایپ نیویگیشن سوم وخت بچیت", shina: "چوانک زباناں آسان ایپ نیویگیشن سوم وخت بچیت" })
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-muted/20">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            {t({ ur: "کسان کسان بازار کیوں منتخب کرتے ہیں", en: "Why Farmers Choose Kisaan Bazaar", pa: "ਕਿਸਾਨ ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਕਿਉਂ ਚੁਣਦੇ ਹਨ", sd: "هاري ڪسان بازار ڇو چونڊيندا آهن", ps: "کروندګران ولې کسان بازار غوره کوي", bal: "کشتکار کسان بازار کئے جاه دیت", shina: "کسان کسان بازار کو جاہ دیت" })}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            {t({ ur: "جدید زراعت میں کامیابی کے لیے سب کچھ جو آپ کو چاہیے", en: "Everything you need for success in modern agriculture", pa: "ਆਧੁਨਿਕ ਖੇਤੀ ਵਿੱਚ ਸਫਲਤਾ ਲਈ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼", sd: "جديد زراعت ۾ ڪاميابي لاءِ هر شيءِ جيڪا توهان کي گهربجي آهي", ps: "عصري کرنې کې بریالیتوب لپاره هر څه چې تاسو ته اړتیا لرئ", bal: "جدید زراعت ءَ ئی کامیابی ءِ ئی ہرچیز کہ شمئے لوٹ اِنت", shina: "جدید زراعت کامیابی ہر چیز کہ شمیا لوٹ اِنت" })}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-card to-primary/5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft animate-fade-in group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-1 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground group-hover:text-primary transition-colors">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
