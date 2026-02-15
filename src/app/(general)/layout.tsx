import "../globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="">
        <div className="">{children}</div>
      </body>
    </html>
  )
}
