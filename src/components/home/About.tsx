import Image from "next/image"
import Link from "next/link"

import { Socials } from "@/lib/constants"
import SectionContainer from "./SectionContainer"
import ContentPadding from "../ui/ContentPadding"
import SectionTitle from "./SectionTitle"
import SVGLinkedin from "@/assets/svg/socials/linkedin.svg"
import SVGNextjs from "@/assets/svg/tech/nextjs.svg"
import SVGReact from "@/assets/svg/tech/react.svg"
import SVGTypeScript from "@/assets/svg/tech/typescript.svg"
import SVGPython from "@/assets/svg/tech/python.svg"
import SVGNodejs from "@/assets/svg/tech/nodejs.svg"

const TECH_ITEMS = [
  {
    name: "Next.js",
    SvgComponent: SVGNextjs
  },
  {
    name: "React",
    SvgComponent: SVGReact
  },
  {
    name: "TypeScript",
    SvgComponent: SVGTypeScript
  },
  {
    name: "Python",
    SvgComponent: SVGPython
  },
  {
    name: "Node.js",
    SvgComponent: SVGNodejs
  }
]

function AboutIntroduction() {
  return (
    <div>
      <h3 className="font-['DM-Serif'] text-2xl font-bold italic">Andrin Schaller</h3>
      <p className="mt-3 text-xl">
        Als selbständiger Software Engineer entwickle ich Anwendungen für KMUs und Einzelunternehmer:innen.
        Dabei arbeite ich bewusst Solo: direkt und ohne Umwege, um zusätzliche Projektkosten zu sparen.
        <br />
        Ich lege Wert auf saubere und verständliche Software, die langfristig wartbar ist. Meine Erfahrungen
        aus dem Open-Source-Umfeld prägen meine Art und Weise, wie ich Projekte angehe und umsetze.
        <br />
        Eine Zusammenarbeit eignet sich besonders dann, wenn eine passgenaue Lösung bei möglichst geringen
        Kosten gefragt ist.
      </p>
    </div>
  )
}

function AboutPortrait() {
  return (
    <div className="flex justify-center">
      <Link
        href={Socials.linkedIn}
        target="_blank"
        className="group relative h-[270px] w-[220px] overflow-hidden rounded-lg">
        <Image
          className="object-none object-[0%_50%]"
          src="/images/portrait.png"
          alt="portrait_andrin_schaller"
          fill
          sizes="250px"
        />
        <SVGLinkedin className="absolute right-0 bottom-0 z-[99] mr-2 mb-2 origin-bottom-right scale-40 rounded-lg fill-black/30 transition-colors duration-300 group-hover:bg-[#00A0DC] group-hover:fill-white" />
      </Link>
    </div>
  )
}

interface AboutTechItemProps {
  name: string
  SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function AboutTechItem({ name, SvgComponent }: AboutTechItemProps) {
  return (
    <div className="flex flex-col items-center">
      <SvgComponent className="h-10 w-10" />
      <p className="text-primary-60 mt-1 text-base">{name}</p>
    </div>
  )
}

function AboutTechnicalFocus() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">Technischer Fokus</p>
      <div className="mt-5 grid w-full grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-7">
        {TECH_ITEMS.map(({ name, SvgComponent }) => (
          <AboutTechItem key={`about-tech-${name}`} name={name} SvgComponent={SvgComponent} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <SectionContainer colorTransition={true} bgColor="bg-primary-100" theme="dark">
      <ContentPadding className="text-white">
        <SectionTitle title="Über mich" subTitle="Wer hinter andrin.software steht" theme="dark" />
        <div className="grid gap-16">
          <AboutIntroduction />
          <AboutPortrait />
          <AboutTechnicalFocus />
        </div>
      </ContentPadding>
    </SectionContainer>
  )
}
