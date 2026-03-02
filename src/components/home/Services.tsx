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

export default function Services() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  function handleToggleItem(title: string) {
    if (openItem === title) {
      setOpenItem(null)
    } else {
      setOpenItem(title)
    }
  }

  return (
    <SectionContainer>
      <ContentPadding>
        <SectionTitle title="Leistungen" subTitle="Wobei ich Sie unterstützen kann" />
        <div className="grid gap-5">
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
      </ContentPadding>
    </SectionContainer>
  )
}
