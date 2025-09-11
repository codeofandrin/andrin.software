import Footer from "@/components/footer"

import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="flex h-screen flex-col p-7 sm:px-14 lg:px-20 xl:px-30">
        <div className="flex w-full flex-col items-center">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
