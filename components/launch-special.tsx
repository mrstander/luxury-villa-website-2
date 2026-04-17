"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { Compass, Sparkles, ShoppingBasket } from "lucide-react"

export function LaunchSpecial() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#2a2318]">
      {/* Background Image with Parallax-like feel */}
      <Image
        src="/images/Hero.jpg"
        alt="Launch special background"
        fill
        className="object-cover opacity-30"
        priority={false}
      />

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2318]/90 via-[#2a2318]/60 to-[#2a2318]/90" />

      {/* Content */}
      <div
        ref={ref}
        className="relative mx-auto max-w-6xl px-4 lg:px-8"
      >
        <div
          className={`text-center transition-all duration-1000 ${isInView
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
            }`}
        >
          <div className="mb-0 flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-[#c9a96e]/40" />
            <p className="text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
              Exclusive Offer
            </p>
            <div className="h-px w-8 bg-[#c9a96e]/40" />
          </div>

          <h2 className="mb-16 mt-6 font-serif text-4xl font-light text-[#f5f0e8] md:text-6xl lg:text-7xl">
            Experience Luxury
          </h2>

          {/* Pricing Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl mx-auto mb-20">
            {/* Weekdays Card */}
            <div className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-10 transition-all duration-500 hover:border-[#c9a96e]/50 hover:bg-white/10">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#c9a96e]/10 blur-2xl group-hover:bg-[#c9a96e]/20" />
              <p className="mb-4 text-[10px] uppercase tracking-widest text-[#c9a96e]/80">Weekday Bookings</p>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl text-[#f5f0e8]">R9,200</span>
                <span className="mt-2 text-xs uppercase tracking-tighter text-[#f5f0e8]/40">Per Night</span>
              </div>
              <p className="mt-6 text-[10px] italic text-[#f5f0e8]/30 tracking-widest uppercase">Monday — Thursday</p>
            </div>

            {/* Weekends Card */}
            <div className="group relative overflow-hidden bg-[#c9a96e]/5 backdrop-blur-md border border-[#c9a96e]/20 p-10 transition-all duration-500 hover:border-[#c9a96e]/50 hover:bg-[#c9a96e]/10">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#c9a96e]/20 blur-2xl group-hover:bg-[#c9a96e]/30" />
              <p className="mb-4 text-[10px] uppercase tracking-widest text-[#c9a96e]">Weekend Stays</p>
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl text-[#f5f0e8]">R11,500</span>
                <span className="mt-2 text-xs uppercase tracking-tighter text-[#f5f0e8]/40">Per Night</span>
              </div>
              <p className="mt-6 text-[10px] italic text-[#f5f0e8]/30 tracking-widest uppercase">Friday — Sunday</p>
            </div>
          </div>

          {/* Guest Experiences Section */}
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
            <h3 className="mb-12 font-serif text-2xl font-light text-[#f5f0e8]">
              Additional Services available on request.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
              {[
                {
                  icon: <Compass className="w-7 h-7" />,
                  title: "Game Drives",
                  desc: "Explore the wild"
                },
                {
                  icon: <Sparkles className="w-7 h-7" />,
                  title: "Massages",
                  desc: "Rejuvenating wellness"
                },
                {
                  icon: <ShoppingBasket className="w-7 h-7" />,
                  title: "Food Baskets",
                  desc: "Custom delicacies"
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-[#c9a96e] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#c9a96e]/10 group-hover:border-[#c9a96e]/30">
                    {item.icon}
                  </div>
                  <h4 className="text-sm uppercase tracking-widest text-[#f5f0e8] mb-1">{item.title}</h4>
                  <p className="text-[10px] text-[#f5f0e8]/40 uppercase tracking-tighter">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm italic text-[#f5f0e8]/60 leading-relaxed max-w-2xl mx-auto">
              "Upon arrival, we are happy to help book any guest experience, <br className="hidden md:block" />
              including game drives, massages or custom food baskets"
            </p>
          </div>

          {/* Final CTA */}
          <div className="mt-20 flex flex-col items-center gap-8">
            <a
              href="/villa"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-[#c9a96e] px-16 py-6 text-[10px] font-bold uppercase tracking-[0.4em] text-[#2a2318] transition-all duration-700 hover:tracking-[0.5em] hover:bg-[#b8985d]"
            >
              <span className="relative z-10">Book This Special</span>
            </a>
            <p className="text-[10px] uppercase tracking-widest text-[#f5f0e8]/30">
              * Valid for limited bookings | 3 Nights Minimum Stay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}