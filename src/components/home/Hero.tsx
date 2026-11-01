"use client"
import { useRef } from "react"
import { TimelineAnimation } from "@/components/ui/timeline-animation"
import { TextReveal } from "@/components/ui/text-reveal"
import { SweepTextReveal } from "../ui/sweep-text-reveal"
import HeroBackground from "./hero/hero-background"
import CTAButton from "../ui/cta-button"
import SecondaryButton from "../ui/secondary-button"

export default function Hero() {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={timelineRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 text-white">
      <div className="relative mx-auto mt-0 flex w-full flex-col overflow-hidden border-b border-zinc-800">
        <HeroBackground />
        {/* Main hero content */}
        <div className="relative z-10 mx-auto mt-70 flex max-w-[1700px] grow flex-col justify-start px-12 md:px-24 md:pb-40">
          <h1
            aria-label="Webseiten, die Besucher zu Kunden machen"
            className="font-clashdisplay max-w-8xl pb-10 text-[11vw] leading-[1.05] font-medium text-balance sm:text-[8vw] lg:text-8xl">
            {/* Split letters are hidden from screen readers; aria-label carries the text */}
            <span aria-hidden>
              <TextReveal text="Webseiten, die Besucher zu" delay={0.2} stagger={0.035} y={10} />
              <SweepTextReveal
                text="Kunden machen"
                color="#ffffff"
                sweepColor="var(--color-brand-secondary-100)"
                sweepDuration={0.8}
                sweepEase="easeInOut"
                delay={0.2 + 23 * 0.035}
                stagger={0.035}
                y={10}
              />
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-start gap-20 lg:flex-row lg:items-center">
            <div className="flex flex-wrap justify-start gap-4">
              <TimelineAnimation
                once={true}
                animationNum={3}
                delay={1.7}
                stagger={0.1}
                timelineRef={timelineRef}>
                <CTAButton>Projekt besprechen</CTAButton>
              </TimelineAnimation>
              <TimelineAnimation
                once={true}
                animationNum={4}
                delay={1.7}
                stagger={0.2}
                timelineRef={timelineRef}>
                <SecondaryButton>Über mich</SecondaryButton>
              </TimelineAnimation>
            </div>
            <TimelineAnimation
              once={true}
              as="p"
              animationNum={5}
              delay={1.7}
              stagger={0.3}
              timelineRef={timelineRef}
              className="max-w-lg text-xl leading-relaxed font-light text-neutral-100">
              Als Ihr Ansprechpartner für Webseiten und SEO unterstütze ich Sie von der Konzeption bis zum
              Betrieb Ihrer eigenen digitalen Lösung. Sichtbar und verkaufsstark.
            </TimelineAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
