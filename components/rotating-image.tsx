'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Style 1' },
  { src: '/images/gallery-2.jpg', alt: 'Style 2' },
  { src: '/images/hero.jpg', alt: 'Style 3' },
]

export function RotatingImage() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-[#5d4545]' : 'bg-[#ccc]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
