"use client"

import { useState } from "react"

import ContentPadding from "@/components/ui/ContentPadding"
import SectionContainer from "./SectionContainer"
import SectionTitle from "./SectionTitle"
import Toast, { ToastData } from "../ui/Toast"
import SVGPaperAirplane from "@/assets/svg/icons/paper_airplane.svg"
import SVGContactIllustration from "@/assets/svg/illustrations/contact_illustration.svg"
import SVGSpinner from "@/assets/svg/icons/spinner.svg"

function ContactDescription() {
  return (
    <p className="text-neutral-600">
      Haben Sie eine konkrete Anfrage oder möchten ein Projekt unverbindlich besprechen? Dann freue ich mich
      auf Ihre Kontaktaufnahme.
    </p>
  )
}

interface ContactFormInputProps {
  id: string
  title: string
  type: string
  placeholder: string
  required?: boolean
  containerClassName?: string
}

function ContactFormInput({
  id,
  title,
  type,
  placeholder,
  required = false,
  containerClassName = ""
}: ContactFormInputProps) {
  const textClassname = `text-neutral-700 align-top text-xl mt-2 bg-primary-10 border-1 border-primary-50 rounded-lg w-full`

  return (
    <div className={`${containerClassName} w-full`}>
      <label htmlFor={`f${id}`} className="text-xl font-semibold text-neutral-700">
        {required && <span className="text-red-500">* </span>}
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={`f${id}`}
          name={id}
          className={`${textClassname} h-64 resize-none px-5 pt-2 pb-2.5`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          id={`f${id}`}
          name={id}
          className={`${textClassname} px-5 pt-2 pb-2.5 lg:px-4 lg:pt-1 lg:pb-1.5`}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

interface ContactFormSubmitButtonProps {
  loading: boolean
}

function ContactFormSubmitButton({ loading }: ContactFormSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`group flex w-full items-center justify-center rounded-lg pt-2 pb-2.5 text-white transition-colors duration-300 lg:pt-1 lg:pb-1.5 ${loading ? "cursor-not-allowed bg-neutral-900" : "bg-primary-100 hover:cursor-pointer"}`}>
      {loading ? (
        <SVGSpinner className="size-6 animate-spin stroke-[1.5px] text-white" />
      ) : (
        <SVGPaperAirplane className="stroke-primary-100 size-6 fill-white transition-transform duration-300 group-hover:-rotate-20" />
      )}

      <p className="ml-5 pb-1 text-xl font-semibold">{loading ? "Wird gesendet..." : "Nachricht senden"}</p>
    </button>
  )
}

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const formRef = e.currentTarget

    setLoading(true)

    const ERROR_MESSAGES: Record<number, string> = {
      400: "Ungültige Eingabe. Bitte überprüfen Sie Ihre Angaben.",
      429: "Zu viele Anfragen. Bitte versuchen Sie es später erneut.",
      500: "Serverfehler. Bitte versuchen Sie es später erneut."
    }

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company")
        })
      })

      if (!response.ok) {
        throw new Error(
          ERROR_MESSAGES[response.status] ??
            "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen."
        )
      }

      formRef.reset()
      setToast({ type: "success", message: "Nachricht erfolgreich gesendet." })
    } catch (error) {
      console.error(error)
      setToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-6 lg:mt-0 lg:gap-12">
        <div className="grid gap-6 lg:flex lg:w-full">
          <ContactFormInput
            containerClassName="lg:basis-3/7"
            id="name"
            title="Name"
            type="text"
            placeholder="Max Mustermann"
            required
          />
          <ContactFormInput
            containerClassName="lg:basis-4/7"
            id="email"
            title="E-Mail"
            type="email"
            placeholder="max.mustermann@example.com"
            required
          />
        </div>
        <ContactFormInput
          id="message"
          title="Nachricht"
          type="textarea"
          placeholder="z.B. Frage, Anliegen oder Projektbeschrieb"
          required
        />
        {/* Honeypot */}
        <input type="text" name="company" className="hidden" />
        <div>
          <ContactFormSubmitButton loading={loading} />
        </div>
      </form>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}

export default function Contact() {
  return (
    <SectionContainer className="relative" noBBorder>
      <ContentPadding>
        <SectionTitle
          id="kontakt"
          title="Kontakt"
          subTitle="Gehen wir Ihr Projekt an"
          theme="light"
          smallPadding
        />
        <div className="lg:flex lg:gap-30">
          <div className="lg:flex lg:basis-2/5 lg:flex-col lg:justify-between">
            <div className="text-xl sm:text-2xl">
              <ContactDescription />
            </div>
            <div className="mt-7 flex justify-center lg:mt-0">
              <SVGContactIllustration className="w-1/2 max-w-[200px] -scale-x-100 lg:w-full" />
            </div>
          </div>
          <div className="lg:basis-3/5">
            <ContactForm />
          </div>
        </div>
      </ContentPadding>
      <div className="dot-pattern-contact absolute bottom-0 -z-[99]" />
    </SectionContainer>
  )
}
