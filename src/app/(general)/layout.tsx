"use client"

import { useScrollToTop } from "@/hooks/useScrollToTop"
import "../globals.css"
import Navbar from "@/components/navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useScrollToTop()
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
