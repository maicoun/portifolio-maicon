import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'
import portraitImg from '../assets/maicon-portrait.png'

type Props = {
  name: string
  role: string
  roleHighlight: string
  tagline: string
}

export function Hero({ name, role, roleHighlight, tagline }: Props) {
  return (
    <section className="relative overflow-hidden pl-2 pr-4 pb-24 pt-16 sm:pl-3 sm:pr-6 sm:pt-24 md:pb-32 lg:pl-4 lg:pr-8">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_min(44vw,460px)] lg:gap-6 xl:gap-8">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-cyan-400" aria-hidden />
            {role} · {roleHighlight}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-8 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Olá, eu sou{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              {name}
            </span>
            <span className="text-slate-600">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050508] shadow-xl shadow-white/10 transition hover:bg-slate-100"
            >
              Ver projetos
              <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-cyan-500/40 hover:bg-white/10"
            >
              Contato
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[min(100%,420px)] justify-center sm:max-w-[460px] lg:mx-0 lg:max-w-none lg:justify-end"
        >
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-cyan-500/25 via-transparent to-violet-600/25 opacity-80 blur-2xl"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
            <div className="h-[108%] w-[108%] rounded-[2rem] border border-white/[0.07] bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,211,238,0.12),transparent_50%)]" />
          </div>

          <motion.div
            className="relative w-full max-w-[min(100%,420px)] sm:max-w-[460px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="absolute -right-3 -top-3 size-16 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:size-20"
              aria-hidden
            />
            <div
              className="absolute -bottom-2 -left-2 h-12 w-24 rounded-full bg-gradient-to-r from-cyan-400/30 to-violet-500/30 blur-xl sm:h-14 sm:w-28"
              aria-hidden
            />

            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-cyan-400/90 via-violet-400/50 to-violet-600/90 p-[2.5px] shadow-2xl shadow-cyan-500/15">
              <div className="overflow-hidden rounded-[1.62rem] bg-[#0c0c12] ring-1 ring-white/10">
                <img
                  src={portraitImg}
                  alt={`${name} — retrato`}
                  className="block h-auto w-full max-h-[min(78vh,640px)] object-contain object-center"
                  width={800}
                  height={800}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <p className="font-display mt-4 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 lg:text-right">
              Estúdio · código no ar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
