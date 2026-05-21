import { Section, Row, Column, Text } from "@react-email/components"

export default function Content() {
  return (
    <Section className="py-8 font-medium">
      <Row>
        <Column>
          <Text className="mb-5 text-3xl font-bold">Guten Tag! 👋</Text>
          <Text className="text-xl leading-6">
            Vielen Dank für Ihre Kontaktanfrage. Ich habe Ihre Nachricht erhalten und werde mich so schnell
            wie möglich bei Ihnen melden.
          </Text>
          <Text className="text-xl leading-6">
            Sollten Sie noch Fragen haben, können Sie mir jederzeit direkt auf diese E-Mail antworten.
          </Text>
          <Text className="text-xl">
            Freundliche Grüsse <br />
            Andrin Schaller
          </Text>
        </Column>
      </Row>
    </Section>
  )
}
