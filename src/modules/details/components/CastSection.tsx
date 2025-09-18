
'use client'

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import { CastMember } from "@/lib/types/common"
import { UserCircle } from "lucide-react"
import Image from "next/image"

interface CastSectionProps {
  cast: CastMember[]
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300"

const CastSection = ({ cast }: CastSectionProps) => {
  if (!cast || cast.length === 0) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <TextGenerateEffect words="Cast" className="mb-4" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cast.slice(0, 12).map(member => (
          <div key={member.id} className="text-center">
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
              {member.profile_path ? (
                <Image
                  src={`${IMAGE_BASE_URL}${member.profile_path}`}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <UserCircle className="w-1/2 h-1/2 text-gray-500" />
              )}
            </div>
            <h3 className="text-white font-bold mt-2">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CastSection
