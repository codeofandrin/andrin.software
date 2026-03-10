export interface ContactRequest {
    name: string
    email: string
    message: string
    company: string // honeypot
}

export interface ContactResponse {
    success: boolean
}
