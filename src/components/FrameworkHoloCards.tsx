import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import HoloCard from './HoloCard/HoloCard.jsx'
import { frameworkCards } from '../data/frameworkCards'

const CARD_WIDTH = 252

export function FrameworkHoloCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="mt-14"
    >
      <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-400">
        Frameworks e linguagens que uso no dia a dia — passe o mouse ou incline no celular para ver o
        efeito holo.
      </p>

      <ul className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-12 sm:gap-x-10">
        {frameworkCards.map((card, i) => (
          <motion.li
            key={card.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="flex w-[min(100%,var(--card-w))] flex-col items-center"
            style={{ '--card-w': `${CARD_WIDTH}px` } as CSSProperties}
          >
            <HoloCard
              image={card.image}
              alt={card.name}
              preset={card.preset}
              foilColor={card.foilColor}
              intensity={card.intensity}
              edgeSparkle={card.edgeSparkle}
              scale={1}
              frame={4}
              glare={0.48}
              tiltMax={14}
              hoverScale={1.05}
              radius={14}
              width={CARD_WIDTH}
              idle
              shadow
              className="mx-auto"
            />
            <span className="font-display mt-4 text-sm font-medium tracking-wide text-slate-300">
              {card.name}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
