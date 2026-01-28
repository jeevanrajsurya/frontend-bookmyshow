import { useNavigate, useLocation } from "react-router-dom"

/* ===== ICONS ===== */
import moviesIcon from "../assets/movies.avif"
import streamIcon from "../assets/stream.avif"
import eventsIcon from "../assets/events1.avif"
import playsIcon from "../assets/plays1.avif"
import sportsIcon from "../assets/sports1.avif"
import activitiesIcon from "../assets/activities.avif"

function BottomNavbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const leftMenu = [
    { label: "Movies", path: "/movies", icon: moviesIcon },
    { label: "Events", path: "/events", icon: eventsIcon },
    { label: "Plays", path: "/plays", icon: playsIcon },
    { label: "Sports", path: "/sports", icon: sportsIcon },
    { label: "Activities", path: "/activities", icon: activitiesIcon },
    { label: "Stream", path: "/stream", icon: streamIcon },
  ]

  return (
    <>
      {/* ================= TAB + DESKTOP  ================= */}
      <div className="hidden md:block w-full bg-[#F5F5F5] border-b border-gray-200">
        <div className="max-w-[1440px] lg:max-w-7xl mx-auto h-10 px-4 flex items-center justify-between">

          {/* LEFT MENU */}
          <div className="flex items-center flex-1 -ml-2">
            <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">
              {leftMenu.map((item) => (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`text-sm cursor-pointer px-2 ${
                    isActive(item.path)
                      ? "text-black font-medium"
                      : "text-[#333333] hover:text-black"
                  }`}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT MENU */}
          <div className="flex items-center -mr-3">
            <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">

              <li onClick={() => navigate("/list-your-show")}
                className={`text-xs px-3 cursor-pointer ${
                  isActive("/list-your-show")
                    ? "text-black font-medium"
                    : "text-[#333333] hover:text-black"
                }`}
              >
                ListYourShow
              </li>

              <li onClick={() => navigate("/corporates")}
                className={`text-xs px-3 cursor-pointer ${
                  isActive("/corporates")
                    ? "text-black font-medium"
                    : "text-[#333333] hover:text-black"
                }`}
              >
                Corporates
              </li>

              <li onClick={() => navigate("/offers")}
                className={`text-xs px-3 cursor-pointer ${
                  isActive("/offers")
                    ? "text-black font-medium"
                    : "text-[#333333] hover:text-black"
                }`}
              >
                Offers
              </li>

              <li onClick={() => navigate("/gift-cards")}
                className={`text-xs px-3 cursor-pointer ${
                  isActive("/gift-cards")
                    ? "text-black font-medium"
                    : "text-[#333333] hover:text-black"
                }`}
              >
                Gift Cards
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* ================= MOBILE ICON NAVBAR ================= */}
      <div className="md:hidden bg-white border-b border-gray-200 ">

        <div className="flex gap-4 overflow-x-auto px-2
                        [&::-webkit-scrollbar]:hidden
                        [-ms-overflow-style:'none']
                        [scrollbar-width:'none']">

          {leftMenu.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center justify-center min-w-[72px] cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`
                  w-22 h-22 object-contain
                  transition-transform duration-200
                  ${isActive(item.path) ? "scale-110" : ""}
                `}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default BottomNavbar
