import { Navigation } from "@/components/navigation"
import { AboutMe } from "@/components/about-me"
import { InstagramGrid } from "@/components/instagram-grid"
import { Services } from "@/components/services"
import { RotatingImage } from "@/components/rotating-image"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutMe />
      <InstagramGrid />
      <Services />
      <RotatingImage />
      <ContactForm />
      <Footer />
    </main>
  )
}
