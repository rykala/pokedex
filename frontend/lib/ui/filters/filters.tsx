"use client"

import { SearchInput } from "@/lib/ui/filters/search-input"
import { TabButtonGroup } from "@/lib/ui/filters/tab-button-group"
import { TypeSelect } from "@/lib/ui/filters/type-select"
import { ViewButtonGroup } from "@/lib/ui/filters/view-button-group"
import styles from "./filters.module.scss"

export const Filters = () => {
  return (
    <div className={styles.filtersContainer}>
      <TabButtonGroup />

      <div className={styles.inputsContainer}>
        <div className={styles.searchInputContainer}>
          <SearchInput />
        </div>
        <div className={styles.typeSelectContainer}>
          <TypeSelect />
        </div>
        <ViewButtonGroup />
      </div>
    </div>
  )
}
