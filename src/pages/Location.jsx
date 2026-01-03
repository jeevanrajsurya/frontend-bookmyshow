import { useState } from "react"
import { FiSearch, FiTarget, FiX } from "react-icons/fi"

// 👉 IMPORT YOUR CITY ICONS
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
    "Aalo", "Addanki", "Agar Malwa", "Ahmedgarh", "Akbarpur",
    "Abohar", "Adilabad", "Agartala", "Ajmer", "Akola",
    "Abu Road", "Adimali", "Aizawl", "Alappuzha", "Aligarh",
  ]

  return (
    <>
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />

      {/* MODAL */}
      <div className="fixed z-50 top-[80px] left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] bg-white rounded-lg p-6">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FiX size={20} />
        </button>

        {/* SEARCH */}
        <div className="flex items-center gap-3 border rounded-md px-4 py-3">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for your city"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* DETECT LOCATION */}
        <div className="flex items-center gap-2 text-red-500 mt-3 cursor-pointer text-sm">
          <FiTarget />
          <span>Detect my location</span>
        </div>

        {/* POPULAR CITIES */}
        <h3 className="text-center font-medium mt-6 mb-4">
          Popular Cities
        </h3>

        <div className="grid grid-cols-5 gap-6 text-center">
          {popularCities.map((city) => (
            <div key={city.name} className="cursor-pointer">
              <img src={city.img} alt={city.name} className="mx-auto h-10 mb-2" />
              <p className="text-sm text-gray-700">{city.name}</p>
            </div>
          ))}
        </div>

        {/* VIEW ALL / HIDE */}
        {!showAll ? (
          <p
            className="text-center text-red-500 mt-6 cursor-pointer text-sm"
            onClick={() => setShowAll(true)}
          >
            View All Cities
          </p>
        ) : (
          <>
            <h4 className="text-center font-medium mt-6 mb-4">
              Other Cities
            </h4>

            <div className="grid grid-cols-5 gap-4 text-sm text-gray-600">
              {otherCities.map((city) => (
                <p key={city} className="cursor-pointer hover:text-black">
                  {city}
                </p>
              ))}
            </div>

            <p
              className="text-center text-red-500 mt-6 cursor-pointer text-sm"
              onClick={() => setShowAll(false)}
            >
              Hide all cities
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Location
