import Image from "next/image"
import Link from "next/link"

import SectionContainer from "./SectionContainer"
import ContentPadding from "../ui/ContentPadding"
import SectionTitle from "./SectionTitle"
import SVGLink from "@/assets/svg/link.svg"

const ITEMS = [
  {
    type: "Desktop Applikation inkl. Website",
    title: "exifoo",
    description: "Tool, um das Aufnahmedatum von Fotos zum Dateinamen hinzuzufügen",
    link: "https://exifoo.com",
    imagePath: "/images/exifoo_showcase.png",
    imageTransforms: "scale-125 translate-x-20 opacity-15"
  },
  {
    type: "Website",
    title: "wannfrei.ch",
    description:
      "Website, um einen Überblick über nationale, kantonale und regionale Feiertage in der Schweiz zu erhalten",
    link: "https://wannfrei.ch",
    imagePath: "/images/wannfrei_showcase.png",
    imageTransforms: "scale-125 translate-y-5 opacity-25"
  },
  {
    type: "Automatisierung",
    title: "Musik Playlist-Verwaltung",
    description: "Interne Automatisierung zur Verwaltung von mehreren Radio Playlists auf Spotify",
    link: "https://github.com/codeofandrin/srfvirus-spotify",
    imagePath: "/images/music_playlist_showcase.png",
    imageTransforms: "scale-125 translate-y-5 opacity-8"
  }
]

interface CardContentProps {
  type: string
  title: string
  description: string
}

function CardContent({ type, title, description }: CardContentProps) {
  return (
    <div className="relative z-10">
      {/* Header */}
      <div className="flex justify-between text-neutral-400">
        <h3 className="font-['DM-Serif'] text-sm font-bold italic">{type}</h3>
        <SVGLink className="h-4 w-4 stroke-[1.5px]" />
      </div>
      {/* Main */}
      <div>
        <h4 className="pt-5 pb-2 text-center text-3xl font-bold text-neutral-900">{title}</h4>
        <p className="text-xl text-neutral-600">{description}</p>
      </div>
    </div>
  )
}

interface CardProps {
  type: string
  title: string
  description: string
  link: string
  imagePath: string
  imageTransforms: string
}

function Card({ type, title, description, link, imagePath, imageTransforms }: CardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`border-secondary-100 relative min-h-54 overflow-hidden rounded-lg border-[1.5px] p-5 hover:cursor-pointer`}>
      {/* Background */}
      <Image
        src={imagePath}
        alt={imagePath}
        fill
        className={`${imageTransforms} overflow-visible object-cover`}
        priority={false}
      />
      {/* Background Overlay */}
      <div className="bg-secondary-100/30 absolute inset-0 backdrop-blur-[2px]" />

      <CardContent type={type} title={title} description={description} />
    </Link>
  )
}

export default function Projects() {
  return (
    <SectionContainer>
      <ContentPadding>
        <SectionTitle title="Projekte" subTitle="Arbeiten aus der Praxis" />
        <div className="grid gap-5">
          {ITEMS.map(({ type, title, description, link, imagePath, imageTransforms }) => (
            <Card
              key={`projects-card-${title}`}
              type={type}
              title={title}
              description={description}
              link={link}
              imagePath={imagePath}
              imageTransforms={imageTransforms}
            />
          ))}
        </div>
      </ContentPadding>
    </SectionContainer>
  )
}
