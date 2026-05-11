"use client"
import { useRouter } from "next/navigation"

export function useNavigation(onNavigate?: () => void) {
  const router = useRouter()

  function handleRouteChange(e: React.MouseEvent, path: string) {
    e.preventDefault()
    onNavigate?.()

    // Remove hash from URL to prevent Next.js from scrolling to the last anchor
    if (window.location.hash) {
      window.history.replaceState(null, "", path)
    }

    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "instant" })
    }

    router.push(path)
  }

  function handleNavClick(e: React.MouseEvent, link: string) {
    e.preventDefault()
    onNavigate?.()
    const hash = link.split("#")[1]
    if (hash && window.location.hash === `#${hash}`) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      router.push(link)
    }
  }

  return { handleRouteChange, handleNavClick }
}
