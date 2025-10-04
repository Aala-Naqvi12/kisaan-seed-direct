import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import wheatImg from "@/assets/products/wheat.jpg";
import tomatoesImg from "@/assets/products/tomatoes.jpg";
import riceImg from "@/assets/products/rice.jpg";
import onionsImg from "@/assets/products/onions.jpg";

const MarketplacePreview = () => {
  const products = [
    {
      id: 1,
      name: "تازہ گندم",
      farmer: "احمد علی",
      location: "فیصل آباد",
      price: "3,200",
      unit: "فی من",
      rating: 4.8,
      reviews: 124,
      image: wheatImg,
      trend: "+12%",
      verified: true
    },
    {
      id: 2,
      name: "نامیاتی ٹماٹر",
      farmer: "فاطمہ بی بی",
      location: "ملتان",
      price: "80",
      unit: "فی کلو",
      rating: 4.9,
      reviews: 89,
      image: tomatoesImg,
      trend: "+8%",
      verified: true
    },
    {
      id: 3,
      name: "باسمتی چاول",
      farmer: "حسن محمود",
      location: "سیالکوٹ",
      price: "4,500",
      unit: "فی من",
      rating: 4.7,
      reviews: 156,
      image: riceImg,
      trend: "+15%",
      verified: true
    },
    {
      id: 4,
      name: "تازہ پیاز",
      farmer: "سلیم خان",
      location: "لاہور",
      price: "45",
      unit: "فی کلو",
      rating: 4.6,
      reviews: 67,
      image: onionsImg,
      trend: "+5%",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">کسان مارکیٹ پلیس</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            براہ راست کسانوں سے خریدیں
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            تازہ ترین فصلیں، منصفانہ قیمتیں، اور بھروسہ مند کسان - سب ایک جگہ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                {/* Product Image */}
                <div className="rounded-xl h-48 overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{product.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{product.location}</span>
                      </div>
                    </div>
                    {product.verified && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        ✓
                      </Badge>
                    )}
                  </div>

                  {/* Farmer */}
                  <div className="text-sm text-muted-foreground">
                    کسان: <span className="text-foreground font-medium">{product.farmer}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} جائزے)</span>
                  </div>

                  {/* Price & Trend */}
                  <div className="flex items-end justify-between pt-2 border-t border-border/50">
                    <div>
                      <div className="text-2xl font-bold text-primary">₨{product.price}</div>
                      <div className="text-xs text-muted-foreground">{product.unit}</div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-semibold">{product.trend}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8">
            تمام فصلیں دیکھیں
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
