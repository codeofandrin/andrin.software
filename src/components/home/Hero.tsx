"use client"

import Link from "next/link"

import ContentPadding from "../ui/ContentPadding"
import Highlight from "../ui/Highlight"
import SVGArrowDown from "@/assets/svg/icons/arrow_down.svg"
import SVGHeroIllustration from "@/assets/svg/illustrations/hero_illustration.svg"
import SectionContainer from "./SectionContainer"
import { useNavigation } from "@/hooks/useNavigation"

function HeroHeader() {
  return (
    <h1 className="text-primary-100 text-[2.7rem] leading-11 font-bold sm:text-[3.5rem] sm:leading-14">
      <span className="font-['DM-Serif'] text-[2.5rem] font-bold italic sm:text-[3.1rem]">Individuelle</span>{" "}
      Software Lösungen für{" "}
      <span className="pt-2 leading-14 sm:leading-18">
        <Highlight px="px-2">KMUs und Selbständige</Highlight>
      </span>
    </h1>
  )
}

function HeroSubline() {
  return (
    <p className="text-primary-70 text-2xl sm:text-3xl">
      Vom modernen Webauftritt bis zu internen Automatisierungen unterstütze ich Sie dort, wo Standardlösungen
      an ihre Grenzen stossen.
    </p>
  )
}

function HeroContactLink() {
  const { handleNavClick } = useNavigation()

  const hash = "kontakt"
  return (
    <Link
      href={`/#${hash}`}
      className="text-primary-40 flex items-center"
      onClick={(e) => handleNavClick(e, `/#${hash}`)}>
      <span className="pb-1 text-xl leading-none sm:text-2xl">Kontakt</span>
      <SVGArrowDown className="ml-2 w-4 stroke-2" />
    </Link>
  )
}

export default function Hero() {
  return (
    <SectionContainer
      className="relative pb-52 lg:flex lg:min-h-[calc(100svh-var(--spacing-header-desktop))] lg:items-center lg:pb-0"
      noTopPadding>
      <ContentPadding className="grid w-full gap-y-8 pt-20 lg:flex lg:items-center lg:gap-x-16 lg:py-12 lg:pt-0">
        <div className="my-auto flex flex-col gap-y-8 sm:gap-y-12">
          <HeroHeader />
          <HeroSubline />
          <HeroContactLink />
        </div>
        <div className="mt-20 flex justify-center lg:mt-0 lg:shrink-0 lg:justify-end">
          <SVGHeroIllustration className="w-3/4 max-w-lg lg:w-[450px] lg:max-w-full" />
        </div>
      </ContentPadding>
      <div className="absolute top-0 -z-[99] h-[800px] max-h-full w-full overflow-hidden">
        <div className="dot-pattern-hero" />
      </div>
    </SectionContainer>
  )
}
