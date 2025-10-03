import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Farmers lose up to 40% income due to middlemen",
    "Fake seeds and pesticides reduce crop health",
    "Unpredictable weather lowers yield and trust"
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            The Problem Farmers Face Every Day
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
              Kisaan Bazaar solves this by creating a direct, transparent, farmer-friendly marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
