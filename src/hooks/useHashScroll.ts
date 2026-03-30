import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function useHashScroll() {
    const pathname = usePathname()

    useEffect(() => {
        const hash = window.location.hash
        if (!hash) return

        const id = hash.replace("#", "")

        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }

        return
    }, [pathname])
}
