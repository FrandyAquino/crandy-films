
'use client'

import { CastMember, CrewMember } from "@/lib/types/common"
import { UserCircle } from "lucide-react"
import Image from "next/image"

interface CreditsTabContentProps {
  cast: CastMember[]
  crew: CrewMember[]
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300"

const CreditsTabContent = ({ cast, crew }: CreditsTabContentProps) => {

  const groupedCrew = crew.reduce((acc, member) => {
    if (!acc[member.job]) {
      acc[member.job] = []
    }
    acc[member.job].push(member)
    return acc
  }, {} as Record<string, CrewMember[]>)

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold text-white mb-4">Cast</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {cast.slice(0, 12).map(member => (
          <div key={`cast-${member.id}`} className="text-center">
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

      <h2 className="text-2xl font-bold text-white mb-4">Crew</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(groupedCrew).map(([job, members]) => (
          <div key={job} className="mb-4">
            <h3 className="text-xl font-bold text-gray-300 mb-2">{job}</h3>
            <ul className="list-disc list-inside text-gray-400">
              {members.map(member => (
                <li key={`crew-${member.id}`}>{member.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditsTabContent
