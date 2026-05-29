"use client"

import { GsapStaggerGrid } from "@/components/ui/gsap-stagger-grid"

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
  return (
    <section id="faq">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="section-label mb-3">{description}</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

        <GsapStaggerGrid
          animation="fade-up"
          from="start"
          staggerAmount={0.6}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          itemClassName="h-full"
        >
          {items.map((faq, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-6 transition-all duration-300 hover:border-violet-500/35 hover:bg-violet-500/[0.10] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)]"
            >
              <span className="mb-3 block font-mono text-3xl font-bold text-violet-400/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-lg font-bold text-white">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {faq.answer}
              </p>
            </div>
          ))}
        </GsapStaggerGrid>
      </div>
    </section>
  )
}
