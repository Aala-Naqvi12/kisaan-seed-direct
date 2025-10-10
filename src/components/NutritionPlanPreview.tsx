import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CloudRain, TrendingUp, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const NutritionPlanPreview = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: t({
        ur: "AI سے چلنے والا منصوبہ",
        en: "AI-Powered Plan",
        pa: "AI نال چلن والا منصوبہ",
        sd: "AI سان هلندڙ منصوبو",
        ps: "د AI څخه پرمخ تلونکی پلان",
        bal: "AI سرا چلگ منصوبہ",
        shina: "AI سنگے چلݨ والی منصوبہ"
      }),
      description: t({
        ur: "آپ کی فصل کے لیے ذاتی غذائی نگہداشت",
        en: "Personalized nutrition care for your crops",
        pa: "تہاڈی فصل لئی ذاتی غذائی دیکھ بھال",
        sd: "توهان جي فصل لاءِ ذاتي غذائيت جي سنڀال",
        ps: "ستاسو د فصل لپاره شخصي تغذیه پاملرنه",
        bal: "شمی فصل ءِ واستہ شخصی غذائیت ءِ سنبال",
        shina: "تھی فصل کے لیے شخصی غذائیت جی دیکھ بھال"
      })
    },
    {
      icon: CloudRain,
      title: t({
        ur: "موسم کی پیش گوئی",
        en: "Weather Forecast",
        pa: "موسم دی پیش گوئی",
        sd: "موسم جي اڳڪٿي",
        ps: "د هوا وړاندوینه",
        bal: "موسم ءِ اگاہی",
        shina: "موسم جی پیشین گوئی"
      }),
      description: t({
        ur: "ہفتہ وار موسم کے مطابق اپ ڈیٹس",
        en: "Weekly weather-based updates",
        pa: "ہفتہ وار موسم دے مطابق اپ ڈیٹس",
        sd: "هفتيوار موسم جي بنياد تي تازه ڪاريون",
        ps: "اونیزه د هوا پر بنسټ اپډېټونه",
        bal: "ہفتہ وار موسم ءِ بنیاد اٹی اپ ڈیٹ",
        shina: "ہفتہ وار موسم جے مطابق اپ ڈیٹس"
      })
    },
    {
      icon: TrendingUp,
      title: t({
        ur: "پیداوار میں اضافہ",
        en: "Yield Increase",
        pa: "پیداوار وچ اضافہ",
        sd: "پيداوار ۾ اضافو",
        ps: "د حاصلاتو زیاتوالی",
        bal: "پیداوار ءَ زیات بوھگ",
        shina: "پیداوار می زیات"
      }),
      description: t({
        ur: "عالمی اوسط تک پہنچیں",
        en: "Reach global averages",
        pa: "عالمی اوسط تک پہنچو",
        sd: "عالمي اوسط تائين پهچو",
        ps: "نړیوالو اوسطونو ته ورسېږئ",
        bal: "دنیائی اوسط ءَ ورسیت",
        shina: "دنیا جی اوسط تک پئینچو"
      })
    },
    {
      icon: Calendar,
      title: t({
        ur: "قدم بہ قدم رہنمائی",
        en: "Step-by-Step Guide",
        pa: "قدم بہ قدم رہنمائی",
        sd: "قدم بہ قدم رهنمائي",
        ps: "ګام تر ګامه لارښود",
        bal: "قدم بہ قدم رہنمائی",
        shina: "قدم بہ قدم رہنمائی"
      }),
      description: t({
        ur: "روزانہ کے کام کی یاددہانیاں",
        en: "Daily task reminders",
        pa: "روزانہ دے کماں دیاں یاددہانیاں",
        sd: "روزاني ڪمن جي ياد ڏياريون",
        ps: "ورځني دندو یادونه",
        bal: "روچینہ کاراں ءِ یاددھانی",
        shina: "روژانہ کاماں جیاں یاد دہانیاں"
      })
    }
  ];

  const testimonials = [
    {
      name: t({
        ur: "محمد اکرم",
        en: "Muhammad Akram",
        pa: "محمد اکرم",
        sd: "محمد اڪرم",
        ps: "محمد اکرم",
        bal: "محمد اکرم",
        shina: "محمد اکرم"
      }),
      location: t({
        ur: "ساہیوال",
        en: "Sahiwal",
        pa: "ساہیوال",
        sd: "ساهيوال",
        ps: "ساهیوال",
        bal: "ساہیوال",
        shina: "ساہیوال"
      }),
      crop: t({
        ur: "گندم",
        en: "Wheat",
        pa: "گندم",
        sd: "گندم",
        ps: "غنم",
        bal: "گندم",
        shina: "گندم"
      }),
      increase: "32%",
      quote: t({
        ur: "فصل منصوبہ نے میری پیداوار میں 32% اضافہ کیا۔ اب میں بین الاقوامی معیار تک پہنچ رہا ہوں۔",
        en: "The crop plan increased my yield by 32%. Now I'm reaching international standards.",
        pa: "فصل منصوبے نے میری پیداوار وچ 32% اضافہ کیتا۔ ہن میں بین الاقوامی معیار تک پہنچ رہیا آں۔",
        sd: "فصل جي منصوبي منهنجي پيداوار ۾ 32٪ اضافو ڪيو. هاڻي آئون بين الاقوامي معيار تائين پهچي رهيو آهيان.",
        ps: "د فصل پلان زما حاصلاتو کې 32٪ اضافه وکړه. اوس زه نړیوالو معیارونو ته رسېږم.",
        bal: "فصل ءِ منصوبہ ءَ مئے پیداوار ءَ 32٪ زیات کرت۔ ایسا من بین ءُالمللی معیار ءَ ورسگ اَں۔",
        shina: "فصل جی منصوبے می پیداوار 32٪ زیات تھیلی۔ ہنے من بین الاقوامی معیار تک پئینچو روم۔"
      })
    },
    {
      name: t({
        ur: "عائشہ بی بی",
        en: "Ayesha Bibi",
        pa: "عائشہ بی بی",
        sd: "عائشه بي بي",
        ps: "عایشه بي بي",
        bal: "عائشہ بی بی",
        shina: "عائشہ بی بی"
      }),
      location: t({
        ur: "گوجرانوالہ",
        en: "Gujranwala",
        pa: "گوجرانوالہ",
        sd: "گجرانواله",
        ps: "ګجرانواله",
        bal: "گوجرانوالہ",
        shina: "گوجرانوالہ"
      }),
      crop: t({
        ur: "چاول",
        en: "Rice",
        pa: "چول",
        sd: "چانور",
        ps: "وریجې",
        bal: "برنج",
        shina: "چول"
      }),
      increase: "28%",
      quote: t({
        ur: "موسم کی اپ ڈیٹس سے میں نے بہتر فیصلے کیے اور نقصان سے بچ گیا۔",
        en: "Weather updates helped me make better decisions and avoid losses.",
        pa: "موسم دیاں اپ ڈیٹس نے مینوں بہتر فیصلے کرن وچ مدد کیتی تے نقصان توں بچ گیا۔",
        sd: "موسم جي تازه ڪارين مون کي بهتر فيصلا ڪرڻ ۾ مدد ڪئي ۽ نقصان کان بچي ويو.",
        ps: "د هوا اپډېټونو ما سره مرسته وکړه چې غوره پریکړې وکړم او له زیانونو ځان وساتم.",
        bal: "موسم ءِ اپ ڈیٹ ءَ منا سرا مدد کرت کہ جوانیں فیصلہ کناں ءُ نقصان ءَ بچ بیاں۔",
        shina: "موسم جیاں اپ ڈیٹس نے منا سنگے مدد کریلی کہ بہتر فیصلے کروم او نقصان کھوٹے بچ بیم۔"
      })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-accent text-accent-foreground">
            <Sparkles className="h-4 w-4 mr-2" />
            {t({
              ur: "فصل غذائیت منصوبہ",
              en: "Crop Nutrition Plan",
              pa: "فصل غذائیت منصوبہ",
              sd: "فصل جي غذائيت جو منصوبو",
              ps: "د فصل تغذیې پلان",
              bal: "فصل ءِ غذائیت ءِ منصوبہ",
              shina: "فصل جی غذائیت جی منصوبہ"
            })}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t({
              ur: "ہوشیاری سے کاشتکاری کریں۔ زیادہ کمائیں۔",
              en: "Farm Smarter. Earn More.",
              pa: "ہوشیاری نال کاشتکاری کرو۔ ودھ کماؤ۔",
              sd: "هوشياري سان پوکڻ. وڌيڪ ڪمايو.",
              ps: "هوښیارۍ سره کرنه وکړئ. ډیر وګټئ.",
              bal: "ہوشیاری سرا کشت کنیت۔ زیات کماٹیت۔",
              shina: "ہوشیاری سنگے کھیتی کرو۔ زیات کماؤ۔"
            })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              ur: "AI اور موسم کی پیش گوئی کے ساتھ اپنی فصل کی پیداوار میں 20-30% اضافہ کریں",
              en: "Increase your crop yield by 20-30% with AI and weather forecasting",
              pa: "AI تے موسم دی پیش گوئی نال اپنی فصل دی پیداوار وچ 20-30% اضافہ کرو",
              sd: "AI ۽ موسم جي اڳڪٿي سان پنهنجي فصل جي پيداوار ۾ 20-30٪ اضافو ڪريو",
              ps: "د AI او د هوا وړاندوینې سره خپل فصل حاصلات 20-30٪ ډیر کړئ",
              bal: "AI ءُ موسم ءِ اگاہی سرا وتی فصل ءِ پیداوار ءَ 20-30٪ زیات کنیت",
              shina: "AI او موسم جی پیشین گوئی سنگے تانی فصل جی پیداوار 20-30٪ زیات کرو"
            })}
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t({
                      ur: "آپ کا ذاتی فصل منصوبہ",
                      en: "Your Personal Crop Plan",
                      pa: "تہاڈا ذاتی فصل منصوبہ",
                      sd: "توهان جو ذاتي فصل جو منصوبو",
                      ps: "ستاسو شخصي فصل پلان",
                      bal: "شمی شخصی فصل ءِ منصوبہ",
                      shina: "تھی شخصی فصل جی منصوبہ"
                    })}
                  </h3>
                  <p className="text-muted-foreground">
                    {t({
                      ur: "گندم - ربیع سیزن 2025",
                      en: "Wheat - Rabi Season 2025",
                      pa: "گندم - ربیع سیزن 2025",
                      sd: "گندم - ربيع سيزن 2025",
                      ps: "غنم - د ربیع فصل 2025",
                      bal: "گندم - ربیع موسم 2025",
                      shina: "گندم - ربیع موسم 2025"
                    })}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {t({
                      ur: "اس ہفتے کا کام",
                      en: "This Week's Task",
                      pa: "ایس ہفتے دا کم",
                      sd: "هن هفتي جو ڪم",
                      ps: "د دې اونۍ دنده",
                      bal: "ایں ہفتہ ءِ کار",
                      shina: "ئے ہفتے جو کام"
                    })}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {t({
                      ur: "نائٹروجن سپرے",
                      en: "Nitrogen Spray",
                      pa: "نائٹروجن سپرے",
                      sd: "نائيٽروجن اسپري",
                      ps: "نایتروجن سپرې",
                      bal: "نائٹروجن سپرے",
                      shina: "نائٹروجن سپرے"
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t({
                      ur: "مثالی موسم: 22-25°C",
                      en: "Ideal weather: 22-25°C",
                      pa: "مثالی موسم: 22-25°C",
                      sd: "مثالي موسم: 22-25°C",
                      ps: "غوره هوا: 22-25°C",
                      bal: "مثالی موسم: 22-25°C",
                      shina: "مثالی موسم: 22-25°C"
                    })}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {t({
                      ur: "موسم کی اپ ڈیٹ",
                      en: "Weather Update",
                      pa: "موسم دی اپ ڈیٹ",
                      sd: "موسم جي تازه ڪاري",
                      ps: "د هوا اپډېټ",
                      bal: "موسم ءِ اپ ڈیٹ",
                      shina: "موسم جی اپ ڈیٹ"
                    })}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                    <CloudRain className="h-6 w-6" />
                    {t({
                      ur: "بارش",
                      en: "Rain",
                      pa: "مینھ",
                      sd: "برسات",
                      ps: "باران",
                      bal: "باراں",
                      shina: "برسات"
                    })}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t({
                      ur: "اگلے 3 دن",
                      en: "Next 3 days",
                      pa: "اگلے 3 دن",
                      sd: "ايندڙ 3 ڏينهن",
                      ps: "راتلونکې 3 ورځې",
                      bal: "آیندہ 3 روچ",
                      shina: "ایندہ 3 دوس"
                    })}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    {t({
                      ur: "متوقع اضافہ",
                      en: "Expected Increase",
                      pa: "متوقع اضافہ",
                      sd: "متوقع اضافو",
                      ps: "تمه شوې زیاتوالی",
                      bal: "امید اے اضافہ",
                      shina: "امید زیادتی"
                    })}
                  </div>
                  <div className="text-2xl font-bold text-green-600 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    +28%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {t({
                      ur: "پچھلے سال کے مقابلے",
                      en: "Compared to last year",
                      pa: "پچھلے سال دے مقابلے",
                      sd: "گذريل سال جي مقابلي ۾",
                      ps: "د تیرې کال په پرتله",
                      bal: "گزشتہ سال ءِ سرا ءَ",
                      shina: "پیشے سال جے مقابلے"
                    })}
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => navigate('/crop-planning')}
              >
                {t({
                  ur: "اپنا منصوبہ شروع کریں",
                  en: "Start Your Plan",
                  pa: "اپنا منصوبہ شروع کرو",
                  sd: "پنهنجو منصوبو شروع ڪريو",
                  ps: "خپل پلان پیل کړئ",
                  bal: "وتی منصوبہ شروع کنیت",
                  shina: "تانی منصوبہ شروع کرو"
                })}
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
