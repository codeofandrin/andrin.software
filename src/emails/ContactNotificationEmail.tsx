interface ContactNotificationEmailProps {
  name: string
  email: string
  message: string
}

export default function ContactNotificationEmail({ name, email, message }: ContactNotificationEmailProps) {
  return (
    <div>
      <p>This is the ContactNotificationEmail component</p>
      <p>Name: {name}</p>
      <p>E-Mail: {email}</p>
      <p>Nachricht: {message}</p>
    </div>
  )
}
