import { useNavigate, useLocation } from "react-router-dom"

function BottomNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className="hidden md:block w-full bg-[#F5F5F5] border-b border-gray-200">
      <div className="max-w-[1440px] lg:max-w-7xl mx-auto h-10 px-4 flex items-center justify-between">

        <div className="flex items-center flex-1 -ml-2">
          <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">
            {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map(
              (item) => (
                <li
                  key={item}
                  className="text-sm text-[#333333] cursor-pointer px-2 hover:text-black"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex items-center -mr-3">
          <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">

            <li
              onClick={() => navigate("/list-your-show")}
              className={`text-xs px-3 cursor-pointer
                ${isActive("/list-your-show")
                  ? "text-black font-medium"
                  : "text-[#333333] hover:text-black"}`}
            >
              ListYourShow
            </li>

            <li
              onClick={() => navigate("/corporates")}
              className={`text-xs px-3 cursor-pointer
                ${isActive("/corporates")
                  ? "text-black font-medium"
                  : "text-[#333333] hover:text-black"}`}
            >
              Corporates
            </li>

            <li
              onClick={() => navigate("/offers")}
              className={`text-xs px-3 cursor-pointer
                ${isActive("/offers")
                  ? "text-black font-medium"
                  : "text-[#333333] hover:text-black"}`}
            >
              Offers
            </li>

            <li
              onClick={() => navigate("/gift-cards")}
              className={`text-xs px-3 cursor-pointer
                ${isActive("/gift-cards")
                  ? "text-black font-medium"
                  : "text-[#333333] hover:text-black"}`}
            >
              Gift Cards
            </li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default BottomNavbar
