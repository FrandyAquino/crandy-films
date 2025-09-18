'use client'

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import { useRef, useState, useEffect } from "react"
import MediaCard from "@/components/ui/MediaCard"
import { Movie } from "@/lib/types/movies"
import { TVShow } from "@/lib/types/tv"
import { motion } from "framer-motion"

type Media = Movie | TVShow

interface MediaCarouselProps {
  title: string
  media: Media[]
}

const MediaCarousel = ({ title, media }: MediaCarouselProps) => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (carouselRef.current && carouselWrapperRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth
      const clientWidth = carouselWrapperRef.current.clientWidth
      setWidth(scrollWidth - clientWidth)
    }
  }, [media])

  return (
    <div className="container mx-auto px-4 py-8">
      <TextGenerateEffect words={title} className="mb-4" />

      <motion.div
        ref={carouselWrapperRef}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          ref={carouselRef}
          className="flex space-x-4 p-1"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {media.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-1/6">
              <MediaCard media={item} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MediaCarousel