"use client"

import { VolumeUpFilled } from "@carbon/icons-react"
import { IconButton } from "@carbon/react"
import styles from "./play-sound-button.module.scss"

export const PlaySoundButton = ({ sound }: { sound: string }) => {
  return (
    <IconButton
      kind={"ghost"}
      onClick={() => {
        const audio = new Audio(sound)
        audio.play()
      }}
      label={"Play sound"}
      align={"right"}
      className={styles.playSoundButton}
    >
      <VolumeUpFilled size={24} />
    </IconButton>
  )
}