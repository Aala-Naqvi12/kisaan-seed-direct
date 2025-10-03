import { CheckCircle2 } from "lucide-react";

const ValueSection = () => {
  const values = [
    "Sell crops at fair market prices instantly",
    "Access only verified seeds, fertilizers, and pesticides",
    "Personalized crop nutrition plan with weather-based updates",
    "Boost yields up to 20–30% higher than traditional averages",
    "Build trust with farmer ratings & reviews",
    "Save time with easy app navigation in Urdu & English"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Why Farmers Choose Kisaan Bazaar
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Everything you need to succeed in modern agriculture
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
