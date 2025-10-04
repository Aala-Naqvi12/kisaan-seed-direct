import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "علی رضا",
      location: "ملتان",
      crop: "گندم",
      increase: "28%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      quote: "کسان بازار نے میری زندگی بدل دی۔ اب میں براہ راست خریداروں سے رابطہ کرتا ہوں۔"
    },
    {
      id: 2,
      name: "محمد اکرم",
      location: "فیصل آباد",
      crop: "چاول",
      increase: "32%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1595475884562-073c30d45670?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      quote: "فصل منصوبہ سے میری پیداوار میں 32% اضافہ ہوا۔ شکریہ کسان بازار!"
    },
    {
      id: 3,
      name: "عائشہ بی بی",
      location: "ساہیوال",
      crop: "ٹماٹر",
      increase: "25%",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      quote: "تصدیق شدہ بیج اور کھاد سے میری فصل کا معیار بہت بہتر ہوا۔"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">کسانوں کی کامیابی کی کہانیاں</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            حقیقی کسانوں کے حقیقی نتائج
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            دیکھیں کہ کیسے کسان بازار نے ہزاروں کسانوں کی زندگیاں بدل دیں
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
                    پیداوار میں <span className="text-green-600 font-bold">+{testimonial.increase}</span>
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
            <div className="text-sm text-muted-foreground">ویڈیو جائزے</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">اوسط ریٹنگ</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">28%</div>
            <div className="text-sm text-muted-foreground">اوسط پیداوار میں اضافہ</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">مطمئن کسان</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
