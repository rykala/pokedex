import { gql } from "@/__generated__"
import { useFilters } from "@/lib/hooks/use-filters"
import { useSuspenseQuery } from "@apollo/client"
import { ComboBox } from "@carbon/react"

const typesQuery = gql(/* GraphQL */ `
    query pokemonTypes {
        pokemonTypes
    }
`)

export const TypeSelect = () => {
  const { type, setFilter } = useFilters()
  const { data: { pokemonTypes } } = useSuspenseQuery(typesQuery)

  return (
    <ComboBox<string>
      id="type"
      initialSelectedItem={type ?? undefined}
      placeholder="Type"
      items={pokemonTypes}
      onChange={(e) => setFilter("type", e.selectedItem)}
      allowCustomValue={false}
    />
  )
}