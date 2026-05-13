export class EmailObfuscated {
  static general = "YldGcGJFQmhibVJ5YVc0dWMyOW1kSGRoY21VPQ==" // base64 encoded (2x)
}

export class Socials {
  static linkedInPersonal = "https://linkedin.com/in/andrin-schaller"
  static linkedInBusiness = "https://linkedin.com/company/andrin-software"
}

export class Routes {
  static self = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://andrin.software"
  static emailResources = `${Routes.self}/emails`
}

export const MENU_ITEMS = [
  { name: "Leistungen", link: "/#leistungen" },
  { name: "Projekte", link: "/#projekte" },
  { name: "Über mich", link: "/#ueber-mich" },
  { name: "Kontakt", link: "/#kontakt" }
]
