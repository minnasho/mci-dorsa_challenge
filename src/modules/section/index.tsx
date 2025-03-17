'use client'
import { TMultimediaResponse } from '../homePageContent/types'
import { InfiniteData } from '@tanstack/react-query'
import { SectionContent } from './components'

type TSectionProps = {
  data: InfiniteData<TMultimediaResponse, unknown>
  isLoading: boolean
  error: unknown
}

export const Section = ({ data, isLoading }: TSectionProps) => {
  // Extract all sections
  const sections = data?.pages?.flatMap(
    (page) => page.data.results?.sections || [],
  )

  if (isLoading)
    return [...Array(6)].map((_, index) => <SectionContent key={index} />)

  return (
    <div className="mt-8 mb-4 w-full px-4">
      {sections.map((section, idx) => (
        <SectionContent
          key={`${section.id}_${idx}`}
          cards={section.cards}
          section={section}
        />
      ))}
    </div>
  )
}
