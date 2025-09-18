
import { SearchMultiResponse, SearchResult } from "@/lib/types/common"
import { tmdbFetch } from "@/services/apiClient"

export const multiSearch = async (query: string): Promise<SearchResult[]> => {
  if (!query) return []
  const response = await tmdbFetch<SearchMultiResponse>(`search/multi?query=${encodeURIComponent(query)}`)
  return response.results.filter(result => (
    result.media_type === 'movie' || result.media_type === 'tv'
  ))
}
