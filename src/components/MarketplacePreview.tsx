import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, TrendingUp, ShoppingCart, Calendar, Package, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import wheatImg from "@/assets/products/wheat.jpg";
import tomatoesImg from "@/assets/products/tomatoes.jpg";
import riceImg from "@/assets/products/rice.jpg";
import onionsImg from "@/assets/products/onions.jpg";

const MarketplacePreview = () => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const products = [
    {
      id: "wheat-1",
      name: t({
        ur: "تازہ گندم",
        en: "Fresh Wheat",
        pa: "تازہ گندم",
        sd: "تازو گندم",
        ps: "تازه غنم",
        bal: "تازہ گندم",
        shina: "تازہ گندم"
      }),
      farmer: t({
        ur: "احمد علی",
        en: "Ahmad Ali",
        pa: "احمد علی",
        sd: "احمد علي",
        ps: "احمد علی",
        bal: "احمد علی",
        shina: "احمد علی"
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
      price: 3200,
      priceDisplay: "3,200",
      unit: t({
        ur: "فی من",
        en: "per maund",
        pa: "فی من",
        sd: "في من",
        ps: "په من",
        bal: "فی من",
        shina: "فی من"
      }),
      rating: 4.8,
      reviews: 124,
      image: wheatImg,
      trend: "+12%",
      verified: true,
      harvestDate: t({
        ur: "2 ہفتے پہلے",
        en: "2 weeks ago",
        pa: "2 ہفتے پہلاں",
        sd: "2 هفتا اڳ",
        ps: "2 اوونۍ دمخه",
        bal: "2 ہفتہ پیش ءَ",
        shina: "2 ہفتے اگے"
      }),
      available: t({
        ur: "500 من دستیاب",
        en: "500 maunds available",
        pa: "500 من دستیاب",
        sd: "500 من دستياب",
        ps: "500 من شته",
        bal: "500 من موجود",
        shina: "500 من دستیاب"
      }),
      moq: t({
        ur: "کم از کم 50 من",
        en: "Min. 50 maunds",
        pa: "گھٹ توں گھٹ 50 من",
        sd: "گھٽ ۾ گھٽ 50 من",
        ps: "لږ تر لږه 50 من",
        bal: "کم از کم 50 من",
        shina: "کم از کم 50 من"
      })
    },
    {
      id: "tomato-1",
      name: t({
        ur: "نامیاتی ٹماٹر",
        en: "Organic Tomatoes",
        pa: "نامیاتی ٹماٹر",
        sd: "نامياتي ٽماٽا",
        ps: "نامیاتی بادنجان",
        bal: "نامیاتی ٹماٹر",
        shina: "نامیاتی ٹماٹر"
      }),
      farmer: t({
        ur: "فاطمہ بی بی",
        en: "Fatima Bibi",
        pa: "فاطمہ بی بی",
        sd: "فاطمه بي بي",
        ps: "فاطمه بي بي",
        bal: "فاطمہ بی بی",
        shina: "فاطمہ بی بی"
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
      price: 80,
      priceDisplay: "80",
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
      reviews: 89,
      image: tomatoesImg,
      trend: "+8%",
      verified: true,
      harvestDate: t({
        ur: "آج صبح",
        en: "This morning",
        pa: "اج صبح",
        sd: "اڄ صبح",
        ps: "نن سهار",
        bal: "امروچ صبح",
        shina: "اج صبح"
      }),
      available: t({
        ur: "200 کلو دستیاب",
        en: "200 kg available",
        pa: "200 کلو دستیاب",
        sd: "200 ڪلو دستياب",
        ps: "200 کیلو شته",
        bal: "200 کلو موجود",
        shina: "200 کلو دستیاب"
      }),
      moq: t({
        ur: "کم از کم 10 کلو",
        en: "Min. 10 kg",
        pa: "گھٹ توں گھٹ 10 کلو",
        sd: "گھٽ ۾ گھٽ 10 ڪلو",
        ps: "لږ تر لږه 10 کیلو",
        bal: "کم از کم 10 کلو",
        shina: "کم از کم 10 کلو"
      })
    },
    {
      id: "rice-1",
      name: t({
        ur: "باسمتی چاول",
        en: "Basmati Rice",
        pa: "باسمتی چول",
        sd: "باسمتي چانور",
        ps: "باسمتي وریجې",
        bal: "باسمتی برنج",
        shina: "باسمتی چول"
      }),
      farmer: t({
        ur: "حسن محمود",
        en: "Hassan Mahmood",
        pa: "حسن محمود",
        sd: "حسن محمود",
        ps: "حسن محمود",
        bal: "حسن محمود",
        shina: "حسن محمود"
      }),
      location: t({
        ur: "سیالکوٹ",
        en: "Sialkot",
        pa: "سیالکوٹ",
        sd: "سيالڪوٽ",
        ps: "سیالکوټ",
        bal: "سیالکوٹ",
        shina: "سیالکوٹ"
      }),
      price: 4500,
      priceDisplay: "4,500",
      unit: t({
        ur: "فی من",
        en: "per maund",
        pa: "فی من",
        sd: "في من",
        ps: "په من",
        bal: "فی من",
        shina: "فی من"
      }),
      rating: 4.7,
      reviews: 156,
      image: riceImg,
      trend: "+15%",
      verified: true,
      harvestDate: t({
        ur: "1 ماہ پہلے",
        en: "1 month ago",
        pa: "1 مہینہ پہلاں",
        sd: "1 مهينو اڳ",
        ps: "1 میاشت دمخه",
        bal: "1 ماہ پیش ءَ",
        shina: "1 ماہ اگے"
      }),
      available: t({
        ur: "800 من دستیاب",
        en: "800 maunds available",
        pa: "800 من دستیاب",
        sd: "800 من دستياب",
        ps: "800 من شته",
        bal: "800 من موجود",
        shina: "800 من دستیاب"
      }),
      moq: t({
        ur: "کم از کم 100 من",
        en: "Min. 100 maunds",
        pa: "گھٹ توں گھٹ 100 من",
        sd: "گھٽ ۾ گھٽ 100 من",
        ps: "لږ تر لږه 100 من",
        bal: "کم از کم 100 من",
        shina: "کم از کم 100 من"
      })
    },
    {
      id: "onion-1",
      name: t({
        ur: "تازہ پیاز",
        en: "Fresh Onions",
        pa: "تازہ پیاز",
        sd: "تازو پياز",
        ps: "تازه پياز",
        bal: "تازہ پیاز",
        shina: "تازہ پیاز"
      }),
      farmer: t({
        ur: "سلیم خان",
        en: "Saleem Khan",
        pa: "سلیم خان",
        sd: "سليم خان",
        ps: "سلیم خان",
        bal: "سلیم خان",
        shina: "سلیم خان"
      }),
      location: t({
        ur: "لاہور",
        en: "Lahore",
        pa: "لاہور",
        sd: "لاهور",
        ps: "لاهور",
        bal: "لاهور",
        shina: "لاہور"
      }),
      price: 45,
      priceDisplay: "45",
      unit: t({
        ur: "فی کلو",
        en: "per kg",
        pa: "فی کلو",
        sd: "في ڪلو",
        ps: "په کیلو",
        bal: "فی کلو",
        shina: "فی کلو"
      }),
      rating: 4.6,
      reviews: 67,
      image: onionsImg,
      trend: "+5%",
      verified: true,
      harvestDate: t({
        ur: "3 دن پہلے",
        en: "3 days ago",
        pa: "3 دن پہلاں",
        sd: "3 ڏينهن اڳ",
        ps: "3 ورځې دمخه",
        bal: "3 روچ پیش ءَ",
        shina: "3 دوس اگے"
      }),
      available: t({
        ur: "350 کلو دستیاب",
        en: "350 kg available",
        pa: "350 کلو دستیاب",
        sd: "350 ڪلو دستياب",
        ps: "350 کیلو شته",
        bal: "350 کلو موجود",
        shina: "350 کلو دستیاب"
      }),
      moq: t({
        ur: "کم از کم 20 کلو",
        en: "Min. 20 kg",
        pa: "گھٹ توں گھٹ 20 کلو",
        sd: "گھٽ ۾ گھٽ 20 ڪلو",
        ps: "لږ تر لږه 20 کیلو",
        bal: "کم از کم 20 کلو",
        shina: "کم از کم 20 کلو"
      })
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">
            {t({
              ur: "کسان مارکیٹ پلیس",
              en: "Farmer Marketplace",
              pa: "کسان مارکیٹ پلیس",
              sd: "هاري مارڪيٽ",
              ps: "د بزګرانو بازار",
              bal: "کسان بازار",
              shina: "کسان بازار"
            })}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t({
              ur: "براہ راست کسانوں سے خریدیں",
              en: "Buy Directly from Farmers",
              pa: "براہ راست کساناں توں خریدو",
              sd: "سڌو سنئون هارين کان خريد ڪريو",
              ps: "مستقیماً له بزګرانو واخلئ",
              bal: "راستی کسانانی اٹی گرٹیت",
              shina: "سوزی کساناں کھوٹے خریدو"
            })}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({
              ur: "تازہ ترین فصلیں، منصفانہ قیمتیں، اور بھروسہ مند کسان - سب ایک جگہ",
              en: "Fresh crops, fair prices, and trusted farmers - all in one place",
              pa: "تازہ فصلاں، منصفانہ قیمتاں، تے بھروسہ مند کسان - سب ایک تھاں",
              sd: "تازو فصل، منصفانه قيمت، ۽ قابل اعتماد هاري - سڀ ڪجھ هڪ جاءِ تي",
              ps: "تازه فصلونه، عادلانه بیې، او باوري بزګران - ټول په یوه ځای کې",
              bal: "تازہ فصلاں، انصاف والی قیمتاں، ءُ باور مند کسان - گشتیں یک جاگہ ءَ",
              shina: "تازہ فصلیں، منصفانہ قیمتیں، او بھروسہ مند کسان - سب ایک جگہ"
            })}
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
                    {t({
                      ur: "کسان:",
                      en: "Farmer:",
                      pa: "کسان:",
                      sd: "هاري:",
                      ps: "بزګر:",
                      bal: "کسان:",
                      shina: "کسان:"
                    })} <span className="text-foreground font-medium">{product.farmer}</span>
                  </div>

                  {/* Harvest Date, Quantity & MOQ */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{product.harvestDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-600">
                      <Package className="h-3 w-3" />
                      <span>{product.available}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-600">
                      <Scale className="h-3 w-3" />
                      <span>{product.moq}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} {t({
                        ur: "جائزے",
                        en: "reviews",
                        pa: "جائزے",
                        sd: "جائزا",
                        ps: "بیاکتنې",
                        bal: "جائزہ",
                        shina: "جائزے"
                      })})
                    </span>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-end justify-between pt-2 border-t border-border/50">
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
                        seller: product.farmer
                      })}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="text-lg px-8">
            {t({
              ur: "تمام فصلیں دیکھیں",
              en: "View All Crops",
              pa: "تمام فصلاں دیکھو",
              sd: "سڀ فصل ڏسو",
              ps: "ټول فصلونه وګورئ",
              bal: "گشتیں فصلاں دیکیت",
              shina: "سب فصلیں دیکھو"
            })}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
