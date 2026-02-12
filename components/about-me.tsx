import Image from 'next/image'

export function AboutMe() {
  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.15em] md:tracking-[0.2em] mb-2 md:mb-3">
            STYLIST
          </h1>
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-4">
            style consultations | wardrobe solutions | event styling | commercial
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center max-w-4xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-xs mx-auto">
            <Image
              src="/images/about-me2.jpg"
              alt="About Me"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="space-y-4 md:space-y-5 px-4 md:px-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-tight">
              HI! MY NAME IS BONU
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I'm a stylist and your guide to fashion, confidence, and transformation—I believe clothing is one of the most powerful tools for achieving your goals when it genuinely aligns with who you are.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I work efficiently with women who want to delegate their wardrobe, handling most of the work behind the scenes so you can simply enjoy results that feel effortless and authentic.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I don't believe in chasing trends or constant overhauls; I build wardrobes that last, refining them thoughtfully over time to create a style that's uniquely yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
