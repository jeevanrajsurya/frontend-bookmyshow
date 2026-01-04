import {
  FiSearch,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiFilm,
} from "react-icons/fi"
import { useRef, useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"

/* ================= TEMP DATA (later API replace) ================= */
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

  /* ================= STATES ================= */
  const [categories, setCategories] = useState([])
  const [trendingItems, setTrendingItems] = useState([])

  const [activeCategories, setActiveCategories] = useState([])
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const [searchText, setSearchText] = useState("")
  const [recentSearches, setRecentSearches] = useState([])

  /* ================= BACKEND READY ================= */
  useEffect(() => {
    // later replace with API calls
    setCategories(CATEGORY_DATA)
    setTrendingItems(TRENDING_DATA)
  }, [])

  /* ================= CATEGORY LOGIC ================= */
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

  /* ================= FILTER (PERFORMANCE SAFE) ================= */
  const filteredTrending = useMemo(() => {
    return trendingItems.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [searchText, trendingItems])

  /* ================= RECENT SEARCH ================= */
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
      {/* ================= TOP SEARCH BAR ================= */}
      <div className="bg-white h-[84px] relative z-[20] flex items-center justify-center">
        <div
          className="flex items-center gap-3 bg-[#f5f5f5] h-[45px]
                     w-[560px] max-w-[calc(100%-80px)]
                     rounded-full px-[25px] border border-[#eeeeee]"
        >
          <FiSearch className="text-[#666666] text-lg" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Movies, Events, Plays & more"
            className="bg-transparent outline-none w-full text-[14px]
                       font-normal font-['Roboto'] text-[#1a1a1a]"
          />
        </div>

        <FiX
          onClick={() => navigate("/")}
          className="absolute right-4 text-xl text-[#1a1a1a] cursor-pointer"
        />
      </div>

      {/* ================= CATEGORY FLOATING CARD ================= */}
      <div className="relative z-[20]">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[-18px]
                     w-[560px] bg-white rounded-xl
                     shadow-[0_2px_10px_rgba(0,0,0,0.08)]
                     px-6 py-3"
        >
          {showLeft && (
            <FiChevronLeft
              onClick={scrollLeft}
              size={28}
              className="absolute left-0 top-1/2 -translate-y-1/2
                         text-[#b3b3b3] cursor-pointer"
            />
          )}

          <div
            ref={catRef}
            onScroll={updateArrows}
            className="flex gap-3 overflow-x-hidden pt-1 px-2
                       [&::-webkit-scrollbar]:hidden
                       [-ms-overflow-style:'none']
                       [scrollbar-width:'none']"
          >
            {categories.map((cat) => {
              const isActive = activeCategories.includes(cat)

              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-[8px]
                    rounded-full whitespace-nowrap border
                    transition-colors duration-200
                    text-[14px] font-normal leading-[20px]
                    tracking-[0.2px] font-['Roboto']
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
              size={28}
              className="absolute right-0 top-1/2 -translate-y-1/2
                         text-[#b3b3b3] cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="absolute inset-0 overflow-y-auto
                   [&::-webkit-scrollbar]:hidden
                   [-ms-overflow-style:'none']
                   [scrollbar-width:'none']"
        style={{ paddingTop: "154px", paddingBottom: "40px" }}
      >
        {/* RECENT SEARCHES */}
        {recentSearches.length > 0 && (
          <div className="mt-[7px] flex justify-center">
            <div className="w-[560px]">
              <div className="flex items-center justify-between mb-2 mx-2">
                <p className="text-[12px] font-medium tracking-[0.4px] text-[#666666] font-['Roboto']">
                  RECENT SEARCHES
                </p>
                <button
                  onClick={clearRecent}
                  className="text-[12px] font-medium text-[#f84464] font-['Roboto']"
                >
                  Clear
                </button>
              </div>

              {recentSearches.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between bg-white
                             h-[55px] px-4 py-6 rounded-[12px]
                             shadow-[0_1px_6px_rgba(0,0,0,0.08)]
                             hover:bg-[#f5f5f5] transition-colors"
                >
                  <span className="text-[14px] font-normal text-[#1a1a1a] font-['Roboto']">
                    {item}
                  </span>
                  <FiFilm className="text-[#b3b3b3] text-[18px]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRENDING */}
        <div
          className={`flex justify-center ${
            recentSearches.length > 0 ? "mt-6" : "mt-[7px]"
          }`}
        >
          <div className="w-[560px]">
            {searchText === "" && (
              <p className="text-[12px] font-medium tracking-[0.4px]
                            text-[#666666] font-['Roboto']
                            mb-2 mx-2">
                TRENDING SEARCHES
              </p>
            )}

            <div className="bg-white rounded-[14px] overflow-hidden
                            shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
              {filteredTrending.map((item, idx) => (
                <div
                  key={item}
                  onClick={() => addToRecent(item)}
                  className={`flex items-center justify-between
                    h-[56px] px-4 py-6 cursor-pointer
                    hover:bg-[#f5f5f5] transition-colors
                    ${
                      idx !== filteredTrending.length - 1
                        ? "border-b border-[#e5e5e5]"
                        : ""
                    }`}
                >
                  <span className="text-[15px] font-normal text-[#1a1a1a] font-['Roboto']">
                    {item}
                  </span>
                  <FiFilm className="text-[#b3b3b3] text-[18px]" />
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
