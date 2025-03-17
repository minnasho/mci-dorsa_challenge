import { Card } from '@/modules/card'
import { TCard } from '@/modules/homePageContent/types'

type TSectionContent = {
  cards: TCard[]
}
export function SectionContent({ cards }: TSectionContent) {
  return (
    <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
      <div className="flex space-x-4">
        {cards.map((movie: TCard, index) => (
          <Card key={`${movie.id}_${index}`} movie={movie} />
        ))}
      </div>
    </div>
  )
}
