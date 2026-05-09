import Image from "next/image"
import Link from "next/link"

import SectionContainer from "./SectionContainer"
import ContentPadding from "../ui/ContentPadding"
import SectionTitle from "./SectionTitle"

const ITEMS = [
  {
    type: "Desktop Applikation inkl. Website",
    title: "exifoo",
    description:
      "Desktop-App zum automatischen Umbenennen von Fotos und Videos anhand des Aufnahmedatums – kostenlos und Open-Source",
    link: "https://exifoo.com",
    imagePath: "/images/exifoo_showcase.png",
    imageTransforms: "opacity-25 group-hover:opacity-100"
  },
  {
    type: "Website",
    title: "Zentral Hack",
    description:
      "Website für den grössten Hackathon der Zentralschweiz – verbindet Bildung, Wirtschaft und Community für Innovation und Nachwuchsförderung",
    link: "https://zentralhack.ch",
    imagePath: "/images/zentralhack_showcase.png",
    imageTransforms: "opacity-25 group-hover:opacity-100"
  },
  {
    type: "Website",
    title: "wannfrei.ch",
    description: "Übersichtliche Website für nationale, kantonale und regionale Feiertage der Schweiz",
    link: "https://wannfrei.ch",
    imagePath: "/images/wannfrei_showcase.png",
    imageTransforms: "scale-125 translate-x-2 translate-y-5 opacity-25 group-hover:opacity-100"
  },
  {
    type: "Automatisierung",
    title: "Musik Playlist-Verwaltung",
    description: "Interne Automatisierung zur Verwaltung von mehreren Radio Playlists auf Spotify",
    link: "https://github.com/codeofandrin/srfvirus-spotify",
    imagePath: "/images/music_playlist_showcase.png",
    imageTransforms: "scale-125 translate-y-5 opacity-15 group-hover:opacity-100"
  }
]

interface ProjectRowProps {
  index: number
  type: string
  title: string
  description: string
  link: string
  imagePath: string
  imageTransforms: string
}

function ProjectRow({ index, type, title, description, link, imagePath, imageTransforms }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, "0")

  return (
    <Link
      href={link}
      target="_blank"
      className="group grid grid-cols-1 items-center gap-6 border-b border-neutral-200 py-8 last:border-b-0 lg:grid-cols-[1fr_auto] lg:gap-10">
      {/* Number + title + type + description */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <span className="text-secondary-70/15 block text-[80px] leading-none font-bold select-none lg:text-[100px]">
            {num}
          </span>
          <div className="relative z-10 -mt-6 lg:-mt-8">
            <h3 className="text-primary-100 text-3xl font-bold lg:text-4xl">{title}</h3>
            <p className="text-primary-60 mt-1 font-['DM-Serif'] italic">{type}</p>
          </div>
        </div>
        <p className="text-xl lg:text-2xl">{description}</p>
      </div>

      {/* Image */}
      <div className="relative flex shrink-0 justify-center sm:block">
        <div className="relative h-48 w-full max-w-80 overflow-hidden rounded-lg border border-neutral-200 lg:h-44 lg:w-64">
          <Image
            src={imagePath}
            alt={title}
            fill
            className={`${imageTransforms} object-cover transition-opacity duration-500`}
            priority={false}
          />
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  return (
    <SectionContainer noBBorder>
      <ContentPadding>
        <SectionTitle id="projekte" title="Projekte" subTitle="Arbeiten aus der Praxis" />
        <div>
          {ITEMS.map(({ type, title, description, link, imagePath, imageTransforms }, index) => (
            <ProjectRow
              key={`projects-row-${title}`}
              index={index}
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
