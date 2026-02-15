"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const villas = [
  {
    name: "Cottage",
    tagline:
      "Breathtaking views, secluded accommodation & private game viewing.",
    image: "/images/villa/cottage.png",
    link: "#booking",
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      id="villa"
      ref={sectionRef}
      className="relative bg-[#f5f0e8] py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {villas.map((villa, index) => (
              <div
                key={villa.name}
                className="relative flex-[0_0_80%] pl-4 md:flex-[0_0_70%] lg:flex-[0_0_60%]"
              >
                <div
                  className={`relative aspect-[16/10] md:aspect-[21/9] overflow-hidden transition-all duration-1000 ease-out ${isInView
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                    }`}
                >
                  <Image
                    src={villa.image}
                    alt={`${villa.name} Villa`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
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
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white transition disabled:opacity-0"
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 stroke-[1px]" />
        </button>

        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white transition disabled:opacity-0"
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12 stroke-[1px]" />
        </button>
      </div>
    </section>
  )
}
