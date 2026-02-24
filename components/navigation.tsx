"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { label: "Our Story", href: "/about" },
  { label: "The Villa", href: "/villa" },
  { label: "Experiences", href: "/experiences" },
  { label: "Attractions", href: "/attractions" },
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
        {/* ✅ Mobile 55px | Desktop 70px */}
        <div className="mx-auto flex h-[55px] lg:h-[80px] max-w-7xl items-center justify-between px-4 lg:px-10">

          {/* Logo */}
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/logo.png"
              alt="Wild Horizons Logo"
              width={160}
              height={80}
              className="object-contain lg:w-[220px] cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-[#f5f0e8]/90 transition-colors duration-300 hover:text-[#e6c97c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="/villa"
              className="hidden border border-[#e6c97c] px-5 py-2 text-sm uppercase tracking-wide text-[#e6c97c] rounded-md transition-all duration-300 hover:bg-[#e6c97c] hover:text-[#2a2318] sm:inline-block"
            >
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#f5f0e8] lg:hidden w-[40px] h-[40px] flex items-center justify-center rounded-md hover:bg-white/10 transition"
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