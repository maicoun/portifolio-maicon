import { motion } from 'framer-motion'

type Block = {
  title: string
  period: string
  bullets: readonly string[]
}

export function Experience({ blocks }: { blocks: readonly Block[] }) {
  return (
    <section id="experiencia" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Experiência
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            O que eu costumo construir
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Resumo por tipo de entrega — foco em funcionalidade, stack e impacto no produto, sem vínculo com marca
            específica.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0c0c12]/80 p-6 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{b.period}</p>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">{b.title}</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-slate-400">
                {b.bullets.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan-500/80" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
