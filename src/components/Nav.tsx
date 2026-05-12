import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export function Nav({ name }: { name: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#050508]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          {name.split(' ')[0]}
          <span className="text-cyan-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-[#050508] shadow-lg shadow-cyan-500/20 transition hover:brightness-110 md:inline-flex"
        >
          Vamos conversar
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0c0c12]/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 text-center text-sm font-medium text-[#050508]"
              onClick={() => setOpen(false)}
            >
              Vamos conversar
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
