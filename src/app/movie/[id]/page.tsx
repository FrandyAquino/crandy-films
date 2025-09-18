

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreditsTabContent from "@/modules/details/components/CreditsTabContent"
import MovieDetailsHero from "@/modules/details/components/MovieDetailsHero"
import VideoSection from "@/modules/details/components/VideoSection"
import MediaCarousel from "@/modules/home/components/MediaCarousel"
import {
  getMovieVideos,
  getMovieDetails,
  getMovieCredits,
  getMovieCertifications,
  getMovieRecommendations,
} from "@/services/movies"

interface MovieDetailsPageProps {
  params: {
    id: string
  }
}

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const movieId = Number(params.id)

  const [movieDetails, credits, recommendations, videos, certification] = await Promise.all([
    getMovieDetails(movieId),
    getMovieCredits(movieId),
    getMovieRecommendations(movieId),
    getMovieVideos(movieId),
    getMovieCertifications(movieId),
  ])

  if (certification) {
    movieDetails.certification = certification
  }

  return (
    <div className="min-h-screen">
      <MovieDetailsHero movie={movieDetails} />
      <VideoSection videos={videos} />

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-neutral-800 rounded-lg p-1">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="credits"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300 hover:text-white transition-colors"
            >
              Credits
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-gray-300 text-lg mt-4">{movieDetails.overview}</p>
          </TabsContent>
          <TabsContent value="credits">
            <CreditsTabContent cast={credits.cast} crew={credits.crew} />
          </TabsContent>
        </Tabs>
      </div>

      {recommendations && recommendations.length > 0 && (
        <MediaCarousel title="Recommendations" media={recommendations} />
      )}
    </div>
  )
}

export default MovieDetailsPage
