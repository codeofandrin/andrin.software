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
      className={`text-primary-100 hover:text-primary-60 inline-flex items-center transition-colors duration-300 ${className ?? ""}`}
      {...props}>
      {icon && <span className={`mr-2 flex-shrink-0 ${iconClassName ?? ""}`}>{icon}</span>}
      <span className={`${icon && "pb-1.5"}`}>{children}</span>
    </Link>
  )
}
