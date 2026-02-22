import Highlight from "../ui/Highlight"

interface SectionTitleProps {
  title: string
  subTitle: string
}

export default function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <div className="pb-14 font-bold">
      <h1 className="text-primary-70 font-['DM-Serif'] text-xl italic">{title}</h1>
      <h2 className="text-section-subtitle mt-1 leading-[1.3] font-bold text-white">
        <Highlight px="px-2">{subTitle}</Highlight>
      </h2>
    </div>
  )
}
