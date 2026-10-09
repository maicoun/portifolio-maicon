import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HoloCard from './HoloCard/HoloCard.jsx'
import { frameworkCards } from '../data/frameworkCards'

const CARD_WIDTH = 252

export function FrameworkHoloCards() {
  const trackRef = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: false, scrollable: false })

  function syncEdges() {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft >= maxScroll - 2, scrollable: maxScroll > 2 })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new ResizeObserver(syncEdges)
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  function slide(direction: number) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * (CARD_WIDTH + 28),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="framework-carousel-region mt-14"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Frameworks e linguagens"
    >
      <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-400">
        Frameworks e linguagens que uso no dia a dia — use as setas ou deslize para explorar.
      </p>

      <ul
        id="framework-carousel"
        ref={trackRef}
        onScroll={syncEdges}
        tabIndex={0}
        aria-label="Cards de tecnologias"
        onKeyDown={(event) => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
          event.preventDefault()
          slide(event.key === 'ArrowRight' ? 1 : -1)
        }}
        className="framework-carousel mx-auto mt-6 flex max-w-[1132px] gap-7 overflow-x-auto py-8 focus-visible:outline-2 focus-visible:outline-cyan-400"
      >
        {frameworkCards.map((card) => (
          <li key={card.id} className="flex w-[252px] shrink-0 snap-start flex-col items-center">
            <HoloCard
              image={card.image}
              alt={card.name}
              preset={card.preset}
              foilColor={card.foilColor}
              intensity={card.intensity}
              edgeSparkle={card.edgeSparkle}
              scale={1}
              frame={4}
              glare={0.2}
              tiltMax={0}
              hoverScale={1}
              radius={14}
              width={CARD_WIDTH}
              idle={false}
              shadow
              className="mx-auto"
            />
            <span className="font-display mt-4 text-sm font-medium tracking-wide text-slate-300">
              {card.name}
            </span>
          </li>
        ))}
      </ul>

      {edges.scrollable && <div className="mt-2 flex items-center justify-center gap-6">
        <button type="button" aria-label="Card anterior" aria-controls="framework-carousel" disabled={edges.start} onClick={() => slide(-1)} className="rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10 disabled:cursor-default disabled:opacity-25">
          <ChevronLeft size={20} />
        </button>
        <button type="button" aria-label="Próximo card" aria-controls="framework-carousel" disabled={edges.end} onClick={() => slide(1)} className="rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10 disabled:cursor-default disabled:opacity-25">
          <ChevronRight size={20} />
        </button>
      </div>}
    </motion.div>
  )
}
