import { ContactRequest } from "@/types/api/contact"
import * as EmailValidator from "email-validator"
import { Resend } from "resend"

import { EMail } from "@/lib/constants"
import ContactNotificationEmail from "@/emails/ContactNotificationEmail"
import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    const body = await parseBody(request)
    if (!body) {
        return Response.json({ error: "Invalid JSON body" }, { status: 400 })
    }

    // company as honeypot
    const { name, email, message, company } = body
    if (!isValidContactRequest(name, email, message, company)) {
        return Response.json({ error: "Invalid request data" }, { status: 400 })
    }

    try {
        const notification = await sendNotificationEmail(name, email, message)
        if (!notification.success) {
            return Response.json({ error: "Failed to send notification email" }, { status: 500 })
        }

        const confirmation = await sendConfirmationEmail(name, email, message)
        if (!confirmation.success) {
            console.error("Confirmation email failed:", confirmation.error)
        }

        return Response.json({ success: true })
    } catch (error) {
        console.error("Unhandled error:", error)
        return Response.json({ error: "Internal server error" }, { status: 500 })
    }
}

async function parseBody(request: Request): Promise<ContactRequest | null> {
    try {
        return await request.json()
    } catch {
        return null
    }
}

function isValidContactRequest(name: string, email: string, message: string, company: string): boolean {
    // company as a honeypot to prevent bot spam
    if (company) return false
    if (!name?.trim()) return false
    if (!message?.trim()) return false
    if (!EmailValidator.validate(email)) return false
    return true
}

async function sendNotificationEmail(name: string, email: string, message: string) {
    const { data, error } = await resend.emails.send({
        from: `andrin.software <${EMail.general}>`,
        replyTo: email,
        to: [EMail.general],
        subject: `andrin.software - Neue Kontaktanfrage von ${name}`,
        react: ContactNotificationEmail({ name, email, message })
    })

    if (error) {
        console.error("Notification email error:", error)
        return { success: false, error }
    }
    return { success: true, data }
}

async function sendConfirmationEmail(name: string, email: string, message: string) {
    const { data, error } = await resend.emails.send({
        from: `andrin.software <${EMail.general}>`,
        replyTo: EMail.general,
        to: [email],
        subject: `Danke für Ihre Kontaktanfrage`,
        react: ContactConfirmationEmail({ name, email, message })
    })

    if (error) {
        return { success: false, error }
    }
    return { success: true, data }
}
