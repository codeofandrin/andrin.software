import Link from "next/link"

import ContentPadding from "../ui/ContentPadding"
import SVGArrowDown from "@/assets/svg/arrow_down.svg"
import SVGHeroIllustration from "@/assets/svg/hero_illustration.svg"

function HeroHeader() {
  return (
    <h1 className="text-hero-main text-primary-100 leading-12 font-bold">
      <span className="text-hero-serif font-['DM-Serif'] font-bold italic">Individuelle</span> Software
      Lösungen{" "}
      <div className="bg-primary-100 mt-3 w-fit px-2 pb-2 text-white">
        <p className="leading-11">für Ihr KMU</p>
      </div>
    </h1>
  )
}

function HeroSubline() {
  return (
    <p className="text-primary-70 text-2xl">
      Von internen Tools bis Automatisierungen unterstütze ich Sie dort, wo Standardlösungen an ihre Grenzen
      stossen.
    </p>
  )
}

function HeroContactLink() {
  return (
    <Link href="/#kontakt" className="text-primary-40 flex items-center">
      <span className="pb-1 text-xl leading-none"> Kontakt</span>
      <SVGArrowDown className="ml-2 w-4 stroke-2" />
    </Link>
  )
}

export default function Hero() {
  return (
    <div className="section-border-b-dashed-mobile pb-52">
      <div className="dot-pattern">
        <ContentPadding className="grid gap-y-8 pt-20">
          <HeroHeader />
          <HeroSubline />
          <HeroContactLink />
        </ContentPadding>
      </div>
      <div className="mt-20 flex justify-center">
        <SVGHeroIllustration className="max-w-3/4" />
      </div>
    </div>
  )
}
