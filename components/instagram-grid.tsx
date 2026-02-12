import Image from 'next/image'

export function InstagramGrid() {
  return (
    <section id="home" className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/gallery.png"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
