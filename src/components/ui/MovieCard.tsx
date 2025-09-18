
'use client'

import { useRouter } from 'next/navigation'
import { Movie } from '@/lib/types/movies'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface MovieCardProps {
  movie: Movie
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({ movie }: MovieCardProps) => {
  const router = useRouter()

  const handleTap = () => {
    router.push(`/movie/${movie.id}`)
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
      onTap={handleTap}
    >
      <Image
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
        className="w-full h-auto object-cover pointer-events-none"
        draggable="false"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pointer-events-none">
        <h3 className="text-white font-bold truncate">{movie.title}</h3>
        <p className="text-red-500 text-sm">Rating: {movie.vote_average.toFixed(1)}</p>
      </div>
    </motion.div>
  )
}

export default MovieCard
