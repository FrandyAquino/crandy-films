
'use client'

import { useUser } from '@/lib/context/UserContext'
import { MovieDetails } from "@/lib/types/movies"
import { Heart, Bookmark } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

interface MovieDetailsHeroProps {
  movie: MovieDetails
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const MovieDetailsHero = ({ movie }: MovieDetailsHeroProps) => {
  const { addFavorite, removeFavorite, addToWatchlist, removeFromWatchlist, isFavorite, isInWatchlist } = useUser()

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id)
    } else {
      addFavorite(movie)
    }
  }

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id)
    } else {
      addToWatchlist(movie)
    }
  }

  return (
    <div className="relative h-[90vh] w-full">
      <div className="absolute inset-0">
        <Image
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-end h-full container mx-auto px-4 pb-20 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full md:w-1/3 flex-shrink-0">
          <Image
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{movie.title}</h1>
          <p className="text-gray-400 italic mb-4">{movie.tagline}</p>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-red-500 font-bold">Rating: {movie.vote_average.toFixed(1)}</span>
            <span>|</span>
            <span>{movie.runtime} min</span>
            <span>|</span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            {movie.certification && (
              <span className="px-2 py-1 bg-red-600 text-white text-sm rounded-md font-bold">{movie.certification}</span>
            )}
            <motion.button
              onClick={handleFavoriteClick}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart size={20} fill={isFavorite(movie.id) ? "#EF4444" : "none"} stroke={isFavorite(movie.id) ? "#EF4444" : "currentColor"} />
            </motion.button>
            <motion.button
              onClick={handleWatchlistClick}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bookmark size={20} fill={isInWatchlist(movie.id) ? "#EF4444" : "none"} stroke={isInWatchlist(movie.id) ? "#EF4444" : "currentColor"} />
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map(genre => (
              <span key={genre.id} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{genre.name}</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Overview</h2>
          <p className="text-gray-300 text-lg">{movie.overview}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default MovieDetailsHero
