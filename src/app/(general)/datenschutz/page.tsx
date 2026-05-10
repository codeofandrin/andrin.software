import type { Metadata } from "next"

import MarkdownContent from "@/components/ui/MarkdownContent"
import MdPrivacy from "./privacy.md"
import SectionContainer from "@/components/home/SectionContainer"
import ContentPadding from "@/components/ui/ContentPadding"

export const metadata: Metadata = {
  title: "Datenschutz - andrin.software"
}

export default function Privacy() {
  return (
    <div className="w-full sm:flex sm:flex-col sm:items-center">
      <SectionContainer noBBorder>
        <ContentPadding>
          <MarkdownContent>{MdPrivacy}</MarkdownContent>
        </ContentPadding>
      </SectionContainer>
    </div>
  )
}
