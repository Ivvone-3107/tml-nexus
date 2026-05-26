"use client"

import { useRef, Children, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type StaggerOrigin = "start" | "center" | "end" | "edges" | "random"
type AnimationPreset = "fade-up" | "scale" | "flip" | "rotate" | "blur" | "slide-up"

const animationPresets: Record<AnimationPreset, gsap.TweenVars> = {
  "fade-up": { y: 60, autoAlpha: 0 },
  scale: { scale: 0, autoAlpha: 0 },
  flip: { rotationY: -90, autoAlpha: 0, transformOrigin: "left center" },
  rotate: { rotation: 15, y: 40, autoAlpha: 0, transformOrigin: "center bottom" },
  blur: { autoAlpha: 0, filter: "blur(16px)", y: 30 },
  "slide-up": { y: "100%", autoAlpha: 0 },
}

interface GsapStaggerGridProps {
  children: ReactNode
  /** Animation preset */
  animation?: AnimationPreset
  /** Where the stagger originates from */
  from?: StaggerOrigin
  /** Total stagger spread in seconds */
  staggerAmount?: number
  /** Duration per item */
  duration?: number
  /** GSAP ease */
  ease?: string
  /** Grid columns for stagger calculation */
  gridColumns?: number
  /** Whether to use grid-based stagger (creates wave effect in grids) */
  gridStagger?: boolean
  /** ScrollTrigger start position */
  start?: string
  /** Only animate once */
  once?: boolean
  className?: string
  /** Class for each item wrapper */
  itemClassName?: string
}

export function GsapStaggerGrid({
  children,
  animation = "fade-up",
  from = "center",
  staggerAmount = 0.6,
  duration = 0.8,
  ease = "back.out(1.4)",
  gridColumns,
  gridStagger = false,
  start = "top 85%",
  once = true,
  className,
  itemClassName,
}: GsapStaggerGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const childArray = Children.toArray(children)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const items = containerRef.current.querySelectorAll("[data-gsap-stagger-item]")
      if (!items.length) return

      const fromVars = animationPresets[animation]

      const staggerConfig: gsap.StaggerVars = gridStagger && gridColumns
        ? {
            amount: staggerAmount,
            from,
            grid: [Math.ceil(childArray.length / gridColumns), gridColumns],
            axis: "y",
          }
        : {
            amount: staggerAmount,
            from,
          }

      gsap.from(items, {
        ...fromVars,
        duration,
        ease,
        stagger: staggerConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={cn(className)}>
      {childArray.map((child, i) => (
        <div
          key={i}
          data-gsap-stagger-item
          className={cn("will-change-transform", itemClassName)}
          style={{ visibility: "hidden" }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
