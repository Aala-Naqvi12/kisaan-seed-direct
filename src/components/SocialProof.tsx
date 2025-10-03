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
            <p className="text-lg font-semibold text-foreground">10,000 سے زائد کسان</p>
            <p className="text-muted-foreground">اور خریدار منسلک</p>
          </div>

          {/* Verified Suppliers */}
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <ShieldCheck className="h-12 w-12 text-primary mb-2" />
            <p className="text-lg font-semibold text-foreground">تصدیق شدہ فراہم کنندگان</p>
            <p className="text-muted-foreground">بیج اور کیڑے مار دوا</p>
          </div>

          {/* Testimonial Preview */}
          <div className="flex flex-col items-center animate-fade-in max-w-md" style={{ animationDelay: "0.2s" }}>
            <Users className="h-12 w-12 text-secondary mb-2" />
            <p className="text-lg font-semibold text-foreground">حقیقی نتائج</p>
            <p className="text-muted-foreground italic">
              "کسان پلان پر عمل کرنے کے بعد میری گندم کی پیداوار میں 28% اضافہ ہوا۔"
            </p>
            <p className="text-sm text-muted-foreground mt-1">— پنجاب سے کسان</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
