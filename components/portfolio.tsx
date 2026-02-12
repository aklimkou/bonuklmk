"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const images = [
  { src: "/images/portfolio-1.jpg", alt: "Tailored blazer editorial" },
  { src: "/images/work-2.jpg", alt: "Curated luxury accessories on marble" },
  { src: "/images/portfolio-2.jpg", alt: "Evening gown styling" },
  { src: "/images/work-3.jpg", alt: "Monochrome silk blouse and white trousers" },
  { src: "/images/portfolio-3.jpg", alt: "Curated outfit flat lay" },
  { src: "/images/work-1.jpg", alt: "Beige blazer and cream trousers editorial" },
  { src: "/images/portfolio-4.jpg", alt: "Structured outfit detail" },
  { src: "/images/work-5.jpg", alt: "Layered earth-tone street style" },
]

export function Portfolio() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
      <section id="work" className="py-20 md:py-32 lg:py-40">
        <div className="px-5 md:px-10 mb-10 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Selected Work
          </p>
        </div>

        {/* Monikh-style image grid: edge to edge, large images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative overflow-hidden group cursor-pointer ${
                i % 4 === 0 || i % 4 === 3 ? "aspect-[3/4]" : "aspect-square"
              }`}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 md:mx-12">
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Minimal nav */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelected(selected === 0 ? images.length - 1 : selected - 1)
            }}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 16l-6-6 6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelected(selected === images.length - 1 ? 0 : selected + 1)
            }}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 16l6-6-6-6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] text-foreground/40">
            {selected + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
