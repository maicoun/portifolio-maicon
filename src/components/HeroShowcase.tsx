import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { HeroShowcaseSlide } from '../data/heroShowcase'
import { DesktopFrame, MobileFrame } from './DeviceFrames'

const AUTO_MS = 5200

type ShowcaseProps = {
  slides: readonly HeroShowcaseSlide[]
  /** Dentro do card de projeto (sem subtítulo extra). */
  embedded?: boolean
  /** Frames e controles menores (ex.: coluna ao lado do texto). */
  compact?: boolean
  /** Prefixo único para ids de abas (vários sliders na página). */
  instanceId?: string
}

export function HeroShowcase({
  slides,
  embedded,
  compact,
  instanceId = 'showcase',
}: ShowcaseProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = slides[index]!

  useEffect(() => {
    if (paused || slides.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const pid = `${instanceId}-`
  const sm = Boolean(compact)

  return (
    <div
      className={`relative flex w-full flex-col ${sm ? 'gap-4' : 'gap-5'} ${embedded ? 'max-w-none' : 'max-w-xl lg:mx-auto lg:max-w-none'}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {!embedded ? (
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 lg:text-left">
          Ecossistema · desktop & mobile
        </p>
      ) : null}

      <div
        className={sm ? 'relative min-h-0' : 'relative min-h-[280px] sm:min-h-[320px]'}
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${sm ? 'gap-4' : 'gap-5'}`}
          >
            <DesktopFrame
              src={slide.imageDesktop}
              alt={`${slide.label} — desktop`}
              size={sm ? 'compact' : 'default'}
            />
            <MobileFrame
              src={slide.imageMobile ?? slide.imageDesktop}
              alt={`${slide.label} — mobile`}
              showCaption={false}
              size={sm ? 'compact' : 'default'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={`flex flex-col items-center ${sm ? 'gap-2.5' : 'gap-3'}`}>
        <div
          role="tablist"
          aria-label="Telas do ecossistema"
          className={`flex flex-wrap items-center justify-center ${sm ? 'gap-2' : 'gap-2'}`}
        >
          {slides.map((s, i) => {
            const active = i === index
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active}
                id={`${pid}tab-${s.id}`}
                onClick={() => setIndex(i)}
                className={`rounded-full font-medium transition ${
                  sm ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-xs'
                } ${
                  active
                    ? 'bg-white text-[#050508] shadow-lg shadow-white/10'
                    : 'border border-white/15 bg-white/5 text-slate-400 hover:border-white/25 hover:text-white'
                }`}
              >
                {s.label}
              </button>
            )
          })}
        </div>

        <div
          className={`flex w-full gap-0.5 overflow-hidden rounded-full bg-white/10 ${sm ? 'h-1 max-w-[280px]' : 'h-1 max-w-xs sm:max-w-md'}`}
        >
          {slides.map((s, i) => (
            <button
              key={`${pid}bar-${s.id}`}
              type="button"
              aria-label={`Ir para ${s.label}`}
              onClick={() => setIndex(i)}
              className={`h-full min-w-0 flex-1 rounded-full transition ${
                i === index ? 'bg-gradient-to-r from-cyan-400 to-violet-400' : 'bg-transparent hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
