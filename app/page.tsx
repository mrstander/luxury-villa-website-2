import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { Villa } from "@/components/villa"
import { Experiences } from "@/components/experiences"
import { LaunchSpecial } from "@/components/launch-special"
import { FAQ } from "@/components/faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Nama Sands Safari Reserve | Private Luxury Villa',
  description: 'Experience untamed wilderness and private luxury at Nama Sands, a private villa in the Western Cape.',
}

export default function Page() {
  return (
    <main>
      <Hero />
      <OurStory />
      <Villa />
      <Experiences />
      <LaunchSpecial />
      <FAQ />
    </main>
  )
}
