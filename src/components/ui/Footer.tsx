import Link from "next/link"

import { MENU_ITEMS, Socials } from "@/lib/constants"
import ContentPadding from "./ContentPadding"
import SVGLogoSmall from "@/assets/svg/brand/logo_small.svg"
import SVGLinkedin from "@/assets/svg/socials/linkedin.svg"
import { useNavigation } from "@/hooks/useNavigation"

function FooterNavigation() {
  const { handleNavClick } = useNavigation()

  return (
    <div className="mt-8 grid gap-5 lg:mt-0 lg:flex lg:gap-15">
      {MENU_ITEMS.map(({ name, link }) => {
        return (
          <div key={`footer-item-${name}`}>
            <Link
              href={link}
              className="text-xl text-neutral-700 transition-colors duration-300 hover:text-neutral-500"
              onClick={(e) => handleNavClick(e, link)}>
              {name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

function FooterLegal() {
  const { handleRouteChange } = useNavigation()

  return (
    <>
      {/* Desktop */}
      <div className="mt-2 hidden justify-between border-t-[0.5px] border-neutral-300 pt-5 pb-5 text-neutral-400 md:flex">
        <p className="text-center">Copyright © 2026 andrin.software. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center gap-10">
          <Link href="/impressum" onClick={(e) => handleRouteChange(e, "/impressum")}>
            Impressum
          </Link>
          <Link href="/datenschutz" onClick={(e) => handleRouteChange(e, "/datenschutz")}>
            Datenschutz
          </Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="grid gap-5 border-t-1 border-neutral-300 py-5 text-neutral-400 md:hidden">
        <div className="flex justify-center gap-10">
          <Link href="/impressum" onClick={(e) => handleRouteChange(e, "/impressum")}>
            Impressum
          </Link>
          <Link href="/datenschutz" onClick={(e) => handleRouteChange(e, "/datenschutz")}>
            {" "}
            Datenschutz
          </Link>
        </div>
        <p className="text-center">Copyright © 2026 andrin.software. Alle Rechte vorbehalten.</p>
      </div>
    </>
  )
}

export default function Footer() {
  const { handleRouteChange } = useNavigation()

  return (
    <footer className="sm:mx-body-desktop flex-col lg:flex lg:items-center">
      <div className="w-full sm:max-w-7xl">
        <ContentPadding className="section-border-x-dashed-desktop pt-20 pb-2 lg:pt-10">
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="flex h-fit w-fit flex-col">
              <Link href={"/"} onClick={(e) => handleRouteChange(e, "/")} className="w-fit">
                <SVGLogoSmall className="h-[35px]" />
              </Link>
              <p className="text-primary-60 mt-3 text-xl leading-tight">
                Individuelle Software Lösungen
                <br />
                für Ihr KMU.
              </p>
              <div className="mt-8 w-fit">
                <Link href={Socials.linkedInBusiness} target="_blank">
                  <div className="h-fit w-fit rounded-xs bg-neutral-300 p-0.25 transition-colors duration-300 hover:bg-[#00A0DC]">
                    <SVGLinkedin className="size-4 fill-white" />
                  </div>
                </Link>
              </div>
            </div>
            <FooterNavigation />
          </div>
        </ContentPadding>
        <ContentPadding>
          <FooterLegal />
        </ContentPadding>
      </div>
    </footer>
  )
}
