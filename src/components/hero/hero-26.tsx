"use client"

import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface Hero26Props {
  title?: string
  description?: string
  primaryCtaText?: string
  secondaryCtaText?: string
  stats?: StatItem[]
  imageSrc?: string
  imageAlt?: string
}

const defaultStats: StatItem[] = [
  { value: 20, suffix: "k+", label: "Happy users" },
  { value: 5, suffix: "k+", label: "Website sections" },
  { value: 100, suffix: "x", label: "Faster development" },
  { value: 1, prefix: "$", suffix: "M", label: "Revenue" },
]

export function Hero26({
  title = "Magic UI Design Studio",
  description = "Build a fast and animated marketing website with that converts visitors into customers.",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "See a demo",
  stats = defaultStats,
  imageSrc = "https://ui.shadcn.com/placeholder.svg",
  imageAlt = "NovaPress Studio analytics dashboard preview",
}: Hero26Props = {}) {
  return (
    <section id="hero">
      <div className="container mx-auto px-4 py-20 md:p-10 md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 text-center">
          <div className="mx-auto space-y-3 lg:mx-0">
            <h1 className="text-2xl font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[600px] text-center text-base text-balance md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="group hover:ring-primary w-full transform-gpu cursor-pointer overflow-hidden rounded-full text-base tracking-tight transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 sm:w-fit">
              {primaryCtaText}
            </Button>
            <Button
              variant="secondary"
              className="group hover:ring-primary w-full transform-gpu cursor-pointer overflow-hidden rounded-full text-base tracking-tight transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 sm:w-fit"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-xl flex-wrap items-center justify-between gap-6 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 font-mono text-2xl font-medium">
                {stat.prefix ? <span>{stat.prefix}</span> : null}
                <NumberTicker
                  value={stat.value}
                  className="text-2xl font-medium tracking-tight"
                />
                {stat.suffix ? <span>{stat.suffix}</span> : null}
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-10 h-[500px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded-3xl border object-cover"
          />
        </div>
      </div>
    </section>
  )
}
