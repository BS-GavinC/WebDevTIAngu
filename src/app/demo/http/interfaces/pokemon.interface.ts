import { Sprites } from "./sprites.interface"

export interface Pokemon {
  abilities: any[]
  base_experience: number
  cries: any
  forms: any[]
  game_indices: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_abilities: any[]
  past_types: any[]
  species: any
  sprites: Sprites
  stats: any[]
  types: any[]
  weight: number
}
