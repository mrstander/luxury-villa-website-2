"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export function Wildlife() {
  const { ref, isInView } = useInView()

  return (
    <section id="wildlife" className="relative overflow-hidden bg-[#2a2318] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Label */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
            Wildlife
          </p>
          <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl lg:text-6xl">
            A Home for the
            <span className="italic"> Wild</span>
          </h2>
        </div>

        {/* Large Feature Image */}
        <div
          className={`relative mb-16 aspect-[21/9] overflow-hidden transition-all delay-200 duration-1000 ${
            isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <Image
            src="/images/wildlife-zebra.jpg"
            alt="Zebras grazing on golden grasslands at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2318]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`transition-all delay-300 duration-1000 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-base leading-relaxed text-[#f5f0e8]/70 md:text-lg">
              The reserve is home to over 38 species of game and 129 species of
              birds, all thriving in a carefully managed ecosystem. From the
              majestic giraffe silhouetted against the sunset to zebra herds moving
              across the golden plains, every encounter here is authentic and
              unscripted.
            </p>
          </div>
          <div
            className={`transition-all delay-500 duration-1000 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-6 text-base leading-relaxed text-[#f5f0e8]/70 md:text-lg">
              Spot eland, kudu, red hartebeest, sable antelope, waterbuck, and
              bushbuck on guided game drives. The once-endangered bontebok now
              thrives here, while special bird species including the blue crane and
              black harrier grace the skies.
            </p>

            {/* Wildlife Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="border-t border-[#c9a96e]/30 pt-4">
                <p className="font-serif text-3xl text-[#c9a96e]">38+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/50">
                  Game Species
                </p>
              </div>
              <div className="border-t border-[#c9a96e]/30 pt-4">
                <p className="font-serif text-3xl text-[#c9a96e]">129+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/50">
                  Bird Species
                </p>
              </div>
              <div className="border-t border-[#c9a96e]/30 pt-4">
                <p className="font-serif text-3xl text-[#c9a96e]">2,300</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#f5f0e8]/50">
                  Hectares
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Image */}
        <div
          className={`relative mt-16 aspect-[16/9] overflow-hidden lg:aspect-[21/9] transition-all delay-600 duration-1000 ${
            isInView ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <Image
            src="/images/wildlife-giraffe.jpg"
            alt="Giraffe walking through the bushveld at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}
