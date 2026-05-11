import { useState, useEffect } from "react"

import SVGCheckCircle from "@/assets/svg/icons/check_circle.svg"
import SVGXCircle from "@/assets/svg/icons/x_circle.svg"

type ToastType = "success" | "error"

export interface ToastData {
  message: string
  type: ToastType
}

interface ToastComponentProps {
  toast: ToastData | null
  onClose: () => void
}

export default function Toast({ toast, onClose }: ToastComponentProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!toast) return

    setVisible(true)

    const timer = setTimeout(() => {
      // fly out
      setVisible(false)
      // wait until gone
      setTimeout(onClose, 300)
    }, 4000)

    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 z-[999] w-full sm:right-6 sm:bottom-6 sm:left-auto sm:w-auto">
      <div
        className={`mx-4 rounded-lg border px-3 py-2 shadow-lg transition-all duration-300 ease-out sm:mx-0 sm:max-w-lg sm:min-w-80 sm:px-5 sm:py-3 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${
          toast.type === "success"
            ? "border-green-300 bg-green-100 text-green-900"
            : "border-red-300 bg-red-100 text-red-900"
        }`}>
        <div className="flex items-center gap-3">
          {toast.type === "success" && (
            <SVGCheckCircle className="size-6 shrink-0 stroke-[1.5px] text-green-600 sm:size-7" />
          )}
          {toast.type === "error" && (
            <SVGXCircle className="size-6 shrink-0 stroke-[1.5px] text-red-600 sm:size-7" />
          )}
          <p
            className={`mb-1 min-w-0 text-lg leading-tight break-words sm:text-xl ${toast.type === "success" ? "text-green-900" : "text-red-900"}`}>
            {toast.message}
          </p>
        </div>
      </div>
    </div>
  )
}
