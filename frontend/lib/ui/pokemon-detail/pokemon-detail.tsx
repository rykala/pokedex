import { gql } from "@/__generated__"
import { PokemonCard } from "@/lib/ui/pokemon-card/pokemon-card"
import { PokemonDetailCard } from "@/lib/ui/pokemon-detail/pokemon-detail-card"
import { useSuspenseQuery } from "@apollo/client"
import styles from "./pokemon-detail.module.scss"

const pokemonDetailQuery = gql(/* GraphQL */ `
    query getPokemonByName($name: String!){
        pokemonByName(name: $name) {
            id
            name
            image
            sound
            isFavorite
            types
            weight {  minimum, maximum }
            height {  minimum, maximum }
            maxCP
            maxHP
            evolutions { id, name, image, isFavorite }
        }
    }
`)

type Props = {
  pokemonName: string
}

export const PokemonDetail = (props: Props) => {
  const { pokemonName } = props

  const { data: { pokemonByName }, error } = useSuspenseQuery(
    pokemonDetailQuery,
    { variables: { name: pokemonName } },
  )

  if (error) return "Error loading pokemon"
  if (!pokemonByName) return "Pokemon not found"
  return (
    <>
      <PokemonDetailCard {...pokemonByName} />
      {pokemonByName.evolutions.length > 0 && (
        <div className={styles.evolutionsContainer}>
          <h5 className={styles.evolutionsHeader}>Evolutions</h5>
          <div className={styles.evolutionsListContainer}>
            {pokemonByName.evolutions.map((e) => (<PokemonCard key={e.name} {...e} />))}
          </div>
        </div>
      )}
    </>
  )
}