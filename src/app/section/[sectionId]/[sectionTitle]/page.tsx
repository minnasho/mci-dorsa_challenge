'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'

const getSectionContent = async ({
  pageParam,
  sectionId,
}: {
  pageParam?: number | string
  sectionId: string
}) => {
  console.log('pageParam', pageParam)
  let url = `https://edareh.dorsa.app/api/v3/structures/section/${sectionId}/cards`
  if (pageParam) {
    url = pageParam as string
  }
  const { data } = await axios.get(url)
  console.log('data', data)
  return data
}
export default function SectionPage({ params }) {
  const { sectionId } = params // Access dynamic route params
  const { data } = useInfiniteQuery({
    queryKey: ['section', sectionId],
    queryFn: () => getSectionContent({ sectionId }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.data.links.next || null,
    staleTime: 1000 * 60 * 5, // ⏳ 5 minutes before refetching - Prevents refetching if the data is fresh (keeps old data visible)
    gcTime: 1000 * 60 * 10, // 💾 10 minutes cache in memory - Keeps data in memory even after the component unmounts.
  })

  console.log('data pages', data)
  console.log(
    'data pages1',
    data?.pages?.flatMap((page) => page.data.results),
  )

  return (
    <div className="mx-auto my-20 grid grid-cols-2 gap-2 xl:grid-cols-3 xl:gap-4">
      {data?.pages
        ?.flatMap((page) => page.data.results || [])
        .map((movie, idx) => (
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
                alt={movie.media_object.alt_text}
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
  )
}
