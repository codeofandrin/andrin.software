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
      <h3 className="font-['DM-Serif'] text-2xl font-bold italic sm:text-3xl">Andrin Schaller</h3>
      <div className="mt-3 flex flex-col text-xl sm:mt-6 sm:gap-4 sm:text-2xl">
        <p>
          Als selbständiger Software Engineer entwickle ich Anwendungen für KMUs und Einzelunternehmer:innen.
          <br />
          Dabei arbeite ich bewusst Solo: direkt und ohne Umwege, um zusätzliche Projektkosten zu sparen.
        </p>
        <p>
          Ich lege Wert auf saubere und verständliche Software, die langfristig wartbar ist. Meine Erfahrungen
          aus dem Open-Source-Umfeld prägen meine Art und Weise, wie ich Projekte angehe und umsetze.
        </p>
        <p>
          Eine Zusammenarbeit eignet sich besonders dann, wenn eine passgenaue Lösung bei möglichst geringen
          Kosten gefragt ist.
        </p>
      </div>
    </div>
  )
}

function AboutPortrait() {
  return (
    <div className="flex justify-center lg:justify-start">
      <Link
        href={Socials.linkedInPersonal}
        target="_blank"
        className="group relative h-[270px] w-[220px] overflow-hidden rounded-lg lg:h-[220px] lg:w-[180px]">
        {/* Portrait Mobile */}
        <Image
          className="object-none object-[0%_50%] lg:hidden"
          src="/images/portrait.png"
          alt="portrait_andrin_schaller"
          fill
          sizes="250px"
        />
        {/* Portrait Desktop */}
        <Image
          className="hidden object-none object-[10%_50%] lg:block"
          src="/images/portrait.png"
          alt="portrait_andrin_schaller"
          fill
          sizes="220px"
        />
        <SVGLinkedin className="absolute right-0 bottom-0 z-[99] mr-2 mb-2 size-8 origin-bottom-right rounded-sm fill-black/30 transition-colors duration-300 group-hover:bg-[#00A0DC] group-hover:fill-white" />
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
      <SvgComponent className="h-8 w-8 sm:h-10 sm:w-10" />
      <p className="text-primary-60 mt-1 text-base sm:mt-2">{name}</p>
    </div>
  )
}

function AboutTechnicalFocus() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <p className="text-xl lg:text-2xl">Technischer Fokus</p>
      <div className="mt-6 grid w-full grid-cols-[repeat(auto-fit,minmax(70px,1fr))] gap-7 lg:flex lg:flex-wrap lg:gap-8">
        {TECH_ITEMS.map(({ name, SvgComponent }) => (
          <AboutTechItem key={`about-tech-${name}`} name={name} SvgComponent={SvgComponent} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <SectionContainer colorTransition bgColor="bg-primary-100" theme="dark">
      <ContentPadding className="text-white">
        <SectionTitle
          id="ueber-mich"
          title="Über mich"
          subTitle="Wer hinter andrin.software steht"
          theme="dark"
        />
        <div className="grid gap-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-0">
            <AboutIntroduction />
            <div className="flex flex-col gap-16 lg:ml-32">
              <AboutPortrait />
              <AboutTechnicalFocus />
            </div>
          </div>
        </div>
      </ContentPadding>
    </SectionContainer>
  )
}
