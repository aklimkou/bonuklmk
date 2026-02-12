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
            Style consultations, wardrobe solutions, event styling and photoshoots.
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
              I am a stylist and your guide to the world of fashion, 
              self-awareness, confidence, and transformation.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Without a doubt, clothing is a powerful tool for achieving 
              goals, and I have proven this through 7 years of my work.
            </p>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              I value an individual approach and correspondence with your inner self. 
              That's exactly what helps to form a unique style.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
