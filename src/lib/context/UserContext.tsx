
'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react'
import { Movie } from '@/lib/types/movies'
import { TVShow } from '@/lib/types/tv'

type Media = Movie | TVShow

interface UserContextType {
  favorites: Media[]
  watchlist: Media[]
  addFavorite: (media: Media) => void
  removeFavorite: (id: number) => void
  addToWatchlist: (media: Media) => void
  removeFromWatchlist: (id: number) => void
  isFavorite: (id: number) => boolean
  isInWatchlist: (id: number) => boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Media[]>([])
  const [watchlist, setWatchlist] = useState<Media[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    const storedWatchlist = localStorage.getItem('watchlist')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  const addFavorite = (media: Media) => {
    setFavorites((prev) => [...prev, media])
  }

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const addToWatchlist = (media: Media) => {
    setWatchlist((prev) => [...prev, media])
  }

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id: number) => favorites.some((item) => item.id === id)
  const isInWatchlist = (id: number) => watchlist.some((item) => item.id === id)

  return (
    <UserContext.Provider
      value={{
        favorites,
        watchlist,
        addFavorite,
        removeFavorite,
        addToWatchlist,
        removeFromWatchlist,
        isFavorite,
        isInWatchlist,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
