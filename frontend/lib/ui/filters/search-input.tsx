import { useFilters } from "@/lib/hooks/use-filters"
import { Search } from "@carbon/react"
import { useDebouncedCallback } from "use-debounce"

export const SearchInput = () => {
  const { setFilter, search } = useFilters()

  const handleSearch = useDebouncedCallback((search: string) => setFilter("search", search), 300)

  return <Search
    id={"search"}
    labelText={"Search"}
    onChange={(e) => handleSearch(e.target.value)}
    defaultValue={search ?? ""}
  />
}