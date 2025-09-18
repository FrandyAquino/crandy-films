
'use client'

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import VideoModal from '@/components/ui/VideoModal'
import { Video } from "@/lib/types/common"
import { PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface VideoSectionProps {
  videos: Video[]
}

const VideoSection = ({ videos }: VideoSectionProps) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube')

  if (!trailer) return null

  return (
    <>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        videoId={trailer.key}
      />
      <div className="container mx-auto px-4 py-8">
        <TextGenerateEffect words="Trailer" className="mb-4" />
        <motion.div
          className="relative h-40 cursor-pointer group overflow-hidden rounded-lg"
          onClick={() => setModalOpen(true)}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
            alt={trailer.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={80} className="text-white/80 group-hover:text-white transition-colors" />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default VideoSection
