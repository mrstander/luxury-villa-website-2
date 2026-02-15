"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const villas = [
  {
    name: "Cottage",
    tagline: "Breathtaking Views, Secluded Accommodation & Private Game Viewing.",
    image: "/images/villa/cottage.png",
    link: "#booking",
  },
  {
    name: "Manor",
    tagline: "Ultra-luxury shared living with panoramic savannah horizons.",
    image: "/images/villa/manor.png",
    link: "#booking",
  },
  {
    name: "Suite",
    tagline: "An intimate escape under the stars with private deck and fire pit.",
    image: "/images/villa/suite.png",
    link: "#booking",
  },
]

export function Villa() {
  const { ref: sectionRef, isInView } = useInView()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = React.useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="villa" className="bg-[#f5f0e8] py-24 overflow-hidden">
      <div ref={sectionRef} className="relative mx-auto max-w-[1400px]">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4">
            {villas.map((villa, index) => (
              <div
                key={index}
                className="relative flex-[0_0_80%] min-w-0 pl-4 md:flex-[0_0_70%] lg:flex-[0_0_60%]"
              >
                <div
                  className={`relative aspect-[16/10] md:aspect-[21/9] overflow-hidden transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                >
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                    <p className="text-[10px] md:text-sm uppercase tracking-[0.4em] mb-2 opacity-90">
                      THE
                    </p>
                    <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light italic mb-4">
                      {villa.name}
                    </h3>
                    <p className="max-w-md font-serif text-sm md:text-xl italic mb-8 leading-relaxed opacity-90">
                      {villa.tagline}
                    </p>
                    <a
                      href={villa.link}
                      className="border border-white px-6 py-2 md:px-10 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
                    >
                      VIEW THE {villa.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors disabled:opacity-0"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 stroke-[1px]" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors disabled:opacity-0"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12 stroke-[1px]" />
        </button>
      </div>
    </section>
  )
}
