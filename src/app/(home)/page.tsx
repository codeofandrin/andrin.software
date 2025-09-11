import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import { EMail, Social } from "@/lib/constants"
import SVGGithub from "@/assets/icons/GitHub.svg"
import SVGEnvelope from "@/assets/icons/Envelope.svg"
import SVGLinkedIn from "@/assets/icons/LinkedIn.svg"

export const metadata = {
  title: "Andrin Schaller",
  description: "",
  keywords: "",
  authors: [{ name: "Andrin Schaller" }],
  publisher: "Andrin Schaller"
}

interface EllipsePropsType {
  className: string
}

function Ellipse({ className }: EllipsePropsType) {
  return <div className={`${className} absolute -z-[99]`} />
}

interface SocialButtonPropsType {
  children: React.ReactElement
  href: string
  tooltip: string
}

function SocialButton({ children, href, tooltip }: SocialButtonPropsType) {
  return (
    <div className="mx-1">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" href={href}>
              {children}
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg lg:pt-36">
      <h1 className="text-2xl font-black">Andrin Schaller</h1>
      <h2 className="mt-1 font-light text-stone-400">Computer Science Student and Software Engineer</h2>
      <div className="relative mt-20 flex flex-col items-center">
        <Ellipse className="top-5 h-60 w-54 rounded-[50%] bg-stone-500 blur-[50px]" />
        <Ellipse className="top-10 h-92 w-92 rounded-full bg-gradient-to-t from-stone-950 from-70% to-white to-275%" />
        <h3 className="mt-44 text-5xl font-bold tracking-[0.2em]">WORK IN PROGRESS</h3>
        <div>
          <p className="mt-32 text-xl">In the meanwhile, you can contact me here</p>
          <div className="mt-10 flex w-full justify-evenly">
            <SocialButton href={`mailto:${EMail.general}`} tooltip="E-Mail">
              <SVGEnvelope className="h-4 w-4" />
            </SocialButton>
            <SocialButton href={Social.github} tooltip="GitHub">
              <SVGGithub className="h-4 w-4" />
            </SocialButton>
            <SocialButton href={Social.linkedIn} tooltip="LinkedIn">
              <SVGLinkedIn className="h-4 w-4" />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  )
}
