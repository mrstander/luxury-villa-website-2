"use client"

import { useState } from "react"
import Image from "next/image"




const images = [
    "/images/local.jpeg",
    "/images/chef.jpeg",
    "/images/about.jpg",
    "/images/hero.jpg",
    "/images/villa.jpg",
    "/images/wine.jpg",
    "/images/walk.jpg",
    "/images/spa.jpeg",
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <main className="bg-[#f5f0e8] text-[#1e1e1e]">

            {/* ================= HERO ================= */}
            <section className="relative h-[100vh] min-h-[450px] pt-24">
                <Image
                    src="/images/fire.jpg"
                    alt="Nama Sands Gallery"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
                        Our Gallery
                    </p>
                    <h1 className="font-serif text-4xl font-light md:text-6xl lg:text-7xl">
                        A Visual <br />
                        <span className="italic">Journey</span>
                    </h1>
                </div>
            </section>

            {/* ================= INTRO ================= */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-5xl italic font-light text-black/80 mb-6">
                        Moments in Time
                    </h2>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                        Discover curated moments from Nama Sands — where architecture,
                        wilderness and experience merge into a timeless visual narrative.
                    </p>
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative aspect-square overflow-hidden cursor-pointer group"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= MODAL ================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Selected gallery image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </main>
    )
}