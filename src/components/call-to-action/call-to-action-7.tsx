import { Button } from "@/components/ui/button"

interface CallToAction7Props {
  label?: string
  title?: string
  description?: string
  primaryCtaText?: string
  secondaryCtaText?: string
}

export function CallToAction7({
  label = "Call to Action",
  title = "Get started with MagicUI",
  description = "Build a fast and animated marketing website with that converts visitors into customers.",
  primaryCtaText = "Get started",
  secondaryCtaText = "Learn more",
}: CallToAction7Props = {}) {
  return (
    <section id="cta">
      <div className="container flex flex-col items-center justify-center gap-6 p-4 text-center md:p-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-muted-foreground font-mono text-xs font-medium tracking-wide uppercase">
            {label}
          </p>
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
            <h3 className="text-center text-2xl font-medium tracking-tight text-balance sm:text-4xl">
              {title}
            </h3>
            <p className="text-muted-foreground text-center text-base text-balance md:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            className="hover:ring-primary transform-gpu cursor-pointer overflow-hidden rounded-full text-base tracking-tighter whitespace-pre transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2"
          >
            {primaryCtaText}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="hover:ring-primary transform-gpu cursor-pointer overflow-hidden rounded-full text-base tracking-tighter whitespace-pre transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2"
          >
            {secondaryCtaText}
          </Button>
        </div>
      </div>
    </section>
  )
}
