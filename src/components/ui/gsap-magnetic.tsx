"use client"

import { useRef, useCallback, type ReactNode } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface GsapMagneticProps {
  children: ReactNode
  /** Magnetic pull strength (0 to 1). Higher = stronger pull. Default: 0.3 */
  strength?: number
  /** Inner content movement multiplier (moves opposite to container). Default: 0.5 */
  innerStrength?: number
  /** Return animation duration in seconds */
  returnDuration?: number
  /** Return ease */
  returnEase?: string
  /** Magnetic radius in pixels (how close cursor must be to activate) */
  radius?: number
  className?: string
}

export function GsapMagnetic({
  children,
  strength = 0.3,
  innerStrength = 0.5,
  returnDuration = 0.6,
  returnEase = "elastic.out(1, 0.3)",
  radius,
  className,
}: GsapMagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      if (radius) {
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        if (distance > radius) return
      }

      gsap.to(containerRef.current, {
        x: deltaX * strength,
        y: deltaY * strength,
        duration: 0.4,
        ease: "power2.out",
      })

      if (innerRef.current) {
        gsap.to(innerRef.current, {
          x: deltaX * innerStrength,
          y: deltaY * innerStrength,
          duration: 0.4,
          ease: "power2.out",
        })
      }
    },
    [strength, innerStrength, radius]
  )

  const handleMouseLeave = useCallback(() => {
    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: returnDuration,
      ease: returnEase,
    })

    if (innerRef.current) {
      gsap.to(innerRef.current, {
        x: 0,
        y: 0,
        duration: returnDuration,
        ease: returnEase,
      })
    }
  }, [returnDuration, returnEase])

  return (
    <div
      ref={containerRef}
      className={cn("inline-block will-change-transform", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
