import axios from 'axios'
import {
  TCardsOfSpecificSection,
  TContinueWatchingVideoCardsResponse,
  TDataItem,
  TgetContinueWatchingResponse,
  TResult,
} from '../types'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDMyMjcxMTgsInRva2VuX3R5cGUiOiJVU0VSX1JFR0lTVEVSRUQiLCJ1c2VyX3Bob25lX251bWJlciI6IjA5MTIyNzMwNTY1IiwidWlkIjoiNTE0MDA1Y2RmMSJ9.XBAYoFcryK7YlDGEeIdoR-fNYyEV62hNvhEsqnHwq2Y'

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
  payload: TResult[]
}): Promise<TDataItem[]> => {
  const { data } = await axios.post<TContinueWatchingVideoCardsResponse>(
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
  return data.data
}
