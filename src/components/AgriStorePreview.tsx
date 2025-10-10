import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Package, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import seedsImg from "@/assets/products/seeds.jpg";
import fertilizerImg from "@/assets/products/fertilizer.jpg";
import pesticideImg from "@/assets/products/pesticide.jpg";

const AgriStorePreview = () => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const products = [
    {
      id: "seed-1",
      name: t({
        ur: "پریمیم گندم کے بیج",
        en: "Premium Wheat Seeds",
        pa: "پریمیم گندم دے بیج",
        sd: "پريميم گندم جا ٻج",
        ps: "پریمیم د غنم تخمونه",
        bal: "پریمیم گندم ءِ تخم",
        shina: "پریمیم گندم جے بیج"
      }),
      category: t({
        ur: "بیج",
        en: "Seeds",
        pa: "بیج",
        sd: "ٻج",
        ps: "تخمونه",
        bal: "تخم",
        shina: "بیج"
      }),
      seller: t({
        ur: "ایگری سیڈز کارپوریشن",
        en: "Agri Seeds Corporation",
        pa: "ایگری سیڈز کارپوریشن",
        sd: "ايگري سيڊز ڪارپوريشن",
        ps: "ایګري سیډز کارپوریشن",
        bal: "ایگری سیڈز کارپوریشن",
        shina: "ایگری سیڈز کارپوریشن"
      }),
      price: 1500,
      priceDisplay: "1,500",
      unit: t({
        ur: "فی کلو",
        en: "per kg",
        pa: "فی کلو",
        sd: "في ڪلو",
        ps: "په کیلو",
        bal: "فی کلو",
        shina: "فی کلو"
      }),
      rating: 4.9,
      reviews: 234,
      image: seedsImg,
      verified: true,
      inStock: true,
      quantity: t({
        ur: "5000 کلو دستیاب",
        en: "5000 kg in stock",
        pa: "5000 کلو دستیاب",
        sd: "5000 ڪلو اسٽاڪ ۾",
        ps: "5000 کیلو په سټاک کې",
        bal: "5000 کلو سٹاک ءَ",
        shina: "5000 کلو سٹاک می"
      })
    },
    {
      id: "fertilizer-1",
      name: t({
        ur: "نامیاتی کھاد",
        en: "Organic Fertilizer",
        pa: "نامیاتی کھاد",
        sd: "نامياتي ڀاڻ",
        ps: "نامیاتی سره",
        bal: "نامیاتی کھاد",
        shina: "نامیاتی کھاد"
      }),
      category: t({
        ur: "کھاد",
        en: "Fertilizer",
        pa: "کھاد",
        sd: "ڀاڻ",
        ps: "سره",
        bal: "کھاد",
        shina: "کھاد"
      }),
      seller: t({
        ur: "گرین فارمز",
        en: "Green Farms",
        pa: "گرین فارمز",
        sd: "گرين فارمز",
        ps: "ګرین فارمز",
        bal: "گرین فارمز",
        shina: "گرین فارمز"
      }),
      price: 800,
      priceDisplay: "800",
      unit: t({
        ur: "فی بوری",
        en: "per bag",
        pa: "فی بوری",
        sd: "في بوري",
        ps: "په کڅوړه",
        bal: "فی بوری",
        shina: "فی بوری"
      }),
      rating: 4.7,
      reviews: 189,
      image: fertilizerImg,
      verified: true,
      inStock: true,
      quantity: t({
        ur: "2000 بوریاں دستیاب",
        en: "2000 bags in stock",
        pa: "2000 بوریاں دستیاب",
        sd: "2000 بوريون اسٽاڪ ۾",
        ps: "2000 کڅوړې په سټاک کې",
        bal: "2000 بوریاں سٹاک ءَ",
        shina: "2000 بوریاں سٹاک می"
      })
    },
    {
      id: "pesticide-1",
      name: t({
        ur: "پودوں کی حفاظتی دوا",
        en: "Plant Protection Spray",
        pa: "پودیاں دی حفاظتی دوا",
        sd: "ٻوٽن جي حفاظتي دوا",
        ps: "د کښت ساتنې درمل",
        bal: "پودانی ءِ حفاظتی دوا",
        shina: "پودیاں جی حفاظتی دوا"
      }),
      category: t({
        ur: "کیڑے مار دوائیں",
        en: "Pesticides",
        pa: "کیڑے مار دوائیاں",
        sd: "جراثيم ڪش دوائون",
        ps: "خپکو مارونکي",
        bal: "کیڑہ مارگ دوا",
        shina: "کیڑے مار دوا"
      }),
      seller: t({
        ur: "کراپ کیئر",
        en: "Crop Care",
        pa: "کراپ کیئر",
        sd: "ڪراپ ڪيئر",
        ps: "کراپ کیئر",
        bal: "کراپ کیئر",
        shina: "کراپ کیئر"
      }),
      price: 1200,
      priceDisplay: "1,200",
      unit: t({
        ur: "فی لیٹر",
        en: "per liter",
        pa: "فی لٹر",
        sd: "في ليٽر",
        ps: "په لیټر",
        bal: "فی لیٹر",
        shina: "فی لٹر"
      }),
      rating: 4.8,
      reviews: 167,
      image: pesticideImg,
      verified: true,
      inStock: true,
      quantity: t({
        ur: "800 لیٹر دستیاب",
        en: "800 liters in stock",
        pa: "800 لٹر دستیاب",
        sd: "800 ليٽر اسٽاڪ ۾",
        ps: "800 لیټره په سټاک کې",
        bal: "800 لیٹر سٹاک ءَ",
        shina: "800 لٹر سٹاک می"
      })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-gradient-to-r from-secondary to-accent text-white shadow-soft">
            {t({
              ur: "زرعی اسٹور",
              en: "Agricultural Store",
              pa: "زرعی اسٹور",
              sd: "زرعي اسٽور",
              ps: "کرنیز پلورنځی",
              bal: "زرعی سٹور",
              shina: "زرعی سٹور"
            })}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t({
              ur: "تصدیق شدہ معیاری سامان",
              en: "Verified Quality Supplies",
              pa: "تصدیق شدہ معیاری سامان",
              sd: "تصديق ٿيل معياري سامان",
              ps: "تایید شوی کیفیتي توکي",
              bal: "تصدیق بوتگین کوالٹی ءِ سامان",
              shina: "تصدیق شدہ معیاری سامان"
            })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              ur: "بیج، کھاد، اور کیڑے مار دوائیں - صرف بھروسہ مند فروخت کنندگان سے",
              en: "Seeds, fertilizers, and pesticides - only from trusted sellers",
              pa: "بیج، کھاد، تے کیڑے مار دوائیاں - صرف بھروسہ مند وکن والیاں توں",
              sd: "ٻج، ڀاڻ، ۽ جراثيم ڪش دوائون - فقط قابل اعتماد وڪرو ڪندڙن کان",
              ps: "تخمونه، سره، او خپکو مارونکي - یوازې د باوري پلورونکو څخه",
              bal: "تخم، کھاد، ءُ کیڑہ مارگ دوا - فقط باور مند وروگراں اٹی",
              shina: "بیج، کھاد، او کیڑے مار دوا - صرف بھروسہ مند وکݨ والیاں کھوٹے"
            })}
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
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      {t({
                        ur: "اسٹاک میں دستیاب",
                        en: "In Stock",
                        pa: "اسٹاک وچ دستیاب",
                        sd: "اسٽاڪ ۾ موجود",
                        ps: "په سټاک کې",
                        bal: "سٹاک ءَ موجود",
                        shina: "سٹاک می"
                      })}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {product.quantity}
                  </div>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">₨{product.priceDisplay}</div>
                    <div className="text-xs text-muted-foreground">{product.unit}</div>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      seller: product.seller
                    })}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t({
                      ur: "خریدیں",
                      en: "Buy",
                      pa: "خریدو",
                      sd: "خريد ڪريو",
                      ps: "واخلئ",
                      bal: "گرٹیت",
                      shina: "خریدو"
                    })}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-xl border border-primary/30 hover:border-primary/50 transition-all hover-lift">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-soft">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <h4 className="font-bold text-lg mb-2">100% تصدیق شدہ</h4>
            <p className="text-sm text-muted-foreground">تمام فروخت کنندگان کی تصدیق</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all hover-lift">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-soft">
              <Package className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h4 className="font-bold text-lg mb-2">تیز ترسیل</h4>
            <p className="text-sm text-muted-foreground">3-5 دنوں میں ڈیلیوری</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/5 rounded-xl border border-accent/30 hover:border-accent/50 transition-all hover-lift">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-soft">
              <Star className="h-8 w-8 text-accent-foreground" />
            </div>
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
