'use client'
import { useSectionLogics } from './useSectionLogics'
import { TMultimediaResponse } from '../homePageContent/types'
import { InfiniteData } from '@tanstack/react-query'
import { SectionHeader, SectionContent } from './components'
import Image from 'next/image'

type TSectionProps = {
  data: InfiniteData<TMultimediaResponse, unknown>
  isLoading: boolean
  error: unknown
}

export const Section = ({ data, isLoading, error }: TSectionProps) => {
  const { handleNavigation } = useSectionLogics()
  // Extract all sections
  const sections = data?.pages?.flatMap(
    (page) => page.data.results?.sections || [],
  )

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data.</p>

  return (
    <div className="mt-8 mb-4 w-full px-4">
      {sections.map((section, idx) =>
        section.section_type === 'Single' &&
        section.content_type === 'Banner' &&
        section.cards.length > 0 ? (
          <div
            key={`${section.id}_${idx}`}
            className="my-8 h-1/2 w-full overflow-hidden rounded-3xl"
          >
            <Image
              src={
                section.cards[0]?.media_object.posters.horizontal_poster !== ''
                  ? section.cards[0]?.media_object.posters.horizontal_poster
                  : null
              }
              width={800}
              height={400}
              alt={section.cards[0]?.media_object.posters.alt_text}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="h-auto w-full shadow-md"
            />
          </div>
        ) : (
          section.section_type === 'List' &&
          section.cards.length > 0 && (
            <div key={`${section.id}_${idx}`} className="my-8" id={section.id}>
              <SectionHeader
                title={section.title}
                has_related_link={section.has_related_link}
                related_link={section.related_link}
                onSeeMoreClicked={handleNavigation}
              />
              <SectionContent cards={section.cards} />
            </div>
          )
        ),
      )}
    </div>
  )
}
