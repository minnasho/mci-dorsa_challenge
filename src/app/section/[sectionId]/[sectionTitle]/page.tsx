'use client'
import { Header } from '@/modules/header'
import { getSectionContent } from '@/modules/section/services/sectionAPICalls'
import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function SectionPage({ params }) {
  const { sectionId, sectionTitle } = params // Access dynamic route params
  const router = useRouter()

  const { data, isLoading } = useInfiniteQuery({
    queryKey: ['section', sectionId],
    queryFn: () => getSectionContent({ sectionId }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.data.links.next || null,
    staleTime: 1000 * 60 * 5, // ⏳ 5 minutes before refetching - Prevents refetching if the data is fresh (keeps old data visible)
    gcTime: 1000 * 60 * 10, // 💾 10 minutes cache in memory - Keeps data in memory even after the component unmounts.
  })
  const results = data?.pages?.flatMap((page) => page.data.results || [])

  console.log('data pages', data)
  console.log('data pages1', results)

  return (
    <>
      <Header
        place={'sectionPage'}
        title={decodeURIComponent(sectionTitle)}
        onBackClicked={() => router.back()}
      />
      <div className="mx-auto my-20 grid grid-cols-2 gap-2 xl:grid-cols-3 xl:gap-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="mt-20 flex animate-pulse flex-col items-center gap-2"
              >
                <div className="h-[285px] w-48 rounded-xl bg-gray-300 md:w-[360px] xl:w-96" />
                <div className="mt-2 h-5 w-32 rounded bg-gray-300" />
              </div>
            ))
          : results.map((movie, idx) => (
              <div
                key={`${movie.id}_${idx}`}
                className="mt-20 flex flex-col items-center gap-2"
              >
                <div className="w-48 flex-shrink-0 md:w-[360] xl:w-96">
                  <Image
                    src={
                      movie.media_object.posters.vertical_poster !== ''
                        ? movie.media_object.posters.vertical_poster
                        : null
                    }
                    alt={movie.media_object.posters.alt_text}
                    className="h-[285] w-full rounded-xl object-cover shadow-sm md:h-[250] md:min-h-max"
                    width={192}
                    height={285}
                  />
                  <p className="text-md mt-2 mr-2 text-right font-bold text-wrap md:text-lg">
                    {movie.title}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </>
  )
}
