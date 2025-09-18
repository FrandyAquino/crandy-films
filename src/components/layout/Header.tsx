"use client"

import { motion, AnimatePresence } from "framer-motion"
import SearchBar from "@/components/layout/SearchBar"
import { User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const Header = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-red-600">
              CRANDY
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-red-500 transition-colors">Home</Link>
              <Link href="/series" className="text-white hover:text-red-500 transition-colors">Series</Link>
              <Link href="/movies" className="text-white hover:text-red-500 transition-colors">Movies</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-full cursor-pointer bg-gray-700 flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
              >
                <User className="text-white" />
              </motion.div>
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-neutral-900 rounded-md shadow-lg py-1"
                  >
                    <Link href="/profile" className="block px-4 py-2 text-sm text-white hover:bg-red-600">Ver Perfil</Link>
                    <Link href="/my-lists" className="block px-4 py-2 text-sm text-white hover:bg-red-600">My Lists</Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm text-white hover:bg-red-600">Settings</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header