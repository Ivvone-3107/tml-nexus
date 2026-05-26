"use client"

import { useRef, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface GsapParallaxProps {
  children: ReactNode
  /** Parallax speed: positive = slower than scroll, negative = faster. Range: -2 to 2 */
  speed?: number
  /** Direction of parallax movement */
  direction?: "vertical" | "horizontal"
  /** Scale factor on scroll (1 = no scale, 1.2 = 20% zoom) */
  scale?: number
  /** Rotation amount in degrees on scroll */
  rotation?: number
  /** Opacity range: [start, end] mapped to scroll progress */
  opacity?: [number, number]
  /** GSAP ease for scrub smoothing */
  ease?: string
  /** Scrub smoothing (seconds) */
  scrub?: number
  className?: string
}

export function GsapParallax({
  children,
  speed = 0.5,
  direction = "vertical",
  scale,
  rotation,
  opacity,
  ease = "none",
  scrub = 1,
  className,
}: GsapParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current || !innerRef.current) return

      const distance = speed * 100

      const toVars: gsap.TweenVars = {
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      }

      if (direction === "vertical") {
        toVars.y = distance
      } else {
        toVars.x = distance
      }

      if (scale) {
        toVars.scale = scale
      }

      if (rotation) {
        toVars.rotation = rotation
      }

      if (opacity) {
        toVars.autoAlpha = opacity[1]
        gsap.set(innerRef.current, { autoAlpha: opacity[0] })
      }

      gsap.to(innerRef.current, toVars)
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}

/**
 * Parallax section with multiple layers at different speeds.
 * Wrap each layer in GsapParallax with different speed values.
 */
interface GsapParallaxSectionProps {
  children: ReactNode
  className?: string
}

export function GsapParallaxSection({ children, className }: GsapParallaxSectionProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      {children}
    </section>
  )
}
