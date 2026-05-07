"use client"

import { useHashScroll } from "@/hooks/useHashScroll"
import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useHashScroll()
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body className="h-full">
        <Header />
        <div>{children}</div>$
        <Footer />
      </body>
    </html>
  )
}
