import axios from 'axios'
import { TCardsOfSpecificSection, TgetContinueWatchingResponse } from '../types'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDQ4MzgxMjksInRva2VuX3R5cGUiOiJVU0VSX1JFR0lTVEVSRUQiLCJ1c2VyX3Bob25lX251bWJlciI6IjA5MDI1NTQ0MjY3IiwidWlkIjoiOTJTMUp3dlFxaiJ9.duhTM-cL75MWYUvrcqS_QTkLjlV4oL_Jf55sZA6rEdI'

export const getSectionContent = async ({
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
  const { data } = await axios.get<TCardsOfSpecificSection>(url)
  console.log('getSectionContent data', data)
  return data
}

export const getContinueWatching = async () => {
  const { data } = await axios.get<TgetContinueWatchingResponse>(
    'https://collector.dorsa.app/api/v1/resume/video',
    {
      headers: {
        Authorization: token,
      },
    },
  )
  console.log('watchSectionData', data)
  return data
}

export const getContinueWatchingVideoCards = async ({
  payload,
}: {
  payload: TgetContinueWatchingResponse
}) => {
  const { data } = await axios.post(
    'https://edareh.dorsa.app/api/v2/structures/video/cards',
    payload,
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    },
  )
  console.log('ContinueWatchingVideoCards', data)
  return data
}
