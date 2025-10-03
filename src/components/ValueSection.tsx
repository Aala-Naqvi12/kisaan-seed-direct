import { CheckCircle2 } from "lucide-react";

const ValueSection = () => {
  const values = [
    "فصلوں کو فوری طور پر منصفانہ مارکیٹ قیمتوں پر فروخت کریں",
    "صرف تصدیق شدہ بیج، کھاد اور کیڑے مار دوا تک رسائی",
    "موسم پر مبنی اپ ڈیٹس کے ساتھ ذاتی فصل غذائیت منصوبہ",
    "روایتی اوسط سے 20-30% زیادہ پیداوار میں اضافہ",
    "کسان کی درجہ بندی اور جائزوں سے اعتماد قائم کریں",
    "اردو اور انگریزی میں آسان ایپ نیویگیشن سے وقت بچائیں"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            کسان کسان بازار کیوں منتخب کرتے ہیں
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            جدید زراعت میں کامیابی کے لیے سب کچھ جو آپ کو چاہیے
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
