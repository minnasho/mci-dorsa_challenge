import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { TSection } from '../homePageContent/types'
// import { useQuery } from '@tanstack/react-query'

// const fetchContinueWatching = ()=>{

// }

type TUseSectionLogicsProps = {
  section?: TSection
}
export const useSectionLogics = ({ section }: TUseSectionLogicsProps) => {
  const router = useRouter()
  // const { data: watchSectionData, isLoading: isWatchLoading } = useQuery({
  //   queryKey: ['continueWatching'],
  //   queryFn: fetchContinueWatching,
  //   enabled: watchSectionIndex !== -1, // Fetch only if section exists
  // })

  const handleNavigation = (href: string) => {
    localStorage.setItem('scrollY', window.scrollY.toString())
    router.push(href)
  }

  const shouldShowBanner = (): boolean => {
    return (
      section.section_type === 'Single' &&
      section.content_type === 'Banner' &&
      section.cards.length > 0
    )
  }

  const shouldShowListSection = (): boolean => {
    return section.section_type === 'List' && section.cards.length > 0
  }

  const isContinueToWatchSection = (): boolean => {
    return (
      section.section_type === 'List' &&
      section.content_generator === 'Stream Log'
    )
  }

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
  }
}
