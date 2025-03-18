import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { TSection } from '../homePageContent/types'
import { useQuery } from '@tanstack/react-query'
import {
  getContinueWatching,
  getContinueWatchingVideoCards,
} from './services/sectionAPICalls'

type TUseSectionLogicsProps = {
  section?: TSection
}
export const useSectionLogics = ({ section }: TUseSectionLogicsProps) => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    localStorage.setItem('scrollY', window.scrollY.toString())
    router.push(href)
  }

  const shouldShowBanner = (): boolean => {
    return (
      section?.section_type === 'Single' &&
      section?.content_type === 'Banner' &&
      section?.cards.length > 0
    )
  }

  const shouldShowListSection = (): boolean => {
    return section?.section_type === 'List' && section?.cards.length > 0
  }

  const isContinueToWatchSection = (): boolean => {
    return (
      section?.section_type === 'List' &&
      section?.content_generator === 'Stream Log'
    )
  }

  const { data: watchSectionData, isLoading: isWatchLoading } = useQuery({
    queryKey: ['continueWatching'],
    queryFn: getContinueWatching,
    enabled: isContinueToWatchSection(), // Fetch only if section exists
  })
  const {} = useQuery({
    queryKey: ['continueWatchingVideoCards', watchSectionData],
    queryFn: () =>
      getContinueWatchingVideoCards({ payload: watchSectionData }),
    enabled: !!watchSectionData && watchSectionData.results?.length > 0, // Fetch only when watchSectionData is available and not empty
  })

  useEffect(() => {
    const scrollY = localStorage.getItem('scrollY')
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10))
    }
  }, [])

  return {
    handleNavigation,
    shouldShowBanner,
    shouldShowListSection,
    isContinueToWatchSection,
    watchSectionData,
    isWatchLoading,
  }
}
