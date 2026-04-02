import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import Projects from "@/components/home/Projects"
import About from "@/components/home/About"
import Contact from "@/components/home/Contact"

export const metadata = {
  title: "andrin.software: Individuelle Software für Schweizer KMUs",
  description:
    "Von internen Tools bis Automatisierungen unterstütze ich Sie dort, wo Standardlösungen an ihre Grenzen stossen.",
  keywords:
    "Andrin Schaller, Andrin, andrin.software, Schalle, Individuelle Software, KMU Software, Software für KMU",
  authors: [{ name: "Andrin Schaller" }],
  publisher: "Andrin Schaller"
}

export default function Home() {
  return (
    <div className="scroll-mt-header-mobile w-full max-w-screen-lg">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
