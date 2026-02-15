"use client"


import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

export function OurStory() {
  const { ref, isInView } = useInView()

  return (
    <section id="story" className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Label */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
            Our Story
          </p>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            The Story of
            <span className="italic"> Nama Sands</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`transition-all delay-200 duration-1000 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            <div className="mb-8 h-px w-16 bg-[#c9a96e] mx-auto" />
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="text-4xl text-foreground md:text-5xl font-serif">N</span>
              ama Sands was born from a vision — a vision rooted in conservation,
              responsibility, and a deep respect for the land.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              In the early 17th century, overexploitation dramatically reduced
              wildlife numbers across the Western Cape. What once roamed freely
              through these landscapes became scarce, and ecosystems suffered.
              In 1997, a dream began to take shape: to restore what had been
              lost, to reintroduce species to their natural habitat, and to
              create a sanctuary where fauna and flora could thrive once more.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded by passionate conservationists who believed in the
              sustainable use of nature, Nama Sands became the embodiment of
              that dream. It took years to find the perfect landscape and the
              right partners who shared this commitment. Then, in 2013, the
              first farm was purchased — and the vision became reality.
            </p>
            <div className="mt-12 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border border-[#c9a96e] px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#2a2318]"
              >
                Read More
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
