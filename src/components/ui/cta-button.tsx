import type { ReactNode, MouseEventHandler } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

type CTAButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  variant?: "default" | "inverted"
}

export default function CTAButton({ children, onClick, variant = "default" }: CTAButtonProps) {
  const isInverted = variant === "inverted"

  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
        isInverted
          ? "border-brand-secondary-100 text-brand-secondary-100 hover:bg-brand-secondary-100 border-2 bg-transparent hover:text-black"
          : "bg-brand-secondary-100 hover:bg-brand-secondary-70 text-black hover:text-black"
      )}>
      <span className="relative z-10 transition-all duration-500">{children}</span>
      <div
        className={cn(
          "absolute right-1 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-44px)]",
          isInverted
            ? "bg-brand-secondary-100 group-hover:text-brand-secondary-100 text-black group-hover:bg-black"
            : "text-brand-secondary-100 group-hover:text-brand-secondary-70 bg-black"
        )}>
        <ArrowRight size={16} />
      </div>
    </Button>
  )
}
