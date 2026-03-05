import Link from "next/link"

import { EMail } from "@/lib/constants"
import ContentPadding from "../ui/ContentPadding"
import SectionContainer from "./SectionContainer"
import SectionTitle from "./SectionTitle"
import SVGEnvelope from "@/assets/svg/icons/envelope.svg"
import SVGPaperAirplane from "@/assets/svg/icons/paper_airplane.svg"
import SVGContactIllustration from "@/assets/svg/illustrations/contact_illustration.svg"

function ContactDescription() {
  return (
    <p className="text-neutral-600">
      Haben Sie eine konkrete Anfrage oder möchten ein Projekt unverbindlich besprechen? Dann freue ich mich
      auf Ihre Kontaktaufnahme.
    </p>
  )
}

function ContactMail() {
  return (
    <div className="text-primary-100 mt-6 flex items-center">
      <SVGEnvelope className="h-5 w-5 stroke-[1.5px]" />
      <p className="ml-2 pb-1">{EMail.general}</p>
    </div>
  )
}

interface ContactFormInputProps {
  title: string
  type: string
  placeholder: string
  required?: boolean
}

function ContactFormInput({ title, type, placeholder, required = false }: ContactFormInputProps) {
  const textClassname =
    "text-neutral-700 align-top text-xl mt-2 bg-primary-10 border-1 border-primary-50 rounded-lg pt-2 pb-2.5 px-5 w-full"

  return (
    <div>
      <label htmlFor={`f${title}`} className="text-xl font-semibold text-neutral-700">
        {required && <span className="text-red-500">* </span>}
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={`f${title}`}
          className={`${textClassname} h-64 resize-none`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          id={`f${title}`}
          className={textClassname}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

function ContactFormSubmitButton() {
  return (
    <button
      type="submit"
      className="group bg-primary-100 flex w-full items-center justify-center rounded-lg pt-2 pb-2.5 text-white hover:cursor-pointer">
      <SVGPaperAirplane className="stroke-primary-100 h-7 w-7 fill-white transition-transform duration-300 group-hover:-rotate-20" />
      <p className="font-semibbold ml-5 pb-1 text-xl">Nachricht senden</p>
    </button>
  )
}

function ContactForm() {
  return (
    <ContentPadding className="pb-52">
      <form action="" className="mt-6 grid gap-6">
        <ContactFormInput title="Name" type="text" placeholder="Max Mustermann" required />
        <ContactFormInput title="E-Mail" type="email" placeholder="max.mustermann@example.com" required />
        <ContactFormInput
          title="Nachricht"
          type="textarea"
          placeholder="z.B. Frage, Anliegen oder Projektbeschrieb"
          required
        />
        <div>
          <ContactFormSubmitButton />
          <p className="mt-2 w-full text-base text-neutral-400 decoration-1">
            Es gelten die{" "}
            <Link href="/datenschutz" className="underline">
              Datenschutzrichtlinien
            </Link>
            .
          </p>
        </div>
      </form>
    </ContentPadding>
  )
}

export default function Contact() {
  return (
    <SectionContainer className="relative" noBottomPadding>
      <ContentPadding>
        <SectionTitle title="Kontakt" subTitle="Gehen wir Ihr Projekt an" theme="light" smallPadding />
        <div className="text-xl">
          <ContactDescription />
          <ContactMail />
        </div>
      </ContentPadding>
      <div className="mt-7">
        <div className="flex justify-center">
          <SVGContactIllustration className="max-w-2/5 -scale-x-100" />
        </div>
        <ContactForm />
      </div>
      <div className="dot-pattern-contact absolute bottom-0 -z-[99]" />
    </SectionContainer>
  )
}
