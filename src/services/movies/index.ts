
import { Movie as MovieType, MovieDetails as MovieDetailsType, ReleaseDatesResponse } from "@/lib/types/movies"
import { tmdbFetch } from "@/services/apiClient"
import {
  Video,
  Review,
  VideosResponse,
  CreditsResponse,
  ReviewsResponse,
  PaginatedResponse,
} from "@/lib/types/common"

export const getTrendingMovies = async (timeWindow: 'day' | 'week' = 'week'): Promise<MovieType[]> => {
  const response = await tmdbFetch<PaginatedResponse<MovieType>>(`trending/movie/${timeWindow}`)
  return response.results
}

export const getTopRatedMovies = async (): Promise<MovieType[]> => {
    const response = await tmdbFetch<PaginatedResponse<MovieType>>('movie/top_rated')
    return response.results
}

export const getMovieDetails = async (id: number): Promise<MovieDetailsType> => {
  return tmdbFetch<MovieDetailsType>(`movie/${id}`)
}

export const getMovieCredits = async (id: number): Promise<CreditsResponse> => {
  return tmdbFetch<CreditsResponse>(`movie/${id}/credits`)
}

export const getMovieRecommendations = async (id: number): Promise<MovieType[]> => {
  const response = await tmdbFetch<PaginatedResponse<MovieType>>(`movie/${id}/recommendations`)
  return response.results
}

export const getUpcomingMovies = async (): Promise<MovieType[]> => {
  const response = await tmdbFetch<PaginatedResponse<MovieType>>('movie/upcoming')
  return response.results
}

export const getMovieVideos = async (id: number): Promise<Video[]> => {
  const response = await tmdbFetch<VideosResponse>(`movie/${id}/videos`)
  return response.results
}

export const getMovieCertifications = async (id: number): Promise<string | undefined> => {
  const response = await tmdbFetch<ReleaseDatesResponse>(`movie/${id}/release_dates`)
  const usCertification = response.results.find(r => r.iso_3166_1 === 'US')
  return usCertification?.release_dates.find(rd => rd.certification !== '')?.certification
}

export const getMovieReviews = async (id: number): Promise<Review[]> => {
  const response = await tmdbFetch<ReviewsResponse>(`movie/${id}/reviews`)
  return response.results
}

export const getSimilarMovies = async (id: number): Promise<MovieType[]> => {
  const response = await tmdbFetch<PaginatedResponse<MovieType>>(`movie/${id}/similar`)
  return response.results
}
