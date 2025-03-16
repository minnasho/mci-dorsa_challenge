'use client'
// import { useEffect, useRef } from 'react'
import Carousel from '../carousel'
import { Section } from '../section'
// import { usePaginatedItems } from './usePaginatedItems'

export const HomePageContent = () => {
  //     if (!hasNextPage || isFetchingNextPage) return

  //     observerRef.current = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           fetchNextPage()
  //         }
  //       },
  //       { threshold: 1.0 }, // Trigger when the last item is fully visible
  //     )

  //     if (lastItemRef.current) {
  //       observerRef.current.observe(lastItemRef.current)
  //     }

  //     return () => observerRef.current?.disconnect()
  //   }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  //   if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <Carousel />
      <Section />
    </>
  )
}
