import { X } from 'lucide-react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  src: string
  alt: string
  onClose: () => void
}

export function ImageLightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[200] flex flex-col"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-label="Fechar visualização"
      />
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[202] flex size-11 items-center justify-center rounded-full border border-white/15 bg-[#0c0c12]/90 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/15"
        aria-label="Fechar"
      >
        <X className="size-5" />
      </button>
      <div className="relative z-[201] flex min-h-0 flex-1 flex-col items-center overflow-y-auto overflow-x-hidden px-4 pb-12 pt-20 sm:justify-center sm:py-20">
        <img
          src={src}
          alt={alt}
          className="max-h-[min(88vh,1400px)] w-auto max-w-[min(96vw,1800px)] rounded-lg object-contain shadow-2xl ring-1 ring-white/15"
        />
        <p className="mt-4 max-w-prose text-center text-xs text-slate-300">{alt}</p>
      </div>
    </div>,
    document.body,
  )
}
