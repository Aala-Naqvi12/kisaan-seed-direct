import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t({
        ur: "مفت پلان",
        en: "Free Plan",
        pa: "مفت پلان",
        sd: "مفت پلان",
        ps: "وړیا پلان",
        bal: "مفت پلان",
        shina: "مفت پلان"
      }),
      price: "0",
      period: t({
        ur: "ہمیشہ کے لیے",
        en: "Forever",
        pa: "ہمیشہ لئی",
        sd: "هميشه لاءِ",
        ps: "د تل لپاره",
        bal: "ہمیشہ ءِ واستہ",
        shina: "ہمیشہ کے لیئے"
      }),
      features: [
        t({
          ur: "اپنی فصلوں کی فہرست بنائیں",
          en: "List your crops",
          pa: "اپنیاں فصلاں لسٹ کرو",
          sd: "پنهنجي فصلن جي فهرست ٺاهيو",
          ps: "خپل فصلونه لیست کړئ",
          bal: "وتی فصلانی لسٹ جوڑ کنیت",
          shina: "تانی فصلیں لسٹ بناؤ"
        }),
        t({
          ur: "تصدیق شدہ سامان خریدیں",
          en: "Buy verified supplies",
          pa: "تصدیق شدہ سامان خریدو",
          sd: "تصديق ٿيل سامان خريد ڪريو",
          ps: "تایید شوی توکي واخلئ",
          bal: "تصدیق بوتگین سامان گرٹیت",
          shina: "تصدیق شدہ سامان خریدو"
        }),
        t({
          ur: "بنیادی مارکیٹ تک رسائی",
          en: "Basic marketplace access",
          pa: "بنیادی مارکیٹ تک رسائی",
          sd: "بنيادي مارڪيٽ تک رسائي",
          ps: "اساسي بازار ته لاسرسی",
          bal: "بنیادی بازار ءَ رسائی",
          shina: "بنیادی بازار جی رسائی"
        }),
        t({
          ur: "کمیونٹی سپورٹ",
          en: "Community support",
          pa: "کمیونٹی سپورٹ",
          sd: "ڪميونٽي سپورٽ",
          ps: "ټولنیز مالتړ",
          bal: "کمیونٹی سپورٹ",
          shina: "کمیونٹی سپورٹ"
        })
      ],
      cta: t({
        ur: "شروع کریں",
        en: "Get Started",
        pa: "شروع کرو",
        sd: "شروع ڪريو",
        ps: "پیل وکړئ",
        bal: "شروع کنیت",
        shina: "شروع کرو"
      }),
      highlighted: false
    },
    {
      name: t({
        ur: "پرو پلان",
        en: "Pro Plan",
        pa: "پرو پلان",
        sd: "پرو پلان",
        ps: "پرو پلان",
        bal: "پرو پلان",
        shina: "پرو پلان"
      }),
      price: "999",
      period: t({
        ur: "فی مہینہ",
        en: "Per month",
        pa: "فی مہینہ",
        sd: "في مهيني",
        ps: "په میاشت کې",
        bal: "ہر ماہ ءِ",
        shina: "ہر مہینہ"
      }),
      features: [
        t({
          ur: "مفت میں سب کچھ",
          en: "Everything in Free",
          pa: "مفت وچ سب کجھ",
          sd: "مفت ۾ سڀ ڪجھ",
          ps: "په وړیا کې ټول شیان",
          bal: "مفت ءَ گشتیں شے",
          shina: "مفت می سب کجھ"
        }),
        t({
          ur: "فصل غذائیت منصوبہ",
          en: "Crop nutrition plan",
          pa: "فصل غذائیت منصوبہ",
          sd: "فصل جي غذائيت جو منصوبو",
          ps: "د فصل تغذیې پلان",
          bal: "فصل ءِ غذائیت ءِ منصوبہ",
          shina: "فصل جی غذائیت جی منصوبہ"
        }),
        t({
          ur: "ہفتہ وار موسمی اپ ڈیٹس",
          en: "Weekly weather updates",
          pa: "ہفتہ وار موسمی اپ ڈیٹس",
          sd: "هفتيوار موسمي تازه ڪاري",
          ps: "اونیزه هوا اپډېټونه",
          bal: "ہفتہ وار موسمی اپ ڈیٹ",
          shina: "ہفتہ وار موسم جی اپ ڈیٹس"
        }),
        t({
          ur: "ترجیحی فہرستیں",
          en: "Priority listings",
          pa: "ترجیحی فہرستاں",
          sd: "ترجيحي فهرستون",
          ps: "لومړیتوب لرونکي لیستونه",
          bal: "ترجیحی لسٹاں",
          shina: "ترجیحی فہرستیں"
        }),
        t({
          ur: "ای میل سپورٹ",
          en: "Email support",
          pa: "ای میل سپورٹ",
          sd: "اي ميل سپورٽ",
          ps: "بریښنالیک مالتړ",
          bal: "ای میل سپورٹ",
          shina: "ای میل سپورٹ"
        })
      ],
      cta: t({
        ur: "پرو پلان شروع کریں",
        en: "Start Pro Plan",
        pa: "پرو پلان شروع کرو",
        sd: "پرو پلان شروع ڪريو",
        ps: "پرو پلان پیل کړئ",
        bal: "پرو پلان شروع کنیت",
        shina: "پرو پلان شروع کرو"
      }),
      highlighted: true,
      badge: t({
        ur: "بہترین قدر",
        en: "Best Value",
        pa: "بہترین قدر",
        sd: "بهترين قدر",
        ps: "غوره ارزښت",
        bal: "بہترین قیمت",
        shina: "بہترین قدر"
      })
    },
    {
      name: t({
        ur: "پریمیم پلان",
        en: "Premium Plan",
        pa: "پریمیم پلان",
        sd: "پريميم پلان",
        ps: "پریمیم پلان",
        bal: "پریمیم پلان",
        shina: "پریمیم پلان"
      }),
      price: "1,999",
      period: t({
        ur: "فی مہینہ",
        en: "Per month",
        pa: "فی مہینہ",
        sd: "في مهيني",
        ps: "په میاشت کې",
        bal: "ہر ماہ ءِ",
        shina: "ہر مہینہ"
      }),
      features: [
        t({
          ur: "پرو میں سب کچھ",
          en: "Everything in Pro",
          pa: "پرو وچ سب کجھ",
          sd: "پرو ۾ سڀ ڪجھ",
          ps: "په پرو کې ټول شیان",
          bal: "پرو ءَ گشتیں شے",
          shina: "پرو می سب کجھ"
        }),
        t({
          ur: "مکمل ماہر سپورٹ",
          en: "Full expert support",
          pa: "مکمل ماہر سپورٹ",
          sd: "مڪمل ماهر سپورٽ",
          ps: "بشپړ ماهر مالتړ",
          bal: "مکمل ماہر سپورٹ",
          shina: "مکمل ماہر سپورٹ"
        }),
        t({
          ur: "سالانہ بچت",
          en: "Annual savings",
          pa: "سالانہ بچت",
          sd: "سالياني بچت",
          ps: "کلنی سپما",
          bal: "سالانہ بچت",
          shina: "سالانہ بچت"
        }),
        t({
          ur: "پریمیم پلیسمنٹ",
          en: "Premium placement",
          pa: "پریمیم پلیسمنٹ",
          sd: "پريميم جاءِ",
          ps: "پریمیم ځای",
          bal: "پریمیم جاگہ",
          shina: "پریمیم جگہ"
        }),
        t({
          ur: "24/7 فون سپورٹ",
          en: "24/7 Phone support",
          pa: "24/7 فون سپورٹ",
          sd: "24/7 فون سپورٽ",
          ps: "24/7 تلیفوني مالتړ",
          bal: "24/7 فون سپورٹ",
          shina: "24/7 فون سپورٹ"
        })
      ],
      cta: t({
        ur: "پریمیم حاصل کریں",
        en: "Get Premium",
        pa: "پریمیم حاصل کرو",
        sd: "پريميم حاصل ڪريو",
        ps: "پریمیم ترلاسه کړئ",
        bal: "پریمیم گرٹیت",
        shina: "پریمیم حاصل کرو"
      }),
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            {t({
              ur: "اپنا پلان منتخب کریں",
              en: "Choose Your Plan",
              pa: "اپنا پلان چنو",
              sd: "پنهنجو پلان چونڊيو",
              ps: "خپل پلان وټاکئ",
              bal: "وتی پلان انتخاب کنیت",
              shina: "تانی پلان منتخب کرو"
            })}
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            {t({
              ur: "مفت شروع کریں، جیسے جیسے آپ بڑھتے ہیں اپ گریڈ کریں",
              en: "Start free, upgrade as you grow",
              pa: "مفت شروع کرو، جویں ودھدے او اپ گریڈ کرو",
              sd: "مفت شروع ڪريو، جيئن وڌندا آهيو اپ گريڊ ڪريو",
              ps: "وړیا پیل وکړئ، لکه څنګه چې وده کوئ اپ ګریډ کړئ",
              bal: "مفت شروع کنیت، چمگڑ چہ زیات بیت اپ گریڈ کنیت",
              shina: "مفت شروع کرو، چمو تسی بڑدے او اپ گریڈ کرو"
            })}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-elevated animate-fade-in ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-b from-primary/5 to-card scale-105"
                    : "border-border bg-card hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-soft">
                    <Sparkles className="h-4 w-4" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">PKR {plan.price}</span>
                    <span className="text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.highlighted
                      ? "w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft hover:shadow-elevated transition-all duration-300"
                      : "w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  }
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
