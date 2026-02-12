'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function RotatingImage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Array of image filenames
  const images = [
    'a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg', 'a5.jpg', 
    'a6.jpg', 'a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg',
    'a11.jpg', 'a12.jpg', 'a13.jpg', 'a14.jpg', 'a15.jpg',
    'a16.jpg', 'a17.JPG', 'a18.JPG', 'a19.JPG', 'a20.JPG',
    'a21.JPG', 'a22.JPG'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-[#4a4a3a]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-5">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[400px] aspect-[3/4]">
            <Image
              src={`/images/${images[currentIndex]}`}
              alt="Gallery"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
