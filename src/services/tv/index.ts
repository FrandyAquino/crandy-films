
import { ContentRatingsResponse, TVShow as TVShowType } from "@/lib/types/tv"
import { TVShowDetails as TVShowDetailsType } from "@/lib/types/tv"
import { tmdbFetch } from "@/services/apiClient"
import { 
  Video,
  Review,
  VideosResponse,
  CreditsResponse,
  ReviewsResponse,
  PaginatedResponse,
  } from "@/lib/types/common"

export const getPopularTVShows = async (): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>('tv/popular')
  return response.results
}

export const getTopRatedTVShows = async (): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>('tv/top_rated')
  return response.results
}

export const getTVAiringToday = async (): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>('tv/airing_today')
  return response.results
}

export const getTVOnTheAir = async (): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>('tv/on_the_air')
  return response.results
}

export const getTVShowDetails = async (id: number): Promise<TVShowDetailsType> => {
  return tmdbFetch<TVShowDetailsType>(`tv/${id}`)
}

export const getTVShowCredits = async (id: number): Promise<CreditsResponse> => {
  return tmdbFetch<CreditsResponse>(`tv/${id}/credits`)
}

export const getTVShowRecommendations = async (id: number): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>(`tv/${id}/recommendations`)
  return response.results
}

export const getTVShowVideos = async (id: number): Promise<Video[]> => {
  const response = await tmdbFetch<VideosResponse>(`tv/${id}/videos`)
  return response.results
}

export const getTVShowCertifications = async (id: number): Promise<string | undefined> => {
  const response = await tmdbFetch<ContentRatingsResponse>(`tv/${id}/content_ratings`)
  const usRating = response.results.find(r => r.iso_3166_1 === 'US')
  return usRating?.rating
}

export const getTVShowReviews = async (id: number): Promise<Review[]> => {
  const response = await tmdbFetch<ReviewsResponse>(`tv/${id}/reviews`)
  return response.results
}

export const getSimilarTVShows = async (id: number): Promise<TVShowType[]> => {
  const response = await tmdbFetch<PaginatedResponse<TVShowType>>(`tv/${id}/similar`)
  return response.results
}
