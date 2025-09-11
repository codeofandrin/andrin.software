import Link from "next/link"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import { EMail } from "@/lib/constants"
import SVGArrowLink from "@/assets/icons/ArrowLink.svg"

interface MarkdownContentPropsType {
  children: string
}

export default function MarkdownContent({ children }: MarkdownContentPropsType) {
  return (
    <div className="content">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a(props: any) {
            const replaceList = [{ from: "$email-general", to: EMail.general }]

            let content = (props.children as string) || ""
            let href = props.href || ""
            for (let i = 0; i < replaceList.length; i++) {
              const replacePair = replaceList[i]
              content = content.replaceAll(replacePair.from, replacePair.to)
              href = href.replaceAll(replacePair.from, replacePair.to)
            }

            return (
              <Link
                href={href}
                target="_blank"
                className="inline-flex items-start text-blue-400 transition-colors hover:text-blue-300">
                {content} <SVGArrowLink className="ml-1 h-4 w-4" />
              </Link>
            )
          }
        }}>
        {children}
      </Markdown>
    </div>
  )
}
