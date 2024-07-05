import { Pokemon } from "@/__generated__/graphql"
import { FavoriteButton } from "@/lib/ui/pokemon-card/favorite-button"
import { PlaySoundButton } from "@/lib/ui/pokemon-card/play-sound-button"
import styles from "./pokemon-detail-card.module.scss"

type Props = Pick<
  Pokemon,
  "id" | "name" | "types" | "image" | "sound" | "maxCP" | "maxHP" | "isFavorite" | "height" | "weight"
>

export const PokemonDetailCard = (props: Props) => {
  const { id, isFavorite, image, sound, name, types, height, weight, maxCP, maxHP } = props

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.soundContainer}>
          <PlaySoundButton sound={sound} />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.textsAndFavoriteContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.nameText}>{name}</h2>
            <span className={styles.typeText}>{types.join(", ")}</span>
          </div>

          <FavoriteButton id={id} isFavorite={isFavorite} />
        </div>

        <div className={styles.barContainer}>
          <div className={styles.cpBar} />
          <span className={"bold"}>CP: {maxCP}</span>

          <div className={styles.hpBar} />
          <span className={"bold"}>HP: {maxHP}</span>
        </div>
      </div>

      <div className={styles.measuresContainer}>
        <div className={styles.measuresItem}>
          <span className={"bold"}>Height</span>
          <span>{height.minimum} - {height.maximum}</span>
        </div>
        <div className={styles.measuresItem}>
          <span className={"bold"}>Weight</span>
          <span>{weight.minimum} - {weight.maximum}</span>
        </div>
      </div>
    </div>
  )
}