"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

const heroImages = [
    "https://images.unsplash.com/photo-1709403740053-47b84630aff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729659701064-1262d34aaba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

const galleryImages = [
    "https://plus.unsplash.com/premium_photo-1670591396438-d3c517977c3b?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586782450797-08574589418c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

]

const features = [
    "Inside braai",
    "360° View from stoop / veranda",
    "Fynbos surroundings",
    "Waterhole lookout point",
    "Free Wi-Fi",
    "3 Showers & 1 Bath",
    "Daybed on stoop",
    "3 En-suite bedrooms",
    "Aircon throughout the villa",
    "Fully equipped kitchen",
    "Wood-fired Jacuzzi",
    "Wood-fired splash pool",
    "Bonfire boma",
]

export default function VillaPage() {
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="bg-[#f3efe8] text-[#1e1e1e]">

            {/* ================= HERO ================= */}
            <section className="relative h-screen w-full overflow-hidden">
                {heroImages.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt="Luxury Villa"
                        fill
                        priority={index === 0}
                        className={`object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-6 opacity-80">
                        Exclusive Safari Escape
                    </p>

                    <h1 className="font-serif italic text-5xl md:text-7xl mb-6">
                        The Villa
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 mb-10">
                        Refined luxury immersed in fynbos landscapes and panoramic valley views.
                    </p>

                    <Link
                        href="https://site.nightsbridge.com/"
                        className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Book Now
                    </Link>
                </div>
            </section>

            {/* ================= INTRO SECTION ================= */}
            <section className="max-w-6xl mx-auto px-6 py-28 md:py-36">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <p className="uppercase tracking-[0.3em] text-xs mb-6 text-black/60">
                            The Experience
                        </p>

                        <h2 className="font-serif italic text-4xl md:text-5xl mb-8">
                            Stylish Seclusion
                        </h2>

                        <p className="text-lg leading-relaxed text-black/70 mb-8">
                            Designed for barefoot luxury, The Villa blends seamlessly
                            into its natural surroundings. Expansive decks, open-plan
                            interiors and panoramic views create a sanctuary immersed
                            in wilderness.
                        </p>

                        <Link
                            href="https://site.nightsbridge.com/"
                            className="border border-black px-8 py-3 uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Reserve Your Stay
                        </Link>
                    </div>

                    <div className="relative h-[500px]">
                        <Image
                            src="/images/villa/feature.jpg"
                            alt="Villa Deck View"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
                <div className="text-center mb-16">
                    <h3 className="font-serif italic text-3xl md:text-4xl mb-4">
                        Facilities
                    </h3>
                    <div className="w-16 h-[1px] bg-black/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-base">
                    {features.map((feature, index) => (
                        <div key={index} className="border-b border-black/20 pb-4">
                            {feature}
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="bg-white py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-16">
                        <h3 className="font-serif italic text-3xl md:text-4xl mb-4">
                            Gallery
                        </h3>
                        <div className="w-16 h-[1px] bg-black/30 mx-auto" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="relative h-[300px] overflow-hidden">
                                <Image
                                    src={src}
                                    alt="Villa Gallery"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
                <Image
                    src="/images/villa/cta-bg.jpg"
                    alt="Luxury Villa View"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative px-6">
                    <h2 className="font-serif italic text-4xl md:text-5xl mb-6">
                        Pristine Pocket of Paradise
                    </h2>

                    <p className="max-w-xl mx-auto mb-10 opacity-90">
                        Escape into serenity and experience barefoot luxury surrounded by untouched wilderness.
                    </p>

                    <Link
                        href="https://site.nightsbridge.com/"
                        className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300"
                    >
                        Book Your Stay
                    </Link>
                </div>
            </section>

        </main>
    )
}
