import Carousel from "../components/Carousel"
import RecommendedMovies from "../components/RecommendedMovies"
import StreamBanner from "../components/StreamBanner"
import BestOfLiveEvents from "../components/BestOfLiveEvents"
import ThrowbackBanner from "../components/ThrowbackBanner"
import Premiere from "../components/Premiere"
import YourMusicStudio from "../components/YourMusicStudio"
import OutdoorEvents from "../components/OutdoorEvents"
import LaughterTherapy from "../components/LaughterTherapy"
import PopularEvents from "../components/PopularEvents"
import TopGamesSportsEvents from "../components/TopGamesSportsEvents"
import ExploreFunActivities from "../components/ExploreFunActivities"
import TrendingSearches from "../components/TrendingSearches"
import FooterCTA from "../components/FooterCTA"

function Home() {
  return (
    <>
      <Carousel />
      <RecommendedMovies />
      <StreamBanner />
      <BestOfLiveEvents />
      <ThrowbackBanner />
      <Premiere />
      <YourMusicStudio />
      <OutdoorEvents />
      <LaughterTherapy />
      <PopularEvents />
      <TopGamesSportsEvents />
      <ExploreFunActivities />
      <TrendingSearches />
      <FooterCTA />
    </>
  )
}

export default Home
