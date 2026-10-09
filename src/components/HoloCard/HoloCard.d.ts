import type { CSSProperties } from 'react'

export type HoloPreset =
  | 'bursts'
  | 'stars'
  | 'shards'
  | 'cosmos'
  | 'rainbow'
  | 'swirl'
  | 'glitter'
  | 'gold'

export type HoloCardProps = {
  image?: string
  backImage?: string
  alt?: string
  preset?: HoloPreset
  intensity?: number
  scale?: number
  edgeSparkle?: number
  frame?: number
  glare?: number
  foilColor?: string
  width?: number
  radius?: number
  tiltMax?: number
  hoverScale?: number
  idle?: boolean
  shadow?: boolean
  className?: string
  style?: CSSProperties
}

declare const HoloCard: (props: HoloCardProps) => JSX.Element
export default HoloCard
