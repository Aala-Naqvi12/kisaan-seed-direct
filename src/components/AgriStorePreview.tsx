import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import seedsImg from "@/assets/products/seeds.jpg";
import fertilizerImg from "@/assets/products/fertilizer.jpg";
import pesticideImg from "@/assets/products/pesticide.jpg";

const AgriStorePreview = () => {
  const products = [
    {
      id: 1,
      name: "پریمیم گندم کے بیج",
      category: "بیج",
      seller: "ایگری سیڈز کارپوریشن",
      price: "1,500",
      unit: "فی کلو",
      rating: 4.9,
      reviews: 234,
      image: seedsImg,
      verified: true,
      inStock: true
    },
    {
      id: 2,
      name: "نامیاتی کھاد",
      category: "کھاد",
      seller: "گرین فارمز",
      price: "800",
      unit: "فی بوری",
      rating: 4.7,
      reviews: 189,
      image: fertilizerImg,
      verified: true,
      inStock: true
    },
    {
      id: 3,
      name: "پودوں کی حفاظتی دوا",
      category: "کیڑے مار دوائیں",
      seller: "کراپ کیئر",
      price: "1,200",
      unit: "فی لیٹر",
      rating: 4.8,
      reviews: 167,
      image: pesticideImg,
      verified: true,
      inStock: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-secondary text-secondary-foreground">زرعی اسٹور</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            تصدیق شدہ معیاری سامان
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            بیج، کھاد، اور کیڑے مار دوائیں - صرف بھروسہ مند فروخت کنندگان سے
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Product Image */}
                <div className="rounded-xl h-32 overflow-hidden mb-4 group-hover:scale-105 transition-transform">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Category Badge */}
                <Badge variant="outline" className="mb-3 text-xs">
                  {product.category}
                </Badge>

                {/* Product Name */}
                <h3 className="font-bold text-xl text-foreground mb-2">{product.name}</h3>

                {/* Seller */}
                <div className="flex items-center gap-2 mb-3">
                  {product.verified && (
                    <Shield className="h-4 w-4 text-primary" />
                  )}
                  <span className="text-sm text-muted-foreground">{product.seller}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} جائزے)</span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-4">
                  <Package className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">اسٹاک میں دستیاب</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">₨{product.price}</div>
                    <div className="text-xs text-muted-foreground">{product.unit}</div>
                  </div>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    خریدیں
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">100% تصدیق شدہ</h4>
            <p className="text-sm text-muted-foreground">تمام فروخت کنندگان کی تصدیق</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <Package className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">تیز ترسیل</h4>
            <p className="text-sm text-muted-foreground">3-5 دنوں میں ڈیلیوری</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <Star className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">معیار کی ضمانت</h4>
            <p className="text-sm text-muted-foreground">واپسی کی سہولت</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8">
            مکمل اسٹور دیکھیں
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgriStorePreview;
