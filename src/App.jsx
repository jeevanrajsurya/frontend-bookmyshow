import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import BottomNavbar from "./components/BottomNavbar"

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
  const [showLocation, setShowLocation] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar
        onLocationClick={() => setShowLocation(true)}
        onSigninClick={() => setShowSignin(true)}
        onMenuClick={() => setShowMenu(true)}
      />

      {/* BOTTOM NAVBAR (ONLY HERE) */}
      <BottomNavbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="/list-your-show" element={<ListYourShow />} />
        <Route path="/corporates" element={<Corporates />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/gift-cards" element={<GiftCards />} />
      </Routes>

      {/* LOCATION MODAL */}
      {showLocation && (
        <Location onClose={() => setShowLocation(false)} />
      )}

      {/* SIGNIN MODAL */}
      {showSignin && (
        <Signin onClose={() => setShowSignin(false)} />
      )}

      {/* MENU */}
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
