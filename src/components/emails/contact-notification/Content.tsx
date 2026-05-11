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
          <Text className="mb-5 text-3xl font-bold">Neue Kontaktanfrage von {name} 📥</Text>
        </Column>
      </Row>
      <Row>
        <Column className="rounded-lg border border-neutral-200 p-5">
          <Text className="mb-4 text-2xl font-semibold">Angaben im Überblick</Text>
          <Text className="text-xl">
            <span className="font-semibold">Name:</span> {name}
          </Text>
          <Text className="text-xl">
            <span className="font-semibold">E-Mail:</span> {email}
          </Text>
          <Text className="text-xl">
            <span className="font-semibold">Nachricht:</span>
          </Text>
          <Text className="text-xl whitespace-pre-line">{message}</Text>
        </Column>
      </Row>
    </Section>
  )
}
