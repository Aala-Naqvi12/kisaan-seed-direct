import { Star, ShieldCheck, Users } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          {/* Rating */}
          <div className="flex flex-col items-center animate-fade-in">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground">Over 10,000 farmers</p>
            <p className="text-muted-foreground">and buyers connected</p>
          </div>

          {/* Verified Suppliers */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <ShieldCheck className="h-12 w-12 text-primary mb-2" />
            <p className="text-lg font-semibold text-foreground">Verified Suppliers</p>
            <p className="text-muted-foreground">of seeds & pesticides</p>
          </div>

          {/* Testimonial Preview */}
          <div className="flex flex-col items-center animate-fade-in max-w-md" style={{ animationDelay: "0.2s" }}>
            <Users className="h-12 w-12 text-secondary mb-2" />
            <p className="text-lg font-semibold text-foreground">Real Results</p>
            <p className="text-muted-foreground italic">
              "My wheat yield increased by 28% after following Kisaan Plan."
            </p>
            <p className="text-sm text-muted-foreground mt-1">— Farmer from Punjab</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
