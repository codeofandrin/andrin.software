interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  colorTransition?: boolean
  theme?: string
  bgColor?: string
  noBottomPadding?: boolean
  noTopPadding?: boolean
  noYBorder?: boolean
}

export default function SectionContainer({
  children,
  className,
  colorTransition = false,
  theme = "light",
  bgColor = "bg-inherit",
  noBottomPadding = false,
  noTopPadding = false,
  noYBorder = false,
  ...props
}: SectionContainerProps) {
  const bottomPadding = noBottomPadding ? "" : colorTransition ? "pb-36" : "pb-52 sm:pb-72"
  const topPadding = noTopPadding ? "" : "pt-16 sm:pt-40"

  const isLight = theme === "light"

  // Combined x+b border (desktop only)
  const xAndBBorder = isLight
    ? "section-border-b-dashed-mobile section-border-x-and-b-dashed-desktop"
    : "section-border-b-dashed-dark-mobile section-border-x-and-b-dashed-dark-desktop"

  // x border only (desktop, no y)
  const xBorder = isLight ? "section-border-x-dashed-desktop" : "section-border-x-dashed-dark-desktop"

  // b border only (mobile only, since desktop always has x)
  const bBorder = isLight
    ? "section-border-b-dashed-mobile section-border-b-dashed-desktop"
    : "section-border-b-dashed-dark-mobile section-border-b-dashed-dark-desktop"

  // t border only (mobile only)
  const tBorder = isLight
    ? "section-border-t-dashed-mobile section-border-t-dashed-desktop"
    : "section-border-t-dashed-dark-mobile section-border-t-dashed-dark-desktop"

  if (colorTransition) {
    const innerBorder = [!noYBorder && bBorder, tBorder].filter(Boolean).join(" ")

    return (
      <div className={`${bgColor} w-full sm:flex sm:justify-center`}>
        <div className={`sm:mx-body-desktop py-16 sm:max-w-7xl sm:py-40 ${xBorder}`}>
          <div className={`${innerBorder} ${topPadding} ${bottomPadding} ${className ?? ""}`} {...props}>
            {children}
          </div>
        </div>
      </div>
    )
  }

  // Default: x always active on desktop, combine with b if noYBorder is false
  const border = noYBorder ? xBorder : xAndBBorder

  return (
    <div className="sm:mx-body-desktop sm:max-w-7xl">
      <div
        className={`${border} w-full ${topPadding} ${bottomPadding} ${bgColor} ${className ?? ""}`}
        {...props}>
        {children}
      </div>
    </div>
  )
}
