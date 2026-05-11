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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`body { -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
        `}
        </style>
        <Font
          fontFamily="Darker Grotesque"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/darkergrotesque/v10/U9MK6cuh-mLQlC4BKCtayOfARkSVgb381b-W8-QDqXwFqk7183BQYUUAOE8.woff2",
            format: "woff2"
          }}
          fontWeight={500}
        />
        <Font
          fontFamily="Darker Grotesque"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/darkergrotesque/v10/U9MK6cuh-mLQlC4BKCtayOfARkSVgb381b-W8-QDqXzprU7183BQYUUAOE8.woff2",
            format: "woff2"
          }}
          fontWeight={600}
        />
        <Font
          fontFamily="Darker Grotesque"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/darkergrotesque/v10/U9MK6cuh-mLQlC4BKCtayOfARkSVgb381b-W8-QDqXzQrU7183BQYUUAOE8.woff2",
            format: "woff2"
          }}
          fontWeight={700}
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
