
'use client'

import { Movie } from '@/lib/types/movies'
import { motion } from "framer-motion"

interface HeroProps {
  movie: Movie
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const Hero = ({ movie }: HeroProps) => {
  if (!movie) return null

  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{movie.title}</h1>
          <p className="max-w-2xl text-gray-300 text-lg">{movie.overview}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
