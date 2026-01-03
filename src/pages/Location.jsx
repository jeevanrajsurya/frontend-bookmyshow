import { useState, useEffect } from "react"
import { FiSearch } from "react-icons/fi"
import { BiTargetLock } from "react-icons/bi"

//  CITY ICONS
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

function Location({ onClose }) {
  const [showAll, setShowAll] = useState(false)

  //  LOCK BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const popularCities = [
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

  const otherCities = [
    "Aalo","Addanki","Agar Malwa","Ahmedgarh","Akbarpur","Alibaug",
    "Abohar","Adilabad","Agartala","Ajmer","Akola","Aligarh","Agar Malwa",
    "Abu Road","Adimali","Aizawl","Alappuzha","Alipurduar","Ajmer","Akola",
    "Achampet","Adipur","Agra","Allagadda","Alappuzha","Alipurduar","Ajmer",
    "Acharapakkam","Adoni","Ahilyanagar (Ahmednagar)","Akaltara","Almora","Alipurduar","Ajmer","Almora"
  ]

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* MODAL */}
      <div className="fixed z-50 top-[64px] left-1/2 -translate-x-1/2 w-[96%] max-w-[1100px] bg-white rounded-lg">

        {/* TOP */}
        <div className="p-4 sm:p-5 lg:p-6">
          {/* SEARCH */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3">
            <FiSearch className="text-[#555] text-[16px] sm:text-[18px]" />
            <input
              type="text"
              placeholder="Search for your city"
              className="w-full outline-none bg-transparent text-[13px] sm:text-[14px] font-['Roboto'] text-[#333] placeholder-[#999]"
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
          <h3 className="text-center text-[13px] sm:text-[14px] font-['Roboto'] font-medium text-[#333] mb-3">
            Popular Cities
          </h3>

          {/* SCROLL AREA */}
          <div
            className="
              flex gap-4
              overflow-x-auto
              xl:overflow-visible
              xl:justify-between
              pb-2
              [&::-webkit-scrollbar]:hidden
            "
            style={{ scrollbarWidth: "none" }}
          >
            {popularCities.map((city) => (
              <div
                key={city.name}
                className="flex-shrink-0 text-center cursor-pointer w-[64px] sm:w-[80px] xl:w-auto"
              >
                <img
                  src={city.img}
                  alt={city.name}
                  className="mx-auto h-[48px] sm:h-[64px] xl:h-[90px] mb-2"
                />
                <p className="text-[11px] sm:text-[13px] xl:text-[14px] font-['Roboto'] text-[#666]">
                  {city.name}
                </p>
              </div>
            ))}
          </div>

          {/* VIEW ALL */}
          {!showAll ? (
            <p
              className="text-center text-[#DC354B] text-[13px] sm:text-[14px] font-['Roboto'] font-medium mt-4 cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              View All Cities
            </p>
          ) : (
            <>
              <h4 className="text-center text-[13px] sm:text-[14px] font-['Roboto'] font-medium text-[#333] mt-6 mb-4">
                Other Cities
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-6">
                {otherCities.map((city) => (
                  <p
                    key={city}
                    className="text-[11px] sm:text-[12px] font-['Roboto'] text-[#999] cursor-pointer hover:text-[#333]"
                  >
                    {city}
                  </p>
                ))}
              </div>

              <p
                className="text-center text-[#DC354B] text-[13px] sm:text-[14px] font-['Roboto'] font-medium mt-6 cursor-pointer"
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
