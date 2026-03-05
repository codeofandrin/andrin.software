import Link from "next/link"

import ContentPadding from "../ui/ContentPadding"
import Highlight from "../ui/Highlight"
import SVGArrowDown from "@/assets/svg/icons/arrow_down.svg"
import SVGHeroIllustration from "@/assets/svg/illustrations/hero_illustration.svg"

function HeroHeader() {
  return (
    <h1 className="text-hero-main text-primary-100 leading-11 font-bold">
      <span className="text-hero-serif font-['DM-Serif'] font-bold italic">Individuelle</span> Software
      Lösungen{" "}
      <div className="pt-2 leading-14">
        <Highlight px="px-2">für Ihr KMU</Highlight>
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
    <div className="section-border-b-dashed-mobile relative pb-52">
      <ContentPadding className="grid gap-y-8 pt-20">
        <HeroHeader />
        <HeroSubline />
        <HeroContactLink />
      </ContentPadding>
      <div className="mt-20 flex justify-center">
        <SVGHeroIllustration className="max-w-3/4" />
      </div>
      <div className="dot-pattern-hero absolute top-0 -z-[99]" />
    </div>
  )
}
