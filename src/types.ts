import { PRNG } from "seedrandom"

export type PieceType = "Pawn" | "Knight" | "Bishop" | "Rook" | "Queen" | "King"
export type PieceSlug = "p" | "n" | "b" | "r" | "q" | "k" 
export type Purity = "Rough" | "Polished" | "Piece of Art" | "Masterpiece"

export interface Piece {
  type: PieceType,
  slug: PieceSlug,
  weight: number,
}

export interface Quest {
  code: string
  piece: PieceSlug
  description: string
  quest_reward: number
  item_reward: number
  weight: number
}

export interface WithQuest {
  quest: Quest
  purity: Purity
}

export interface Weighted {
  weight: number
}

export interface PickerOptions {
  rng: PRNG
  itemsToPick?: number
  weights: Array<Piece>
  purity: Purity
}