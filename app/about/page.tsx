import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Story | Nama Sands",
  description:
    "Discover the story behind Nama Sands — a vision rooted in conservation, responsibility, and a deep respect for the land.",
}

export default function AboutPage() {
  return (
    <main className="bg-background">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] min-h-[400px] pt-24">
        <Image
          src="/images/about-landscape.jpg"
          alt="Panoramic view of Nama Sands reserve landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1610]/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#c9a96e]">
            Our Story
          </p>
          <h1 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-6xl lg:text-7xl">
            The Story of <span className="italic">Nama Sands</span>
          </h1>
        </div>
      </section>

      {/* ================= INTRO TEXT ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-10 h-px w-16 bg-[#c9a96e]" />

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <span className="float-left mr-4 mt-1 font-serif text-7xl leading-[0.8] text-foreground md:text-8xl">
              N
            </span>
            ama Sands was born from a vision — a vision rooted in conservation,
            responsibility, and a deep respect for the land.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            In the early 17th century, overexploitation dramatically reduced
            wildlife numbers across the Western Cape. What once roamed freely
            through these landscapes became scarce, and ecosystems suffered. In
            1997, a dream began to take shape: to restore what had been lost, to
            reintroduce species to their natural habitat, and to create a
            sanctuary where fauna and flora could thrive once more.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Founded by passionate conservationists who believed in the
            sustainable use of nature, Nama Sands became the embodiment of that
            dream. It took years to find the perfect landscape and the right
            partners who shared this commitment. Then, in 2013, the first farm
            was purchased — and the vision became reality.
          </p>
        </div>
      </section>

      {/* ================= IMAGE BREAK ================= */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="/images/our-story.jpg"
          alt="Evening at Nama Sands"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a1610]/20" />
      </section>

      {/* ================= SANCTUARY SECTION ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-10 font-serif text-3xl font-light text-foreground md:text-4xl">
            A Sanctuary <span className="italic">Reborn</span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Over the following years, more land was acquired and the work of
            restoration began in earnest. Fences came down, habitats were
            rehabilitated, and indigenous species were carefully reintroduced.
            Zebra, wildebeest, giraffe, eland, and countless other species found
            a home once again on the land that had been theirs for millennia.
          </p>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            The philosophy was always clear — this would be a place where
            conservation and hospitality could coexist in harmony. Where guests
            could experience the raw beauty of the Western Cape while
            contributing directly to its preservation.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Today, Nama Sands is a thriving private reserve encompassing
            thousands of hectares of pristine wilderness. Every visit supports
            the ongoing conservation efforts that keep this extraordinary
            ecosystem alive and flourishing.
          </p>
        </div>
      </section>

      {/* ================= QUOTE SECTION ================= */}
      <section className="bg-[#2a2318] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-conservation.jpg"
              alt="Indigenous fynbos flora on the Nama Sands reserve"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <div className="mb-8 h-px w-16 bg-[#c9a96e]" />

            <blockquote className="mb-8 font-serif text-2xl font-light leading-relaxed text-[#f5f0e8]/90 md:text-3xl">
              &ldquo;We believe that the land does not belong to us — we belong
              to the land. Our role is simply to be its custodians.&rdquo;
            </blockquote>

            <p className="text-sm uppercase tracking-[0.3em] text-[#c9a96e]">
              The Founders
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-10 font-serif text-3xl font-light text-foreground md:text-4xl">
            Looking <span className="italic">Forward</span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            The story of Nama Sands is far from finished. With every passing
            season, the reserve grows richer, more diverse, and more alive.
            New conservation projects are constantly underway, from rewilding
            programmes to indigenous plant restoration, ensuring that this
            land continues to heal and flourish for generations to come.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            When you visit Nama Sands, you become part of this story. You walk
            the same earth, breathe the same air, and witness the same
            extraordinary landscapes that inspired a vision more than two
            decades ago. Welcome — and thank you for being part of the journey.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-border py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center lg:px-10">

          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a96e]">
            Continue Exploring
          </p>

          <h3 className="font-serif text-2xl font-light text-foreground md:text-3xl">
            Ready to experience Nama Sands?
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#villa"
              className="border border-[#c9a96e] px-7 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:bg-[#c9a96e] hover:text-[#2a2318]"
            >
              Explore the Villa
            </Link>

            <Link
              href="/#booking"
              className="bg-[#c9a96e] px-7 py-3 text-xs uppercase tracking-[0.25em] text-[#2a2318] transition-all duration-300 hover:bg-[#b8963e]"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
