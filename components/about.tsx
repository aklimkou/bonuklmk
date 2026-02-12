import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40">
      {/* Quote / intro */}
      <div className="px-5 md:px-10 mb-16 md:mb-24">
        <p className="font-serif text-[clamp(1.6rem,4vw,3.8rem)] leading-[1.15] tracking-[0.01em] text-foreground max-w-5xl text-balance">
          Style is the quiet language of confidence.
          <span className="text-muted-foreground"> I help you find yours.</span>
        </p>
      </div>

      {/* Photo + bio side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[4/5] lg:aspect-auto">
          <Image
            src="/images/about.jpg"
            alt="Bonu Klimkou portrait"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-16 xl:px-24 py-16 md:py-20 lg:py-0">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
            About
          </p>
          <div className="flex flex-col gap-6 text-foreground/70 leading-relaxed text-[15px] max-w-lg">
            <p>
              I{"'"}m Bonu Klimkou, a personal and commercial stylist. My work lives at the
              intersection of fashion, identity, and confidence. I believe the way you dress
              shapes the way you feel and the way the world receives you.
            </p>
            <p>
              With experience across editorial, commercial, and private styling, I bring
              a considered eye to every project. Whether curating a capsule wardrobe,
              dressing you for a milestone event, or directing the look for a campaign,
              my approach is always personal, intentional, and rooted in who you are.
            </p>
            <p>
              I work with individuals who want to feel effortlessly themselves and brands
              that want to tell a story through clothes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
