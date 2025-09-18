import MovieDetailsHero from "@/modules/details/components/MovieDetailsHero"
import ReviewsSection from "@/modules/details/components/ReviewsSection"
import VideoSection from "@/modules/details/components/VideoSection"
import MediaCarousel from "@/modules/home/components/MediaCarousel"
import CastSection from "@/modules/details/components/CastSection"
import {
  getTVShowVideos,
  getTVShowDetails,
  getTVShowCredits,
  getTVShowReviews,
  getTVShowCertifications,
  getTVShowRecommendations,
} from "@/services/tv"

interface TVShowDetailsPageProps {
  params: {
    id: string
  }
}

const TVShowDetailsPage = async ({ params }: TVShowDetailsPageProps) => {
  const tvShowId = Number(params.id)

  const [tvShowDetails, credits, recommendations, videos, certification, reviews] = await Promise.all([
    getTVShowDetails(tvShowId),
    getTVShowCredits(tvShowId),
    getTVShowRecommendations(tvShowId),
    getTVShowVideos(tvShowId),
    getTVShowCertifications(tvShowId),
    getTVShowReviews(tvShowId),
  ])

  if (certification) {
    tvShowDetails.certification = certification
  }

  const adaptedMovieDetails = {
    ...tvShowDetails,
    title: tvShowDetails.name,
    release_date: tvShowDetails.first_air_date,
    runtime: tvShowDetails.episode_run_time[0] || 0,
    genre_ids: tvShowDetails.genres ? tvShowDetails.genres.map((genre: { id: number }) => genre.id) : [],
  }

  return (
    <div className="min-h-screen">
      <MovieDetailsHero movie={adaptedMovieDetails} />
      {videos && videos.length > 0 && (
        <VideoSection videos={videos} />
      )}
      <ReviewsSection reviews={reviews} />
      <CastSection cast={credits.cast} />
      {recommendations && recommendations.length > 0 && (
        <MediaCarousel title="Similar TV Shows" media={recommendations} />
      )}
    </div>
  )
}

export default TVShowDetailsPage
