import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { Villa } from "@/components/villa"
import { Experiences } from "@/components/experiences"
import { LaunchSpecial } from "@/components/launch-special"
import { FAQ } from "@/components/faq"

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
