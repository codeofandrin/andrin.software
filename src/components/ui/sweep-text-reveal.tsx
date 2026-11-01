"use client"

import { useLayoutEffect, useMemo, useRef, type CSSProperties } from "react"
import { motion, type Easing, type Variants } from "motion/react"
import { cn } from "@/lib/utils"

interface SweepTextRevealProps {
  text: string
  className?: string
  color?: string
  delay?: number
  stagger?: number
  duration?: number
  blur?: string
  y?: number
  sweepColor?: string
  sweepDuration?: number
  sweepDelay?: number
  sweepEase?: Easing | Easing[]
}

export function SweepTextReveal({
  text,
  className,
  color = "#ffffff",
  delay = 0.1,
  stagger = 0.025,
  duration = 0.5,
  blur = "8px",
  y = 0,
  sweepColor = "#fcd34d",
  sweepDuration = 0.8,
  sweepDelay = 0.1,
  sweepEase = "easeInOut"
}: SweepTextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const box = el.getBoundingClientRect()
      el.style.setProperty("--gw", `${box.width}px`)
      el.querySelectorAll<HTMLElement>("[data-char]").forEach((char) => {
        const r = char.getBoundingClientRect()
        char.style.setProperty("--gx", `${box.left - r.left}px`)
      })
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [text])

  const charCount = text.replace(/ /g, "").length
  const sweepStart = delay + Math.max(charCount - 1, 0) * stagger + duration + sweepDelay

  const charVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, filter: `blur(${blur})`, y },
      visible: (i: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration, delay: delay + i * stagger, ease: "easeOut" }
      })
    }),
    [blur, y, duration, delay, stagger]
  )

  const rootVariants = useMemo<Variants>(
    () => ({
      hidden: { "--sweep": 0 },
      visible: {
        "--sweep": 1,
        transition: { duration: sweepDuration, delay: sweepStart, ease: sweepEase }
      }
    }),
    [sweepDuration, sweepStart, sweepEase]
  )

  const sweepStyle: CSSProperties = {
    backgroundImage: `linear-gradient(${sweepColor}, ${sweepColor})`,
    backgroundSize: "calc(var(--gw) * var(--sweep)) 100%",
    backgroundPosition: "var(--gx) 0",
    backgroundRepeat: "no-repeat"
  }

  const words = text.split(" ")
  let charIndex = 0

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={rootVariants}
      style={{ "--sweep": 0, color } as CSSProperties}
      className={cn("inline-block", className)}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIdx) => {
            const idx = charIndex++
            return (
              <motion.span
                key={charIdx}
                data-char
                custom={idx}
                variants={charVariants}
                className="relative inline-block">
                {char}
                {/* Sweep fill */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-clip-text text-transparent"
                  style={sweepStyle}>
                  {char}
                </span>
              </motion.span>
            )
          })}
          {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}
