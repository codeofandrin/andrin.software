interface ContentPaddingProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[]
  className?: string
}

export default function ContentPadding({ children, className, ...props }: ContentPaddingProps) {
  return (
    <div className={`px-body-mobile ${className}`} {...props}>
      {children}
    </div>
  )
}
