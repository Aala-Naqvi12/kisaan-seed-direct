import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      period: "Forever",
      features: [
        "List your crops",
        "Buy verified inputs",
        "Basic marketplace access",
        "Community support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro Plan",
      price: "999",
      period: "per month",
      features: [
        "Everything in Free",
        "Crop nutrition plan",
        "Weekly weather updates",
        "Priority listings",
        "Email support"
      ],
      cta: "Start Pro Plan",
      highlighted: true,
      badge: "Best Value"
    },
    {
      name: "Premium Plan",
      price: "1,999",
      period: "per month",
      features: [
        "Everything in Pro",
        "Full expert support",
        "Annual savings",
        "Premium placement",
        "24/7 phone support"
      ],
      cta: "Go Premium",
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Start free, upgrade as you grow
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
