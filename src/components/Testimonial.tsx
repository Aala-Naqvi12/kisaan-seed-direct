import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 border border-primary/20 animate-fade-in">
            <Quote className="h-12 w-12 text-primary mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 italic">
              "کسان بازار سے پہلے، میں گندم مارکیٹ سے 25% کم قیمت پر بیچتا تھا۔ براہ راست فروخت 
              سے، میں منصفانہ قیمتیں کماتا ہوں۔ فصل غذائیت منصوبہ نے میری پیداوار میں 28% اضافہ کیا۔ 
              اب، میں اپنی تمام کاشتکاری کی ضروریات کے لیے کسان بازار پر بھروسہ کرتا ہوں۔"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl text-primary-foreground font-bold">
                AR
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">علی رضا</p>
                <p className="text-muted-foreground">ملتان سے کسان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
