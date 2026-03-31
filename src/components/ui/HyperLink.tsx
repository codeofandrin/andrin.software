import Link from "next/link"

interface HyperlinkPropsType extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  className?: string
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>
  iconClassName?: string
}

export default function HyperLink({
  children,
  href,
  className,
  icon,
  iconClassName,
  ...props
}: HyperlinkPropsType) {
  return (
    <Link
      href={href}
      className={`group text-primary-100 inline-flex items-center ${className ?? ""}`}
      {...props}>
      {icon && <span className={`mr-2 flex-shrink-0 ${iconClassName ?? ""}`}>{icon}</span>}

      <span
        className={`relative ${icon ? "pb-1.5" : ""} transition-colors duration-300 group-hover:text-white`}>
        <span>{children}</span>
        <span
          className={`absolute left-1/2 -translate-x-1/2 ${icon ? "bottom-2" : "bottom-0.5"} bg-primary-100 h-[1px] w-full transition-all duration-300 group-hover:w-[calc(100%+4px)] ${icon ? "group-hover:h-[60%]" : "group-hover:h-[75%]"} -z-10`}
        />
      </span>
    </Link>
  )
}
