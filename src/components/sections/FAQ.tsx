import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { faq } from "@/lib/site";

/**
 * Bagian FAQ: pertanyaan & jawaban umum menggunakan komponen Accordion.
 */
export function FAQ() {
  return (
    <section id="faq" className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={faq.heading}
          subtitle={faq.subheading}
        />

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faq.items.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}