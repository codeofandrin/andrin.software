"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { EMail } from "@/lib/constants"
import { MENU_ITEMS } from "@/lib/constants"
import SVGLogoLarge from "@/assets/svg/brand/logo_large.svg"
import SVGMenu from "@/assets/svg/icons/menu.svg"
import SVGXMark from "@/assets/svg/icons/x_mark.svg"

interface MobileMenuProps {
  setMenuOpen: (isOpen: boolean) => void
}

function MobileMenu({ setMenuOpen }: MobileMenuProps) {
  return (
    <div className="max-h-screen overscroll-none">
      <div className="top-header-mobile fixed right-0 bottom-0 left-0 z-[1000] w-full bg-white">
        {/* Menu Items */}
        <div className="px-body-mobile grid gap-10 pt-12">
          {MENU_ITEMS.map(({ name, link }) => {
            return (
              <div key={`menu-item-${name}`}>
                <Link
                  href={link}
                  onClick={() => {
                    setMenuOpen(false)
                    // if same link, scroll manually to right position
                    const hash = link.split("#")[1]
                    if (hash && window.location.hash === `#${hash}`) {
                      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                  className="text-primary-100 hover:text-primary-60 py-2 text-3xl font-bold transition-colors duration-300">
                  {name}
                </Link>
              </div>
            )
          })}
        </div>
        {/* Footer */}
        <div className="px-body-mobile section-border-t-dashed-mobile fixed bottom-0 w-full py-5">
          <Link
            href={`mailto:${EMail.general}`}
            className="hover:text-primary-100 text-xl text-neutral-500 transition-colors duration-300">
            {EMail.general}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  function handleMenuToggle() {
    if (isMenuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }

  return (
    <>
      <header className="h-header-mobile section-border-b-dashed-mobile fixed top-0 right-0 left-0 z-[1000] w-full bg-white">
        <div className="px-body-mobile flex items-center justify-between py-5">
          <Link className="h-fit w-fit" href={"/"} onClick={() => setMenuOpen(false)}>
            <SVGLogoLarge className="w-[150px]" />
          </Link>
          <button className="hover:cursor-pointer" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <SVGXMark className="w-[40px] stroke-neutral-900 stroke-[1.5]" />
            ) : (
              <SVGMenu className="w-[40px] stroke-neutral-900 stroke-[1.5]" />
            )}
          </button>
        </div>
        {isMenuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      </header>
    </>
  )
}
