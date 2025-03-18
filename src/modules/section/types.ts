import { TCard } from '../homePageContent/types'

export type TgetContinueWatchingResponse = {
  count: number
  current_page: number
  links: { next: string | null; prev: string | null }
  page_size: number
  results: TResult[]
}

export type TResult = {
  max_milliseconds: number
  max_timestamp: string
  milliseconds: number
  object_id: string
  percentage: number
  season_id: string | null
  series_id: string | null
  tags: unknown[]
  timestamp: string
  user_id: string
}

export type TContinueWatchingVideoCardsResponse = {
  data: TDataItem[]
}

export type TDataItem = {
  id: string
  title: string
  description: string | null
  media_type: string
  media_type_id: number
  like_count: number
  is_liked: boolean
  has_bookmarked: boolean
  view_count: number
  media_object: MediaObject
  related_link: RelatedLink
  stream_log: StreamLog
}

type MediaObject = {
  id: string
  name: string
  title?: string
  duration_minutes: number
  is_coming_soon: boolean
  is_exclusive: boolean
  multi_media_type: string
  posters: {
    alt_text: string
    horizontal_poster: string
    vertical_poster: string
    pdp_poster: string
  }
  thumbnail_image: string
}

type RelatedLink = {
  obj_id: string
  obj_type: string
  url_alias: string
}

type StreamLog = {
  max_timestamp: string
  object_id: string
  percentage: number
  timestamp: string
  user_id: string
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
