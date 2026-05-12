import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { IconGithub, IconLinkedin } from './BrandIcons'

type Props = {
  email: string
  linkedinUrl: string
  githubUrl?: string
  whatsappUrl?: string
  whatsappLabel?: string
}

export function Contact({
  email,
  linkedinUrl,
  githubUrl,
  whatsappUrl,
  whatsappLabel,
}: Props) {
  return (
    <section id="contato" className="scroll-mt-24 px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/30 blur-[90px]" />

          <div className="relative">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Contato
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Vamos construir algo memorável juntos
            </h2>
            <p className="mt-4 max-w-lg text-slate-400">
              Envie um email, chame no WhatsApp ou conecte-se no LinkedIn e GitHub — produto,
              front-end e oportunidades de colaboração.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#050508] shadow-xl transition hover:bg-slate-100"
              >
                <Mail className="size-4" />
                {email}
              </a>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-6 py-3.5 text-sm font-medium text-emerald-100 transition hover:border-emerald-400/50 hover:bg-emerald-500/15"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp {whatsappLabel ? `· ${whatsappLabel}` : null}
                </a>
              ) : null}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                <IconLinkedin className="size-4" />
                LinkedIn
              </a>
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  <IconGithub className="size-4" />
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
