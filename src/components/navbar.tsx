"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import LogoSmall from "@/assets/svg/brand/Logo_small.svg"
import CTAButton from "@/components/ui/cta-button"
import { Mail, ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { TextReveal } from "@/components/ui/text-reveal"
import { navItems, contactInfo, type NavItem, type ContactInfo, type SocialLink } from "@/lib/constants"
import LinkedInLogo from "@/assets/svg/socials/linkedin.svg"
import GitHubLogo from "@/assets/svg/socials/github.svg"

type NavViewProps = {
  items: NavItem[]
  contact: ContactInfo
}

type NavbarProps = {
  className?: string
}

const easeOut = [0.22, 1, 0.36, 1] as const

export default function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50", className)}>
      <div
        aria-hidden
        className="absolute inset-0 border-b border-white/20 bg-white/10 shadow-md backdrop-blur-sm"
      />
      <div className="mx-auto flex w-full max-w-[1700px] px-12 md:px-24">
        <FullscreenNav items={navItems} contact={contactInfo} />
      </div>
    </header>
  )
}

function FullscreenNav({ items, contact }: NavViewProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    // Lock scroll while the menu is open
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const close = () => setOpen(false)

  const contactDelay = 0.2 + items.length * 0.1

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            id="fullscreen-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="pointer-events-auto fixed inset-0 overflow-y-auto bg-zinc-950 text-white">
            <div className="mx-auto grid min-h-full w-full max-w-[1700px] gap-16 px-12 pt-36 pb-12 md:px-24 md:pb-24 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-24">
              {/* Main navigation */}
              <nav aria-label="Hauptmenü" className="self-start lg:self-center">
                <ul className="flex flex-col gap-4 sm:gap-20">
                  {items.map((item, i) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group font-clashdisplay relative block text-[13vw] leading-[1.05] font-medium transition-colors duration-200 sm:text-[9vw] lg:text-8xl">
                        <span className="sr-only">{item.label}</span>
                        <ArrowRight
                          aria-hidden
                          className="text-brand-secondary-100 pointer-events-none absolute top-1/2 left-0 size-0 -translate-x-4 -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:size-20 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                        />
                        <span
                          aria-hidden
                          className="block transition-transform duration-300 ease-out group-hover:translate-x-20 group-focus-visible:translate-x-20">
                          <TextReveal text={item.label} delay={0.1 + i * 0.1} stagger={0.03} y={10} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact block */}
              <motion.aside
                aria-label="Kontakt"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: contactDelay, duration: 0.5, ease: easeOut }}
                className="flex flex-col gap-8 lg:max-w-sm">
                {contact.email && (
                  <div className="font-clashdisplay flex flex-col gap-2 text-2xl font-medium md:text-3xl">
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 break-all transition-colors duration-200 hover:text-white/70 focus-visible:text-white/70 focus-visible:outline-none">
                        <Mail className="size-5 shrink-0" aria-hidden />
                        {contact.email}
                      </a>
                    )}
                  </div>
                )}

                {contact.socials && contact.socials.length > 0 && (
                  <ul className="flex gap-3">
                    {contact.socials.map((social) => (
                      <li key={social.href}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer external"
                          aria-label={social.label}
                          className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-200 hover:border-white hover:text-white focus-visible:border-white focus-visible:outline-none">
                          <SocialIcon icon={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <div onClick={close}>
                  <CTAButton>Projekt besprechen</CTAButton>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="relative z-10 flex w-full items-center justify-between py-6">
        <Link
          href="/"
          aria-label="Home"
          onClick={close}
          className="flex h-10 items-center rounded-full pr-5 text-white focus-visible:outline-none">
          <LogoSmall className="size-15" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="fullscreen-menu"
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          className="flex cursor-pointer items-center gap-3 rounded-full text-white/70 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none sm:gap-4">
          <ToggleLabel open={open} />
          <ToggleIcon open={open} />
        </button>
      </nav>
    </>
  )
}

function ToggleLabel({ open }: { open: boolean }) {
  return (
    <span
      className="font-clashdisplay text-md relative inline-grid overflow-hidden font-medium sm:text-lg"
      aria-hidden>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={open ? "close" : "menu"}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="col-start-1 row-start-1">
          {open ? "Schliessen" : "Menü"}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function ToggleIcon({ open }: { open: boolean }) {
  const transition = { duration: 0.35, ease: easeOut }

  return (
    <span className="relative block h-6 w-6" aria-hidden>
      <motion.span
        className="absolute top-1/2 left-0.5 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current sm:h-0.75 sm:w-6"
        animate={open ? { y: 0, rotate: 45 } : { y: -5, rotate: 0 }}
        transition={transition}
      />
      <motion.span
        className="absolute top-1/2 left-0.5 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current sm:h-0.75 sm:w-6"
        animate={open ? { y: 0, rotate: -45 } : { y: 5, rotate: 0 }}
        transition={transition}
      />
    </span>
  )
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "linkedin":
      return <LinkedInLogo className="size-5 fill-current" />

    case "github":
      return <GitHubLogo className="size-5 fill-current" />
  }
}
