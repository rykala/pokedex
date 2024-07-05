import { Pokemon } from "@/__generated__/graphql"
import { FavoriteButton } from "@/lib/ui/pokemon-card/favorite-button"
import Link from "next/link"
import styles from "./pokemon-card.module.scss"

type PokemonCardProps = Pick<Pokemon, "id" | "name" | "image" | "isFavorite">
  & Partial<Pick<Pokemon, "types">> & { view?: "grid" | "list" }

export const PokemonCard = ({ id, name, types, image, isFavorite, view }: PokemonCardProps) => {
  return (
    <Link className={`${styles.cardContainer} ${view === "list" ? styles.listItem : ""}`} href={name}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <div className={styles.nameText}>{name}</div>
          {types && <div className={styles.typesText}>{types.join(", ")}</div>}
        </div>
        <div className={styles.favoriteButtonContainer}>
          <FavoriteButton id={id} isFavorite={isFavorite} />
        </div>
      </div>
    </Link>
  )
}