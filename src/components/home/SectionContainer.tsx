interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  colorTransition?: boolean
  theme?: string
  bgColor?: string
  noBottomPadding?: boolean
  noBorder?: boolean
}

export default function SectionContainer({
  children,
  className,
  colorTransition = false,
  theme = "light",
  bgColor = "bg-inherit",
  noBottomPadding = false,
  noBorder = false,
  ...props
}: SectionContainerProps) {
  let bottomPadding = noBottomPadding ? null : colorTransition ? "pb-36" : "pb-52"
  let border

  if (!noBorder) {
    switch (theme) {
      case "light":
        border = `section-border-b-dashed-mobile section-border-x-and-b-dashed-desktop ${colorTransition && "section-border-t-dashed-mobile section-border-x-and-t-dashed-desktop"}`
        break

      case "dark":
        border = `section-border-b-dashed-dark-mobile section-border-x-and-b-dashed-dark-desktop ${colorTransition && "section-border-t-dashed-dark-mobile section-border-x-and-t-dashed-dark-desktop"}`
        break
    }
  }

  return (
    <div className={`${colorTransition && "py-16"} ${bgColor}`}>
      <div className={`${border ?? ""} pt-16 ${bottomPadding} ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}
