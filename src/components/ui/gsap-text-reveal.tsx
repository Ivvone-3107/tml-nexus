"use client"

import { useRef, useMemo, type ReactNode } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type SplitType = "chars" | "words" | "lines"
type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "scale"
  | "rotate"
  | "blur"
  | "clip"
  | "scramble"

interface GsapTextRevealProps {
  /** Text to animate. Can be a string or ReactNode (only string is split) */
  text: string
  /** How to split the text */
  split?: SplitType
  /** Animation type for each fragment */
  animation?: AnimationType
  /** GSAP ease */
  ease?: string
  /** Duration per fragment */
  duration?: number
  /** Stagger amount between fragments (seconds or object) */
  stagger?: number | gsap.StaggerVars
  /** Trigger on scroll (true) or on viewport entry (false = plays immediately when in view) */
  scrub?: boolean | number
  /** ScrollTrigger start */
  start?: string
  /** ScrollTrigger end */
  end?: string
  /** HTML tag for the container */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
  className?: string
  /** Class applied to each fragment span */
  fragmentClassName?: string
}

const animationVars: Record<AnimationType, gsap.TweenVars> = {
  "fade-up": { y: "110%", autoAlpha: 0 },
  "fade-down": { y: "-110%", autoAlpha: 0 },
  "fade-in": { autoAlpha: 0 },
  scale: { scale: 0, autoAlpha: 0, transformOrigin: "center center" },
  rotate: { rotation: 90, autoAlpha: 0, transformOrigin: "left bottom" },
  blur: { autoAlpha: 0, filter: "blur(12px)" },
  clip: { clipPath: "inset(100% 0% 0% 0%)" },
  scramble: { autoAlpha: 0, y: 20 },
}

function splitText(text: string, type: SplitType): string[] {
  switch (type) {
    case "chars":
      return text.split("")
    case "words":
      return text.split(/(\s+)/)
    case "lines":
      return text.split("\n")
  }
}

export function GsapTextReveal({
  text,
  split = "words",
  animation = "fade-up",
  ease = "power4.out",
  duration = 0.8,
  stagger = 0.04,
  scrub = false,
  start = "top 85%",
  end = "top 20%",
  as: Tag = "div",
  className,
  fragmentClassName,
}: GsapTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const fragments = useMemo(() => splitText(text, split), [text, split])

  useGSAP(
    () => {
      if (!containerRef.current) return

      const els = containerRef.current.querySelectorAll("[data-gsap-fragment]")
      if (!els.length) return

      const fromVars = animationVars[animation]

      gsap.from(els, {
        ...fromVars,
        duration: scrub ? undefined : duration,
        ease: scrub ? "none" : ease,
        stagger: scrub ? undefined : stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end: scrub ? end : undefined,
          scrub: scrub === true ? 1 : scrub || false,
          toggleActions: "play none none none",
        },
      })
    },
    { scope: containerRef }
  )

  const needsOverflowHidden = animation === "fade-up" || animation === "fade-down" || animation === "clip"

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLElement & HTMLDivElement>}
      className={cn(className)}
    >
      {fragments.map((fragment, i) => {
        const isSpace = /^\s+$/.test(fragment)
        if (isSpace) return <span key={i}>&nbsp;</span>

        return (
          <span
            key={i}
            className={cn(
              needsOverflowHidden && "inline-block overflow-hidden",
              split === "chars" && "inline-block",
            )}
          >
            <span
              data-gsap-fragment
              className={cn(
                "inline-block will-change-transform",
                fragmentClassName,
              )}
              style={{ visibility: "hidden" }}
            >
              {fragment}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}
