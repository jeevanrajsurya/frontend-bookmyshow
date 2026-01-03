import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Location from "./pages/Location"
import Signin from "./pages/Signin"
import Menu from "./pages/Menu"

function App() {
  const [showLocation, setShowLocation] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        onLocationClick={() => setShowLocation(true)}
        onSigninClick={() => setShowSignin(true)}
        onMenuClick={() => setShowMenu(true)}
      />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {/* MODALS */}
      {showLocation && <Location onClose={() => setShowLocation(false)} />}
      {showSignin && <Signin onClose={() => setShowSignin(false)} />}
      {showMenu && <Menu onClose={() => setShowMenu(false)} />}
    </>
  )
}

export default App
