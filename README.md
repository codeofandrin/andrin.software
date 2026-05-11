<p align="center">
    <a href="https://andrin.software" target="_blank"><img src="src/assets/svg/brand/logo_large_dark.svg" width="300px"></a>
    <h3 align="center">Individuelle Software Lösungen für Ihr KMU.</h3>
</p>

---

<br/>

## Tech Stack

- Next.js, React, TypeScript
- Tailwind CSS
- React Email + Resend
- Zod

<br/>

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

```bash
npm install
npm run dev
```

Starts the development server on `http://localhost:3000`.

### Build & Production

```bash
npm run build  # Production build
npm start      # Production server
```

### Available Scripts

```bash
npm run format      # Format code with Prettier
npm run typecheck   # TypeScript type checking
npm run check       # Format + typecheck
npm run bump        # Bump version
```

<br/>

## Project Structure

```
src/
├── app/
│   ├── (general)/
│   │   ├── (home)/           # Homepage
│   │   ├── impressum/        # Legal notice
│   │   ├── datenschutz/      # Privacy policy
│   │   └── layout.tsx        # General layout
│   ├── api/
│   │   └── contact/          # Contact form endpoint
│   └── .well-known/          # Discord verification
├── components/
│   ├── home/                 # Homepage sections
│   ├── ui/                   # Reusable UI components
│   └── emails/               # Email components
├── hooks/                    # Custom React hooks
├── lib/
│   ├── constants.ts          # App constants
│   ├── types/                # TypeScript types
│   └── validations/          # Zod schemas
└── emails/                   # Full email templates
```
