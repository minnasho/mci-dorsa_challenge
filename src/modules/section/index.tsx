'use client'
import Image from 'next/image'
import { useSectionLogics } from './useSectionLogics'
import { TCard, TMultimediaResponse, TSection } from '../homePageContent/types'
import { InfiniteData } from '@tanstack/react-query'

type TSectionProps = {
  data: InfiniteData<TMultimediaResponse, unknown>
  isLoading: boolean
  error: unknown
}

export const Section = ({ data, isLoading, error }: TSectionProps) => {
  const { handleNavigation } = useSectionLogics()

  console.log('data pages', data)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data.</p>

  return (
    <div className="mt-8 mb-4 w-full px-4">
      {data.pages
        .flatMap((page) => page.data.results?.sections || [])
        .map(
          (section: TSection) =>
            section.cards.length > 0 &&
            section.section_type === 'List' && (
              <div key={`${section.id}`} className="mb-8" id={section.id}>
                <div id="sectionHeader" className="mt-10 flex justify-between">
                  <h3 className="mb-3 text-xl font-bold">{section.title}</h3>
                  {section.has_related_link && (
                    <button
                      onClick={() =>
                        handleNavigation(
                          `/section/${section.related_link?.obj_id}/${section.related_link?.url_alias}`,
                        )
                      }
                      className="cursor-pointer text-xl font-semibold text-cyan-500"
                    >
                      بیشتر
                    </button>
                  )}
                </div>
                <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
                  <div className="flex space-x-4">
                    {section.cards.map((movie: TCard, index) => (
                      <div key={index} className="w-44 flex-shrink-0 md:w-48">
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
                    ))}
                  </div>
                </div>
              </div>
            ),
        )}
    </div>
  )
}
