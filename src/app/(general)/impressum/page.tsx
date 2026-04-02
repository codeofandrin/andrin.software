import type { Metadata } from "next"

import MarkdownContent from "@/components/ui/MarkdownContent"
import MdLegalNotice from "./legal-notice.md"

export const metadata: Metadata = {
  title: "Impressum - andrin.software"
}

export default function LegalNotice() {
  return (
    <div className="mt-header-mobile scroll-mt-header-mobile w-full max-w-screen-lg">
      <div className="px-body-mobile py-20">
        <MarkdownContent>{MdLegalNotice}</MarkdownContent>
      </div>
    </div>
  )
}
