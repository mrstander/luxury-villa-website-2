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
        {/* Container: Stacked on mobile (col), Row on desktop (row) */}
        <div className="mx-auto flex flex-col items-center justify-center gap-4 py-6 px-4 lg:h-[150px] lg:flex-row lg:justify-between lg:gap-0 lg:py-0 lg:px-10 max-w-7xl">

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <Link href="/" aria-label="Go to homepage" className="flex items-center justify-center">
            <Image
              src="/images/logo2.png"
              alt="Nama Sands Logo"
              width={100}
              height={70}
              className="object-contain w-[80px] lg:w-[90px] xl:w-[120px] cursor-pointer"
              priority
            />
          </Link>

          {/* Mobile Menu Button (Text based, below logo) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[11px] uppercase tracking-[0.4em] text-[#f5f0e8]/80 transition-colors hover:text-[#e6c97c]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] xl:text-sm uppercase tracking-wider text-[#f5f0e8]/90 transition-colors duration-300 hover:text-[#e6c97c] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/villa"
            className="hidden lg:inline-block border border-[#e6c97c] px-4 py-2 text-[11px] xl:text-sm uppercase tracking-wide text-[#e6c97c] rounded-md transition-all duration-300 hover:bg-[#e6c97c] hover:text-[#2a2318]"
          >
            Book Now
          </a>
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