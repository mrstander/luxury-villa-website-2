"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Our Story", href: "/about" },
  { label: "The Villa", href: "/villa" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Attractions", href: "/attractions" },
  { label: "Contact Us", href: "/contact" },
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
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#2a2318]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
          }`}
      >
        {/* ✅ Mobile 65px | Desktop 120px (increased for bigger logo) */}
        <div className="mx-auto flex h-[65px] lg:h-[120px] max-w-7xl items-center px-4 lg:px-10">

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-end gap-8 pr-12">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-[#f5f0e8]/90 transition-colors duration-300 hover:text-[#e6c97c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo - Centered */}
          <div className="flex flex-1 lg:flex-none justify-center">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/images/logo.png"
                alt="Wild Horizons Logo"
                width={200}
                height={100}
                className="object-contain w-[140px] lg:w-[280px] cursor-pointer transition-all duration-500"
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Nav + CTA */}
          <div className="hidden lg:flex flex-1 items-center gap-8 pl-12">
            <nav className="flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-wider text-[#f5f0e8]/90 transition-colors duration-300 hover:text-[#e6c97c]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="/villa"
              className="border border-[#e6c97c] px-5 py-2 text-sm uppercase tracking-wide text-[#e6c97c] rounded-md transition-all duration-300 hover:bg-[#e6c97c] hover:text-[#2a2318]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle (Right side on mobile) */}
          <div className="flex lg:hidden flex-1 justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#f5f0e8] w-[40px] h-[40px] flex items-center justify-center rounded-md hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#2a2318]/95 backdrop-blur-lg transition-all duration-500 lg:hidden ${isMobileMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl tracking-wide text-[#f5f0e8]/90 transition-colors duration-300 hover:text-[#e6c97c]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/villa"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 border border-[#e6c97c] px-10 py-3 text-sm uppercase tracking-wide text-[#e6c97c] rounded-md transition-all duration-300 hover:bg-[#e6c97c] hover:text-[#2a2318]"
          >
            Book Now
          </a>
        </nav>
      </div>
    </>
  )
}