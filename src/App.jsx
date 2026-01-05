import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

/* ================= AOS ================= */
import AOS from "aos"
/*
  AOS.init():
  - duration : animation speed (ms)
  - once     : animation only once on scroll
*/

/* ================= COMPONENTS ================= */
import Navbar from "./components/Navbar"
import BottomNavbar from "./components/BottomNavbar"

/* ================= PAGES ================= */
import Home from "./pages/Home"
import Search from "./pages/Search"
import Location from "./pages/Location"
import Signin from "./pages/Signin"
import Menu from "./pages/Menu"

import ListYourShow from "./pages/ListYourShow"
import Corporates from "./pages/Corporates"
import Offers from "./pages/Offers"
import GiftCards from "./pages/GiftCards"

function App() {
  /* ================= MODAL STATES ================= */
  const [showLocation, setShowLocation] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  /* ================= STEP 3 : AOS INIT ================= */
  useEffect(() => {
    /*
      This runs ONE TIME when app loads

      - Enables AOS animations for entire project
      - No need to repeat in other components
    */
    AOS.init({
      duration: 800,   // animation duration (0.8s)
      once: true,      // animate only once
      easing: "ease-in-out",
    })
  }, [])

  return (
    <>
      {/* ================= TOP NAVBAR ================= */}
      {/* All breakpoints */}
      <Navbar
        onLocationClick={() => setShowLocation(true)}
        onSigninClick={() => setShowSignin(true)}
        onMenuClick={() => setShowMenu(true)}
      />

      {/* ================= BOTTOM NAVBAR ================= */}
      {/* md+ only */}
      <BottomNavbar />

      {/* ================= ROUTES ================= */}
      {/*
        /                → Home
        /search          → Search
        /list-your-show  → ListYourShow
        /corporates      → Corporates
        /offers          → Offers
        /gift-cards      → GiftCards
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="/list-your-show" element={<ListYourShow />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>

      {/* ================= LOCATION MODAL ================= */}
      {showLocation && (
        <Location onClose={() => setShowLocation(false)} />
      )}

      {/* ================= SIGNIN MODAL ================= */}
      {showSignin && (
        <Signin onClose={() => setShowSignin(false)} />
      )}

      {/* ================= MENU DRAWER ================= */}
      {showMenu && (
        <Menu
          onClose={() => setShowMenu(false)}
          onLogin={() => {
            setShowMenu(false)
            setShowSignin(true)
          }}
        />
      )}
    </>
  )
}

export default App
