import Image from "next/image"
import type { Metadata } from "next"
import { Mail, Phone, MapPin, Navigation } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us | Nama Sands",
    description:
        "Get in touch with Nama Sands. Find our contact details and directions from Cape Town to our private luxury villa and conservation reserve.",
}

export default function ContactPage() {
    return (
        <main className="bg-[#f5f0e8] text-[#1e1e1e]">
            {/* ================= HERO ================= */}
            <section className="relative h-[60vh] min-h-[400px] pt-24">
                <Image
                    src="/images/walk.jpg"
                    alt="Landscape view of Nama Sands"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
                        Get In Touch
                    </p>
                    <h1 className="font-serif text-4xl font-light text-white md:text-6xl">
                        Contact <span className="italic">Nama Sands</span>
                    </h1>
                </div>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Details */}
                        <div className="space-y-12 lg:col-span-1">
                            <div>
                                <h2 className="mb-8 font-serif text-3xl font-light italic">
                                    Reach Out
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e]">
                                            <Mail size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-black/40">Email</p>
                                            <a href="mailto:bookings@namasands.com" className="text-lg hover:text-[#c9a96e] transition-colors">
                                                bookings@namasands.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e]">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-black/40">Phone</p>
                                            <a href="tel:+27821234567" className="text-lg hover:text-[#c9a96e] transition-colors">
                                                +27 (0) 82 123 4567
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/10 text-[#c9a96e]">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-black/40">Address</p>
                                            <p className="text-lg">
                                                R27 Road, Hopefield<br />
                                                Western Cape, South Africa
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Directions */}
                        <div className="lg:col-span-2">
                            <div className="rounded-[5px] bg-white p-8 shadow-sm md:p-12">
                                <div className="mb-8 flex items-center gap-3">
                                    <Navigation className="text-[#c9a96e]" size={24} />
                                    <h2 className="font-serif text-3xl font-light italic">
                                        How to find us
                                    </h2>
                                </div>

                                <div className="space-y-6 text-black/70">
                                    <p className="font-bold text-black">Directions from Cape Town (Approx. 1h 15m):</p>
                                    <ol className="list-decimal space-y-4 pl-5">
                                        <li>Get on <strong>N1</strong> in Foreshore from Christiaan Barnard St/M181.</li>
                                        <li>Follow the <strong>R27 (West Coast Road)</strong> heading North towards Velddrif/Vredenburg.</li>
                                        <li>Continue straight on the <strong>R27</strong> for approximately 110km.</li>
                                        <li>Look for the <strong>Nama Sands</strong> entrance sign on your right, shortly after the Hopefield turn-off.</li>
                                        <li>Follow the private gravel road for 2km to reach the Villa reception.</li>
                                    </ol>
                                    <div className="mt-8 rounded-[5px] bg-[#fcf9f4] p-6 text-sm italic border-l-2 border-[#c9a96e]">
                                        Note: The reserve is located in a malaria-free zone. We recommend a vehicle with slightly higher ground clearance for the internal gravel roads, although it is accessible by standard sedan.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MAP ================= */}
            <section className="h-[500px] w-full bg-neutral-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53648.749449852234!2d18.3183863!3d-33.0076843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc7346fb657685%3A0x2a065792d9d15c7d!2sHopefield%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1711234567890!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map to Nama Sands"
                ></iframe>
            </section>
        </main>
    )
}
