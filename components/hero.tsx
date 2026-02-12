import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-5.jpg", alt: "Runway look - white tank and cream skirt" },
  { src: "/images/gallery-9.jpg", alt: "Lily of the valley in glass vase" },
  { src: "/images/gallery-2.jpg", alt: "Yellow leather mini bag detail" },
  { src: "/images/gallery-7.jpg", alt: "Queen Anne's lace botanical" },
  { src: "/images/gallery-10.jpg", alt: "Golden hair with barrette" },
  { src: "/images/gallery-1.jpg", alt: "Turquoise and olive runway look" },
  { src: "/images/gallery-8.jpg", alt: "Silver pendant necklace" },
  { src: "/images/gallery-3.jpg", alt: "Aerial pastoral landscape" },
  { src: "/images/gallery-6.jpg", alt: "Silver bangle bracelet detail" },
  { src: "/images/gallery-4.jpg", alt: "Embroidered linen pouch" },
]

export function Hero() {
  return (
    <section>
      {/* Full-viewport centered name */}
      <div className="flex items-center justify-center min-h-svh relative">
        <h1 className="font-serif text-[clamp(5rem,20vw,16rem)] leading-[0.85] tracking-[0.04em] text-foreground uppercase select-none">
          BONU
        </h1>
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-8 bg-border" />
        </div>
      </div>

      {/* Gallery collage - Darii Moore style asymmetric grid */}
      <div className="px-3 md:px-5 pb-3 md:pb-5">
        {/* Row 1: two images side by side, different heights */}
        <div className="flex gap-3 md:gap-5 mb-3 md:mb-5">
          <div className="relative w-[55%] aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover"
              sizes="55vw"
              priority
            />
          </div>
          <div className="relative w-[45%] aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover"
              sizes="45vw"
              priority
            />
          </div>
        </div>

        {/* Row 2: single wide image */}
        <div className="flex gap-3 md:gap-5 mb-3 md:mb-5">
          <div className="relative w-[40%] aspect-[2/3] overflow-hidden">
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <div className="relative w-[60%] aspect-[2/3] overflow-hidden">
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover"
              sizes="60vw"
            />
          </div>
        </div>

        {/* Row 3: three images */}
        <div className="flex gap-3 md:gap-5 mb-3 md:mb-5">
          <div className="relative w-1/3 aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="relative w-1/3 aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
          <div className="relative w-1/3 aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </div>

        {/* Row 4: two images, opposite proportions from row 1 */}
        <div className="flex gap-3 md:gap-5 mb-3 md:mb-5">
          <div className="relative w-[60%] aspect-[4/3] overflow-hidden">
            <Image
              src={galleryImages[7].src}
              alt={galleryImages[7].alt}
              fill
              className="object-cover"
              sizes="60vw"
            />
          </div>
          <div className="relative w-[40%] aspect-[4/3] overflow-hidden">
            <Image
              src={galleryImages[8].src}
              alt={galleryImages[8].alt}
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

        {/* Row 5: single centered image */}
        <div className="flex justify-center">
          <div className="relative w-[50%] aspect-[3/4] overflow-hidden">
            <Image
              src={galleryImages[9].src}
              alt={galleryImages[9].alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
