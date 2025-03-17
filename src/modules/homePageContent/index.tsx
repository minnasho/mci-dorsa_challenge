'use client'
import Carousel from '../carousel'
import { Section } from '../section'
import { useHomePageLogics } from './useHomePageLogics'

export const HomePageContent = () => {
  const { data, ref, isLoading, error, isFetchingNextPage } =
    useHomePageLogics()

  const sliderSection = data?.pages
    ?.flatMap((page) => page.data.results?.sections)
    ?.find((section) => section.section_type === 'Slider')

    if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Carousel slides={sliderSection?.cards} />
      <Section data={data} isLoading={isLoading} error={error} />
      {/* Invisible observer element */}
      <div ref={ref} style={{ height: 10 }} />
      {isFetchingNextPage && <p>Loading more...</p>}
    </>
  )
}
