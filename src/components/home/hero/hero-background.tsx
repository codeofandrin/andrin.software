import { GrainGradient } from "@paper-design/shaders-react"

export default function HeroBackground() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="absolute inset-0 z-10 bg-black/30" />
        <GrainGradient
          className="absolute inset-0"
          colors={["#9e5200", "#007acc", "#013c8e"]}
          colorBack="#09090b"
          softness={0.5}
          intensity={0.5}
          noise={0}
          shape="corners"
          speed={1}
          maxPixelCount={1920 * 1920}
          scale={1.2}
        />
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <div className="absolute inset-0 z-10 bg-black/30" />
        <GrainGradient
          className="absolute inset-0"
          colors={["#9e5200", "#007acc", "#013c8e"]}
          colorBack="#09090b"
          softness={0.5}
          intensity={0.5}
          noise={0}
          shape="corners"
          speed={1}
          scale={1}
          maxPixelCount={1920 * 1080}
        />
      </div>
    </>
  )
}
