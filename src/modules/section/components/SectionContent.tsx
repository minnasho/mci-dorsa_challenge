import { Card } from '@/modules/card'
import { TCard, TSection } from '@/modules/homePageContent/types'
import { useSectionLogics } from '../useSectionLogics'
import { Banner } from './Banner'
import { SkeletonSection } from './SkeletonSection'
import { SectionHeader } from './SectionHeader'
import { TDataItem } from '../types'

type TSectionContent = {
  cards?: TCard[]
  section?: TSection
}
export function SectionContent({ cards, section }: TSectionContent) {
  const {
    shouldShowBanner,
    shouldShowListSection,
    isContinueToWatchSection,
    handleNavigation,
    isWatchLoading,
    isWatchCardsLoading,
    watchSectionCards,
  } = useSectionLogics({ section })
  if (!section) {
    return <SkeletonSection />
  }
  return (
    <>
      {shouldShowBanner() ? (
        <Banner cards={section.cards} />
      ) : shouldShowListSection() ? (
        <div className="mb-8" id={section.id}>
          <SectionHeader
            title={section.title}
            has_related_link={section.has_related_link}
            related_link={section.related_link}
            onSeeMoreClicked={handleNavigation}
          />
          <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
            <div className="flex space-x-4">
              {cards.map((movie: TCard, index) => (
                <Card key={`${movie.id}_${index}`} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        isContinueToWatchSection() &&
        (!isWatchLoading &&
        !isWatchCardsLoading &&
        watchSectionCards?.length > 0 ? (
          <div className="mb-8" id={section.id}>
            <SectionHeader
              title={section.title}
              has_related_link={false} //{section.has_related_link}
              related_link={section.related_link}
              onSeeMoreClicked={handleNavigation}
            />
            <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
              <div className="flex space-x-4">
                {watchSectionCards.map((movie: TDataItem, index) => (
                  <Card key={`${movie.id}_${index}`} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        ) : isWatchLoading || isWatchCardsLoading ? (
          <SkeletonSection title={section.title} />
        ) : null)
      )}
    </>
  )
}
