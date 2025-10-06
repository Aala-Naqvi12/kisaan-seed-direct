import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t({
        ur: "علی رضا",
        en: "Ali Raza",
        pa: "علی رضا",
        sd: "علي رضا",
        ps: "علي رضا",
        bal: "علی رضا",
        shina: "علی رضا"
      }),
      location: t({
        ur: "ملتان",
        en: "Multan",
        pa: "ملتان",
        sd: "ملتان",
        ps: "ملتان",
        bal: "ملتان",
        shina: "ملتان"
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
      increase: "28%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: t({
        ur: "کسان بازار نے میری زندگی بدل دی۔ اب میں براہ راست خریداروں سے رابطہ کرتا ہوں۔",
        en: "Kisan Bazaar changed my life. Now I connect directly with buyers.",
        pa: "کسان بازار نے میری زندگی بدل دتی۔ ہن میں براہ راست خریداراں نال رابطہ کردا آں۔",
        sd: "ڪسان بازار منهنجي زندگي بدلائي ڇڏي. هاڻي آئون سڌو سنئون خريدارن سان رابطو ڪريان ٿو.",
        ps: "کسان بازار زما ژوند بدل کړ. اوس زه مستقیماً پیرودونکو سره اړیکه نیسم.",
        bal: "کسان بازار مئے زندگی ءَ بدل کرت۔ ایسا من راستی خریداراں سرا رابطہ کنوں۔",
        shina: "کسان بازار نے می زندگی بدل دتی۔ ہنے من سوزی خریداراں سنگے رابطہ کوریم۔"
      })
    },
    {
      id: 2,
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
        ur: "فیصل آباد",
        en: "Faisalabad",
        pa: "فیصل آباد",
        sd: "فيصل آباد",
        ps: "فیصل آباد",
        bal: "فیصل آباد",
        shina: "فیصل آباد"
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
      increase: "32%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: t({
        ur: "فصل منصوبہ سے میری پیداوار میں 32% اضافہ ہوا۔ شکریہ کسان بازار!",
        en: "The crop plan increased my yield by 32%. Thanks Kisan Bazaar!",
        pa: "فصل منصوبے نے میری پیداوار وچ 32% اضافہ کیتا۔ شکریہ کسان بازار!",
        sd: "فصل جي منصوبي منهنجي پيداوار ۾ 32% اضافو ڪيو. شڪريو ڪسان بازار!",
        ps: "د فصل پلان زما حاصلاتو کې 32٪ اضافه وکړه. مننه کسان بازار!",
        bal: "فصل ءِ منصوبہ ءَ مئے پیداوار ءَ 32٪ زیات کرت۔ مہربانی کسان بازار!",
        shina: "فصل جی منصوبے می پیداوار 32٪ زیات تھیلی۔ شکریہ کسان بازار!"
      })
    },
    {
      id: 3,
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
        ur: "ساہیوال",
        en: "Sahiwal",
        pa: "ساہیوال",
        sd: "ساهيوال",
        ps: "ساهیوال",
        bal: "ساہیوال",
        shina: "ساہیوال"
      }),
      crop: t({
        ur: "ٹماٹر",
        en: "Tomatoes",
        pa: "ٹماٹر",
        sd: "ٽماٽا",
        ps: "بادنجان",
        bal: "ٹماٹر",
        shina: "ٹماٹر"
      }),
      increase: "25%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: t({
        ur: "تصدیق شدہ بیج اور کھاد سے میری فصل کا معیار بہت بہتر ہوا۔",
        en: "Verified seeds and fertilizer improved my crop quality significantly.",
        pa: "تصدیق شدہ بیج تے کھاد نال میری فصل دا معیار بوہت بہتر ہویا۔",
        sd: "تصديق ٿيل ٻج ۽ ڀاڻ مان منهنجي فصل جو معيار تمام گهڻو بهتر ٿيو.",
        ps: "تایید شوو تخمونو او سرې زما د فصل کیفیت خورا ښه کړ.",
        bal: "تصدیق بوتگین تخم ءُ کھاد ءَ مئے فصل ءِ کوالٹی ءَ بوت جوانیں کرت۔",
        shina: "تصدیق شدہ بیج او کھاد سنگے می فصل جی معیار بوت بہتر تھیلی۔"
      })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">
            {t({
              ur: "کسانوں کی کامیابی کی کہانیاں",
              en: "Farmer Success Stories",
              pa: "کساناں دیاں کامیابی دیاں کہانیاں",
              sd: "هارين جي ڪاميابي جون ڪهاڻيون",
              ps: "د بزګرانو بریالیتوب کیسې",
              bal: "کسانانی ءِ کامیابی ءِ کھسہ",
              shina: "کساناں جیاں کامیابی جیاں کہانیاں"
            })}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t({
              ur: "حقیقی کسانوں کے حقیقی نتائج",
              en: "Real Results from Real Farmers",
              pa: "حقیقی کساناں توں حقیقی نتیجے",
              sd: "حقيقي هارين کان حقيقي نتيجا",
              ps: "د ریښتینو بزګرانو څخه ریښتیني پایلې",
              bal: "اصلین کسانانی اٹی اصلی نتیجہ",
              shina: "اصل کساناں کھوٹے اصل نتیجہ"
            })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              ur: "دیکھیں کہ کیسے کسان بازار نے ہزاروں کسانوں کی زندگیاں بدل دیں",
              en: "See how Kisan Bazaar transformed thousands of farmers' lives",
              pa: "دیکھو کہ کویں کسان بازار نے ہزاراں کساناں دیاں زندگیاں بدل دتیاں",
              sd: "ڏسو ته ڪيئن ڪسان بازار هزارين هارين جي زندگين کي تبديل ڪيو",
              ps: "وګورئ چې څنګه کسان بازار د زرګونو بزګرانو ژوند بدل کړ",
              bal: "دیکیت کہ چون کسان بازار ہزاراں کسانانی زندگی ءَ بدل کرت",
              shina: "دیکھو کینسو کسان بازار نے ہزاراں کساناں جی زندگی بدل دتی"
            })}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video">
                {playingVideo === testimonial.id ? (
                  <iframe
                    className="w-full h-full"
                    src={testimonial.videoUrl}
                    title={testimonial.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img 
                      src={testimonial.thumbnail} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <button
                        onClick={() => setPlayingVideo(testimonial.id)}
                        className="bg-accent text-accent-foreground rounded-full p-6 hover:scale-110 transition-transform shadow-elevated"
                      >
                        <Play className="h-8 w-8 fill-current" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600/90 text-white border-0">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +{testimonial.increase}
                      </Badge>
                    </div>
                  </>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-primary to-primary-glow rounded-full h-12 w-12 flex items-center justify-center text-lg text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-3 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.crop}
                  </Badge>
                  <div className="text-sm text-muted-foreground">
                    {t({
                      ur: "پیداوار میں",
                      en: "Yield increase",
                      pa: "پیداوار وچ",
                      sd: "پيداوار ۾",
                      ps: "د حاصلاتو اضافه",
                      bal: "پیداوار ءَ",
                      shina: "پیداوار می"
                    })} <span className="text-green-600 font-bold">+{testimonial.increase}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">1,500+</div>
            <div className="text-sm text-muted-foreground">
              {t({
                ur: "ویڈیو جائزے",
                en: "Video Reviews",
                pa: "ویڈیو جائزے",
                sd: "وڊيو جائزا",
                ps: "ویډیو بیاکتنې",
                bal: "ویڈیو جائزہ",
                shina: "ویڈیو جائزے"
              })}
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">
              {t({
                ur: "اوسط ریٹنگ",
                en: "Average Rating",
                pa: "اوسط ریٹنگ",
                sd: "اوسط درجه بندي",
                ps: "اوسط درجه بندي",
                bal: "اوسط ریٹنگ",
                shina: "اوسط ریٹنگ"
              })}
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">28%</div>
            <div className="text-sm text-muted-foreground">
              {t({
                ur: "اوسط پیداوار میں اضافہ",
                en: "Avg. Yield Increase",
                pa: "اوسط پیداوار وچ اضافہ",
                sd: "اوسط پيداوار ۾ اضافو",
                ps: "اوسط حاصلات اضافه",
                bal: "اوسط پیداوار ءَ اضافہ",
                shina: "اوسط پیداوار می اضافہ"
              })}
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">
              {t({
                ur: "مطمئن کسان",
                en: "Satisfied Farmers",
                pa: "مطمئن کسان",
                sd: "مطمئن هاري",
                ps: "راضي بزګران",
                bal: "مطمئن کسان",
                shina: "مطمئن کسان"
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
