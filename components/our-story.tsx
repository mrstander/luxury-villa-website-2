"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

export function OurStory() {
  const { ref, isInView } = useInView()

  return (

    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">

        {/* Section Label */}
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
          Our Story
        </p>

        {/* Heading */}
        <h2 className="mb-10 font-serif text-4xl font-light md:text-5xl lg:text-6xl">
          The Story of <span className="italic">Nama Sands</span>
        </h2>

        {/* Content */}
        <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
          Nama Sands was born from a vision — a vision rooted in conservation,
          responsibility, and a deep respect for the land.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
          In the early 17th century, overexploitation dramatically reduced
          wildlife numbers across the Western Cape, changing the landscape and
          ecosystems forever.
        </p>

        <p className="text-lg leading-relaxed text-black/70 md:text-xl">
          Founded by passionate conservationists who believed in sustainable
          stewardship of the land, Nama Sands became a sanctuary where wildlife
          could return, thrive, and coexist with people in harmony.
        </p>

      </div>
    </section>
  )
}