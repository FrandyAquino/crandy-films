
'use client'

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import { Review } from "@/lib/types/common"
import { motion } from "framer-motion"

interface ReviewsSectionProps {
  reviews: Review[]
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  if (!reviews || reviews.length === 0) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <TextGenerateEffect words="Reviews" className="mb-4" />
      <div className="space-y-6">
        {reviews.slice(0, 3).map(review => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-2">{review.author}</h3>
            <p className="text-gray-300 line-clamp-4">{review.content}</p>
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline mt-2 inline-block"
            >
              Read Full Review
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ReviewsSection
