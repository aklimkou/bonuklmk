"use client"

import { useEffect, useRef } from "react"

export function Statement() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5
      if (position <= -50) position = 0
      el.style.transform = `translateX(${position}%)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const items = [
    "Personal Styling",
    "Wardrobe Consulting",
    "Event Styling",
    "Virtual Styling",
    "Shopping Assistance",
    "Commercial Styling",
  ]

  return (
    <section className="py-16 md:py-20 overflow-hidden border-y border-border">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-serif text-lg md:text-xl lg:text-2xl tracking-[0.08em] text-muted-foreground/60 mx-8 md:mx-12 shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
