export type TMultimediaResponse = {
  data: {
    count: number
    current_page: number
    links: {
      next: string | null
      previous: string | null
    }
    page_size: number
    results: TResult
  }
  message: string
}

export type TPaginatedData = {
  pages: TMultimediaResponse[]
  pageParams: string[] | []
}

export type TResult = {
  category: string //'multimedia'
  name: string
  sections: TSection[]
  title: string | null
}

export type TSection = {
  id: string
  title: string
  section_type: string | 'Slider' | 'List' | 'Fast Use' | 'Single'
  content_type: string | null | 'Video' | 'Banner'
  contents_generator: string | null
  content_generator: string | null
  has_related_link: boolean
  related_link: TRelatedLink | null
  style: Record<string, unknown>
  cards?: TCard[]
}

export type TCard = {
  id: string
  title: string
  description: string | null
  media_type: string
  media_type_id: number
  like_count: number
  view_count: number
  media_object: TMediaObject
  related_link: TRelatedLink
}

export type TRelatedLink = {
  obj_id: string
  obj_type: string
  url_alias: string
}

export type TMediaObject = {
  id: string
  name: string
  title: string
  duration_minutes: number
  is_coming_soon: boolean
  is_exclusive: boolean
  multi_media_type: string | 'movie'
  posters: TPoster
  thumbnail_image: string
  [key: string]: unknown // To accommodate any additional properties
}

export type TPoster = {
  alt_text: string
  horizontal_poster: string
  vertical_poster: string
  pdp_poster: string
}
