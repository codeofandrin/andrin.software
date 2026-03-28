import { Section, Img } from "@react-email/components"

import { Routes } from "@/lib/constants"

export default function Header() {
  return (
    <Section className="border-b-1 border-dashed border-black/15 py-5">
      <a href={Routes.self} target="_blank" className="inline-block no-underline">
        <Img
          src={`${Routes.emailResources}/logo_large.jpg`}
          width="150"
          alt="andrin.software"
          className="block"
        />
      </a>
    </Section>
  )
}
