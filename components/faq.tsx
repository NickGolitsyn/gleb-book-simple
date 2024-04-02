'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion, useInView } from "framer-motion";
import { useRef } from 'react'

interface FaqItem {
  q: String, 
  a: String
}

type FaqData = FaqItem[];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.25, duration: 0.5 },
  }),
  exit: { opacity: 0, x: -100 }, 
};

export default function Faq({data} : {data: FaqData}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div>
      <h1 className="text-3xl text-blue-800 capitalize mb-5">frequently asked questions</h1>
      <Accordion type="single" collapsible ref={ref}>
        {data.map((e: any, index: number) => (
          <motion.div
            key={index}
            custom={index}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{e.q}</AccordionTrigger>
              <AccordionContent>{e.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
}