"use client"

import styles from "@/app/page.module.scss"
import { useFilters } from "@/lib/hooks/use-filters"
import { Filters } from "@/lib/ui/filters/filters"
import { PokemonList } from "@/lib/ui/pokemon-list/pokemon-list"

export default function PokemonListPage() {
  const { tab, type, search, view } = useFilters()

  return (
    <>
      <div className={styles.headerContainer}>
        <Filters />
      </div>

      <div className={styles.pokemonListContainer}>
        <PokemonList search={search} type={type} isFavorite={tab === "favorites"} view={view} />
      </div>
    </>
  )
}
