import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { TMultimediaResponse } from './types'

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
  const { data } = await axios.get<TMultimediaResponse>(url)
  console.log('data', data)
  return data
}

export const useHomePageLogics = () => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['multimedia'],
    queryFn: ({ pageParam }) => fetchMultimedia({ pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.data.links.next || undefined,
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
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    data,
    isLoading,
    error,
    ref,
    isFetchingNextPage,
  }
}
