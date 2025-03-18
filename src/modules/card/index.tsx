import Image from 'next/image'
import { TCard } from '../homePageContent/types'
import { TDataItem } from '../section/types'

type TCardProps = {
  movie: TCard | TDataItem
}
export const Card: React.FC<TCardProps> = ({ movie }) => {
  return (
    <div className="w-44 flex-shrink-0 md:w-48">
      <Image
        src={
          movie.media_object.posters.vertical_poster !== ''
            ? movie.media_object.posters.vertical_poster
            : null
        }
        alt={movie.media_object.posters.alt_text}
        className="h-[250] w-full rounded-lg object-cover shadow-sm md:h-[320] md:min-h-max"
        width={170}
        height={250}
      />
      <p className="md:text-md mt-2 mr-2 text-right text-sm font-bold text-wrap">
        {movie.title}
      </p>
    </div>
  )
}
