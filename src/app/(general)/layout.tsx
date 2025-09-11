import Footer from "@/components/footer"

import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="flex min-h-screen flex-col px-7 pt-10 pb-7 sm:px-14 sm:pt-36 lg:px-20 xl:px-30">
        <div className="flex w-full flex-col items-center">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
