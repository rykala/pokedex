import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const useFilters = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const search = searchParams.get("search")
  const type = searchParams.get("type")
  const tab = searchParams.get("tab") === "favorites" ? "favorites" : "all"
  const view = searchParams.get("view") === "list" ? "list" : "grid"

  const setFilter = (filter: "search" | "favorites" | "type" | "tab" | "view", value: string | null | undefined) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== "") {
      params.set(filter, value)
    } else {
      params.delete(filter)
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    search,
    type,
    tab,
    view,
    setFilter
  } as const
}