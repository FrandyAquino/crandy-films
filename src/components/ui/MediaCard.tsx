'use client'

import { useUser } from '@/lib/context/UserContext'
import { Heart, Bookmark } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Movie } from '@/lib/types/movies'
import { TVShow } from '@/lib/types/tv'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Media = Movie | TVShow

interface MediaCardProps {
  media: Media
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MediaCard = ({ media }: MediaCardProps) => {
  const router = useRouter()
  const { addFavorite, removeFavorite, addToWatchlist, removeFromWatchlist, isFavorite, isInWatchlist } = useUser()

  const isMovie = (media: Media): media is Movie => 'title' in media

  const title = isMovie(media) ? media.title : media.name
  const id = media.id
  const type = isMovie(media) ? 'movie' : 'tv'

  const handleTap = () => {
    router.push(`/${type}/${id}`)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(media)
    }
  }

  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (isInWatchlist(id)) {
      removeFromWatchlist(id)
    } else {
      addToWatchlist(media)
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ duration: 0.3 }}
      onTap={handleTap}
    >
      <Image
        src={`${IMAGE_BASE_URL}${media.poster_path}`}
        alt={title}
        width={500}
        height={750}
        className="w-full h-auto object-cover pointer-events-none"
        draggable="false"
      />
      <div className="absolute top-2 right-2 flex space-x-2 z-20">
        <motion.button
          onClick={handleFavoriteClick}
          className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart size={20} fill={isFavorite(id) ? "#EF4444" : "none"} stroke={isFavorite(id) ? "#EF4444" : "currentColor"} />
        </motion.button>
        <motion.button
          onClick={handleWatchlistClick}
          className="p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bookmark size={20} fill={isInWatchlist(id) ? "#EF4444" : "none"} stroke={isInWatchlist(id) ? "#EF4444" : "currentColor"} />
        </motion.button>
      </div>

      {isMovie(media) && media.certification && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-md font-bold z-20">{media.certification}</span>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pointer-events-none">
        <h3 className="text-white font-bold truncate">{title}</h3>
        <p className="text-red-500 text-sm">Rating: {media.vote_average.toFixed(1)}</p>
      </div>
    </motion.div>
  )
}

export default MediaCard