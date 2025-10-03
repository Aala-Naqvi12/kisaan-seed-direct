import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            آج ہی فروخت اور ہوشیاری سے اگانا شروع کریں
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            ہزاروں کسانوں میں شامل ہوں جو پہلے ہی کسان بازار کے ساتھ اپنے کاروبار کو تبدیل کر رہے ہیں
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105 text-lg px-10 py-7"
          >
            آج ہی کسان بازار میں شامل ہوں
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
