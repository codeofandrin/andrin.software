export class Routes {
  static self = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://andrin.software"
  static emailResources = `${Routes.self}/emails`
}

export type NavItem = {
  label: string
  href: string
}

export const navItems = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Projekte", href: "/#projekte" },
  { label: "Über mich", href: "/ueber" }
]

export type SocialLink = {
  label: string
  href: string
  icon: "linkedin" | "github"
}

export type ContactInfo = {
  email: string
  socials: SocialLink[]
}

export const contactInfo: ContactInfo = {
  email: "info@aps-digital.ch",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/andrin-schaller", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/codeofandrin", icon: "github" }
  ]
}
