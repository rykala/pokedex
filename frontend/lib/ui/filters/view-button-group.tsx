import { useFilters } from "@/lib/hooks/use-filters"
import { ShowDataCards, Thumbnail_2 } from "@carbon/icons-react"
import { IconButton } from "@carbon/react"

export const ViewButtonGroup = () => {
  const { setFilter, view } = useFilters()

  return (
    <div>
      <IconButton
        label="Grid view"
        kind={view === "grid" ? "primary" : "ghost"}
        onClick={() => setFilter("view", "grid")}
      >
        <Thumbnail_2 />
      </IconButton>
      <IconButton
        label="List view"
        kind={view === "list" ? "primary" : "ghost"}
        onClick={() => setFilter("view", "list")}
      >
        <ShowDataCards />
      </IconButton>
    </div>
  )
}