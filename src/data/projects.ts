import type { HeroShowcaseSlide } from './heroShowcase'
import { heroShowcaseSlides, veloraShowcaseSlides } from './heroShowcase'

/**
 * Projetos — imagens em `public/projects/` ou `showcaseSlides` para galeria desktop/mobile.
 */
export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  /** Se omitido, o botão “Ver ao vivo” não é exibido. */
  liveUrl?: string
  repoUrl?: string
  /** Slider com várias telas (desktop + mobile); se definido, substitui imageDesktop/Mobile. */
  showcaseSlides?: readonly HeroShowcaseSlide[]
  imageDesktop?: string
  imageMobile?: string
  /** ID do vídeo no YouTube (trecho após `v=` na URL de assistir). */
  demoYoutubeVideoId?: string
}

export const projects: Project[] = [
  {
    id: 'velora-plus',
    title: 'Velora+',
    description: `Protótipo de experiência de streaming: catálogo em destaque, navegação por títulos e sensação de app de filmes e séries — com foco em hierarquia visual, cartazes e leitura rápida em telas grandes e pequenas.`,
    stack: ['Streaming', 'UX', 'UI', 'Protótipo', 'Web', 'Mobile'],
    showcaseSlides: veloraShowcaseSlides,
    demoYoutubeVideoId: 'g4tEJensQus',
    liveUrl: 'https://velora-stream-five.vercel.app/',
    repoUrl: 'https://github.com/maicoun/velora-stream',
  },
  {
    id: 'bighub-ecossistema',
    title: 'Ecossistema',
    description: `Protótipo navegável: login, onboarding (“O que desejas?”), jornada com seleção de tipo de site, galeria de templates e dashboard de performance com KPIs e visão por canal.

Destaque para consistência visual, formulários e fluxos guiados — pensados para web e mobile.`,
    stack: ['Angular', 'TypeScript', 'SCSS', 'UX', 'Figma', 'SaaS'],
    liveUrl: 'https://ecossistema-maicon.figma.site/login',
    showcaseSlides: heroShowcaseSlides,
  },
  {
    id: 'bigsales',
    title: 'Gerador de sites',
    description: `Fluxo de entrada e vitrine do produto: gerador para criar landing pages, site institucional, loja online e operação em modelo dropshipping — com biblioteca de templates e pré-visualização em desktop e mobile.

A identidade visual reforça conversão (login, cadastro e CTAs) e a composição mostra a variedade de layouts que o usuário pode publicar a partir da mesma base.`,
    stack: ['Angular', 'TypeScript', 'SCSS', 'UX', 'E-commerce', 'Landing pages'],
    liveUrl: 'https://onboarding.bigsales.store/login',
    imageDesktop: '/projects/bigsales-desktop.png',
    imageMobile: '/projects/bigsales-mobile.png',
  },
  {
    id: 'nimbus-crm',
    title: 'Nimbus · Painel comercial',
    description: `Estudo de interface para um painel interno de CRM: visão de pipeline, metas trimestrais e funil por etapa.

O foco foi hierarquia clara em densidade alta de dados, filtros rápidos e leitura mobile-first para times em campo — sem depender de zoom ou scroll lateral.`,
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Acessibilidade'],
    imageDesktop: '/projects/nimbus-crm-desktop.png',
    imageMobile: '/projects/nimbus-crm-mobile.png',
  },
]
