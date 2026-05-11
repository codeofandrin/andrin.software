"use client"

import HyperLink from "./HyperLink"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"

import { EmailObfuscated } from "@/lib/constants"
import { useObfuscatedEmail } from "@/hooks/useObfuscatedEmail"

interface MarkdownContentPropsType {
  children: string
}

export default function MarkdownContent({ children }: MarkdownContentPropsType) {
  const {
    label: decodedLabel,
    reveal: revealEmail,
    isRevealed: isEmailRevealed
  } = useObfuscatedEmail(EmailObfuscated.general)

  return (
    <div className="content" lang="de">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a(props: any) {
            const replaceList = [{ from: "$email-general", to: decodedLabel }]

            let content = (props.children as string) || ""
            let href = props.href || ""
            for (let i = 0; i < replaceList.length; i++) {
              const replacePair = replaceList[i]
              content = content.replaceAll(replacePair.from, replacePair.to)
              href = href.replaceAll(replacePair.from, replacePair.to)
            }

            const isEmailLink = props.href?.includes("$email-")

            return (
              <HyperLink
                href={href}
                className={`${isEmailLink && !isEmailRevealed && "italic"}`}
                target="_blank"
                onClick={isEmailLink ? revealEmail : undefined}>
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
