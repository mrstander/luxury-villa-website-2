"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { BookingSearchBlock } from "@/components/booking-search-block"

import {
    Flame,
    Wifi,
    Bath,
    ShowerHead,
    BedDouble,
    AirVent,
    CookingPot,
    Waves,
    Mountain,
    Eye,
    Sofa,
    Trees,
} from "lucide-react"

const heroImages = [
    "/images/villa/villa1.jpg",
    "/images/villa/villa2.jpg",
]

const galleryImages = [
    "/images/villa/villa3.jpg",
    "/images/villa/villa4.jpg",
    "/images/villa/villa5.jpg",
    "/images/villa/villa6.jpg",
    "/images/villa/villa7.jpg",
    "/images/villa/villa8.jpg",
]

const leftFeatures = [
    { icon: CookingPot, label: "Inside braai" },
    { icon: Eye, label: "360° View from stoop / veranda" },
    { icon: Trees, label: "Fynbos surroundings" },
    { icon: Mountain, label: "Waterhole lookout point" },
    { icon: Sofa, label: "Daybed on stoop" },
    { icon: Waves, label: "Wood-fired Jacuzzi" },
    { icon: Waves, label: "Wood-fired splash pool" },
]

const rightFeatures = [
    { icon: Flame, label: "Bonfire boma" },
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: ShowerHead, label: "3 Showers & 1 Bath" },
    { icon: Bath, label: "3 En-suite bedrooms" },
    { icon: AirVent, label: "Aircon throughout the villa" },
    { icon: CookingPot, label: "Fully equipped kitchen" },
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
                </div>
            </section>

            <BookingSearchBlock />

            {/* ================= INTRO ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16">
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
                            href="/images/rate.jpeg"
                            className="inline-flex items-center justify-center border border-black/10 px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:bg-[#c9a96e] hover:border-[#c9a96e] hover:text-[#2a2318]"
                        >
                            View Rate Card
                        </Link>
                    </div>

                    <div className="relative h-[500px] rounded-[5px] overflow-hidden">
                        <Image
                            src="/images/villa/villa-bath.jpeg"
                            alt="Villa Deck View"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </section>

            {/* ================= FACILITIES ================= */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h3 className="font-serif italic text-3xl md:text-4xl mb-4">
                        Facilities
                    </h3>
                    <div className="w-16 h-[1px] bg-black/30 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">

                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                        {leftFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <Icon className="w-5 h-5 text-black" strokeWidth={1.2} />
                                    <span className="tracking-wide text-[15px] text-black/80">
                                        {feature.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-6">
                        {rightFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <Icon className="w-5 h-5 text-black" strokeWidth={1.2} />
                                    <span className="tracking-wide text-[15px] text-black/80">
                                        {feature.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>

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
                            <div
                                key={index}
                                className="relative h-[300px] overflow-hidden rounded-[5px]"
                            >
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

        </main>
    )
}