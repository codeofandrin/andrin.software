import HyperLink from "./HyperLink"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import { EMail } from "@/lib/constants"

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
              <HyperLink href={href} target="_blank">
                {content}
              </HyperLink>
            )
          }
        }}>
        {children}
      </Markdown>
    </div>
  )
}
