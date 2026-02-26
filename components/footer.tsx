import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Our Story", href: "/about" },
  { label: "The Villa", href: "/villa" },
  { label: "Experiences", href: "/experiences" },

]

export function Footer() {
  return (
    <footer className="bg-[#1a1610] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-serif text-xl tracking-widest text-[#f5f0e8]">
                Nama Sands
              </span>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#c9a96e]">
                Safari Reserve
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#f5f0e8]/50">
              An exclusive private villa retreat set within pristine South
              African wilderness. Where the wild meets refined luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#f5f0e8]/50 transition-colors duration-300 hover:text-[#c9a96e]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c9a96e]">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:ansomari@namasands.co.za"
                className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/50 transition-colors duration-300 hover:text-[#c9a96e]"
              >
                <Mail size={16} className="shrink-0" />
                ansomari@namasands.co.za


              </a>
              <a
                href="tel:+2783 2348606"
                className="inline-flex items-center gap-3 text-sm text-[#f5f0e8]/50 transition-colors duration-300 hover:text-[#c9a96e]"
              >
                <Phone size={16} className="shrink-0" />
                083 2348606
              </a>
              <span className="inline-flex items-start gap-3 text-sm text-[#f5f0e8]/50">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Western Cape, South Africa
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#f5f0e8]/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-[#f5f0e8]/30">
            &copy; {new Date().getFullYear()} Nama Sands Safari Reserve. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-[#f5f0e8]/30 transition-colors hover:text-[#c9a96e]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-[#f5f0e8]/30 transition-colors hover:text-[#c9a96e]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
