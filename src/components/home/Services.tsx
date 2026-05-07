"use client"

import { useState } from "react"

import SectionContainer from "./SectionContainer"
import ContentPadding from "../ui/ContentPadding"
import SectionTitle from "./SectionTitle"
import SVGPlus from "@/assets/svg/icons/plus.svg"
import SVGMinus from "@/assets/svg/icons/minus.svg"
import SVGWebIllustration from "@/assets/svg/illustrations/web_illustration.svg"
import SVGDesktopIllustration from "@/assets/svg/illustrations/desktop_illustration.svg"
import SVGBackendIllustration from "@/assets/svg/illustrations/backend_illustration.svg"
import SVGAutomationIllustration from "@/assets/svg/illustrations/automation_illustration.svg"

const ITEMS = [
  {
    title: "Web Applikationen",
    description: `Konzeption und Entwicklung von Websites und Web-Applikationen.
          Unterstützung bei der Umsetzung neuer Anwendungen ebenso wie bei der Weiterentwicklung, Erneuerung oder Integration bestehender Lösungen.
          Der Fokus liegt auf klarem Design und alltagstauglichen Lösungen.`,
    svg: SVGWebIllustration
  },
  {
    title: "Desktop Applikationen",
    description: `Konzeption und Entwicklung von Desktop Applikationen für spezifische Arbeitsabläufe.
          Unterstützung bei der Umsetzung neuer Anwendungen ebenso wie bei der Weiterentwicklung, Erneuerung oder Integration bestehender Software.
          Der Fokus liegt auf stabiler Funktionalität und einfacher Bedienung.`,
    svg: SVGDesktopIllustration
  },
  {
    title: "Backend & Schnittstellen",
    description: `Konzeption und Entwicklung von Hintergrund-Applikationen sowie die Anbindung bestehender Anwendungen und externer Dienste.
          Unterstützung bei der Umsetzung neuer Backends ebenso wie bei der Erweiterung und Integration bestehender Systeme.
          Der Fokus liegt auf zuverlässiger Datenverarbeitung und stabilen, wartbaren Systemen.`,
    svg: SVGBackendIllustration
  },
  {
    title: "Automatisierungen",
    description: `Entwicklung von Automatisierungen für wiederkehrende oder manuelle Arbeitsschritte innerhalb bestehender Anwendungen.
          Der Fokus liegt auf pragmatischen Lösungen, die den täglichen Umgang mit Softwaresystemen vereinfachen.`,
    svg: SVGAutomationIllustration
  }
]

interface AccordionItemProps {
  title: string
  description: string
  SvgComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>
  handleToggle: (title: string) => void
  isOpen: boolean
}

function AccordionItem({ title, description, SvgComponent, handleToggle, isOpen }: AccordionItemProps) {
  return (
    <button
      className={`${isOpen && "bg-secondary-10"} border-secondary-100 flex w-full flex-col items-center gap-4 rounded-lg border-[1.5px] px-5 transition-colors duration-150 ${isOpen ? "pt-1 pb-3" : "py-1"} leading-tight`}
      onClick={() => handleToggle(title)}>
      <div className="flex w-full items-center gap-3">
        {isOpen ? <SVGMinus className="h-6 w-6 stroke-2" /> : <SVGPlus className="h-6 w-6 stroke-2" />}
        <h3 className="pb-1 text-2xl font-semibold">{title}</h3>
      </div>
      {isOpen && (
        <>
          <SvgComponent className="max-w-3/5" />
          <p className="w-full text-left text-xl whitespace-pre-line">{description}</p>
        </>
      )}
    </button>
  )
}

function DesktopServices({
  items,
  activeItem,
  onSelect
}: {
  items: typeof ITEMS
  activeItem: (typeof ITEMS)[0]
  onSelect: (title: string) => void
}) {
  const activeIndex = items.findIndex(({ title }) => title === activeItem.title)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [animKey, setAnimKey] = useState(0)

  function handleSelect(title: string) {
    const newIndex = items.findIndex((i) => i.title === title)
    setDirection(newIndex > activeIndex ? "right" : "left")
    setAnimKey((k) => k + 1)
    onSelect(title)
  }

  return (
    <div className="flex flex-col gap-28">
      {/* Tabs */}
      <div className="relative">
        <div className="grid grid-cols-4">
          {items.map(({ title }) => {
            const isActive = activeItem.title === title
            return (
              <button
                key={title}
                onClick={() => handleSelect(title)}
                className={`cursor-pointer pb-3 text-center text-xl font-semibold transition-colors duration-300 ${isActive ? "text-primary-100" : "text-primary-40 hover:text-primary-100"
                  }`}>
                {title}
              </button>
            )
          })}
        </div>
        <div className="border-b border-gray-200" />
        <div
          className="bg-secondary-100 absolute bottom-0 h-0.5 transition-transform duration-500 ease-in-out"
          style={{
            width: `${100 / items.length}%`,
            transform: `translateX(${activeIndex * 100}%)`
          }}
        />
      </div>

      {/* Content */}
      <div className="min-h-72">
        <div
          key={animKey}
          className={`flex items-center gap-32 px-5 ${direction === "right" ? "animate-slide-in-from-right" : "animate-slide-in-from-left"
            }`}>
          <activeItem.svg className="w-72 shrink-0" />
          <div className="flex flex-col gap-4">
            {activeItem.description.split("\n").map((line, i) => (
              <p key={i} className="text-2xl">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [activeTitle, setActiveTitle] = useState<string>(ITEMS[0].title)

  const activeItem = ITEMS.find((i) => i.title === activeTitle) ?? ITEMS[0]

  function handleToggleItem(title: string) {
    setOpenItem((prev) => (prev === title ? null : title))
  }

  return (
    <SectionContainer>
      <ContentPadding>
        <SectionTitle title="Leistungen" subTitle="Wobei ich Sie unterstützen kann" id="leistungen" />

        {/* Mobile */}
        <div className="grid gap-5 lg:hidden">
          {ITEMS.map(({ title, description, svg }) => (
            <AccordionItem
              key={`services-item-${title}`}
              title={title}
              description={description}
              SvgComponent={svg}
              handleToggle={handleToggleItem}
              isOpen={openItem === title}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <DesktopServices items={ITEMS} activeItem={activeItem} onSelect={setActiveTitle} />
        </div>
      </ContentPadding>
    </SectionContainer>
  )
}
