import { ShoppingCart, Handshake, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "فہرست بنائیں یا خریدیں",
      description: "کسان اپنی پیداوار کی فہرست بنائیں یا تصدیق شدہ سامان خریدیں"
    },
    {
      icon: Handshake,
      title: "براہ راست رابطہ",
      description: "خریدار اور کسان درمیانی افراد کے بغیر لین دین کریں"
    },
    {
      icon: TrendingUp,
      title: "ہوشیاری سے اگائیں",
      description: "پیداوار بڑھانے کے لیے ذاتی فصل منصوبہ استعمال کریں"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            یہ کیسے کام کرتا ہے
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            اپنے کاشتکاری کے کاروبار کو تبدیل کرنے کے تین آسان مراحل
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-elevated">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 border border-primary/20">
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
