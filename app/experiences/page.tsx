"use client"

import Image from "next/image"
import Link from "next/link"

const experiences = [
    {
        title: "Namibia: Skeleton Coast and Dunes Expedition",
        description:
            "Journey through Namibia's Skeleton Coast and towering dunes, where the Atlantic's rugged shores meet vast desert horizons.",
        image: "/images/tab.jpg",
        guests: "4 Guests",
        duration: "8 Days",
        type: "Private",
        price: "From $3,200",
        link: "/experiences/namibia",
    },
    {
        title: "Botswana: Okavango Delta Expedition",
        description:
            "Experience Kenya's stunning landscapes with the Maasai community. Hike scenic trails and immerse yourself in rich traditions.",
        image: "/images/fire.jpg",
        guests: "4 Guests",
        duration: "12 Days",
        type: "Private",
        price: "From $4,100",
        link: "/experiences/botswana",
    },
]

export default function ExperiencesPage() {
    return (
        <section className="bg-[#f5f0e8] py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-6xl italic font-light">
                        Our Experiences
                    </h1>
                    <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                        Immersive journeys across Africa’s most extraordinary landscapes.
                    </p>
                </div>

                {/* Hero Banners */}
                <div className="space-y-20">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-xl"
                        >
                            {/* Image */}
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="max-w-xl px-10 md:px-16 text-white">
                                    <h2 className="font-serif text-3xl md:text-5xl italic font-light leading-tight mb-6">
                                        {exp.title}
                                    </h2>

                                    <p className="mb-6 opacity-90">
                                        {exp.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap gap-6 text-sm uppercase tracking-widest mb-6 opacity-80">
                                        <span>{exp.guests}</span>
                                        <span>{exp.duration}</span>
                                        <span>{exp.type}</span>
                                        <span>{exp.price}</span>
                                    </div>

                                    <Link
                                        href={exp.link}
                                        className="inline-block bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-3 text-xs uppercase tracking-[0.3em] rounded-full"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}