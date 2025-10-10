import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Loader2, Sprout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import { supabase } from "@/integrations/supabase/client";

const CropPlanning = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState("");
  
  const [soilData, setSoilData] = useState({
    ph: "",
    nitrogen: "",
    nitrogenUnit: "ppm",
    phosphorus: "",
    phosphorusUnit: "ppm",
    potassium: "",
    potassiumUnit: "ppm",
    organicMatter: "",
    texture: ""
  });
  
  const [farmDetails, setFarmDetails] = useState({
    location: "",
    size: "",
    waterSource: "",
    previousCrop: "",
    climate: "",
    season: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRecommendations("");

    try {
      const { data, error } = await supabase.functions.invoke('crop-recommendations', {
        body: { soilData, farmDetails }
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: t({
            ur: "خرابی",
            en: "Error",
            pa: "ਗਲਤੀ",
            sd: "غلطي",
            ps: "خطا",
            bal: "غلطی",
            shina: "غلطی"
          }),
          description: data.error,
          variant: "destructive"
        });
        return;
      }

      setRecommendations(data.recommendations);
      toast({
        title: t({
          ur: "تجاویز تیار ہیں!",
          en: "Recommendations Ready!",
          pa: "ਸਿਫਾਰਸ਼ਾਂ ਤਿਆਰ ਹਨ!",
          sd: "سفارشون تيار آهن!",
          ps: "وړاندیزونه چمتو دی!",
          bal: "تجاویز تیار اِنت!",
          shina: "تجاویز تیار اِنت!"
        }),
        description: t({
          ur: "آپ کی زمین کے لیے فصلوں کی تجاویز ملاحظہ کریں",
          en: "View crop recommendations for your land",
          pa: "ਆਪਣੀ ਜ਼ਮੀਨ ਲਈ ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ ਦੇਖੋ",
          sd: "پنهنجي زمين لاءِ فصل جون سفارشون ڏسو",
          ps: "د خپلې ځمکې لپاره د فصل وړاندیزونه وګورئ",
          bal: "وتی زمین ءِ ئی فصل تجاویز گندیت",
          shina: "وتی زمین فصل تجاویز ګنډیت"
        })
      });
    } catch (error) {
      console.error("Error getting recommendations:", error);
      toast({
        title: t({
          ur: "کچھ غلط ہو گیا",
          en: "Something went wrong",
          pa: "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ",
          sd: "ڪجهه غلط ٿي ويو",
          ps: "یو څه غلط شو",
          bal: "کجان غلط ات",
          shina: "کجان غلط بیت"
        }),
        description: t({
          ur: "براہ کرم دوبارہ کوشش کریں",
          en: "Please try again",
          pa: "ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
          sd: "مهرباني ڪري ٻيهر ڪوشش ڪريو",
          ps: "مهرباني وکړئ بیا هڅه وکړئ",
          bal: "مہربانی گوں دگ کوشش کنیت",
          shina: "مہربانی گون دگ کوشش کریت"
        }),
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-muted/30">
      <Header />
      <div className="container px-4 py-24 max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t({
            ur: "واپس",
            en: "Back",
            pa: "ਵਾਪਸ",
            sd: "واپس",
            ps: "شاته",
            bal: "پچ",
            shina: "پچھت"
          })}
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full mb-4 shadow-soft">
            <Sprout className="h-6 w-6" />
            <span className="font-bold text-lg">
              {t({
                ur: "AI سے چلنے والا فصل منصوبہ",
                en: "AI-Powered Crop Planning",
                pa: "AI ਨਾਲ ਚਲਣ ਵਾਲੀ ਫਸਲ ਯੋਜਨਾ",
                sd: "AI سان هلندڙ فصل منصوبو",
                ps: "AI پرمخ د فصل پلان",
                bal: "AI ای چلگیں فصل منصوبہ",
                shina: "AI سوم چلگیں فصل منصوبہ"
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            {t({
              ur: "اپنی زمین کے لیے بہترین فصلیں تلاش کریں",
              en: "Find the Best Crops for Your Land",
              pa: "ਆਪਣੀ ਜ਼ਮੀਨ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲਾਂ ਲੱਭੋ",
              sd: "پنهنجي زمين لاءِ بهترين فصل ڳوليو",
              ps: "د خپلې ځمکې لپاره غوره فصلونه ومومئ",
              bal: "وتی زمین ءِ ئی بہترین فصلاں گندیت",
              shina: "وتی زمین بہترین فصلیں ګنډیت"
            })}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t({
              ur: "اپنے مٹی کے ٹیسٹ کے نتائج اور فارم کی تفصیلات شیئر کریں",
              en: "Share your soil test results and farm details",
              pa: "ਆਪਣੇ ਮਿੱਟੀ ਟੈਸਟ ਦੇ ਨਤੀਜੇ ਅਤੇ ਫਾਰਮ ਵੇਰਵੇ ਸਾਂਝੇ ਕਰੋ",
              sd: "پنهنجي مٽي ٽيسٽ جا نتيجا ۽ فارم تفصيل شيئر ڪريو",
              ps: "د خپل خاورې ازموینې پایلې او فارم جزئیات شریک کړئ",
              bal: "وتی مٹی ٹیسٹ نتیجہ و فارم تفصیلات شیئر کنیت",
              shina: "وتی مٹی ٹیسٹ نتیجہ و فارم تفصیلات شیئر کریت"
            })}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Soil Test Results */}
          <Card className="border-primary/20 shadow-soft">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/5">
              <CardTitle className="text-2xl">
                {t({
                  ur: "مٹی کے ٹیسٹ کے نتائج",
                  en: "Soil Test Results",
                  pa: "ਮਿੱਟੀ ਟੈਸਟ ਦੇ ਨਤੀਜੇ",
                  sd: "مٽي ٽيسٽ جا نتيجا",
                  ps: "د خاورې ازموینې پایلې",
                  bal: "مٹی ٹیسٹ ءِ نتیجہ",
                  shina: "مٹی ٹیسٹ نتیجہ"
                })}
              </CardTitle>
              <CardDescription>
                {t({
                  ur: "اپنے مٹی کی لیبارٹری رپورٹ سے معلومات درج کریں",
                  en: "Enter information from your soil laboratory report",
                  pa: "ਆਪਣੀ ਮਿੱਟੀ ਪ੍ਰਯੋਗਸ਼ਾਲਾ ਰਿਪੋਰਟ ਤੋਂ ਜਾਣਕਾਰੀ ਦਰਜ ਕਰੋ",
                  sd: "پنهنجي مٽي ليبارٽري رپورٽ مان معلومات داخل ڪريو",
                  ps: "د خپل خاورې لابراتوار راپور څخه معلومات دننه کړئ",
                  bal: "وتی مٹی لیبارٹری رپورٹ اٹی معلومات داخل کنیت",
                  shina: "وتی مٹی لیبارٹری رپورٹ کھوٹے معلومات داخل کریت"
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ph">
                    {t({
                      ur: "pH لیول",
                      en: "pH Level",
                      pa: "pH ਪੱਧਰ",
                      sd: "pH ليول",
                      ps: "pH کچه",
                      bal: "pH لیول",
                      shina: "pH لیول"
                    })}
                  </Label>
                  <Input
                    id="ph"
                    type="number"
                    step="0.1"
                    placeholder="6.5 - 7.5"
                    value={soilData.ph}
                    onChange={(e) => setSoilData({ ...soilData, ph: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="texture">
                    {t({
                      ur: "مٹی کی ساخت",
                      en: "Soil Texture",
                      pa: "ਮਿੱਟੀ ਦੀ ਬਣਾਵਟ",
                      sd: "مٽي جي جوڙجڪ",
                      ps: "د خاورې جوړښت",
                      bal: "مٹی ءِ ساخت",
                      shina: "مٹی ساخت"
                    })}
                  </Label>
                  <Select value={soilData.texture} onValueChange={(value) => setSoilData({ ...soilData, texture: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t({ ur: "منتخب کریں", en: "Select", pa: "ਚੁਣੋ", sd: "چونڊيو", ps: "غوره کړئ", bal: "جاہ دیت", shina: "جاہ دیت" })} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">{t({ ur: "چکنی مٹی", en: "Clay", pa: "ਚਿੱਕੜ", sd: "مٽي", ps: "خاوره", bal: "گلی مٹی", shina: "گلی مٹی" })}</SelectItem>
                      <SelectItem value="loam">{t({ ur: "دوماٹی", en: "Loam", pa: "ਦੋਮਾਟ", sd: "ڏمڻ", ps: "خاوره", bal: "دوماٹی", shina: "دوماٹی" })}</SelectItem>
                      <SelectItem value="sandy">{t({ ur: "ریتلی", en: "Sandy", pa: "ਰੇਤਲੀ", sd: "ريٽيلو", ps: "شګی", bal: "ریتلی", shina: "ریتلی" })}</SelectItem>
                      <SelectItem value="silt">{t({ ur: "باریک", en: "Silt", pa: "ਬਾਰੀਕ", sd: "نرم", ps: "نرم", bal: "باریک", shina: "باریک" })}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nitrogen">
                    {t({ ur: "نائٹروجن (N)", en: "Nitrogen (N)", pa: "ਨਾਈਟ੍ਰੋਜਨ (N)", sd: "نائيٽروجن (N)", ps: "نایتروجن (N)", bal: "نائٹروجن (N)", shina: "نائٹروجن (N)" })}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="nitrogen"
                      type="number"
                      step="0.1"
                      placeholder="40"
                      value={soilData.nitrogen}
                      onChange={(e) => setSoilData({ ...soilData, nitrogen: e.target.value })}
                      required
                      className="flex-1"
                    />
                    <Select value={soilData.nitrogenUnit} onValueChange={(value) => setSoilData({ ...soilData, nitrogenUnit: value })}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ppm">ppm</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                        <SelectItem value="kg/ha">kg/ha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phosphorus">
                    {t({ ur: "فاسفورس (P)", en: "Phosphorus (P)", pa: "ਫਾਸਫੋਰਸ (P)", sd: "فاسفورس (P)", ps: "فاسفورس (P)", bal: "فاسفورس (P)", shina: "فاسفورس (P)" })}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="phosphorus"
                      type="number"
                      step="0.1"
                      placeholder="20"
                      value={soilData.phosphorus}
                      onChange={(e) => setSoilData({ ...soilData, phosphorus: e.target.value })}
                      required
                      className="flex-1"
                    />
                    <Select value={soilData.phosphorusUnit} onValueChange={(value) => setSoilData({ ...soilData, phosphorusUnit: value })}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ppm">ppm</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                        <SelectItem value="kg/ha">kg/ha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="potassium">
                    {t({ ur: "پوٹاشیم (K)", en: "Potassium (K)", pa: "ਪੋਟਾਸ਼ੀਅਮ (K)", sd: "پوٽاشيم (K)", ps: "پوتاشیم (K)", bal: "پوٹاشیم (K)", shina: "پوٹاشیم (K)" })}
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="potassium"
                      type="number"
                      step="0.1"
                      placeholder="150"
                      value={soilData.potassium}
                      onChange={(e) => setSoilData({ ...soilData, potassium: e.target.value })}
                      required
                      className="flex-1"
                    />
                    <Select value={soilData.potassiumUnit} onValueChange={(value) => setSoilData({ ...soilData, potassiumUnit: value })}>
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ppm">ppm</SelectItem>
                        <SelectItem value="%">%</SelectItem>
                        <SelectItem value="kg/ha">kg/ha</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organicMatter">
                    {t({ ur: "نامیاتی مادہ (%)", en: "Organic Matter (%)", pa: "ਜੈਵਿਕ ਪਦਾਰਥ (%)", sd: "نامياتي مادو (%)", ps: "نامیاتی ماده (%)", bal: "نامیاتی ماده (%)", shina: "نامیاتی ماده (%)" })}
                  </Label>
                  <Input
                    id="organicMatter"
                    type="number"
                    step="0.1"
                    placeholder="2.5"
                    value={soilData.organicMatter}
                    onChange={(e) => setSoilData({ ...soilData, organicMatter: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farm Details */}
          <Card className="border-secondary/20 shadow-soft">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/5">
              <CardTitle className="text-2xl">
                {t({
                  ur: "فارم کی تفصیلات",
                  en: "Farm Details",
                  pa: "ਫਾਰਮ ਵੇਰਵੇ",
                  sd: "فارم تفصيل",
                  ps: "د فارم جزئیات",
                  bal: "فارم ءِ تفصیلات",
                  shina: "فارم تفصیلات"
                })}
              </CardTitle>
              <CardDescription>
                {t({
                  ur: "اپنے فارم اور آب و ہوا کے بارے میں معلومات فراہم کریں",
                  en: "Provide information about your farm and climate",
                  pa: "ਆਪਣੇ ਫਾਰਮ ਅਤੇ ਜਲਵਾਯੂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰੋ",
                  sd: "پنهنجي فارم ۽ موسم بابت معلومات فراهم ڪريو",
                  ps: "د خپل فارم او اقلیم په اړه معلومات چمتو کړئ",
                  bal: "وتی فارم و آب و ہوا ءِ بارا ءَ معلومات دیت",
                  shina: "وتی فارم و آب و ہوا بارہ معلومات دیت"
                })}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">
                    {t({ ur: "مقام (ضلع/شہر)", en: "Location (District/City)", pa: "ਸਥਿਤੀ (ਜ਼ਿਲ੍ਹਾ/ਸ਼ਹਿਰ)", sd: "جڳھ (ضلعو/شهر)", ps: "ځای (ولسوالۍ/ښار)", bal: "جاگہ (ضلع/شہر)", shina: "جاگہ (ضلع/شہر)" })}
                  </Label>
                  <Input
                    id="location"
                    placeholder={t({ ur: "مثال: سرگودھا، پنجاب", en: "e.g., Sargodha, Punjab", pa: "ਉਦਾਹਰਨ: ਸਰਗੋਧਾ, ਪੰਜਾਬ", sd: "مثال: سرگوڌا، پنجاب", ps: "د بیلګې په توګه: سرګودها، پنجاب", bal: "مثال: سرگودھا، پنجاب", shina: "مثال: سرگودھا، پنجاب" })}
                    value={farmDetails.location}
                    onChange={(e) => setFarmDetails({ ...farmDetails, location: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">
                    {t({ ur: "زمین کا رقبہ (ایکڑ)", en: "Farm Size (Acres)", pa: "ਜ਼ਮੀਨ ਦਾ ਖੇਤਰਫਲ (ਏਕੜ)", sd: "زمين جو رقبو (ايڪڙ)", ps: "د ځمکې مساحت (جريبه)", bal: "زمین ءِ رقبہ (ایکڑ)", shina: "زمین رقبہ (ایکڑ)" })}
                  </Label>
                  <Input
                    id="size"
                    type="number"
                    step="0.1"
                    placeholder="10"
                    value={farmDetails.size}
                    onChange={(e) => setFarmDetails({ ...farmDetails, size: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waterSource">
                    {t({ ur: "پانی کا ذریعہ", en: "Water Source", pa: "ਪਾਣੀ ਦਾ ਸਰੋਤ", sd: "پاڻي جو ذريعو", ps: "د اوبو سرچینه", bal: "پانی ءِ سرچشمہ", shina: "پانی سرچشمہ" })}
                  </Label>
                  <Select value={farmDetails.waterSource} onValueChange={(value) => setFarmDetails({ ...farmDetails, waterSource: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t({ ur: "منتخب کریں", en: "Select", pa: "ਚੁਣੋ", sd: "چونڊيو", ps: "غوره کړئ", bal: "جاہ دیت", shina: "جاہ دیت" })} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canal">{t({ ur: "نہر", en: "Canal", pa: "ਨਹਿਰ", sd: "واهه", ps: "کانال", bal: "نہر", shina: "نہر" })}</SelectItem>
                      <SelectItem value="tubewell">{t({ ur: "ٹیوب ویل", en: "Tubewell", pa: "ਟਿਊਬਵੈੱਲ", sd: "ٽيوب ويل", ps: "ټیوب ویل", bal: "ٹیوب ویل", shina: "ٹیوب ویل" })}</SelectItem>
                      <SelectItem value="rainwater">{t({ ur: "بارش کا پانی", en: "Rainwater", pa: "ਬਾਰਿਸ਼ ਦਾ ਪਾਣੀ", sd: "برسات جو پاڻي", ps: "د باران اوبه", bal: "بارش ءِ پانی", shina: "بارش پانی" })}</SelectItem>
                      <SelectItem value="mixed">{t({ ur: "مخلوط", en: "Mixed", pa: "ਮਿਸ਼ਰਤ", sd: "مليل", ps: "مخلوط", bal: "مخلوط", shina: "مخلوط" })}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="climate">
                    {t({ ur: "آب و ہوا", en: "Climate Zone", pa: "ਜਲਵਾਯੂ ਖੇਤਰ", sd: "موسمي علائقو", ps: "د اقلیم زون", bal: "آب و ہوا زون", shina: "آب و ہوا زون" })}
                  </Label>
                  <Select value={farmDetails.climate} onValueChange={(value) => setFarmDetails({ ...farmDetails, climate: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t({ ur: "منتخب کریں", en: "Select", pa: "ਚੁਣੋ", sd: "چونڊيو", ps: "غوره کړئ", bal: "جاہ دیت", shina: "جاہ دیت" })} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="arid">{t({ ur: "خشک", en: "Arid", pa: "ਖੁਸ਼ਕ", sd: "خشڪ", ps: "وچ", bal: "خشک", shina: "خشک" })}</SelectItem>
                      <SelectItem value="semi-arid">{t({ ur: "نیم خشک", en: "Semi-Arid", pa: "ਅਰਧ-ਖੁਸ਼ਕ", sd: "نيم خشڪ", ps: "نیمه وچ", bal: "نیم خشک", shina: "نیم خشک" })}</SelectItem>
                      <SelectItem value="tropical">{t({ ur: "استوائی", en: "Tropical", pa: "ਖੰਡੀ", sd: "اڀرندڙ", ps: "استوایی", bal: "استوائی", shina: "استوائی" })}</SelectItem>
                      <SelectItem value="temperate">{t({ ur: "معتدل", en: "Temperate", pa: "ਤਪਿਸ਼ਦਾਰ", sd: "گرم", ps: "معتدل", bal: "معتدل", shina: "معتدل" })}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="season">
                    {t({ ur: "موسم کی منصوبہ بندی", en: "Season Planning", pa: "ਸੀਜ਼ਨ ਯੋਜਨਾ", sd: "موسم جو منصوبو", ps: "د موسم پلان", bal: "موسم ءِ منصوبہ", shina: "موسم منصوبہ" })}
                  </Label>
                  <Select value={farmDetails.season} onValueChange={(value) => setFarmDetails({ ...farmDetails, season: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t({ ur: "منتخب کریں", en: "Select", pa: "ਚੁਣੋ", sd: "چونڊيو", ps: "غوره کړئ", bal: "جاہ دیت", shina: "جاہ دیت" })} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rabi">{t({ ur: "ربیع (اکتوبر-مارچ)", en: "Rabi (Oct-Mar)", pa: "ਰਬੀ (ਅਕਤੂਬਰ-ਮਾਰਚ)", sd: "ربيع (آڪٽوبر-مارچ)", ps: "ربیع (اکتوبر-مارچ)", bal: "ربیع (اکتوبر-مارچ)", shina: "ربیع (اکتوبر-مارچ)" })}</SelectItem>
                      <SelectItem value="kharif">{t({ ur: "خریف (اپریل-ستمبر)", en: "Kharif (Apr-Sep)", pa: "ਖਰੀਫ (ਅਪ੍ਰੈਲ-ਸਤੰਬਰ)", sd: "خريف (اپريل-سيپٽمبر)", ps: "خریف (اپریل-سپتمبر)", bal: "خریف (اپریل-سپتمبر)", shina: "خریف (اپریل-سپتمبر)" })}</SelectItem>
                      <SelectItem value="both">{t({ ur: "دونوں موسم", en: "Both Seasons", pa: "ਦੋਵੇਂ ਮੌਸਮ", sd: "ٻئي موسم", ps: "دواړه موسمونه", bal: "دیگاں موسم", shina: "دوویں موسم" })}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="previousCrop">
                    {t({ ur: "پچھلی فصل (اختیاری)", en: "Previous Crop (Optional)", pa: "ਪਿਛਲੀ ਫਸਲ (ਵਿਕਲਪਿਕ)", sd: "پوئين فصل (اختياري)", ps: "تیر فصل (اختیاري)", bal: "پچھلی فصل (اختیاری)", shina: "پچھلی فصل (اختیاری)" })}
                  </Label>
                  <Input
                    id="previousCrop"
                    placeholder={t({ ur: "مثال: گندم، چاول", en: "e.g., Wheat, Rice", pa: "ਉਦਾਹਰਨ: ਕਣਕ, ਚਾਵਲ", sd: "مثال: گهڻو، چانور", ps: "د بیلګې په توګه: غنم، وريجې", bal: "مثال: گندم، چاول", shina: "مثال: گندم، چاول" })}
                    value={farmDetails.previousCrop}
                    onChange={(e) => setFarmDetails({ ...farmDetails, previousCrop: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 text-lg py-6 shadow-elevated"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t({
                  ur: "تجاویز تیار کی جا رہی ہیں...",
                  en: "Generating Recommendations...",
                  pa: "ਸਿਫਾਰਸ਼ਾਂ ਤਿਆਰ ਕੀਤੀਆਂ ਜਾ ਰਹੀਆਂ ਹਨ...",
                  sd: "سفارشون تيار ٿي رهيون آهن...",
                  ps: "وړاندیزونه تیاریږي...",
                  bal: "تجاویز تیار بیت...",
                  shina: "تجاویز تیار بیلو..."
                })}
              </>
            ) : (
              <>
                <Sprout className="mr-2 h-5 w-5" />
                {t({
                  ur: "فصلوں کی تجاویز حاصل کریں",
                  en: "Get Crop Recommendations",
                  pa: "ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
                  sd: "فصل جون سفارشون حاصل ڪريو",
                  ps: "د فصل وړاندیزونه ترلاسه کړئ",
                  bal: "فصل تجاویز گرٹیت",
                  shina: "فصل تجاویز اچو"
                })}
              </>
            )}
          </Button>
        </form>

        {/* Recommendations Display */}
        {recommendations && (
          <Card className="mt-8 border-accent/20 shadow-elevated animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sprout className="h-6 w-6 text-accent" />
                {t({
                  ur: "آپ کے لیے تجویز کردہ فصلیں",
                  en: "Recommended Crops for You",
                  pa: "ਤੁਹਾਡੇ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਫਸਲਾਂ",
                  sd: "توهان لاءِ سفارش ڪيل فصل",
                  ps: "ستاسو لپاره سپارښتنې شوي فصلونه",
                  bal: "شمی ئی تجویز کرتگیں فصلاں",
                  shina: "شمے تجویز کتگیں فصلیں"
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {recommendations}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CropPlanning;
