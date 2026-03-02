interface HighlightProps {
  children: string
  px: string
  theme?: string
}

export default function Highlight({ children, px, theme = "light" }: HighlightProps) {
  let bgColor
  let textColor
  switch (theme) {
    case "light":
      bgColor = "bg-[linear-gradient(theme(colors.primary.100),theme(colors.primary.100))]"
      textColor = "text-white"
      break

    case "dark":
      bgColor = "bg-[linear-gradient(theme(colors.white),theme(colors.white))]"
      textColor = "text-primary-100"
      break
  }

  return (
    <span
      className={`${px} ${bgColor} box-decoration-clone bg-[length:100%_1.1em] bg-[position:0_80%] bg-no-repeat ${textColor}`}>
      {children}
    </span>
  )
}
