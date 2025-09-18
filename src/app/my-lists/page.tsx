
'use client'

import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import MediaCarousel from '@/modules/home/components/MediaCarousel'
import { useUser } from '@/lib/context/UserContext'

const MyListsPage = () => {
  const { favorites, watchlist } = useUser()

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <TextGenerateEffect words="My Lists" className="mb-8 text-center" />

        {favorites.length > 0 ? (
          <MediaCarousel title="My Favorites" media={favorites} />
        ) : (
          <p className="text-gray-400 text-center text-lg mb-10">You haven&apos;t added any favorites yet.</p>
        )}

        {watchlist.length > 0 ? (
          <MediaCarousel title="My Watchlist" media={watchlist} />
        ) : (
          <p className="text-gray-400 text-center text-lg">Your watchlist is empty.</p>
        )}

        {favorites.length === 0 && watchlist.length === 0 && (
          <p className="text-gray-400 text-center text-lg mt-10">Start adding movies or TV shows to your lists!</p>
        )}
      </div>
    </div>
  )
}

export default MyListsPage
