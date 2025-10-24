
import { Genre, MediaType } from "@/lib/types/common";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  certification?: string;
  media_type?: MediaType;
}

export interface MovieDetails extends Movie {
  genres: Genre[]
  runtime: number
  tagline: string
  certification?: string
}

export interface ReleaseDate {
  certification: string
  iso_639_1: string
  release_date: string
  type: number
}

export interface ReleaseDatesResponse {
  id: number
  results: {
    iso_3166_1: string
    release_dates: ReleaseDate[]
  }[];
}
