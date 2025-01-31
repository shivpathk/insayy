import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Companies } from "@/components/Companies"
import { SearchSection } from "@/components/SearchSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Companies />
      <SearchSection />
      <Footer />
    </main>
  )
}

