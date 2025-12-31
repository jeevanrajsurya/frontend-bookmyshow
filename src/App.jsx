import BestOfLiveEvents from "./components/BestOfLiveEvents"
import BottomNavbar from "./components/BottomNavbar"
import Carousel from "./components/Carousel"
import ExploreFunActivities from "./components/ExploreFunActivities"
import FooterCTA from "./components/FooterCTA"
import LaughterTherapy from "./components/LaughterTherapy"
import Navbar from "./components/Navbar"
import OutdoorEvents from "./components/OutdoorEvents"
import PopularEvents from "./components/PopularEvents"
import Premiere from "./components/Premiere"
import RecommendedMovies from "./components/RecommendedMovies"
import StreamBanner from "./components/StreamBanner"
import ThrowbackBanner from "./components/ThrowbackBanner"
import TopGamesSportsEvents from "./components/TopGamesSportsEvents"
import TrendingSearches from "./components/TrendingSearches"
import YourMusicStudio from "./components/YourMusicStudio"

function App() {
  return (
   <>
   <Navbar/>
   <BottomNavbar/>
   <Carousel/>
   <RecommendedMovies/>
   <StreamBanner/>
   <BestOfLiveEvents/>
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

export default App
