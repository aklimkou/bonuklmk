import Image from 'next/image'

export function AboutMe() {
  return (
    <section id="about" className="py-20 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="/images/about.jpg"
              alt="Bonu Klimkou"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-6">
              About Me
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-4">
              I'm Bonu Klimkou, a personal stylist and fashion consultant dedicated to helping
              you discover and refine your unique style. With years of experience in the fashion
              industry, I bring a keen eye for detail and a passion for transforming wardrobes.
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-4">
              My approach is rooted in understanding your lifestyle, personality, and aspirations.
              Whether you need a complete wardrobe overhaul or styling for a special occasion, I
              work closely with you to create looks that feel authentic and effortless.
            </p>
            <p className="text-[#666] text-base leading-relaxed">
              Based in a world of style, I believe that great fashion is about confidence,
              comfort, and self-expression.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
