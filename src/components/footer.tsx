import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto flex w-full justify-center">
      <Link href="/legal" className="text-xs text-stone-700 transition-colors hover:text-stone-500">
        Legal Notice
      </Link>
    </footer>
  )
}
