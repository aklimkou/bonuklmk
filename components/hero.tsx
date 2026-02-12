'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="pt-16">
      {/* Main hero image */}
      <div className="relative w-full h-[calc(100vh-4rem)]">
        <Image
          src="/images/gallery-1.jpg"
          alt="BONU"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Secondary image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
        <div className="relative h-[50vh] md:h-[70vh] bg-white">
          <Image
            src="/images/gallery-2.jpg"
            alt="Style"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[50vh] md:h-[70vh] bg-white">
          <div className="absolute inset-0 flex items-center justify-center bg-white">
            <div className="text-center px-6">
              <h1 className="font-serif text-5xl md:text-7xl mb-4 tracking-wide">
                BONU
              </h1>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
