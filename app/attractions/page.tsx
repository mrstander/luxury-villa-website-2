import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Local Attractions | Nama Sands",
    description: "Explore the beauty of the West Coast. Discover local attractions near Nama Sands, from National Parks to historic fishing villages.",
}

const attractions = [
    {
        title: "Darling (wine farms, local breweries, markets)",

        image: "/images/darling.jpeg",
        location: "https://www.google.com/maps/place/West+Coast+National+Park",
    },
    {
        title: "Langebaan Lagoon & Saldanha Bay",

        image: "/images/langebaan.jpeg",
        location: "https://www.google.com/maps/place/Paternoster",
    },
    {
        title: "Paternoster & West Coast coastlines",

        image: "/images/paternoster.jpeg",
        location: "https://www.khwattu.org/",
    },
    {
        title: "Wine Routes - Darling /Riebeeck/Swartland and West Coast region",

        image: "/images/winefarm.jpeg",
        location: "https://www.khwattu.org/",
    },
]

export default function AttractionsPage() {
    return (
        <main className="bg-[#f5f0e8] text-[#1e1e1e]">
            {/* ================= HERO ================= */}
            <section className="relative h-[100vh] min-h-[450px] pt-24">
                <Image
                    src="/images/local.jpeg"
                    alt="Scenic view of the West Coast landscapes"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
                        Explore the Area
                    </p>
                    <h1 className="font-serif text-4xl font-light md:text-6xl lg:text-7xl">
                        Local <br></br><span className="italic">Attractions</span>
                    </h1>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-5xl italic font-light text-black/80 mb-6">
                            The Best of the West Coast
                        </h2>
                        <p className="text-neutral-600 text-lg">
                            Nama Sands serves as the perfect base for exploring the charm and character of the West Coast. From the wildflower displays of the West Coast National Park to the turquoise waters of Langebaan Lagoon, quaint seaside villages, local markets, art galleries and fresh seafood spots are all within easy reach. It’s an ideal starting point for discovering the region’s natural beauty, rich heritage and laid-back coastal culture — all just a short drive from your doorstep.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {attractions.map((spot, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col bg-white overflow-hidden rounded-[5px] shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={spot.image}
                                        alt={spot.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-8">
                                    <h3 className="font-serif text-2xl mb-4 italic text-black/90">
                                        {spot.title}
                                    </h3>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-[#2a2318] py-20 text-center text-white">
                <div className="mx-auto max-w-3xl px-6 lg:px-10">
                    <h2 className="font-serif text-3xl font-light italic mb-8">
                        Your journey begins here.
                    </h2>
                    <Link
                        href="/villa"
                        className="bg-[#c9a96e] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#2a2318] transition-all duration-300 hover:bg-[#b8963e]"
                    >
                        Stay with us
                    </Link>
                </div>
            </section>
        </main>
    )
}
