"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Our Story", href: "about" },
  { label: "The Villa", href: "villa" },
  { label: "Experiences", href: "#experiences" },

]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#2a2318]/95 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span className="font-serif text-xl tracking-widest text-[#f5f0e8] lg:text-2xl">
              WILD HORIZONS
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#c9a96e]">
              Private Luxury
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-[#f5f0e8]/80 transition-colors duration-300 hover:text-[#c9a96e]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://site.nightsbridge.com/"
              className="hidden border border-[#c9a96e] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#c9a96e] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#2a2318] sm:inline-block"
            >
              Book Now
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#f5f0e8] lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#2a2318]/98 backdrop-blur-md transition-all duration-500 lg:hidden ${isMobileMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-widest text-[#f5f0e8]/80 transition-colors duration-300 hover:text-[#c9a96e]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 border border-[#c9a96e] px-8 py-3 text-sm uppercase tracking-[0.2em] text-[#c9a96e] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#2a2318]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  )
}
