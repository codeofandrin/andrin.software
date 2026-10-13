import Hero from "@/components/home/Hero"

export const metadata = {
  title: "andrin.software - Individuelle Software für Selbständige und KMU",
  description:
    "Vom modernen Webauftritt bis zu internen Automatisierungen unterstütze ich Sie dort, wo Standardlösungen an ihre Grenzen stossen.",
  keywords:
    "Andrin Schaller, Andrin, andrin.software, Schaller, Individuelle Software, KMU Software, Software für KMU, Software für Selbständige, Digitale Lösungen, Webseite erstellen, Webentwicklung",
  authors: [{ name: "Andrin Schaller" }],
  publisher: "Andrin Schaller"
}

export default function Home() {
  return (
    <div className="w-full sm:flex sm:flex-col sm:items-center">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}
