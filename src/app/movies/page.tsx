import { getTopRatedMovies, getUpcomingMovies } from "@/services/movies"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import MediaCarousel from "@/modules/home/components/MediaCarousel"

const MoviesPage = async () => {
  const [topRatedMovies, upcomingMovies] = await Promise.all([
    getTopRatedMovies(),
    getUpcomingMovies(),
  ])

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <TextGenerateEffect words="Movies" className="mb-8 text-center" />
        <MediaCarousel title="Top Rated Movies" media={topRatedMovies} />
        <MediaCarousel title="Upcoming Movies" media={upcomingMovies} />
      </div>
    </div>
  )
}

export default MoviesPage