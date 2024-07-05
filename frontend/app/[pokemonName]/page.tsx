"use client"

import { PokemonDetail } from "@/lib/ui/pokemon-detail/pokemon-detail"
import styles from "./page.module.scss"

type Props = {
  params: {
    pokemonName: string
  }
}

export default function PokemonDetailPage(props: Props) {
  const { params } = props

  return (
    <div className={styles.container}>
      <PokemonDetail pokemonName={params.pokemonName} />
    </div>
  )
}
