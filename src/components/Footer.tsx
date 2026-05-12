export function Footer({
  name,
  githubUrl,
  whatsappUrl,
}: {
  name: string
  githubUrl?: string
  whatsappUrl?: string
}) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-slate-500 sm:flex-row">
        <p className="text-center sm:text-left">
          © {year} {name}. Feito com foco em performance e experiência.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              GitHub
            </a>
          ) : null}
          {whatsappUrl ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-emerald-300"
            >
              WhatsApp
            </a>
          ) : null}
          <a href="#" className="text-slate-400 transition hover:text-white">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  )
}
