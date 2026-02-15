"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Leaf, Droplets, Sun, TreePine } from "lucide-react"

const pillars = [
  {
    icon: Leaf,
    title: "Conservation",
    description: "Active programmes to protect and restore indigenous ecosystems and endangered species.",
  },
  {
    icon: Droplets,
    title: "Water Stewardship",
    description: "Responsible water management and natural filtration systems across the reserve.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar-powered infrastructure reducing our carbon footprint while maintaining luxury.",
  },
  {
    icon: TreePine,
    title: "Rewilding",
    description: "Transforming former farmland into thriving wilderness habitats for native species.",
  },
]

export function Sustainability() {
  const { ref, isInView } = useInView()

  return (
    <section id="sustainability" className="relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sustainability.jpg"
          alt="Pristine reserve landscape with rolling hills and indigenous vegetation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1a1610]/75" />
      </div>

      <div ref={ref} className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section Label */}
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
              Sustainability
            </p>
            <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl lg:text-6xl">
              Guardians of the
              <span className="italic"> Land</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#f5f0e8]/70">
              Our commitment to the environment, wildlife, and the landscape goes
              hand-in-hand with our promise of comfort, privacy, and unforgettable
              experiences. More information on our conservation efforts coming soon.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`border border-[#f5f0e8]/10 bg-[#1a1610]/40 p-8 backdrop-blur-sm transition-all duration-700 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  transitionDelay: isInView ? `${(index + 1) * 150}ms` : "0ms",
                }}
              >
                <pillar.icon className="mb-4 h-8 w-8 text-[#c9a96e]" />
                <h3 className="mb-3 font-serif text-xl text-[#f5f0e8]">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#f5f0e8]/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
