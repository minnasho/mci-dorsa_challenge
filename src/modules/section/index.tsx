'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const fetchMultimedia = async ({
  pageParam,
}: {
  pageParam?: number | string
}) => {
  console.log('pageParam', pageParam)
  let url = 'https://edareh.dorsa.app/api/v3/structures/multimedia'
  if (pageParam) {
    url = pageParam as string
  }
  const { data } = await axios.get(url)
  console.log('data', data)
  return data
}
export const Section = () => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['multimedia'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      fetchMultimedia({ pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.data.links.next || null,
    staleTime: 1000 * 60 * 5, // ⏳ 5 minutes before refetching - Prevents refetching if the data is fresh (keeps old data visible)
    gcTime: 1000 * 60 * 10, // 💾 10 minutes cache in memory - Keeps data in memory even after the component unmounts.
  })
  console.log('data pages', data)
  const { ref, inView } = useInView({
    threshold: 1.0, // Trigger when fully visible
    triggerOnce: false, // Keep triggering as needed
  })

  // Fetch next page when the last item comes into view
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage() // Prefetch in the background
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading data.</p>

  return (
    <div className="mt-8 mb-4 w-full px-4">
      {data.pages
        .flatMap((page) => page.data.results?.sections || [])
        .map(
          (section) =>
            section.cards.length > 0 && (
              <div key={`${section.id}`} className="mb-8" id={section.id}>
                <div id="sectionHeader" className="mt-10 flex justify-between">
                  <h3 className="mb-3 text-xl font-bold">{section.title}</h3>
                  <Link href="/" className="text-xl font-semibold text-cyan-500">
                    بیشتر
                  </Link>
                </div>
                <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
                  <div className="flex space-x-4">
                    {section.cards.map((movie, index) => (
                      <div key={index} className="w-44 flex-shrink-0 md:w-48">
                        <Image
                          src={
                            movie.media_object.posters.vertical_poster !== ''
                              ? movie.media_object.posters.vertical_poster
                              : null
                          }
                          alt={movie.media_object.alt_text}
                          className="h-[250] w-full rounded-lg object-cover md:h-[320] md:min-h-max"
                          width={170}
                          height={250}
                        />
                        <p className="mt-2 text-right text-sm font-bold text-wrap">
                          {movie.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ),
        )}
      <div ref={ref} style={{ height: 10 }} />{' '}
      {/* Invisible observer element */}
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  )
}
