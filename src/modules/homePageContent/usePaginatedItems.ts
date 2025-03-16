import { useInfiniteQuery } from '@tanstack/react-query'
// import fetchPaginatedData from '../api/fetchPaginatedData'
import axios from 'axios'

const fetchPaginatedData = async ({ pageParam }: { pageParam?: number }) => {
  let url = 'https://edareh.dorsa.app/api/v3/structures/multimedia'
  if (pageParam) {
    url = `${url}?page=${pageParam}`
  }
  const { data } = await axios.get(url)
  console.log('fetchPaginatedData data', data)
  return data
}

export const usePaginatedItems = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['multimedia'],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      fetchPaginatedData({ pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage?.data.links.next
      if (!nextPageUrl) return null // No more pages
      return nextPageUrl
    },
  })

  console.log('usePaginatedItems data', data)

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  }
}
