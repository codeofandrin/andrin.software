import { Body, Head, Html, Preview, Tailwind, Font } from "@react-email/components"
import Header from "@/components/emails/Header"
import Content from "@/components/emails/contact-confirmation/Content"
import Footer from "@/components/emails/Footer"

interface ContactConfirmationEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactConfirmationEmail({ name, email, message }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Darker Grotesque"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap",
            format: "woff2"
          }}
        />
      </Head>
      <Preview>Danke für Ihre Kontaktanfrage - andrin.software</Preview>
      <Tailwind>
        <Body>
          <Header />
          <Content name={name} email={email} message={message} />
          <Footer />
        </Body>
      </Tailwind>
    </Html>
  )
}
