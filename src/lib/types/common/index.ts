export enum MediaType {
  Movie = 'movie',
  TV = 'tv',
  Person = 'person',
}
import { Movie } from '../movies'
import { TVShow } from '../tv'

export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface Genre {
  id: number
  name: string
}

export interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
}

export interface CrewMember {
  id: number
  name: string
  job: string
}

export interface CreditsResponse {
  id: number
  cast: CastMember[]
  crew: CrewMember[]
}

export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string
}

export interface VideosResponse {
  id: number
  results: Video[]
}

export interface Review {
  author: string
  content: string
  created_at: string
  id: string
  url: string
}

export interface ReviewsResponse {
  id: number
  page: number
  results: Review[]
  total_pages: number
  total_results: number
}

export interface Person {
  id: number
  name: string
  profile_path: string | null
  known_for_department: string
  poster_path?: string | null
  media_type?: MediaType.Person
}

export type SearchResult = Movie | TVShow | Person

export interface SearchMultiResponse {
  page: number
  results: SearchResult[]
  total_pages: number
  total_results: number
}
