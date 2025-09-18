
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { multiSearch } from '@/services/searchService'
import { useState, useEffect, useRef } from 'react'
import { SearchResult } from '@/lib/types/common'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Image from 'next/image'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w92'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      setLoading(true)
      multiSearch(debouncedQuery)
        .then((data) => {
          setResults(data)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setResults([])
    }
  }, [debouncedQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchRef])

  const handleResultClick = (result: SearchResult) => {
    const type = 'title' in result ? 'movie' : 'tv'
    router.push(`/${type}/${result.id}`)
    setIsOpen(false)
    setQuery('')
    setResults([])
  }

  return (
    <div className="relative" ref={searchRef}>
      <motion.div
        className="flex items-center bg-transparent border border-gray-600 rounded-full px-4 py-1 text-white focus-within:ring-2 focus-within:ring-red-500 transition-all"
        animate={{ width: isOpen ? 250 : 48 }}
        transition={{ duration: 0.3 }}
      >
        <Search size={20} className="text-gray-400 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        <input
          type="text"
          placeholder={isOpen ? "Search..." : ""}
          className="flex-grow bg-transparent outline-none ml-2 text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && query.length > 2 && (results.length > 0 || loading) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-2 w-full bg-neutral-900 rounded-md shadow-lg py-1 max-h-80 overflow-y-auto z-50"
          >
            {loading && <p className="p-2 text-gray-400">Searching...</p>}
            {!loading && results.length === 0 && <p className="p-2 text-gray-400">No results found.</p>}
            {!loading && results.map((result) => (
              <div
                key={result.id}
                className="flex items-center p-2 hover:bg-neutral-800 cursor-pointer"
                onClick={() => handleResultClick(result)}
              >
                {result.poster_path && (
                  <Image
                    src={`${IMAGE_BASE_URL}${result.poster_path}`}
                    alt={'title' in result ? result.title : result.name}
                    width={40}
                    height={60}
                    className="rounded mr-2"
                  />
                )}
                <div>
                  <p className="text-white text-sm font-bold">{'title' in result ? result.title : result.name}</p>
                  <p className="text-gray-400 text-xs">{'release_date' in result ? new Date(result.release_date).getFullYear() : ('first_air_date' in result ? new Date(result.first_air_date).getFullYear() : '')}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
