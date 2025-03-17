import { TCard } from '@/modules/homePageContent/types'
import Image from 'next/image'

type TBannerProps = {
  cards: TCard[]
}
export function Banner({ cards }: TBannerProps) {
  return (
    <div className="mb-8 h-1/2 w-full overflow-hidden rounded-3xl">
      <Image
        src={
          cards[0]?.media_object.posters.horizontal_poster !== ''
            ? cards[0]?.media_object.posters.horizontal_poster
            : null
        }
        width={800}
        height={400}
        alt={cards[0]?.media_object.posters.alt_text}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        className="h-auto w-full shadow-md"
      />
    </div>
  )
}
