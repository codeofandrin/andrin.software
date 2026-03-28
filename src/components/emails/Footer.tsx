import { Section, Link, Column, Row, Text } from "@react-email/components"

import { Routes } from "@/lib/constants"

export default function Footer() {
  return (
    <Section className="border-t-1 border-dashed border-black/15 pt-5">
      <Row>
        <Column align="center">
          <Row>
            <Link className="text-sm text-neutral-400" href={`${Routes.self}/impressum`}>
              Impressum
            </Link>
            <Link className="ml-10 text-sm text-neutral-400" href={`${Routes.self}/datenschutz`}>
              Datenschutz
            </Link>
          </Row>
          <Text className="mt-2 text-sm text-neutral-400">
            Copyright © 2026 andrin.software. Alle Rechte vorbehalten.
          </Text>
        </Column>
      </Row>
    </Section>
  )
}
