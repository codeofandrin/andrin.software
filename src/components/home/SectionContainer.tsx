interface SectionContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[]
  className?: string
  colorTransition?: boolean
}

export default function SectionContainer({
  children,
  className,
  colorTransition = false,
  ...props
}: SectionContainerProps) {
  let bottomPadding = colorTransition ? "pb-36" : "pb-52"
  return (
    <div className={`section-border-b-dashed-mobile pt-16 ${bottomPadding} ${className}`} {...props}>
      {children}
    </div>
  )
}
