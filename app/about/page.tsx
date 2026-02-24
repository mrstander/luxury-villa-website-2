import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

const images = [
  "/images/fire.jpg",
  "/images/tab.jpg",
  "/images/about.jpg",
  "/images/wine.jpg",
]

export const metadata: Metadata = {
  title: "Our Story | Nama Sands",
  description:
    "Discover the story behind Nama Sands — a vision rooted in conservation, responsibility, and a deep respect for the land.",
}

const wildlife = [
  "Eland",
  "Brindle-tailed Gnu",
  "Zebra",
  "Kudu",
  "Oryx",
  "Springbuck",
  "Fallow Deer",
  "Impala",
  "Steenbok",
  "Duiker",
  "Bontebok",
  "Water Buffalo",
  "Jacob Sheep",
  "Waterbuck",
  "Ostrich",
  "Caracal",
  "Jackal",
  "Badger",
  "Giraffe",
  "Golden Wildebeest",
  "Golden Gemsbok",
  "Copper & White Springbuck",
  "Black Springbuck",
  "Roan",
]

export default function AboutPage() {
  return (
    <main className="bg-[#f5f0e8] text-[#1e1e1e]">

      {/* ================= HERO ================= */}
      <section className="relative h-[100vh] min-h-[450px] pt-24">
        <Image
          src="/images/about.jpg"
          alt="Panoramic view of Nama Sands reserve landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
            Our Story
          </p>
          <h1 className="font-serif text-4xl font-light text-white md:text-6xl lg:text-7xl">
            The Story of <br /> <span className="italic">Nama Sands</span>
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="mb-10 font-serif text-3xl font-light md:text-4xl">
            <span className="italic">Nama Sands</span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
            Nama Sands was born from a vision — a vision rooted in conservation,
            responsibility, and a deep respect for the land.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
            In the early 17th century, overexploitation dramatically reduced
            wildlife populations across the Western Cape. Species that once
            roamed freely through these landscapes became scarce, and fragile
            ecosystems began to suffer.
          </p>

          <p className="text-lg leading-relaxed text-black/70 md:text-xl">
            In 1997, a dream began to take shape: to restore what had been lost,
            to reintroduce species to their natural habitat, and to create a
            sanctuary where fauna and flora could once again thrive in harmony.
            <br />
            Then, in 2013, the first farm was purchased — and the vision became reality.
          </p>
        </div>
      </section>

      {/* ================= IMAGE BREAK ================= */}
      <section className="py-16">
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee px-6 lg:px-10">
            {/* duplicate images for seamless loop */}
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="
                relative
                h-[260px]
                min-w-[75vw]
                md:h-[380px]
                md:min-w-[42vw]
                lg:min-w-[32vw]
                mr-6
                overflow-hidden
                rounded-[5px]
              "
              >
                <Image
                  src={src}
                  alt={`Nama Sands image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 32vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION & LAND ================= */}
      <section className="py-10 md:py-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <h2 className="mb-10 font-serif text-3xl font-light md:text-4xl">
            A Sanctuary on the <span className="italic">West Coast</span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
            Based in Hopefield, the oldest town on the West Coast, Nama Sands
            lies along the R27 between Malmesbury and Vredenburg — just over an
            hour from Cape Town in a malaria-free zone.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-black/70 md:text-xl">
            Spanning over 4,000 acres of diverse terrain — from forest and
            rolling dunes to Cape Fynbos and open plains — the land is both
            dramatic and restorative.
          </p>

          <p className="text-lg leading-relaxed text-black/70 md:text-xl">
            Conservation, breeding, and tourism exist in careful balance,
            allowing wildlife to flourish while guests experience the
            landscape through immersive and extended game drives.
          </p>
        </div>
      </section>

      {/* ================= WILDLIFE GRID ================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">

          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Wildlife <span className="italic">Reborn</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#c9a96e]" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 text-sm uppercase tracking-wide text-black/70">
            {wildlife.map((animal, index) => (
              <div
                key={index}
                className="border-b border-black/10 pb-3"
              >
                {animal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUOTE SECTION ================= */}
      <section className="bg-[#2a2318] py-24 md:py-32 text-center text-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-10 h-px w-16 bg-[#c9a96e] mx-auto" />
          <blockquote className="font-serif text-2xl font-light leading-relaxed md:text-3xl">
            “We believe that the land does not belong to us — we belong to the
            land. Our role is simply to be its custodians.”
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
            The Founders
          </p>
        </div>
      </section>

      {/* ================= FINAL MESSAGE ================= */}
      <section className="py-24 md:py-32 text-center">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-10 font-serif text-3xl font-light md:text-4xl">
            More Than a Game Farm
          </h2>

          <p className="mb-6 text-lg leading-relaxed text-black/70 md:text-xl">
            Nama Sands is more than a game farm.
          </p>

          <p className="text-lg leading-relaxed text-black/70 md:text-xl">
            It is a restoration story. A conservation commitment. And a place
            where the wild is given space to return, thrive, and be experienced
            with respect.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/villa"
              className="border border-[#c9a96e] px-8 py-3 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#2a2318]"
            >
              Explore the Villa
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
