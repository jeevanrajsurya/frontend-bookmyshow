import { useState, useEffect, useMemo } from "react"
import { FiSearch } from "react-icons/fi"
import { BiTargetLock } from "react-icons/bi"

// CITY ICONS
import mumbai from "../assets/mumbai.avif"
import delhi from "../assets/delhi.avif"
import bengaluru from "../assets/bengaluru.avif"
import hyderabad from "../assets/hyderabad.png"
import chennai from "../assets/chennai.avif"
import kolkata from "../assets/kolkata.avif"
import kochi from "../assets/kochi.avif"
import pune from "../assets/pune.png"
import chandigarh from "../assets/chandigarh.avif"
import ahmedabad from "../assets/ahmedabad.avif"

/* ================= TEMP DATA (API later) ================= */
const POPULAR_CITIES_DATA = [
  { name: "Mumbai", img: mumbai },
  { name: "Delhi-NCR", img: delhi },
  { name: "Bengaluru", img: bengaluru },
  { name: "Hyderabad", img: hyderabad },
  { name: "Chandigarh", img: chandigarh },
  { name: "Ahmedabad", img: ahmedabad },
  { name: "Pune", img: pune },
  { name: "Chennai", img: chennai },
  { name: "Kolkata", img: kolkata },
  { name: "Kochi", img: kochi },
]

const OTHER_CITIES_DATA = [
  "Aalo","Addanki","Agar Malwa","Ahmedgarh","Akbarpur","Alibaug",
  "Abohar","Adilabad","Agartala","Ajmer","Akola","Aligarh",
  "Abu Road","Adimali","Aizawl","Alappuzha","Alipurduar",
  "Achampet","Adipur","Agra","Allagadda","Almora",
]

function Location({ onClose }) {
  const [showAll, setShowAll] = useState(false)
  const [searchText, setSearchText] = useState("")
  const [popularCities, setPopularCities] = useState([])
  const [otherCities, setOtherCities] = useState([])

  /* ================= LOCK BACKGROUND ================= */
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    setPopularCities(POPULAR_CITIES_DATA)
    setOtherCities(OTHER_CITIES_DATA)
  }, [])

  /* ================= SEARCH FILTER ================= */
  const filteredOtherCities = useMemo(() => {
    if (!searchText) return otherCities
    return otherCities.filter((city) =>
      city.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [searchText, otherCities])

  const handleCitySelect = (city) => {
    console.log("Selected city:", city)
    onClose()
  }

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* MODAL (AOS : FADE-DOWN) */}
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-offset="200"
        className="
          fixed z-50 top-[64px] left-1/2 -translate-x-1/2
          w-[96%] max-w-[1000px]
          bg-white rounded-lg
        "
      >
        {/* TOP */}
        <div className="p-4 sm:p-5 lg:p-6">
          {/* SEARCH */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3">
            <FiSearch className="text-[#555] text-[16px] sm:text-[18px]" />
            <input
              type="text"
              placeholder="Search for your city"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full outline-none bg-transparent text-[13px] sm:text-[14px]
                         font-['Roboto'] text-[#333] placeholder-[#999]"
            />
          </div>

          {/* DETECT */}
          <div className="mt-3 -mb-3">
            <div className="flex items-center gap-2 cursor-pointer">
              <BiTargetLock className="text-[#DC354B] text-[13px] sm:text-[14px]" />
              <span className="text-[13px] sm:text-[14px] font-['Roboto'] text-[#DC354B]">
                Detect my location
              </span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#E6E6E6]" />

        {/* CONTENT */}
        <div className="px-4 sm:px-6 py-5">
          {/* POPULAR */}
          <h3 className="text-center text-[13px] sm:text-[14px]
                         font-['Roboto'] font-medium text-[#333] mb-3">
            Popular Cities
          </h3>

          {/* POPULAR LIST */}
          <div
            className="flex gap-2 sm:gap-4 overflow-x-auto xl:overflow-visible
                       xl:justify-between pb-2
                       [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {popularCities.map((city) => (
              <div
                key={city.name}
                onClick={() => handleCitySelect(city.name)}
                className="flex-shrink-0 text-center cursor-pointer
                           w-[64px] sm:w-[80px] xl:w-auto"
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="mx-auto h-[40px] sm:h-[54px] xl:h-[70px] mb-2"
                />
                <p className="text-[11px] sm:text-[13px] xl:text-[14px]
                              font-['Roboto'] text-[#666]">
                  {city.name}
                </p>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          {!showAll ? (
            <p
              className="text-center text-[#DC354B] text-[13px] sm:text-[14px]
                         font-['Roboto'] font-medium mt-4 cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              View All Cities
            </p>
          ) : (
            <>
              <h4 className="text-center text-[13px] sm:text-[14px]
                             font-['Roboto'] font-medium text-[#333]
                             mt-6 mb-4">
                Other Cities
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-6">
                {filteredOtherCities.map((city) => (
                  <p
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="text-[11px] sm:text-[12px]
                               font-['Roboto'] text-[#999]
                               cursor-pointer hover:text-[#333]
                                text-center xl:text-left"
                  >
                    {city}
                  </p>
                ))}
              </div>

              <p
                className="text-center text-[#DC354B] text-[13px] sm:text-[14px]
                           font-['Roboto'] font-medium mt-6 cursor-pointer"
                onClick={() => setShowAll(false)}
              >
                Hide all cities
              </p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Location
