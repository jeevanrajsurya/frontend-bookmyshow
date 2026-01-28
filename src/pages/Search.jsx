import {
  FiSearch,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiFilm,
} from "react-icons/fi"
import { useRef, useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"

const CATEGORY_DATA = [
  "Movies",
  "Stream",
  "Events",
  "Plays",
  "Sports",
  "Activities",
  "Comedy",
  "Music",
]

const TRENDING_DATA = [
  "Jana Nayagan",
  "Sirai",
  "Avatar: Fire and Ash",
  "Dhurandhar",
  "Stranger Things Finale Fan-fest",
  "Sarvam Maya",
  "Parasakthi",
  "Anaconda",
]

function Search() {
  const catRef = useRef(null)
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])
  const [trendingItems, setTrendingItems] = useState([])
  const [activeCategories, setActiveCategories] = useState([])
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    setCategories(CATEGORY_DATA)
    setTrendingItems(TRENDING_DATA)
  }, [])

  const toggleCategory = (cat) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  const removeCategory = (cat, e) => {
    e.stopPropagation()
    setActiveCategories((prev) => prev.filter((c) => c !== cat))
  }

  const updateArrows = () => {
    const el = catRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  const scrollRight = () => {
    catRef.current.scrollBy({ left: 160, behavior: "smooth" })
  }

  const scrollLeft = () => {
    catRef.current.scrollBy({ left: -160, behavior: "smooth" })
  }

  useEffect(() => {
    updateArrows()
  }, [categories])

  const filteredTrending = useMemo(() => {
    return trendingItems.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [searchText, trendingItems])

  const addToRecent = (item) => {
    setRecentSearches((prev) =>
      prev.includes(item) ? prev : [item, ...prev]
    )
  }

  const clearRecent = () => {
    setRecentSearches([])
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#f5f5f5]">

      {/* ===== TOP SEARCH BAR ===== */}
      <div className="bg-white h-[70px] sm:h-[84px] flex items-center justify-center relative">

        <div className="flex items-center gap-3 bg-[#f5f5f5]
                        h-[40px] sm:h-[45px]
                        w-[92%] sm:w-[560px]
                        rounded-full px-4 sm:px-[25px]
                        border border-[#eeeeee]">

          <FiSearch className="text-[#666666] text-base sm:text-lg" />

          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Movies, Events, Plays & more"
            className="bg-transparent outline-none w-full 
                       text-[13px] sm:text-[14px]
                       font-medium font-['Roboto'] text-[#1a1a1a]"
          />
        </div>

        {/* ✅ FIXED CLOSE BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 z-50 p-2 cursor-pointer"
        >
          <FiX className="text-lg sm:text-xl text-[#1a1a1a]" />
        </button>
      </div>

      {/* ===== CATEGORY CARD ===== */}
      <div className="relative z-[20]">
        <div className="absolute left-1/2 -translate-x-1/2 top-[-16px]
                        w-[94%] sm:w-[560px]
                        bg-white rounded-xl shadow
                        px-4 sm:px-6 py-2 sm:py-3">

          {showLeft && (
            <FiChevronLeft
              onClick={scrollLeft}
              size={22}
              className="absolute left-1 top-1/2 -translate-y-1/2 text-[#b3b3b3] cursor-pointer"
            />
          )}

          <div
            ref={catRef}
            onScroll={updateArrows}
            className="flex gap-2 sm:gap-3 overflow-x-auto pt-1 px-2
                       [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat) => {
              const isActive = activeCategories.includes(cat)

              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-[6px] sm:py-[8px]
                    rounded-full whitespace-nowrap border
                    transition-colors duration-200
                    text-[12px] sm:text-[14px]
                    font-['Roboto']
                    ${
                      isActive
                        ? "bg-[#f84464] text-white border-[#f84464]"
                        : "bg-white text-[#f84464] border-[#d9d9d9] hover:bg-[#f2f2f2]"
                    }`}
                >
                  {cat}
                  {isActive && (
                    <FiX
                      onClick={(e) => removeCategory(cat, e)}
                      className="text-white text-sm cursor-pointer"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {showRight && (
            <FiChevronRight
              onClick={scrollRight}
              size={22}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-[#b3b3b3] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div
        className="absolute inset-0 overflow-y-auto"
        style={{ paddingTop: "140px", paddingBottom: "40px" }}
      >

        {/* RECENT */}
        {recentSearches.length > 0 && (
          <div className="mt-2 flex justify-center">
            <div className="w-[94%] sm:w-[560px]">

              <div className="flex items-center justify-between mb-2 mx-2">
                <p className="text-[11px] sm:text-[12px] font-medium text-[#666666]">
                  RECENT SEARCHES
                </p>

                <button
                  onClick={clearRecent}
                  className="text-[11px] sm:text-[12px] font-medium text-[#f84464]"
                >
                  Clear
                </button>
              </div>

              {recentSearches.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-white
                             h-[48px] sm:h-[55px]
                             px-3 sm:px-4 rounded-[12px]
                             shadow hover:bg-[#f5f5f5]"
                >
                  <span className="text-[13px] font-normal sm:text-[14px] text-[#1a1a1a]">
                    {item}
                  </span>
                  <FiFilm className="text-[#b3b3b3] text-[16px] sm:text-[18px]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRENDING */}
        <div className="flex justify-center mt-2 sm:mt-6">
          <div className="w-[94%] sm:w-[560px]">

            {searchText === "" && (
              <p className="text-[11px] sm:text-[12px] font-medium text-[#666666] mb-2 mx-2">
                TRENDING SEARCHES
              </p>
            )}

            <div className="bg-white rounded-[14px] overflow-hidden shadow">

              {filteredTrending.map((item, idx) => (
                <div
                  key={item}
                  onClick={() => addToRecent(item)}
                  className={`flex items-center justify-between
                              h-[48px] sm:h-[56px]
                              px-3 sm:px-4 cursor-pointer
                              hover:bg-[#f5f5f5]
                              ${
                                idx !== filteredTrending.length - 1
                                  ? "border-b border-[#e5e5e5]"
                                  : ""
                              }`}
                >
                  <span className="text-[13px] sm:text-[15px] font-normal text-[#1a1a1a]">
                    {item}
                  </span>
                  <FiFilm className="text-[#b3b3b3] text-[16px] sm:text-[18px]" />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search
