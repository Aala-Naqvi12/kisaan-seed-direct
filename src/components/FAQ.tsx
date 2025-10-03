import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How are prices decided?",
      answer: "Prices are based on real-time market data, ensuring fairness for both farmers and buyers."
    },
    {
      question: "Can I trust the seeds and pesticides?",
      answer: "Yes, all inputs are verified and rated by other farmers. We only work with certified suppliers."
    },
    {
      question: "How does the crop plan adjust with weather?",
      answer: "The plan updates weekly based on regional weather forecasts to optimize your farming decisions."
    },
    {
      question: "What if I don't get buyers?",
      answer: "Our platform ensures wide buyer reach with ratings and trust badges. Most listings connect within 48 hours."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all farmer and buyer data is encrypted and protected with industry-standard security measures."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Everything you need to know about Kisaan Bazaar
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
