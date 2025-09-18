import { getTrendingMovies, getTopRatedMovies, getUpcomingMovies } from "@/services/movies"
import MediaCarousel from "@/modules/home/components/MediaCarousel"
import { getPopularTVShows } from "@/services/tv"
import Hero from "@/modules/home/components/Hero"

const HomePage = async () => {
  const [trendingMovies, topRatedMovies, upcomingMovies, popularTVShows] = await Promise.all([
    getTrendingMovies('week'),
    getTopRatedMovies(),
    getUpcomingMovies(),
    getPopularTVShows(),
  ])

  const heroMovie = trendingMovies[0]

  return (
    <div className="min-h-screen">
      <Hero movie={heroMovie} />
      <div className="space-y-10 py-10">
        <MediaCarousel title="Trending This Week" media={trendingMovies.slice(1)} />
        <MediaCarousel title="Top Rated Movies" media={topRatedMovies} />
        <MediaCarousel title="Popular TV Shows" media={popularTVShows} />
        <MediaCarousel title="Upcoming Movies" media={upcomingMovies} />
      </div>
    </div>
  )
}

export default HomePage