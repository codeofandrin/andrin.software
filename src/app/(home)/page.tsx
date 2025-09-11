import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

import { EMail, Social } from "@/lib/constants"
import SVGGithub from "@/assets/icons/GitHub.svg"
import SVGEnvelope from "@/assets/icons/Envelope.svg"
import SVGLinkedIn from "@/assets/icons/LinkedIn.svg"
import SVGBuyMeACoffee from "@/assets/icons/BuyMeACoffee.svg"

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
          <Button variant="outline" size="icon" asChild>
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
    <div className="w-full max-w-screen-lg py-16 sm:py-36">
      <div className="flex items-center">
        <h1 className="text-2xl font-black">Andrin Schaller</h1>
        <div className="ml-3">
          <SocialButton href={Social.buyMeACoffee} tooltip="Buy me a coffee">
            <SVGBuyMeACoffee />
          </SocialButton>
        </div>
      </div>
      <h2 className="mt-1 font-light text-stone-400">Computer Science Student and Software Engineer</h2>
      <div className="relative mt-5 flex flex-col items-center sm:mt-20">
        <Ellipse className="top-5 h-48 w-40 rounded-[50%] bg-stone-500 blur-[50px] sm:h-60 sm:w-54" />
        <Ellipse className="top-10 h-72 w-72 rounded-full bg-gradient-to-t from-stone-950 from-70% to-white to-275% sm:h-92 sm:w-92" />
        <h3 className="mt-36 text-center text-4xl font-bold tracking-[0.2em] sm:mt-44 sm:text-5xl">
          WORK IN PROGRESS
        </h3>
        <div className="mt-20 sm:mt-32">
          <p className="text-lg sm:text-center sm:text-xl">In the meanwhile, you can contact me here</p>
          <div className="mt-10 flex w-full justify-evenly">
            <SocialButton href={`mailto:${EMail.general}`} tooltip="E-Mail">
              <SVGEnvelope />
            </SocialButton>
            <SocialButton href={Social.github} tooltip="GitHub">
              <SVGGithub />
            </SocialButton>
            <SocialButton href={Social.linkedIn} tooltip="LinkedIn">
              <SVGLinkedIn />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  )
}
