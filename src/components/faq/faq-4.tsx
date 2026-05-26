"use client"

import { MessageCircleQuestion } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface Faq4Props {
  title?: string
  description?: string
  items?: FaqItem[]
}

export function Faq4({
  title = "Preguntas Frecuentes",
  description = "FAQ",
  items = [],
}: Faq4Props) {
  const midpoint = Math.ceil(items.length / 2)
  const leftItems = items.slice(0, midpoint)
  const rightItems = items.slice(midpoint)

  return (
    <section id="faq">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-label mb-3">{description}</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Todo lo que necesitás saber antes de dar el siguiente paso.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {leftItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`left-${index}`}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 transition-colors data-[state=open]:border-primary/20 data-[state=open]:bg-white/[0.04]"
              >
                <AccordionTrigger className="gap-3 py-5 text-left text-[15px] font-semibold hover:no-underline [&[data-state=open]]:text-primary">
                  <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary/50" />
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {rightItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`right-${index}`}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 transition-colors data-[state=open]:border-primary/20 data-[state=open]:bg-white/[0.04]"
              >
                <AccordionTrigger className="gap-3 py-5 text-left text-[15px] font-semibold hover:no-underline [&[data-state=open]]:text-primary">
                  <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary/50" />
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
