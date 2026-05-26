"use client"

import React, { useState, useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"

interface FeatureScrollSection {
  direction: "ltr" | "rtl"
  imageSrc: string
  topPosition?: string
  title: string
  description: string
  dots?: { color: string }[]
  primaryButtonText?: string
  secondaryButtonText?: string
}

interface FeatureScroll1Props {
  heroTitle?: string
  footerTitle?: string
  sections?: FeatureScrollSection[]
}

const DEFAULT_SECTIONS: FeatureScrollSection[] = [
  {
    direction: "rtl",
    imageSrc: "https://cdn.magicui.design/iphone.png",
    topPosition: "30%",
    title: "Scroll Feature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
    dots: [
      { color: "bg-chart-1" },
      { color: "bg-chart-2" },
      { color: "bg-chart-3" },
    ],
    primaryButtonText: "Learn More",
  },
  {
    direction: "ltr",
    imageSrc: "https://cdn.magicui.design/iphone.png",
    topPosition: "30%",
    title: "Scroll Feature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam.",
    dots: [
      { color: "bg-chart-4" },
      { color: "bg-chart-5" },
      { color: "bg-destructive" },
    ],
    primaryButtonText: "Learn More",
    secondaryButtonText: "Contact Us",
  },
]

function SectionContent({ section }: { section: FeatureScrollSection }) {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4 text-center lg:mx-0 lg:items-start lg:justify-start lg:text-left">
      {section.dots && section.dots.length > 0 && (
        <div className="mb-2 flex items-center gap-2">
          {section.dots.map((dot, dotIdx) => (
            <div key={dotIdx} className={`${dot.color} h-3 w-3 rounded-full`} />
          ))}
        </div>
      )}
      <h1 className="text-foreground text-4xl font-bold">{section.title}</h1>
      <p className="text-muted-foreground text-lg">{section.description}</p>
      <div className="flex w-full gap-4">
        {section.primaryButtonText && (
          <Button variant="default" className="cursor-pointer shadow-none">
            {section.primaryButtonText}
          </Button>
        )}
        {section.secondaryButtonText && (
          <Button variant="outline" className="cursor-pointer shadow-none">
            {section.secondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  )
}

export function FeatureScroll1({
  heroTitle = "Hero Section",
  footerTitle = "Footer Section",
  sections = DEFAULT_SECTIONS,
}: FeatureScroll1Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Track which text section is in viewport → crossfade to its image
  useEffect(() => {
    const observers = sections.map((_, idx) => {
      const el = sectionRefs.current[idx]
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(idx)
        },
        { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [sections])

  // Use first section's topPosition as the sticky anchor (or default)
  const stickyTop = sections[0]?.topPosition ?? "30%"

  return (
    <section className="bg-background text-foreground">
      {heroTitle && (
        <div className="bg-primary flex h-[50vh] items-center justify-center">
          <h3 className="text-primary-foreground text-4xl font-bold">
            {heroTitle}
          </h3>
        </div>
      )}

      <div className="container flex flex-col gap-20 p-10">
        {/* ── Mobile: stacked image + text per section ── */}
        <div className="flex flex-col gap-20 lg:hidden">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              {/* Fixed aspect container → no layout shift on mobile either */}
              <div
                className={`w-full aspect-video rounded-xl overflow-hidden bg-muted ${
                  section.direction === "rtl" ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={section.imageSrc}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={section.direction === "rtl" ? "order-2" : "order-1"}>
                <SectionContent section={section} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop: sticky image panel + scrollable text ── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
          {/* Left: scrollable text sections */}
          <div className="flex flex-col">
            {sections.map((section, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  sectionRefs.current[idx] = el
                }}
                className="flex min-h-[80vh] items-center py-16"
              >
                <SectionContent section={section} />
              </div>
            ))}
          </div>

          {/* Right: single sticky image pane — pre-renders ALL images, crossfades between them */}
          {/* Fixed aspect-ratio container → ZERO layout shift regardless of image dimensions */}
          <div
            className="sticky flex items-center justify-center py-16"
            style={{ top: stickyTop }}
          >
            <div className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-2xl bg-muted aspect-[4/3]">
              {sections.map((section, idx) => (
                <img
                  key={idx}
                  src={section.imageSrc}
                  alt={section.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    idx === activeIdx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {footerTitle && (
        <div className="bg-primary flex h-[50vh] items-center justify-center">
          <h3 className="text-primary-foreground text-4xl font-bold">
            {footerTitle}
          </h3>
        </div>
      )}
    </section>
  )
}
