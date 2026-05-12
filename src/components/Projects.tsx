import { motion } from 'framer-motion'
import { ExternalLink, Monitor } from 'lucide-react'
import { useState } from 'react'
import { IconGithub } from './BrandIcons'
import { DesktopFrame, MobileFrame } from './DeviceFrames'
import { HeroShowcase } from './HeroShowcase'
import { ImageLightbox } from './ImageLightbox'
import type { Project } from '../data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasShowcase = Boolean(project.showcaseSlides?.length)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 backdrop-blur-sm lg:p-10 ${
        hasShowcase
          ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-start lg:gap-8 xl:gap-10'
          : 'grid gap-10 lg:grid-cols-[1fr_280px]'
      }`}
    >
      <div className="flex min-w-0 flex-col">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-slate-400 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>

        <ul className={`flex flex-wrap gap-2 ${hasShowcase ? 'mt-8' : 'mt-5'}`}>
          {project.stack.map((t) => (
            <li
              key={t}
              className="rounded-lg bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300/90 ring-1 ring-cyan-500/20"
            >
              {t}
            </li>
          ))}
        </ul>
        {project.demoYoutubeVideoId ? (
          <div className="mt-8 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Demonstração em vídeo
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg ring-1 ring-white/5">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${project.demoYoutubeVideoId}?rel=0`}
                title={`${project.title} — demonstração`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        ) : null}
        {(project.liveUrl || project.repoUrl) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050508] transition hover:bg-slate-100"
              >
                Ver ao vivo
                <ExternalLink className="size-4" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Código
                <IconGithub className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {hasShowcase && project.showcaseSlides ? (
        <div className="mx-auto w-full max-w-[380px] shrink-0 lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
          <HeroShowcase
            slides={project.showcaseSlides}
            embedded
            compact
            instanceId={project.id}
          />
        </div>
      ) : null}

      {!hasShowcase && project.imageDesktop !== undefined && project.imageMobile !== undefined ? (
        <>
          {lightbox ? (
            <ImageLightbox
              src={lightbox.src}
              alt={lightbox.alt}
              onClose={() => setLightbox(null)}
            />
          ) : null}
          <div className="flex flex-col gap-8 lg:items-stretch">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Monitor className="size-4 text-cyan-500/80" />
                Desktop
              </p>
              <DesktopFrame
                src={project.imageDesktop}
                alt={`${project.title} — versão desktop`}
                onPreview={() =>
                  setLightbox({
                    src: project.imageDesktop!,
                    alt: `${project.title} — desktop`,
                  })
                }
              />
            </div>
            <MobileFrame
              src={project.imageMobile}
              alt={`${project.title} — versão mobile`}
              onPreview={() =>
                setLightbox({
                  src: project.imageMobile!,
                  alt: `${project.title} — mobile`,
                })
              }
            />
          </div>
        </>
      ) : null}
    </motion.article>
  )
}

export function Projects({ items }: { items: Project[] }) {
  return (
    <section id="projetos" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Trabalhos
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Projetos selecionados
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Onde fizer sentido, dá para explorar várias telas em desktop e mobile no próprio card.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-16">
          {items.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
