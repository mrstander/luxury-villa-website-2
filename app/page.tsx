import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OurStory } from "@/components/our-story"
import { Villa } from "@/components/villa"
import { Experiences } from "@/components/experiences"
import { Wildlife } from "@/components/wildlife"
import { Gallery } from "@/components/gallery"
import { Sustainability } from "@/components/sustainability"
import { LaunchSpecial } from "@/components/launch-special"
import { FAQ } from "@/components/faq"
import { BookingCTA } from "@/components/booking-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <OurStory />
      <Villa />
      <Experiences />
      <Wildlife />
      <Gallery />
      <Sustainability />
      <LaunchSpecial />
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  )
}
