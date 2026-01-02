import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useRef, useState, useEffect } from "react"

const categories = [
  "Movies",
  "Stream",
  "Events",
  "Plays",
  "Sports",
  "Activities",
  "Comedy",
  "Music",
]

function Search() {
  const catRef = useRef(null)

  const [activeCategories, setActiveCategories] = useState([])
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const toggleCategory = (cat) => {
    setActiveCategories((prev) =>
      prev.includes(cat)
        ? prev.filter((c) => c !== cat)
        : [...prev, cat]
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
  }, [])

  return (
    <div className="fixed inset-0 z-[100] bg-[#f5f5f5]">

      {/* TOP SEARCH BAR */}
      <div className="bg-white h-[84px] flex items-center justify-center relative">
        <div className="flex items-center gap-3 bg-[#f2f2f2] h-[44px] w-[560px] rounded-full px-4">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            placeholder="Search for Movies, Events, Plays & more"
            className="
              bg-transparent outline-none w-full
              text-[14px] font-normal
              leading-[20px] tracking-[0.2px]
              font-['Roboto']
              text-[#1a1a1a]
            "
          />
        </div>
        <FiX className="absolute right-8 text-xl text-gray-600 cursor-pointer" />
      </div>

      {/* CATEGORY FLOATING CARD */}
      <div className="relative">
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-[-18px]
            w-[560px] bg-white rounded-xl
            shadow-[0_2px_10px_rgba(0,0,0,0.08)]
            px-6 py-3
          "
        >

          {/* LEFT ARROW */}
          {showLeft && (
            <FiChevronLeft
              onClick={scrollLeft}
              size={30}
              className="absolute -left-0 top-1/2 -translate-y-1/2
                         text-[#b3b3b3] cursor-pointer"
            />
          )}

          {/* CATEGORY BUTTONS */}
          <div
            ref={catRef}
            onScroll={updateArrows}
            className="
              flex gap-3 overflow-x-hidden pt-1 px-2
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:'none']
              [scrollbar-width:'none']
            "
          >
            {categories.map((cat) => {
              const isActive = activeCategories.includes(cat)

              return (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className={`
                    flex items-center gap-2
                    px-4 py-[8px]
                    rounded-full
                    whitespace-nowrap border
                    transition-all duration-200

                    text-[14px] font-normal
                    leading-[20px] tracking-[0.2px]
                    font-['Roboto']

                    ${
                      isActive
                        ? "bg-[#f84464] text-white border-[#f84464] scale-105"
                        : "bg-white text-[#f84464] border-[#d9d9d9] hover:bg-[#f2f2f2]"
                    }
                  `}
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

          {/* RIGHT ARROW */}
          {showRight && (
            <FiChevronRight
              onClick={scrollRight}
              size={30}
              className="absolute -right-0 top-1/2 -translate-y-1/2
                         text-[#b3b3b3] cursor-pointer"
            />
          )}

        </div>
      </div>
    </div>
  )
}

export default Search
