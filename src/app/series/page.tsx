import { getPopularTVShows, getTopRatedTVShows, getTVAiringToday, getTVOnTheAir } from "@/services/tv"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import MediaCarousel from "@/modules/home/components/MediaCarousel"

const SeriesPage = async () => {
  const [popularTVShows, topRatedTVShows, airingTodayTVShows, onTheAirTVShows] = await Promise.all([
    getPopularTVShows(),
    getTopRatedTVShows(),
    getTVAiringToday(),
    getTVOnTheAir(),
  ])

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <TextGenerateEffect words="TV Shows" className="mb-8 text-center" />
        <MediaCarousel title="Popular TV Shows" media={popularTVShows} />
        <MediaCarousel title="Top Rated TV Shows" media={topRatedTVShows} />
        <MediaCarousel title="Airing Today" media={airingTodayTVShows} />
        <MediaCarousel title="On The Air" media={onTheAirTVShows} />
      </div>
    </div>
  )
}

export default SeriesPage