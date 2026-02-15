"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, ExternalLink } from "lucide-react"

export function BookingCTA() {
  const { ref, isInView } = useInView()

  return (
    <section id="booking" className="bg-[#2a2318] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <div
          className={`transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <Calendar className="mx-auto mb-6 h-10 w-10 text-[#c9a96e]" />
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
            Reserve Your Stay
          </p>
          <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl lg:text-6xl">
            Begin Your
            <span className="italic"> Journey</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#f5f0e8]/70">
            Check availability and secure your private retreat. We partner with
            Nightsbridge to offer seamless booking across all major platforms
            including Airbnb and Booking.com.
          </p>

          {/* Booking Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://site.nightsbridge.com/"
              className="inline-flex items-center gap-2 bg-[#c9a96e] px-8 py-4 text-xs uppercase tracking-[0.25em] text-[#2a2318] transition-all duration-300 hover:bg-[#d4b87d]"
            >
              Check Availability
              <ExternalLink size={14} />
            </a>

          </div>

          <p className="mt-6 text-xs text-[#f5f0e8]/40">
            Powered by Nightsbridge. Secure payment gateway for your peace of mind.
          </p>
        </div>
      </div>
    </section>
  )
}
