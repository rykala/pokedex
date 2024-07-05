import { useFilters } from "@/lib/hooks/use-filters"
import { Button, Stack } from "@carbon/react"

export const TabButtonGroup = () => {
  const { tab, setFilter } = useFilters()

  return (
    <Stack orientation={"horizontal"} gap={0}>
      <Button
        kind={tab === "all" ? "primary" : "tertiary"}
        style={{ width: "100%", maxInlineSize: "unset" }}
        onClick={() => setFilter("tab", "all")}
      >
        All
      </Button>
      <Button
        kind={tab === "favorites" ? "primary" : "tertiary"}
        style={{ width: "100%", maxInlineSize: "unset" }}
        onClick={() => setFilter("tab", "favorites")}
      >
        Favorites
      </Button>
    </Stack>
  )
}