import { Button, InlineLoading } from "@carbon/react"
import { useTransition } from "react"

type Props = {
  loadMore: () => void;
}

export const LoadMoreButton = (props: Props) => {
  const { loadMore } = props

  const [isLoading, startLoading] = useTransition()

  if (isLoading) {
    return (
      <div>
        <InlineLoading description="Loading more pokemons..." />
      </div>
    )
  }
  return (
    <Button
      onClick={() => startLoading(async () => loadMore())}
    >
      Load more
    </Button>
  )
}