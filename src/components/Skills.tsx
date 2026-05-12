import { motion } from 'framer-motion'

type Group = { title: string; items: readonly string[] }

export function Skills({ groups }: { groups: readonly Group[] }) {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Stack
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            O que eu uso no dia a dia
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#0c0c12]/80 p-6 backdrop-blur-sm"
            >
              <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
