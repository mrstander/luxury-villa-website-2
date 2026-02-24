"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"


export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image (video placeholder) */}
      {/* Background Video */}
      {/* Background Video (YouTube) */}
      <div className="absolute inset-0 size-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/3cXrPv-adi0?autoplay=1&mute=1&loop=1&playlist=3cXrPv-adi0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          className="absolute inset-x-0 top-1/2 min-h-full min-w-full -translate-y-1/2 pointer-events-none aspect-video scale-110 lg:scale-[1.3]"
          allow="autoplay; fullscreen"
          title="Hero Video"
        />
        <div className="absolute inset-0 bg-[#1a1610]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Decorative line */}
        <div
          className={`mb-8 h-16 w-px bg-[#c9a96e]/60 transition-all duration-1000 ${isLoaded ? "opacity-100" : "h-0 opacity-0"
            }`}
        />

        <p
          className={`mb-4 text-xs uppercase tracking-[0.5em] text-[#c9a96e] transition-all delay-300 duration-1000 ${isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
            }`}
        >
          An Exclusive Retreat
        </p>

        <h1
          className={`font-serif text-5xl font-light leading-tight tracking-wide text-[#f5f0e8] transition-all delay-500 duration-1000 sm:text-6xl md:text-7xl lg:text-8xl ${isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
            }`}
        >
          <span className="block text-balance">Wild Horizons.</span>
          <span className="block italic text-[#c9a96e]">Private Luxury.</span>
        </h1>

        <p
          className={`mt-6 max-w-lg text-sm leading-relaxed tracking-wide text-[#f5f0e8]/70 transition-all delay-700 duration-1000 md:text-base ${isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
            }`}
        >
          Where untamed wilderness meets refined elegance. Your private sanctuary
          awaits.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col items-center gap-4 transition-all delay-[900ms] duration-1000 sm:flex-row ${isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
            }`}
        >
          <a
            href="/villa"
            className="bg-[#c9a96e] px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#2a2318] transition-all duration-300 hover:bg-[#d4b87d]"
          >
            Check Availability
          </a>
          <a
            href="/about"
            className="border border-[#f5f0e8]/30 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[#f5f0e8] transition-all duration-300 hover:border-[#f5f0e8]/60"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#story"
          className="flex animate-bounce flex-col items-center gap-2 text-[#f5f0e8]/50 transition-colors hover:text-[#c9a96e]"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  )
}
