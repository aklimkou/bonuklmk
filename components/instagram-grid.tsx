'use client'

import Image from 'next/image'

export function InstagramGrid() {
  const instagramPosts = [
    { id: 1, image: '/images/gallery-3.jpg' },
    { id: 2, image: '/images/gallery-4.jpg' },
    { id: 3, image: '/images/gallery-5.jpg' },
    { id: 4, image: '/images/gallery-6.jpg' },
    { id: 5, image: '/images/gallery-7.jpg' },
    { id: 6, image: '/images/gallery-8.jpg' },
    { id: 7, image: '/images/gallery-9.jpg' },
    { id: 8, image: '/images/gallery-10.jpg' },
  ]

  return (
    <section id="home" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Handle */}
        <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl font-serif tracking-wide">
            @bonu
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.image}
                alt={`Gallery ${post.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
