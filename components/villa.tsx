"use client"

import * as React from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const villas = [
  {
    name: "The Villa",
    tagline:
      "Breathtaking views, secluded accommodation & private game viewing.",
    image: "/images/villa/cottage.png",
    link: "/villa",
  },
  {
    name: "Manor",
    tagline:
      "Ultra-luxury shared living with panoramic savannah horizons.",
    image: "/images/villa/manor.png",
    link: "#booking",
  },
  {
    name: "Suite",
    tagline:
      "An intimate escape under the stars with private deck and fire pit.",
    image: "/images/villa/suite.png",
    link: "#booking",
  },
]

export function Villa() {
  const { ref: sectionRef, isInView } = useInView()

  // Just display the first villa
  const villa = villas[0]

  return (
    <section
      id="villa"
      ref={sectionRef}
      className="relative w-full bg-[#f5f0e8] py-24 overflow-hidden"
    >
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src={villa.image}
          alt={`${villa.name} Villa`}
          fill
          className={`object-cover transition-all duration-1000 ease-out ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] mb-3 opacity-80">
            THE
          </p>

          <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light italic mb-6">
            {villa.name}
          </h3>

          <p className="max-w-md font-serif text-sm md:text-xl italic mb-10 leading-relaxed opacity-90">
            {villa.tagline}
          </p>

          <a
            href={villa.link}
            className="border border-white px-8 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
          >
            View the {villa.name}
          </a>
        </div>
      </div>
    </section>
  )
}
