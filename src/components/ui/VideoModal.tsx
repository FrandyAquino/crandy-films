
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
          >
            <button onClick={onClose} className="absolute -top-8 right-0 text-white z-10">
              <X size={32} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal
