import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Experiences | Nama Sands",
    description: "Immersive journeys across Africa's most immersive activities available on request.",
}

const experiences = [
    {
        title: "Game Drives",
        description:
            "Experience the thrill of a game drive with our experienced guide. Encounter zebra, giraffe, eland, wildebeest and more across vast open fynbos landscapes.",
        image: "/images/gamedrive.jpeg",
    },
    {
        title: "Spa Treatments",
        description:
            "Enjoy private spa treatments in the comfort of your own suite, where relaxation comes to you. From restorative massages to tailored wellness treatments, restore body and mind in complete privacy and effortless luxury",
        image: "/images/spa.jpeg",
    },
    {
        title: "Private chef",
        description:
            "Enjoy the luxury of a private chef crafting personalised culinary experiences in the comfort of your villa. From leisurely breakfasts to beautifully prepared dinners. ",
        image: "/images/chef.jpeg",
    },
    {
        title: "Trail Walk",
        description:
            "Explore the rich fauna and flora on guided trail walks led by our experienced guides. From intricate plant life to wildlife tracks and hidden natural wonders, each walk offers a deeper understanding of the ecosystem. It’s a slow, immersive experience that connects you intimately with the land and its living tapestry.",
        image: "/images/trail2.jpeg",
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
                        Slow Adventure
                    </h1>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-5xl italic font-light text-black/80 mb-6">
                            Our Experiences
                        </h2>
                        <p className="text-neutral-600 text-lg">
                            Immersive journeys across Africa&apos;s most extraordinary landscapes.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col bg-white overflow-hidden rounded-[5px] shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-8">
                                    <h3 className="font-serif text-2xl mb-4 italic text-black/90">
                                        {exp.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-2 flex-1 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}