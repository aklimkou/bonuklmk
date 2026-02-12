'use client'

import Image from 'next/image'

export function InstagramGrid() {
  return (
    <section id="home" className="py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Collage Style Gallery */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
          {/* Image 1 - Top Left */}
          <div className="absolute top-0 left-0 w-[40%] md:w-[32%] h-[42%] md:h-[45%] z-10">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b1.JPG"
                alt="Gallery 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 2 - Top Center-Left */}
          <div className="absolute top-[8%] left-[35%] md:left-[28%] w-[32%] md:w-[26%] h-[35%] md:h-[38%] z-20">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b2.JPG"
                alt="Gallery 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 3 - Top Right Tall */}
          <div className="absolute top-0 right-[8%] md:right-[5%] w-[35%] md:w-[28%] h-[50%] md:h-[55%] z-15">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b3.JPG"
                alt="Gallery 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 4 - Middle Left */}
          <div className="absolute top-[40%] left-[3%] w-[35%] md:w-[30%] h-[38%] md:h-[40%] z-25">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b4.JPG"
                alt="Gallery 4"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 5 - Center */}
          <div className="absolute top-[42%] left-[36%] md:left-[32%] w-[36%] md:w-[30%] h-[38%] md:h-[42%] z-30">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b5.JPG"
                alt="Gallery 5"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 6 - Top Right Small */}
          <div className="absolute top-[12%] right-0 w-[30%] md:w-[24%] h-[28%] md:h-[30%] z-35">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b6.JPG"
                alt="Gallery 6"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 7 - Bottom Left */}
          <div className="absolute bottom-[2%] left-[8%] w-[32%] md:w-[26%] h-[30%] md:h-[32%] z-20">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b7.JPG"
                alt="Gallery 7"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 8 - Bottom Right */}
          <div className="absolute bottom-0 right-[8%] md:right-[10%] w-[36%] md:w-[30%] h-[35%] md:h-[38%] z-25">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b8.JPG"
                alt="Gallery 8"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 9 - Middle Small */}
          <div className="absolute top-[25%] left-[62%] md:left-[58%] w-[25%] md:w-[20%] h-[22%] md:h-[25%] z-40">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b9.JPG"
                alt="Gallery 9"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 10 - Bottom Center Small */}
          <div className="absolute bottom-[8%] left-[38%] md:left-[35%] w-[28%] md:w-[22%] h-[25%] md:h-[28%] z-35">
            <div className="relative w-full h-full shadow-lg">
              <Image
                src="/images/b10.JPG"
                alt="Gallery 10"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
