import { ShoppingCart, Handshake, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: ShoppingCart,
      title: t({ ur: "فہرست بنائیں یا خریدیں", en: "List or Buy", pa: "ਸੂਚੀ ਬਣਾਓ ਜਾਂ ਖਰੀਦੋ", sd: "فهرست ٺاهيو يا خريد ڪريو", ps: "لیست جوړ کړئ یا واخلئ", bal: "فہرست جوڑیت یا جہڑیت", shina: "فہرست جوڑیت یا جھڑیت" }),
      description: t({ ur: "کسان اپنی پیداوار کی فہرست بنائیں یا تصدیق شدہ سامان خریدیں", en: "Farmers list their produce or buy verified supplies", pa: "ਕਿਸਾਨ ਆਪਣੀ ਪੈਦਾਵਾਰ ਦੀ ਸੂਚੀ ਬਣਾਉਂਦੇ ਹਨ ਜਾਂ ਪ੍ਰਮਾਣਿਤ ਸਮਗਰੀ ਖਰੀਦਦੇ ਹਨ", sd: "هاري پنهنجي پيداوار جي فهرست ٺاهيندا آهن يا تصديق ٿيل سامان خريد ڪندا آهن", ps: "کروندګران خپل محصول لیست کوي یا تصدیق شوي توکي اخلي", bal: "کشتکار وتی پیداوار ءِ فہرست جوڑنت یا تصدیق بوتگیں سامان جہڑنت", shina: "کسان وتی پیداوار فہرست جوڑونت یا تصدیق بیتل سامان جھڑونت" })
    },
    {
      icon: Handshake,
      title: t({ ur: "براہ راست رابطہ", en: "Connect Directly", pa: "ਸਿੱਧਾ ਸੰਪਰਕ ਕਰੋ", sd: "سڌو رابطو ڪريو", ps: "مستقیم اړیکه ونیسئ", bal: "سیدھا رابطہ کنیت", shina: "سیدھا رابطہ کریت" }),
      description: t({ ur: "خریدار اور کسان درمیانی افراد کے بغیر لین دین کریں", en: "Buyers and farmers transact without middlemen", pa: "ਖਰੀਦਦਾਰ ਅਤੇ ਕਿਸਾਨ ਵਿਚੋਲਿਆਂ ਤੋਂ ਬਿਨਾਂ ਲੈਣ-ਦੇਣ ਕਰਦੇ ਹਨ", sd: "خريد ڪندڙ ۽ هاري وچولن کان سواءِ واپار ڪندا آهن", ps: "پیرودونکي او کروندګران د منځګړو پرته معامله کوي", bal: "جہڑندوک و کشتکار وچولیاں بغیر معاملہ کنت", shina: "جھڑندوک و کسان درمیان مرداں بغیر معاملہ کرونت" })
    },
    {
      icon: TrendingUp,
      title: t({ ur: "ہوشیاری سے اگائیں", en: "Grow Smarter", pa: "ਸਮਾਰਟ ਤਰੀਕੇ ਨਾਲ ਉਗਾਓ", sd: "سمارٽ طريقي سان پوک ڪريو", ps: "هوښیارانه وده کړئ", bal: "ہوشیار ءِ ئی کِرش کنیت", shina: "ہوشیاری ای کِرش کریت" }),
      description: t({ ur: "پیداوار بڑھانے کے لیے ذاتی فصل منصوبہ استعمال کریں", en: "Use personalized crop plans to increase yield", pa: "ਪੈਦਾਵਾਰ ਵਧਾਉਣ ਲਈ ਨਿੱਜੀ ਫਸਲ ਯੋਜਨਾ ਵਰਤੋ", sd: "پيداوار وڌائڻ لاءِ ذاتي فصل جو منصوبو استعمال ڪريو", ps: "د حاصلاتو زیاتوالي لپاره شخصي د فصل پلانونه وکاروئ", bal: "پیداوار زیات کنگ ءِ ئی ذاتی فصل منصوبہ استعمال کنیت", shina: "پیداوار زیات کنگ ذاتی فصل منصوبہ استعمال کریت" })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 via-secondary/5 to-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            {t({ ur: "یہ کیسے کام کرتا ہے", en: "How It Works", pa: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ", sd: "اهو ڪيئن ڪم ڪري ٿو", ps: "دا څنګه کار کوي", bal: "اے کتیں کار کنت", shina: "ای کیا کم کریلو" })}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            {t({ ur: "اپنے کاشتکاری کے کاروبار کو تبدیل کرنے کے تین آسان مراحل", en: "Three simple steps to transform your farming business", pa: "ਤੁਹਾਡੇ ਖੇਤੀ ਕਾਰੋਬਾਰ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿੰਨ ਸਧਾਰਨ ਕਦਮ", sd: "توهان جي زراعت جي ڪاروبار کي تبديل ڪرڻ لاءِ ٽي سادا قدم", ps: "ستاسو د کرنې کاروبار بدلولو لپاره درې ساده ګامونه", bal: "شمی زراعت ءِ کاروبار بدل کنگ ءِ ئی سێ ساہل ګام", shina: "شمی زراعت کاروبار بدل کنگ سے آسان قدم" })}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center text-xl font-bold shadow-elevated">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 flex items-center justify-center mb-6 border border-primary/20 hover:border-secondary/40 transition-all hover-lift">
                  <step.icon className="h-12 w-12 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-lg text-muted-foreground">{step.description}</p>

                {/* Connector Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-8 text-4xl text-primary/30">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;