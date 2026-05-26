"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

interface SequenceStep {
  /** CSS selector relative to container, or "self" for the container itself */
  target: string
  /** GSAP vars for the animation */
  vars: gsap.TweenVars
  /** Position in timeline: number (absolute seconds), string like "+=0.2", "<" (same start as previous), "<0.2" (0.2s after previous starts) */
  position?: gsap.Position
  /** Animation method */
  method?: "to" | "from" | "fromTo"
  /** fromVars when method is "fromTo" */
  fromVars?: gsap.TweenVars
}

interface GsapHeroSequenceProps {
  children: ReactNode
  /** Array of animation steps that compose the entrance timeline */
  steps: SequenceStep[]
  /** Global timeline defaults (merged into each step) */
  defaults?: gsap.TweenVars
  /** Delay before the sequence starts (seconds) */
  delay?: number
  /** Whether the timeline should repeat */
  repeat?: number
  /** Yoyo on repeat */
  yoyo?: boolean
  className?: string
}

/**
 * Orchestrates a complex hero entrance animation using a GSAP timeline.
 *
 * Each step targets elements within the container using CSS selectors.
 * Add data attributes to children for targeting, e.g.:
 *   <h1 data-gsap="title">...</h1>
 *   <p data-gsap="subtitle">...</p>
 *   <div data-gsap="cta">...</div>
 *
 * Then reference them in steps:
 *   { target: '[data-gsap="title"]', vars: { y: 60, autoAlpha: 0, duration: 1 } }
 */
export function GsapHeroSequence({
  children,
  steps,
  defaults = { ease: "power3.out", duration: 1 },
  delay = 0.3,
  repeat,
  yoyo,
  className,
}: GsapHeroSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const tl = gsap.timeline({
        defaults,
        delay,
        repeat,
        yoyo,
      })

      steps.forEach((step) => {
        const target =
          step.target === "self"
            ? containerRef.current
            : containerRef.current!.querySelectorAll(step.target)

        if (!target || (target instanceof NodeList && target.length === 0)) return

        const method = step.method || "from"
        const position = step.position ?? ">"

        switch (method) {
          case "to":
            tl.to(target, step.vars, position)
            break
          case "from":
            tl.from(target, step.vars, position)
            break
          case "fromTo":
            tl.fromTo(target, step.fromVars || {}, step.vars, position)
            break
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  )
}

/**
 * Pre-built hero entrance presets.
 * Use these as the `steps` prop for common patterns.
 */
export const heroPresets = {
  /** Badge fades in → title slides up → subtitle fades → CTAs stagger in */
  standard: [
    {
      target: '[data-gsap="badge"]',
      vars: { autoAlpha: 0, y: -20, duration: 0.6 },
      position: 0,
    },
    {
      target: '[data-gsap="title"]',
      vars: { autoAlpha: 0, y: 60, duration: 1, ease: "power4.out" },
      position: 0.2,
    },
    {
      target: '[data-gsap="subtitle"]',
      vars: { autoAlpha: 0, y: 30, duration: 0.8 },
      position: 0.5,
    },
    {
      target: '[data-gsap="cta"]',
      vars: { autoAlpha: 0, y: 20, scale: 0.95, duration: 0.6, stagger: 0.15 },
      position: 0.7,
    },
    {
      target: '[data-gsap="image"]',
      vars: { autoAlpha: 0, y: 40, scale: 0.96, duration: 1.2, ease: "power2.out" },
      position: 0.4,
    },
  ] satisfies SequenceStep[],

  /** Dramatic: title chars split → elements slide from sides */
  dramatic: [
    {
      target: '[data-gsap="badge"]',
      vars: { autoAlpha: 0, scale: 0.8, duration: 0.4, ease: "back.out(2)" },
      position: 0,
    },
    {
      target: '[data-gsap="title"]',
      vars: { autoAlpha: 0, y: 80, skewY: 4, duration: 1.2, ease: "power4.out" },
      position: 0.15,
    },
    {
      target: '[data-gsap="subtitle"]',
      vars: { autoAlpha: 0, y: 40, filter: "blur(8px)", duration: 0.8 },
      position: 0.4,
    },
    {
      target: '[data-gsap="cta"]',
      vars: { autoAlpha: 0, y: 30, duration: 0.6, ease: "back.out(1.7)", stagger: 0.12 },
      position: 0.6,
    },
    {
      target: '[data-gsap="image"]',
      vars: { autoAlpha: 0, scale: 0.9, rotation: -2, duration: 1.4, ease: "power3.out" },
      position: 0.3,
    },
    {
      target: '[data-gsap="decoration"]',
      vars: { autoAlpha: 0, scale: 0, duration: 0.8, ease: "elastic.out(1, 0.5)", stagger: 0.1 },
      position: 0.5,
    },
  ] satisfies SequenceStep[],

  /** Minimal: simple fades with longer timing */
  minimal: [
    {
      target: '[data-gsap="title"]',
      vars: { autoAlpha: 0, duration: 1.2, ease: "power2.out" },
      position: 0.2,
    },
    {
      target: '[data-gsap="subtitle"]',
      vars: { autoAlpha: 0, duration: 1, ease: "power2.out" },
      position: 0.6,
    },
    {
      target: '[data-gsap="cta"]',
      vars: { autoAlpha: 0, y: 10, duration: 0.8, stagger: 0.2 },
      position: 1,
    },
  ] satisfies SequenceStep[],

  /** Bounce: elements pop in with elastic easing */
  bounce: [
    {
      target: '[data-gsap="badge"]',
      vars: { autoAlpha: 0, scale: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" },
      position: 0,
    },
    {
      target: '[data-gsap="title"]',
      vars: { autoAlpha: 0, y: 80, duration: 1, ease: "bounce.out" },
      position: 0.2,
    },
    {
      target: '[data-gsap="subtitle"]',
      vars: { autoAlpha: 0, y: 40, duration: 0.8, ease: "power3.out" },
      position: 0.5,
    },
    {
      target: '[data-gsap="cta"]',
      vars: { autoAlpha: 0, scale: 0.5, duration: 0.6, ease: "back.out(2)", stagger: 0.15 },
      position: 0.7,
    },
  ] satisfies SequenceStep[],
} as const
