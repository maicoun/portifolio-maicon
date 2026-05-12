import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

type Props = {
  bio: string
  location: string
  availability: string
}

export function About({ bio, location, availability }: Props) {
  return (
    <section id="sobre" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16"
        >
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Sobre
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Front-end com visão de produto — do onboarding ao dashboard
            </h2>
            <div className="mt-6 space-y-4 text-slate-400 leading-relaxed whitespace-pre-line">
              {bio}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-400" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Local
                </p>
                <p className="font-medium text-white">{location}</p>
              </div>
            </div>
            <div className="h-px bg-white/10" />
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Disponibilidade
              </p>
              <p className="mt-1 font-medium text-emerald-400">{availability}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
