import Link from "next/link"

import { MENU_ITEMS } from "@/lib/constants"
import ContentPadding from "./ContentPadding"
import SVGLogoSmall from "@/assets/svg/brand/logo_small.svg"

function FooterNavigation() {
  return (
    <div className="mt-8 grid gap-5 md:mt-0 md:flex md:gap-15">
      {MENU_ITEMS.map(({ name, link }) => {
        return (
          <div key={`footer-item-${name}`}>
            <Link
              href={link}
              className="text-xl text-neutral-700 transition-colors duration-300 hover:text-neutral-500"
              onClick={() => {
                // if same link, scroll manually to right position
                const hash = link.split("#")[1]
                if (hash && window.location.hash === `#${hash}`) {
                  document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}>
              {name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

function FooterLegal() {
  return (
    <>
      {/* Desktop */}
      <div className="mt-2 hidden justify-between border-t-[0.5px] border-neutral-300 pt-5 pb-5 text-neutral-400 md:flex">
        <p className="text-center">Copyright © 2026 andrin.software. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center gap-10">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
      {/* Mobile */}
      <div className="grid gap-5 border-t-1 border-neutral-300 py-5 text-neutral-400 md:hidden">
        <div className="flex justify-center gap-10">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
        <p className="text-center">Copyright © 2026 andrin.software. Alle Rechte vorbehalten.</p>
      </div>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="sm:mx-body-desktop flex-col md:flex md:items-center">
      <div className="w-full sm:max-w-7xl">
        <ContentPadding className="section-border-x-dashed-desktop">
          <div className="py-20 md:flex md:items-center md:justify-between md:py-10">
            <div className="h-fit w-fit">
              <Link href={"/"}>
                <SVGLogoSmall className="w-[70px]" />
              </Link>
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
