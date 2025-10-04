import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="کھیت میں پاکستانی کسان" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/90 to-background/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Sprout className="h-4 w-4" />
            <span className="text-sm font-semibold">پاکستان کا پہلا زرعی مارکیٹ پلیس</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            منصفانہ قیمتیں۔ بہتر پیداوار۔{" "}
            <span className="text-primary">کسان سے خریدار تک براہِ راست۔</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl leading-relaxed">
            کسان بازار کسانوں کو براہ راست فصلیں بیچنے، تصدیق شدہ بیج اور کھاد حاصل کرنے، 
            اور ذاتی فصل منصوبہ کے ساتھ ہوشیاری سے کاشتکاری کرنے میں مدد کرتا ہے۔
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              اپنی فصل بیچیں
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              معیاری سامان خریدیں
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">فعال کسان</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5,000+</div>
              <div className="text-sm text-muted-foreground">خریدار</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">30%</div>
              <div className="text-sm text-muted-foreground">پیداوار میں اضافہ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
