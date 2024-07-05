import { gql } from "@/__generated__"
import { Pokemon } from "@/__generated__/graphql"
import { useFilters } from "@/lib/hooks/use-filters"
import { pokemonListQuery } from "@/lib/ui/pokemon-list/pokemon-list"
import { useMutation } from "@apollo/client"
import { Favorite, FavoriteFilled } from "@carbon/icons-react"
import { Button } from "@carbon/react"
import { createElement } from "react"
import styles from "./favorite-button.module.scss"

type PokemonCardProps = Pick<Pokemon, "id" | "isFavorite">

const favoritePokemonMutation = gql(/* GraphQL */ `
    mutation favoritePokemon($id: ID!) {
        favoritePokemon(id: $id) {
            id
            isFavorite
        }
    }
`)

const unFavoritePokemonMutation = gql(/* GraphQL */ `
    mutation unFavoritePokemon($id: ID!) {
        unFavoritePokemon(id: $id) {
            id
            isFavorite
        }
    }
`)

export const FavoriteButton = ({ id, isFavorite }: PokemonCardProps) => {
  const { search, type } = useFilters()
  const [toggleFavorite] = useMutation(
    isFavorite ? unFavoritePokemonMutation : favoritePokemonMutation,
    {
      variables: { id },
      optimisticResponse: {
        [isFavorite ? "unFavoritePokemon" : "favoritePokemon"]: {
          id,
          isFavorite: !isFavorite,
        },
      },
      refetchQueries: [
        {
          query: pokemonListQuery,
          variables: { offset: 0, search, type, isFavorite: true },
        },
      ],
    },
  )

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite()
  }

  return (
    <Button kind={"ghost"} onClick={handleClick} size={"sm"} className={styles.favoriteButton}>
      {createElement(isFavorite ? FavoriteFilled : Favorite, { size: 18 })}
    </Button>
  )
}