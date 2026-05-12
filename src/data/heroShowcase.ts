/** Pares desktop + mobile do protótipo navegável — showcase na home */
export type HeroShowcaseSlide = {
  id: string
  label: string
  imageDesktop: string
  /** Se omitido, o mockup mobile usa o mesmo arquivo do desktop (crop). */
  imageMobile?: string
}

export const heroShowcaseSlides: HeroShowcaseSlide[] = [
  {
    id: 'login',
    label: 'Login',
    imageDesktop: '/projects/bighub-login-desktop.png',
    imageMobile: '/projects/bighub-login-mobile.png',
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    imageDesktop: '/projects/bighub-onboarding-desktop.png',
    imageMobile: '/projects/bighub-onboarding-mobile.png',
  },
  {
    id: 'site-type',
    label: 'Tipo de site',
    imageDesktop: '/projects/bighub-site-type-desktop.png',
  },
  {
    id: 'templates',
    label: 'Templates',
    imageDesktop: '/projects/bighub-template-desktop.png',
    imageMobile: '/projects/bighub-template-mobile.png',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    imageDesktop: '/projects/bighub-dashboard-desktop.png',
    imageMobile: '/projects/bighub-dashboard-mobile.png',
  },
]

/** Velora+ — destaque + catálogo (desktop) e fluxo mobile (detalhe). */
export const veloraShowcaseSlides: HeroShowcaseSlide[] = [
  {
    id: 'velora-destaque',
    label: 'Destaque',
    imageDesktop: '/projects/velora-plus-hero-desktop.png',
    imageMobile: '/projects/velora-plus-hero-mobile.png',
  },
  {
    id: 'velora-catalogo',
    label: 'Catálogo & detalhe',
    imageDesktop: '/projects/velora-plus-catalogo-desktop.png',
    imageMobile: '/projects/velora-plus-detalhe-mobile.png',
  },
]
