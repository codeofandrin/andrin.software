import type { Metadata } from "next"

import MarkdownContent from "@/components/ui/MarkdownContent"
import MdPrivacy from "./privacy.md"

export const metadata: Metadata = {
  title: "Datenschutz - andrin.software"
}

export default function Privacy() {
  return (
    <div className="mt-header-mobile scroll-mt-header-mobile w-full max-w-screen-lg">
      <div className="px-body-mobile content-privacy py-20">
        <MarkdownContent>{MdPrivacy}</MarkdownContent>
      </div>
    </div>
  )
}
