import type { MouseEventHandler, ReactNode } from "react"
import { Button } from "@/components/ui/button"

type SecondaryButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function SecondaryButton({ children, onClick }: SecondaryButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="h-12 w-fit cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/20">
      {children}
    </Button>
  )
}
