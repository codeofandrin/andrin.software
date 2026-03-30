import Highlight from "../ui/Highlight"

interface SectionTitleProps {
  title: string
  subTitle: string
  theme?: string
  smallPadding?: boolean
  id?: string
}

export default function SectionTitle({
  title,
  subTitle,
  theme = "light",
  smallPadding = false,
  id
}: SectionTitleProps) {
  let titleTextColor
  switch (theme) {
    case "light":
      titleTextColor = "text-primary-70"
      break

    case "dark":
      titleTextColor = "text-primary-40"
      break
  }

  return (
    <div className={`${smallPadding ? "pb-6" : "pb-14"} font-bold`}>
      <h1 className={`${titleTextColor} scroll-mt-32 font-['DM-Serif'] text-xl italic`} id={id}>
        {title}
      </h1>
      <h2 className={`text-section-subtitle mt-1 leading-[1.3] font-bold`}>
        <Highlight px="px-2" theme={theme}>
          {subTitle}
        </Highlight>
      </h2>
    </div>
  )
}
