import { Section, Row, Column, Text } from "@react-email/components"

interface ContentProps {
  name: string
  email: string
  message: string
}

export default function Content({ name, email, message }: ContentProps) {
  return (
    <Section className="py-8 font-medium">
      <Row>
        <Column>
          <Text className="mb-5 text-3xl font-bold">Guten Tag {name}! 👋</Text>
          <Text className="mb-4 text-lg leading-6">
            Vielen Dank für Ihre Kontaktanfrage. Ich habe Ihre Nachricht erhalten und werde mich so schnell
            wie möglich bei Ihnen melden.
          </Text>
        </Column>
      </Row>
      <Row className="mt-5">
        <Column className="rounded-lg border border-neutral-200 p-5">
          <Text className="mb-4 text-2xl font-semibold">Ihre Angaben im Überblick</Text>
          <Text className="text-lg">
            <span className="font-semibold">Name:</span> {name}
          </Text>
          <Text className="text-lg">
            <span className="font-semibold">E-Mail:</span> {email}
          </Text>
          <Text className="text-lg">
            <span className="font-semibold">Ihre Nachricht:</span>
          </Text>
          <Text className="text-lg whitespace-pre-line">{message}</Text>
        </Column>
      </Row>
      <Row>
        <Column className="pt-5">
          <Text className="mb-2 text-lg leading-6">
            Sollten Sie noch Fragen haben, können Sie mir jederzeit direkt auf diese E-Mail antworten.
          </Text>
          <Text className="text-lg">
            Freundliche Grüsse <br />
            Andrin Schaller
          </Text>
        </Column>
      </Row>
    </Section>
  )
}
