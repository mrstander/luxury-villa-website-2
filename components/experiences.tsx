"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

interface Experience {
  title: string
  description: string
  detail: string
  image: string
  link?: string
}

const experiences: Experience[] = [
  {
    title: "Game Drives",
    description:
      "Experience the thrill of a game drive with our experienced guide. Encounter zebra, giraffe, eland, wildebeest and more across vast open fynbos landscapes",
    detail:
      "It's immersive, unhurried, and deeply connected to the land.",
    image: "/images/gamedrive.jpeg",
  },
  {
    title: "Spa Treatments",
    description:
      "Enjoy private spa treatments in the comfort of your own suite, where relaxation comes to you. From restorative massages to tailored wellness treatments, restore body and mind in complete privacy and effortless luxury",
    detail:
      "It's peaceful, exhilarating, and a truly unique way to experience the bush.",
    image: "/images/spa.jpeg",
  },
  {
    title: "Private Chef",
    description:
      "Enjoy the luxury of a private chef crafting personalised culinary experiences in the comfort of your villa. From leisurely breakfasts to beautifully prepared dinners",
    detail:
      "It's grounding, meditative, and soaked in natural wonder.",
    image: "/images/chef.jpeg",
  },

]

function ExperienceCard({
  experience,
  imagePosition,
  isInView,
  delay,
}: {
  experience: Experience
  imagePosition: "top" | "bottom"
  isInView: boolean
  delay: number
}) {
  const textBlock = (
    <div className="flex flex-col gap-3">
      <h3 className="font-serif text-2xl font-normal tracking-wide text-foreground md:text-3xl">
        {experience.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {experience.description}
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {experience.detail}
      </p>
      {experience.link && (
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-xs italic text-[#c9a96e] underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {experience.link}
        </a>
      )}
    </div>
  )

  const imageBlock = (
    <div className="group relative aspect-[4/5] overflow-hidden">
      <Image
        src={experience.image}
        alt={experience.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  )

  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {imagePosition === "top" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  )
}

export function Experiences() {
  const { ref, isInView } = useInView()

  return (
    <section id="experiences" className="bg-card py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Section Heading - editorial style with gold line */}
        <div
          className={`mb-20 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <h2 className="font-serif text-4xl font-normal tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Adventure & Activities
          </h2>
          <div className="mt-4 h-px w-48 bg-[#c9a96e]" />
        </div>

        {/* Staggered Editorial Grid - Row 1 */}
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
          {/* Column 1 - text top, image bottom */}
          <ExperienceCard
            experience={experiences[0]}
            imagePosition="bottom"
            isInView={isInView}
            delay={200}
          />

          {/* Column 2 - image top, text bottom (offset upward for stagger) */}
          <div className="md:-mt-8">
            <ExperienceCard
              experience={experiences[1]}
              imagePosition="top"
              isInView={isInView}
              delay={400}
            />
          </div>

          {/* Column 3 - text top, image bottom */}
          <ExperienceCard
            experience={experiences[2]}
            imagePosition="bottom"
            isInView={isInView}
            delay={600}
          />
        </div>


      </div>
    </section>
  )
}
