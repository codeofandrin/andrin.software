import { Body, Head, Html, Preview, Tailwind } from "@react-email/components"

interface ContactConfirmationEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactConfirmationEmail({ name, email, message }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Danke für Ihre Kontaktanfrage - andrin.software</Preview>
      <Tailwind>
        <Body>
          <div>
            <p>This is the ContactConfirmationEmail component</p>
            <p>Name: {name}</p>
            <p>E-Mail: {email}</p>
            <p>Nachricht: {message}</p>
          </div>
        </Body>
      </Tailwind>
    </Html>
  )
}
