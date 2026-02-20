import Hero from "@/components/home/Hero"

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
    <div className="w-full max-w-screen-lg">
      <Hero />
    </div>
  )
}
