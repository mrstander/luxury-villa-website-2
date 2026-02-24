import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Experiences | Nama Sands",
    description: "Immersive journeys across Africa's most extraordinary landscapes.",
}

const experiences = [
    {
        title: "Game Drives",
        description:
            "Experience the thrill of a safari game drive with our expert guides. Encounter zebra, giraffe, eland, wildebeest and more across vast open landscapes.",
        image: "/images/game.jpg",
        guests: "4 Guests",
        duration: "2 Hours",
        type: "Private",
        price: "From R100.00",
        link: "/contact",
    },
    {
        title: "Botswana: Okavango Delta Expedition",
        description:
            "Experience Kenya's stunning landscapes with the Maasai community. Hike scenic trails and immerse yourself in rich traditions.",
        image: "/images/fire.jpg",
        guests: "4 Guests",
        duration: "12 Days",
        type: "Private",
        price: "From R100.00",
        link: "/contact",
    },
]

export default function ExperiencesPage() {
    return (
        <main className="bg-[#f5f0e8] text-[#1e1e1e]">
            {/* ================= HERO ================= */}
            <section className="relative h-[100vh] min-h-[450px] pt-24">
                <Image
                    src="/images/tab.jpg"
                    alt="Panoramic view of African landscapes"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
                        Our Experiences
                    </p>
                    <h1 className="font-serif text-4xl font-light md:text-6xl lg:text-7xl">
                        Immersive <br></br><span className="italic">Journeys</span>
                    </h1>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Page Heading */}
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl italic font-light text-black/80">
                            Extraordinary Landscapes
                        </h2>
                        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                            Immersive journeys across Africa’s most extraordinary landscapes.
                        </p>
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-20">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative h-[70vh] md:h-[80vh] rounded-[5px] overflow-hidden shadow-xl"
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
                                            className="inline-block border border-white px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-white hover:text-black"
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
        </main>
    )
}