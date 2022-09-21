import { IPokemon } from "./IPokemon"

export interface IPokedex {
    count: number
    next: string
    previous?: string
    results: IPokemon[]
}