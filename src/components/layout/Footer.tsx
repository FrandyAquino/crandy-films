
"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-8 bg-neutral-900"
    >
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>Built with Next.js, Tailwind CSS, and the TMDB API.</p>
        <p>&copy; {new Date().getFullYear()} Crandy Films. All Rights Reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
