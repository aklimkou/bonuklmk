import Image from 'next/image'

const images = [
  { src: '/images/gallery-3.jpg', alt: 'Style inspiration' },
  { src: '/images/gallery-4.jpg', alt: 'Fashion look' },
  { src: '/images/gallery-5.jpg', alt: 'Wardrobe styling' },
  { src: '/images/gallery-6.jpg', alt: 'Personal style' },
  { src: '/images/gallery-7.jpg', alt: 'Outfit details' },
  { src: '/images/gallery-8.jpg', alt: 'Fashion editorial' },
  { src: '/images/gallery-9.jpg', alt: 'Style showcase' },
  { src: '/images/gallery-10.jpg', alt: 'Curated look' },
]

export function InstagramGrid() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-serif text-4xl md:text-5xl tracking-wide mb-4">
          Portfolio
        </h2>
        <p className="text-center text-[#666] text-sm tracking-wider mb-12">
          A GLIMPSE INTO MY WORK
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
