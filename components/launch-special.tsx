"use client"

import { useInView } from "@/hooks/use-in-view"

export function LaunchSpecial() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-[#c9a96e] py-16 md:py-20">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs uppercase tracking-[0.4em] text-[#2a2318]/60">
            Limited Time Offer
          </p>
          <h2 className="font-serif text-3xl font-light text-[#2a2318] md:text-4xl lg:text-5xl">
            Launch Special
          </h2>
          <div className="mx-auto my-6 h-px w-16 bg-[#2a2318]/30" />
          <p className="mb-2 font-serif text-5xl font-light text-[#2a2318] md:text-6xl lg:text-7xl">
            R14,000
          </p>
          <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#2a2318]/70">
            per night
          </p>
          <p className="mb-8 text-sm text-[#2a2318]/60">
            Valid until end of March 2026
          </p>
          <a
            href="#booking"
            className="inline-block bg-[#2a2318] px-10 py-4 text-xs uppercase tracking-[0.25em] text-[#f5f0e8] transition-all duration-300 hover:bg-[#3d3424]"
          >
            Book This Special
          </a>
        </div>
      </div>
    </section>
  )
}
