import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar"
import BottomNavbar from "./components/BottomNavbar"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Location from "./pages/Location"
import Signin from "./pages/Signin"
import Menu from "./pages/Menu"

function Layout() {
  const location = useLocation()

  // 👉 Home page mattum navbar venum
  const showNavbar = location.pathname === "/"

  return (
    <>
      {showNavbar && <Navbar />}
      {showNavbar && <BottomNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/location" element={<Location />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
