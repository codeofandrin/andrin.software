"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

import { EmailObfuscated } from "@/lib/constants"
import { MENU_ITEMS } from "@/lib/constants"
import SVGLogoLarge from "@/assets/svg/brand/logo_large.svg"
import SVGMenu from "@/assets/svg/icons/menu.svg"
import SVGXMark from "@/assets/svg/icons/x_mark.svg"
import ContentPadding from "./ContentPadding"
import { useObfuscatedEmail } from "@/hooks/useObfuscatedEmail"
import SVGEnvelope from "@/assets/svg/icons/envelope.svg"

interface MobileMenuProps {
  setMenuOpen: (isOpen: boolean) => void
}

function MobileMenu({ setMenuOpen }: MobileMenuProps) {
  const { href, label, reveal, isRevealed } = useObfuscatedEmail(EmailObfuscated.general)

  return (
    <div className="max-h-screen overscroll-none">
      <div className="top-header-mobile sm:top-header-desktop section-border-t-dashed-desktop fixed right-0 bottom-0 left-0 z-[1000] w-full bg-white/80 backdrop-blur-lg">
        {/* Menu Items */}
        <div className="px-body-mobile flex flex-col items-center gap-10 pt-12">
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
                  className="text-primary-100 hover:text-primary-60 py-2 text-3xl font-extrabold transition-colors duration-300">
                  {name}
                </Link>
              </div>
            )
          })}
        </div>
        {/* Footer */}
        <div className="section-border-t-dashed-mobile section-border-t-dashed-desktop fixed bottom-0 w-full">
          <ContentPadding className="sm:mx-body-desktop section-border-x-dashed-desktop py-5">
            <Link
              href={href}
              onMouseEnter={reveal}
              onFocus={reveal}
              onClick={reveal}
              className={`hover:text-primary-100 flex items-center gap-2 text-xl text-neutral-500 transition-colors duration-300 ${!isRevealed && "italic"}`}>
              <SVGEnvelope className="h-5 w-5 stroke-[1.5px]" />
              <span className="pb-1.5">{label}</span>
            </Link>
          </ContentPadding>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <header
        className={`sticky top-0 right-0 left-0 z-[1000] w-full bg-white/80 backdrop-blur-lg transition-shadow duration-300 ${scrolled && !isMenuOpen ? "shadow-sm" : ""}`}>
        <div className="flex h-full w-full justify-center">
          <div className="section-border-x-dashed-desktop sm:mx-body-desktop flex h-full w-full items-center justify-center sm:max-w-7xl">
            <div className="px-body-mobile flex w-full items-center justify-between py-5 sm:px-5 sm:py-7">
              <Link
                className="h-fit w-fit"
                href={"/"}
                onClick={(e) => {
                  setMenuOpen(false)
                  // Remove hash from URL to prevent Next.js from scrolling to the last anchor
                  if (window.location.hash) {
                    e.preventDefault()
                    window.history.pushState(null, "", "/")
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}>
                <SVGLogoLarge className="w-[150px] sm:w-[180px]" />
              </Link>
              {/* Desktop Navigation */}
              <div className="hidden gap-20 lg:flex">
                {MENU_ITEMS.map(({ name, link }) => (
                  <div key={`menu-item-${name}`}>
                    <Link
                      href={link}
                      onClick={() => {
                        setMenuOpen(false)
                        const hash = link.split("#")[1]
                        if (hash && window.location.hash === `#${hash}`) {
                          document
                            .getElementById(hash)
                            ?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }}
                      className="text-primary-100 hover:text-primary-60 text-xl font-extrabold transition-colors duration-300">
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
              {/* Mobile Menu Button */}
              <button className="hover:cursor-pointer lg:hidden" onClick={handleMenuToggle}>
                {isMenuOpen ? (
                  <SVGXMark className="w-[40px] stroke-neutral-900 stroke-[1.5] sm:w-[35px]" />
                ) : (
                  <SVGMenu className="w-[40px] stroke-neutral-900 stroke-[1.5] sm:w-[35px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </>
  )
}
