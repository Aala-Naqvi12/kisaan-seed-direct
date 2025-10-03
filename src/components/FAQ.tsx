import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "قیمتوں کا فیصلہ کیسے ہوتا ہے؟",
      answer: "قیمتیں حقیقی وقت کے مارکیٹ ڈیٹا پر مبنی ہیں، جو کسانوں اور خریداروں دونوں کے لیے انصاف کو یقینی بناتی ہیں۔"
    },
    {
      question: "کیا میں بیج اور کیڑے مار دوا پر بھروسہ کر سکتا ہوں؟",
      answer: "جی ہاں، تمام سامان کی تصدیق کی گئی ہے اور دوسرے کسانوں نے درجہ بندی کی ہے۔ ہم صرف تصدیق شدہ فراہم کنندگان کے ساتھ کام کرتے ہیں۔"
    },
    {
      question: "فصل منصوبہ موسم کے ساتھ کیسے ایڈجسٹ ہوتا ہے؟",
      answer: "منصوبہ علاقائی موسمی پیشن گوئیوں کی بنیاد پر ہر ہفتے اپ ڈیٹ ہوتا ہے تاکہ آپ کے کاشتکاری کے فیصلوں کو بہتر بنایا جا سکے۔"
    },
    {
      question: "اگر مجھے خریدار نہیں ملتے تو کیا ہوگا؟",
      answer: "ہمارا پلیٹ فارم درجہ بندی اور اعتماد کے بیجز کے ساتھ وسیع خریدار رسائی کو یقینی بناتا ہے۔ زیادہ تر فہرستیں 48 گھنٹوں میں منسلک ہو جاتی ہیں۔"
    },
    {
      question: "کیا میرا ڈیٹا محفوظ ہے؟",
      answer: "جی ہاں، تمام کسان اور خریدار کا ڈیٹا خفیہ کیا گیا ہے اور صنعت کے معیاری حفاظتی اقدامات سے محفوظ ہے۔"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            اکثر پوچھے جانے والے سوالات
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            کسان بازار کے بارے میں وہ سب کچھ جو آپ کو جاننے کی ضرورت ہے
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
