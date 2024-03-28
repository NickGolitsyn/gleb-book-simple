import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Locale } from "@/i18n.config";
import { getData } from "@/lib/dictionary";


export default async function Faq({lang} : {lang: Locale}) {
  const { faq } = await getData(lang);
  return (
    <div>
      <h1 className="text-3xl text-blue-800 capitalize mb-5">frequently asked questions</h1>
      <Accordion type="single" collapsible>
        {faq.map((e, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{e.q}</AccordionTrigger>
            <AccordionContent>{e.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}