import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Sprout, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt={t({ ur: 'کھیت میں پاکستانی کسان', en: 'Pakistani farmer in field', pa: 'ਖੇਤ ਵਿੱਚ ਪਾਕਿਸਤਾਨੀ ਕਿਸਾਨ', sd: 'زمين ۾ پاڪستاني هاري', ps: 'په کرنیزه کې پاکستانی بزګر', bal: 'کھیتے ٹی پاکستانی کسان', shina: 'کھیتے وچ پاکستانی کسان' })}
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Content with Enhanced Visibility */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl animate-fade-in">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full mb-6 border-2 border-primary/30 shadow-glow">
            <Sprout className="h-5 w-5" />
            <span className="text-sm font-bold drop-shadow-lg">
              {t({ 
                ur: 'پاکستان کا پہلا زرعی مارکیٹ پلیس', 
                en: "Pakistan's First Agricultural Marketplace", 
                pa: 'ਪਾਕਿਸਤਾਨ ਦਾ ਪਹਿਲਾ ਖੇਤੀ ਬਾਜ਼ਾਰ',
                sd: 'پاڪستان جو پهريون زرعي بازار',
                ps: 'د پاکستان لومړی کرنیز بازار',
                bal: 'پاکستان اِ اولین زرعی بازار',
                shina: 'پاکستان جو پہلو زرعی بازار'
              })}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {t({ 
              ur: 'منصفانہ قیمتیں۔ بہتر پیداوار۔', 
              en: 'Fair Prices. Better Yields.', 
              pa: 'ਨਿਰਪੱਖ ਕੀਮਤਾਂ। ਬਿਹਤਰ ਉਪਜ।',
              sd: 'منصفانه قيمتون. بهتر پيداوار.',
              ps: 'منصفانه بیې. ښه حاصلات.',
              bal: 'منصفانہ قیمتاں۔ بہتر پیداوار۔',
              shina: 'منصفانہ قیمتیں۔ بہتر پیداوار۔'
            })}{" "}
            <span className="text-primary-glow drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]">
              {t({ 
                ur: 'کسان سے خریدار تک براہِ راست۔', 
                en: 'Direct from Farmer to Buyer.', 
                pa: 'ਕਿਸਾਨ ਤੋਂ ਖਰੀਦਦਾਰ ਤੱਕ ਸਿੱਧਾ।',
                sd: 'هاري کان خريد ڪندڙ تائين سڌو.',
                ps: 'د بزګر څخه پېرودونکي ته مستقیم.',
                bal: 'کسان گوں خریدار تک مستقیم۔',
                shina: 'کسان کوڑو خریدار تک مستقیم۔'
              })}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] backdrop-blur-[1px] bg-black/10 p-4 rounded-lg border border-white/10">
            {t({ 
              ur: 'کسان بازار کسانوں کو براہ راست فصلیں بیچنے، تصدیق شدہ بیج اور کھاد حاصل کرنے، اور ذاتی فصل منصوبہ کے ساتھ ہوشیاری سے کاشتکاری کرنے میں مدد کرتا ہے۔', 
              en: 'Kisaan Bazaar helps farmers sell crops directly, access verified seeds and fertilizers, and farm smarter with personalized crop plans.', 
              pa: 'ਕਿਸਾਨ ਬਾਜ਼ਾਰ ਕਿਸਾਨਾਂ ਨੂੰ ਸਿੱਧੀਆਂ ਫਸਲਾਂ ਵੇਚਣ, ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਅਤੇ ਖਾਦ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।',
              sd: 'ڪسان بازار هارين کي سڌو فصل وڪڻڻ، تصديق ٿيل ٻج ۽ ڀاڻ حاصل ڪرڻ ۾ مدد ڪري ٿو.',
              ps: 'کسان بازار بزګرانو ته د مستقیم حاصلاتو پلورلو، تایید شوي تخمونو ته لاسرسی کې مرسته کوي.',
              bal: 'کسان بازار کسانانء مستقیم فصلاں واٹگ، تصدیق بوتگیں بیجاں ات کھاداں گرگ انت کمک کنت۔',
              shina: 'کسان بازار کسانانءَ مستقیم فصلیں واٹگ، تصدیق تھیلو بیجاں اتے کھاداں اچیلو کمک کریلو۔'
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_40px_rgba(251,146,60,0.4)] hover:shadow-[0_0_60px_rgba(251,146,60,0.6)] transition-all duration-300 hover:scale-105 text-lg px-10 py-7 font-bold backdrop-blur-sm border-2 border-accent/30"
            >
              <ShoppingCart className="mr-2 h-6 w-6" />
              {t({ 
                ur: 'اپنی فصل بیچیں', 
                en: 'Sell Your Crops', 
                pa: 'ਆਪਣੀ ਫਸਲ ਵੇਚੋ',
                sd: 'پنهنجو فصل وڪرو',
                ps: 'خپل حاصلات وپلورئ',
                bal: 'وتی فصل واٹ',
                shina: 'آپݨو فصل واٹ'
              })}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/80 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary transition-all duration-300 text-lg px-10 py-7 font-bold shadow-elevated"
            >
              {t({ 
                ur: 'معیاری سامان خریدیں', 
                en: 'Buy Quality Products', 
                pa: 'ਗੁਣਵੱਤਾ ਉਤਪਾਦ ਖਰੀਦੋ',
                sd: 'معياري سامان خريد ڪريو',
                ps: 'کیفیت محصولات واخلئ',
                bal: 'معیاری سامان خرید کن',
                shina: 'معیاری سامان خرید کرو'
              })}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>

          {/* Modern Stats with Glass Effect */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-primary-glow mb-1 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                <TrendingUp className="h-8 w-8" />
                10,000+
              </div>
              <div className="text-sm text-white/90 font-medium">
                {t({ 
                  ur: 'فعال کسان', 
                  en: 'Active Farmers', 
                  pa: 'ਸਰਗਰਮ ਕਿਸਾਨ',
                  sd: 'فعال هاري',
                  ps: 'فعال بزګران',
                  bal: 'فعال کسان',
                  shina: 'فعال کسان'
                })}
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-1 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">5,000+</div>
              <div className="text-sm text-white/90 font-medium">
                {t({ 
                  ur: 'خریدار', 
                  en: 'Buyers', 
                  pa: 'ਖਰੀਦਦਾਰ',
                  sd: 'خريد ڪندڙ',
                  ps: 'پېرودونکي',
                  bal: 'خریدار',
                  shina: 'خریدار'
                })}
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-1 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">30%</div>
              <div className="text-sm text-white/90 font-medium">
                {t({ 
                  ur: 'پیداوار میں اضافہ', 
                  en: 'Yield Increase', 
                  pa: 'ਉਪਜ ਵਾਧਾ',
                  sd: 'پيداوار ۾ واڌارو',
                  ps: 'د حاصلاتو زیاتوالی',
                  bal: 'پیداوار اے زیادگی',
                  shina: 'پیداوار وچ وادو'
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
