import { Genre, MediaType } from "@/lib/types/common";

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  first_air_date: string;
  media_type?: MediaType;
}

export interface TVShowDetails extends TVShow {
  genres: Genre[]
  episode_run_time: number[]
  tagline: string
  number_of_seasons: number
  number_of_episodes: number
  certification?: string
}

export interface ContentRating {
  iso_3166_1: string
  rating: string
}

export interface ContentRatingsResponse {
  id: number
  results: ContentRating[]
}
