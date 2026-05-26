"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type AnimationPreset =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "scale-down"
  | "rotate-in"
  | "flip-up"
  | "flip-left"
  | "clip-up"
  | "clip-left"
  | "skew-up"

const presets: Record<AnimationPreset, gsap.TweenVars> = {
  "fade-up": { y: 80, autoAlpha: 0 },
  "fade-down": { y: -80, autoAlpha: 0 },
  "fade-left": { x: 80, autoAlpha: 0 },
  "fade-right": { x: -80, autoAlpha: 0 },
  "scale-up": { scale: 0.8, autoAlpha: 0 },
  "scale-down": { scale: 1.2, autoAlpha: 0 },
  "rotate-in": { rotation: 8, y: 60, autoAlpha: 0, transformOrigin: "left bottom" },
  "flip-up": { rotationX: 90, y: 40, autoAlpha: 0, transformOrigin: "bottom center" },
  "flip-left": { rotationY: -90, x: 40, autoAlpha: 0, transformOrigin: "left center" },
  "clip-up": { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 0 },
  "clip-left": { clipPath: "inset(0% 100% 0% 0%)", autoAlpha: 0 },
  "skew-up": { y: 60, skewY: 4, autoAlpha: 0 },
}

interface GsapScrollRevealProps {
  children: ReactNode
  /** Animation preset or custom gsap.from() vars */
  animation?: AnimationPreset | gsap.TweenVars
  /** Duration in seconds */
  duration?: number
  /** Delay in seconds */
  delay?: number
  /** GSAP ease string */
  ease?: string
  /** Scrub the animation to scroll progress. true = 1:1, number = smoothing seconds */
  scrub?: boolean | number
  /** ScrollTrigger start position */
  start?: string
  /** ScrollTrigger end position */
  end?: string
  /** Only animate once (default: true) */
  once?: boolean
  className?: string
}

export function GsapScrollReveal({
  children,
  animation = "fade-up",
  duration = 1,
  delay = 0,
  ease = "power3.out",
  scrub = false,
  start = "top 85%",
  end = "top 20%",
  once = true,
  className,
}: GsapScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const fromVars = typeof animation === "string" ? presets[animation] : animation

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.from(containerRef.current, {
        ...fromVars,
        duration: scrub ? undefined : duration,
        delay: scrub ? undefined : delay,
        ease: scrub ? "none" : ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end: scrub ? end : undefined,
          scrub: scrub === true ? 1 : scrub || false,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={cn("will-change-transform", className)} style={{ visibility: "hidden" }}>
      {children}
    </div>
  )
}
