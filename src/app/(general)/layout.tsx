import Header from "@/components/ui/Header"
import Footer from "@/components/ui/Footer"
import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="h-full">
        <Header />
        <div className="mt-header-mobile">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
