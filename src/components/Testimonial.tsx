import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 border border-primary/20 animate-fade-in">
            <Quote className="h-12 w-12 text-primary mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
              "Before Kisaan Bazaar, I sold wheat at 25% less than the market. With direct selling, 
              I earn fair prices. The crop nutrition plan increased my yield by 28%. Now, I trust 
              Kisaan Bazaar for all my farming needs."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl text-primary-foreground font-bold">
                AR
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">Ali Raza</p>
                <p className="text-muted-foreground">Farmer from Multan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
