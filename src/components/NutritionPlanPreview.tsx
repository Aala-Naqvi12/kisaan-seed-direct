import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CloudRain, TrendingUp, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NutritionPlanPreview = () => {
  const features = [
    {
      icon: Brain,
      title: "AI سے چلنے والا منصوبہ",
      description: "آپ کی فصل کے لیے ذاتی غذائی نگہداشت"
    },
    {
      icon: CloudRain,
      title: "موسم کی پیش گوئی",
      description: "ہفتہ وار موسم کے مطابق اپ ڈیٹس"
    },
    {
      icon: TrendingUp,
      title: "پیداوار میں اضافہ",
      description: "عالمی اوسط تک پہنچیں"
    },
    {
      icon: Calendar,
      title: "قدم بہ قدم رہنمائی",
      description: "روزانہ کے کام کی یاددہانیاں"
    }
  ];

  const testimonials = [
    {
      name: "محمد اکرم",
      location: "ساہیوال",
      crop: "گندم",
      increase: "32%",
      quote: "فصل منصوبہ نے میری پیداوار میں 32% اضافہ کیا۔ اب میں بین الاقوامی معیار تک پہنچ رہا ہوں۔"
    },
    {
      name: "عائشہ بی بی",
      location: "گوجرانوالہ",
      crop: "چاول",
      increase: "28%",
      quote: "موسم کی اپ ڈیٹس سے میں نے بہتر فیصلے کیے اور نقصان سے بچ گیا۔"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-accent text-accent-foreground">
            <Sparkles className="h-4 w-4 mr-2" />
            فصل غذائیت منصوبہ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ہوشیاری سے کاشتکاری کریں۔ زیادہ کمائیں۔
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI اور موسم کی پیش گوئی کے ساتھ اپنی فصل کی پیداوار میں 20-30% اضافہ کریں
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Plan */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 rounded-lg p-3">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">آپ کا ذاتی فصل منصوبہ</h3>
                  <p className="text-muted-foreground">گندم - ربیع سیزن 2025</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">اس ہفتے کا کام</div>
                  <div className="text-2xl font-bold text-primary">نائٹروجن سپرے</div>
                  <div className="text-xs text-muted-foreground mt-1">مثالی موسم: 22-25°C</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">موسم کی اپ ڈیٹ</div>
                  <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                    <CloudRain className="h-6 w-6" />
                    بارش
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">اگلے 3 دن</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">متوقع اضافہ</div>
                  <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    +28%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">پچھلے سال کے مقابلے</div>
                </div>
              </div>

              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                اپنا منصوبہ شروع کریں
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-border/50 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full h-12 w-12 flex items-center justify-center text-lg text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location} - {testimonial.crop}</div>
                  </div>
                  <Badge className="mr-auto bg-green-600/10 text-green-600 border-green-600/20">
                    +{testimonial.increase}
                  </Badge>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NutritionPlanPreview;
