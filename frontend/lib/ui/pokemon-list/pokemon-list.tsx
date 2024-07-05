import { gql } from "@/__generated__"
import { PokemonCard } from "@/lib/ui/pokemon-card/pokemon-card"
import { LoadMoreButton } from "@/lib/ui/pokemon-list/load-more-button"
import { useSuspenseQuery } from "@apollo/client"
import styles from "./pokemon-list.module.scss"

export const pokemonListQuery = gql(/* GraphQL */ `
    query pokemonList($search: String, $type: String, $isFavorite: Boolean, $offset: Int = 0){
        pokemons(query: { limit: 20, offset: $offset, search: $search, filter: { type: $type, isFavorite: $isFavorite}}) {
            count
            edges {
                id
                name
                image
                isFavorite
                types
            }
        }
    }
`)

type Props = {
  search?: string | null
  type?: string | null
  isFavorite?: boolean
  view: "grid" | "list"
}

export const PokemonList = (props: Props) => {
  const { search, type, view, isFavorite } = props

  const { data, error, fetchMore } = useSuspenseQuery(
    pokemonListQuery,
    { variables: { search, type, isFavorite }, fetchPolicy: "cache-and-network" },
  )

  const pokemons = data.pokemons.edges
  const isAllLoaded = pokemons.length === data.pokemons.count

  return (
    <>
      <div className={view === "list" ? styles.listContainer : styles.gridContainer}>
        {error && <div>Error loading pokemons</div>}
        {pokemons.length === 0 && <div>No pokemons found</div>}
        {pokemons.map((pokemon) => (<PokemonCard key={pokemon.name} view={view} {...pokemon} />))}
      </div>

      {!error && !isAllLoaded && (
        <div className={styles.loadMoreButtonContainer}>
          <LoadMoreButton
            loadMore={
              () => fetchMore({
                variables: { offset: pokemons.length },
                updateQuery: (previousResult, { fetchMoreResult }) => ({
                  pokemons: {
                    ...previousResult.pokemons,
                    count: fetchMoreResult.pokemons.count,
                    edges: [...previousResult.pokemons.edges, ...fetchMoreResult.pokemons.edges],
                  },
                }),
              })
            }
          />
        </div>
      )}
    </>
  )
}