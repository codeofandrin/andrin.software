import type { Metadata } from "next"
import Link from "next/link"

import MarkdownContent from "@/components/ui/markdown"
import MdLegalNotice from "@/content/legal-notice.md"

import SVGArrowLeft from "@/assets/icons/ArrowLeft.svg"

export const metadata: Metadata = {
  title: "Legal Notice - andrin.software"
}

export default function LegalNotice() {
  return (
    <div className="w-full max-w-screen-lg">
      <div>
        <Link href="/" className="flex items-center text-stone-400 transition-colors hover:text-stone-300">
          <SVGArrowLeft className="h-4 w-4" />
          <span className="ml-1 text-sm">Back</span>
        </Link>
      </div>
      <div className="mt-5">
        <MarkdownContent>{MdLegalNotice}</MarkdownContent>
      </div>
    </div>
  )
}
