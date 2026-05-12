import { ImageIcon, Monitor, Smartphone } from 'lucide-react'

export type FrameSize = 'default' | 'compact'

export function ScreenPlaceholder({ variant }: { variant: 'desktop' | 'mobile' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-white/20 bg-white/[0.03] text-slate-500 ${
        variant === 'mobile' ? 'aspect-[9/19] rounded-[2rem]' : 'aspect-video rounded-xl'
      }`}
    >
      <ImageIcon className="size-8 opacity-40" aria-hidden />
      <span className="text-xs font-medium">
        {variant === 'desktop' ? 'Print desktop' : 'Print mobile'}
      </span>
      <span className="max-w-[12rem] px-4 text-center text-[11px] leading-snug text-slate-600">
        Adicione a imagem em <code className="text-cyan-500/80">public/projects/</code>
      </span>
    </div>
  )
}

type DesktopFrameProps = {
  src: string
  alt: string
  size?: FrameSize
  /** Abre visualização ampliada (ex.: modal). */
  onPreview?: () => void
}

function DesktopFrameChrome({
  src,
  alt,
  c,
}: {
  src: string
  alt: string
  c: boolean
}) {
  return (
    <>
      <div
        className={`flex items-center gap-2 border-b border-white/10 ${
          c ? 'px-2.5 py-2' : 'px-3 py-2'
        }`}
      >
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-amber-500/80" />
        <span className="size-2.5 rounded-full bg-emerald-500/80" />
        <div
          className={`ml-1 flex flex-1 items-center gap-1.5 rounded border border-white/5 bg-black/40 text-slate-500 ${
            c ? 'px-2.5 py-1 text-[10px]' : 'ml-2 px-3 py-1 text-[10px]'
          }`}
        >
          <Monitor className="size-3" aria-hidden />
          preview
        </div>
      </div>
      <div className="p-1.5">
        {src ? (
          <img
            src={src}
            alt={alt}
            className={
              c
                ? 'h-36 w-full rounded-lg object-cover object-top sm:h-40 md:h-44'
                : 'aspect-video w-full rounded-lg object-cover object-top'
            }
            loading="lazy"
          />
        ) : (
          <ScreenPlaceholder variant="desktop" />
        )}
      </div>
    </>
  )
}

export function DesktopFrame({ src, alt, size = 'default', onPreview }: DesktopFrameProps) {
  const c = size === 'compact'
  const interactive = Boolean(onPreview && src)

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onPreview}
        aria-label={`Ampliar imagem: ${alt}`}
        className={`group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-[#12121a] text-left shadow-2xl shadow-black/50 ring-1 ring-white/5 outline-none transition hover:ring-cyan-400/35 focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
          c ? 'shadow-lg' : ''
        }`}
      >
        <DesktopFrameChrome src={src} alt={alt} c={c} />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-md bg-black/65 px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow-sm transition group-hover:opacity-100">
          Clique para ampliar
        </span>
      </button>
    )
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#12121a] shadow-2xl shadow-black/50 ring-1 ring-white/5 ${
        c ? 'shadow-lg' : ''
      }`}
    >
      <DesktopFrameChrome src={src} alt={alt} c={c} />
    </div>
  )
}

type MobileFrameProps = {
  src: string
  alt: string
  showCaption?: boolean
  size?: FrameSize
  onPreview?: () => void
}

export function MobileFrame({
  src,
  alt,
  showCaption = true,
  size = 'default',
  onPreview,
}: MobileFrameProps) {
  const c = size === 'compact'
  const interactive = Boolean(onPreview && src)

  const phoneBody = (
    <>
      <div
        className={`rounded-[2.25rem] border border-white/15 bg-gradient-to-b from-[#1e1e2a] to-[#0c0c12] shadow-2xl shadow-black/60 ring-1 ring-white/10 ${
          c ? 'rounded-[2rem] p-2 shadow-lg' : 'p-2'
        }`}
      >
        <div
          className={`relative overflow-hidden bg-black ring-1 ring-white/10 ${
            c ? 'rounded-[1.65rem]' : 'rounded-[1.85rem]'
          }`}
        >
          <div
            className={`absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black ${
              c ? 'top-2 h-4 w-14' : 'top-2 h-5 w-16'
            }`}
          />
          {src ? (
            <img
              src={src}
              alt={alt}
              className={`w-full object-cover object-top ${c ? 'aspect-[9/19] pt-5' : 'aspect-[9/19] pt-6'}`}
              loading="lazy"
            />
          ) : (
            <div className={c ? 'pt-5' : 'pt-6'}>
              <ScreenPlaceholder variant="mobile" />
            </div>
          )}
        </div>
      </div>
      {interactive ? (
        <span className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-md bg-black/65 px-2 py-1 text-[10px] font-medium text-white opacity-0 shadow-sm transition group-hover:opacity-100">
          Ampliar
        </span>
      ) : null}
    </>
  )

  return (
    <div className={`relative mx-auto ${c ? 'w-[min(100%,176px)]' : 'w-[min(100%,220px)]'}`}>
      {interactive ? (
        <button
          type="button"
          onClick={onPreview}
          aria-label={`Ampliar imagem: ${alt}`}
          className="group relative block w-full overflow-visible rounded-[2.25rem] text-left outline-none transition hover:ring-2 hover:ring-cyan-400/35 focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          {phoneBody}
        </button>
      ) : (
        phoneBody
      )}
      {showCaption ? (
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Smartphone className="size-3.5" aria-hidden />
          Mobile
        </p>
      ) : null}
    </div>
  )
}
