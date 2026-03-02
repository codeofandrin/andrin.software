interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  colorTransition?: boolean
  theme?: string
  bgColor?: string
}

export default function SectionContainer({
  children,
  className,
  colorTransition = false,
  theme = "light",
  bgColor = "bg-inherit",
  ...props
}: SectionContainerProps) {
  let bottomPadding = colorTransition ? "pb-36" : "pb-52"
  let border
  switch (theme) {
    case "light":
      border = `section-border-b-dashed-mobile ${colorTransition && "section-border-t-dashed-mobile"}`
      break

    case "dark":
      border = `section-border-b-dashed-dark-mobile ${colorTransition && "section-border-t-dashed-dark-mobile"}`
      break
  }

  return (
    <div className={`${colorTransition && "py-16"} ${bgColor}`}>
      <div className={`${border} pt-16 ${bottomPadding} ${className}`} {...props}>
        {children}
      </div>
    </div>
  )
}
