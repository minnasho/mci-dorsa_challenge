import { TCard } from '../homePageContent/types'

export type TgetContinueWatchingResponse = {
  count: number
  current_page: number
  links: { next: string | null; prev: string | null }
  page_size: number
  results: unknown[]
}

export type TSpecificSection = {
  card_count: number
  content_generator: string | 'Tag'
  content_type: string | 'Video'
  has_related_link: boolean
  id: string
  section_type: string | 'List' | 'Single' | 'Slider' | 'Fast Use'
  style: Record<string, string>
  title: string
}

export type TCardsOfSpecificSection = {
  data: {
    current_page: number
    links: { next: string | null; previous: string | null }
    page_size: number
    results: TCard[]
    count: number
  }
}
