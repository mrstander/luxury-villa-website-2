"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { src: "/images/hero-landscape.jpg", alt: "Aerial view of the reserve" },
  { src: "/images/villa-exterior.jpg", alt: "Villa exterior at golden hour" },
  { src: "/images/villa-interior.jpg", alt: "Luxury villa interior" },
  { src: "/images/gallery-pool.jpg", alt: "Infinity pool overlooking wilderness" },
  { src: "/images/gallery-hot-tub.jpg", alt: "Wood-fired hot tub under the stars" },
  { src: "/images/gallery-dining.jpg", alt: "Outdoor dining setup at dusk" },
  { src: "/images/experience-game-drive.jpg", alt: "Game drive at sunset" },
  { src: "/images/wildlife-zebra.jpg", alt: "Zebras on the reserve" },
]

export function Gallery() {
  const { ref, isInView } = useInView()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    )
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    )

  return (
    <>
      <section id="gallery" className="bg-background py-24 md:py-32">
        <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section Label */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
              Gallery
            </p>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
              Captured
              <span className="italic"> Moments</span>
            </h2>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((img, index) => (
              <button
                key={img.src}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden transition-all duration-700 ${
                  index === 0 || index === 5
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-[3/4]"
                } ${
                  isInView
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0"
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : "0ms",
                }}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#1a1610]/0 transition-colors duration-500 group-hover:bg-[#1a1610]/30" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1a1610]/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute right-6 top-6 text-[#f5f0e8]/70 transition-colors hover:text-[#f5f0e8]"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-6 text-[#f5f0e8]/70 transition-colors hover:text-[#f5f0e8]"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-6 text-[#f5f0e8]/70 transition-colors hover:text-[#f5f0e8]"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
          <div
            className="relative h-[80vh] w-[90vw] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  )
}
