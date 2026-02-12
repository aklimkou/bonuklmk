"use client"

import { useState } from "react"

const services = [
  {
    title: "Personal Styling",
    description:
      "One-on-one sessions designed to refine your personal aesthetic and build a wardrobe that reflects who you are.",
  },
  {
    title: "Wardrobe Consulting",
    description:
      "A thorough edit of your existing wardrobe followed by a strategic plan to fill the gaps and invest wisely.",
  },
  {
    title: "Event & Occasion Styling",
    description:
      "From galas to important business events, I ensure you arrive feeling polished, intentional, and completely yourself.",
  },
  {
    title: "Virtual Styling",
    description:
      "The full styling experience, delivered remotely. Detailed consultations, curated lookbooks, and personal shopping links for clients anywhere in the world.",
  },
  {
    title: "Shopping Assistance",
    description:
      "Guided shopping experiences with a curated approach that saves you time and ensures every piece earns its place.",
  },
  {
    title: "Commercial Styling",
    description:
      "Editorial shoots, brand campaigns, and commercial projects. Creative direction and meticulous styling for every frame.",
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 md:py-32 lg:py-40 px-5 md:px-10">
      <div className="max-w-4xl">
        <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10 md:mb-16">
          Services
        </p>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <div key={i} className="border-t border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.02em] text-foreground group-hover:opacity-60 transition-opacity duration-300">
                  {service.title}
                </h3>
                <span
                  className={`text-muted-foreground text-xl transition-transform duration-300 ml-6 shrink-0 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-40 opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-foreground/60 leading-relaxed text-[15px] max-w-xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
