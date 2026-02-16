import Header from "@/components/header"
import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="h-full">
        <Header />
        <div className="mt-header-mobile">{children}</div>
      </body>
    </html>
  )
}
