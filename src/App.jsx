import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

/* ================= AOS ================= */
import AOS from "aos";

/* ================= COMPONENTS ================= */
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";

/* ================= COMMON PAGES ================= */
import Home from "./pages/Home";
import Search from "./pages/Search";
import Location from "./pages/Location";
import Signin from "./pages/Signin";
import Menu from "./pages/Menu";

/* ================= RIGHT MENU PAGES ================= */
import ListYourShow from "./pages/ListYourShow";
import Corporates from "./pages/Corporates";
import Offers from "./pages/Offers";
import GiftCards from "./pages/GiftCards";

/* ================= LEFT MENU PAGES ================= */
import Movies from "./pages/Movies";
import Stream from "./pages/Stream";
import Events from "./pages/Events";
import Plays from "./pages/Plays";
import Sports from "./pages/Sports";
import Activities from "./pages/Activities";

/* ================= MOVIEDETAILS PAGE ================= */
import MovieDetails from "./pages/MovieDetails";

/*   THEATERDETAILS PAGE */
import TheaterDetails from "./pages/TheaterDetails";

function App() {
  const [showLocation, setShowLocation] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar
        onLocationClick={() => setShowLocation(true)}
        onSigninClick={() => setShowSignin(true)}
        onMenuClick={() => setShowMenu(true)}
      />

      <BottomNavbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="/movies" element={<Movies />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/events" element={<Events />} />
        <Route path="/plays" element={<Plays />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/activities" element={<Activities />} />

        <Route path="/list-your-show" element={<ListYourShow />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gift-cards" element={<GiftCards />} />

        {/* MOVIEDETAILS */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/*   THEATER ROUTE */}
        <Route path="/theaters/:id" element={<TheaterDetails />} />
      </Routes>

      {showLocation && (
        <Location onClose={() => setShowLocation(false)} />
      )}

      {showSignin && (
        <Signin onClose={() => setShowSignin(false)} />
      )}

      {showMenu && (
        <Menu
          onClose={() => setShowMenu(false)}
          onLogin={() => {
            setShowMenu(false);
            setShowSignin(true);
          }}
        />
      )}
    </>
  );
}

export default App;