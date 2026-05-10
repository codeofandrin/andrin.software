import type { Metadata } from "next"

import MarkdownContent from "@/components/ui/MarkdownContent"
import MdLegalNotice from "./legal-notice.md"
import SectionContainer from "@/components/home/SectionContainer"
import ContentPadding from "@/components/ui/ContentPadding"

export const metadata: Metadata = {
  title: "Impressum - andrin.software"
}

export default function LegalNotice() {
  return (
    <div className="w-full sm:flex sm:flex-col sm:items-center">
      <SectionContainer noBBorder>
        <ContentPadding>
          <MarkdownContent>{MdLegalNotice}</MarkdownContent>
        </ContentPadding>
      </SectionContainer>
    </div>
  )
}
