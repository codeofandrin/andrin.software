interface HighlightProps {
  children: string
  px: string
}

export default function Highlight({ children, px }: HighlightProps) {
  return (
    <span
      className={`${px} bg-[linear-gradient(theme(colors.primary.100),theme(colors.primary.100))] box-decoration-clone bg-[length:100%_1.1em] bg-[position:0_80%] bg-no-repeat text-white`}>
      {children}
    </span>
  )
}
