"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

import { EMail } from "@/lib/constants"
import ContentPadding from "../ui/ContentPadding"
import SectionContainer from "./SectionContainer"
import SectionTitle from "./SectionTitle"
import SVGEnvelope from "@/assets/svg/icons/envelope.svg"
import SVGPaperAirplane from "@/assets/svg/icons/paper_airplane.svg"
import SVGContactIllustration from "@/assets/svg/illustrations/contact_illustration.svg"
import SVGCheckCircle from "@/assets/svg/icons/check_circle.svg"
import SVGXCircle from "@/assets/svg/icons/x_circle.svg"
import SVGSpinner from "@/assets/svg/icons/spinner.svg"

type ToastType = "success" | "error"

interface Toast {
  message: string
  type: ToastType
}

interface ToastComponentProps {
  toast: Toast | null
  onClose: () => void
}

function Toast({ toast, onClose }: ToastComponentProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!toast) return

    setVisible(true)

    const timer = setTimeout(() => {
      // fly out
      setVisible(false)
      // wait until gone
      setTimeout(onClose, 300)
    }, 4000)

    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 w-full">
      <div
        className={`mx-4 rounded-lg border border-neutral-300 bg-neutral-50 p-3 shadow-lg transition-all duration-300 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} `}>
        <div className="flex items-center gap-3">
          {toast.type === "success" && (
            <SVGCheckCircle className="size-6 shrink-0 stroke-[1.5px] text-green-600" />
          )}
          {toast.type === "error" && <SVGXCircle className="size-6 shrink-0 stroke-[1.5px] text-red-600" />}
          <p className="mb-1 min-w-0 text-lg leading-tight break-words">{toast.message}</p>
        </div>
      </div>
    </div>
  )
}

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
      <Link href={`mailto:${EMail.general}`} className="ml-2 pb-1">
        {EMail.general}
      </Link>
    </div>
  )
}

interface ContactFormInputProps {
  id: string
  title: string
  type: string
  placeholder: string
  required?: boolean
}

function ContactFormInput({ id, title, type, placeholder, required = false }: ContactFormInputProps) {
  const textClassname =
    "text-neutral-700 align-top text-xl mt-2 bg-primary-10 border-1 border-primary-50 rounded-lg pt-2 pb-2.5 px-5 w-full"

  return (
    <div>
      <label htmlFor={`f${id}`} className="text-xl font-semibold text-neutral-700">
        {required && <span className="text-red-500">* </span>}
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          id={`f${id}`}
          name={id}
          className={`${textClassname} h-64 resize-none`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          id={`f${id}`}
          name={id}
          className={textClassname}
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
      className={`group flex w-full items-center justify-center rounded-lg pt-2 pb-2.5 text-white transition-colors duration-300 ${loading ? "cursor-not-allowed bg-neutral-900" : "bg-primary-100 hover:cursor-pointer"}`}>
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
  const [toast, setToast] = useState<Toast | null>(null)

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const formRef = e.currentTarget

    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company")
        })
      })

      if (!response.ok) {
        let message = "Request failed"
        try {
          const data = await response.json()
          if (data?.error) {
            message = `Request failed: ${data.error}`
          }
        } catch {}

        throw new Error(message)
      }

      formRef.reset()

      setToast({
        type: "success",
        message: "Nachricht erfolgreich gesendet."
      })
    } catch (error) {
      console.error(error)

      setToast({
        type: "error",
        message: "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContentPadding className="pb-52">
      <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
        <ContactFormInput id="name" title="Name" type="text" placeholder="Max Mustermann" required />
        <ContactFormInput
          id="email"
          title="E-Mail"
          type="email"
          placeholder="max.mustermann@example.com"
          required
        />
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
