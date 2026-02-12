'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function RotatingImage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  // Portfolio images
  const row1Images = [
    'IMG_0654.jpg', 'IMG_0655.jpg', 'IMG_0656.jpg', 'IMG_0657.jpg', 
    'IMG_0660.JPG', 'IMG_0661.JPG', 'IMG_0662.JPG', 'IMG_0663.JPG', 'IMG_0664.JPG'
  ]
  
  const row2Images = [
    'IMG_0665.JPG', 'IMG_0666.JPG', 'IMG_0667.JPG', 'IMG_0668.JPG', 
    'IMG_0671.jpg', 'IMG_0673.jpg', 'IMG_8208.jpg', 'IMG_8690.jpg', 'IMG_9953.JPG'
  ]

  const allImages = [...row1Images, ...row2Images]

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === allImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <>
      <section id="portfolio" className="pt-10 md:pt-12 pb-16 md:pb-20 bg-[#e8dcc4]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-[40px] md:mb-[50px]">
          <h2 className="text-[1.75rem] md:text-[2rem] font-light tracking-wide mb-2">
            Selected Works
          </h2>
          <p className="text-gray-600 text-xs md:text-sm">
            campaigns | personal styling | special events
          </p>
        </div>
          
          {/* Row 1 */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 md:gap-3 mb-2 md:mb-3">
            {row1Images.map((image, index) => (
              <button
                key={`row1-${index}`}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={`/images/portfolio/${image}`}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 md:gap-3">
            {row2Images.map((image, index) => (
              <button
                key={`row2-${index}`}
                onClick={() => setSelectedImage(index + row1Images.length)}
                className="relative aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={`/images/portfolio/${image}`}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:opacity-60 transition-opacity z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="absolute left-4 text-white hover:opacity-60 transition-opacity z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="absolute right-4 text-white hover:opacity-60 transition-opacity z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          {/* Image */}
          <div 
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/portfolio/${allImages[selectedImage]}`}
              alt={`Portfolio ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
