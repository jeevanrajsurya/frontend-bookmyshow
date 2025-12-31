import logo from "../assets/bookmyshow-logo.svg"
import { TbSearch } from "react-icons/tb"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDown } from "react-icons/io5"

function Navbar() {
  return (
    <header className="w-full bg-white">
      {/* TOP NAVBAR */}
      <div className="w-full h-16 bg-white mt-0.5 mb-1">
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LEFT : LOGO + SEARCH */}
          <div className="flex items-center gap-6 md:gap-2 lg:gap-6 flex-1 min-w-0">
            <img
              src={logo}
              alt="BookMyShow"
              className="h-7 object-contain"
            />

            {/* SEARCH BAR */}
            <div
              className="
                hidden md:flex
                items-center
                w-full
                md:max-w-[380px]
                lg:max-w-[500px]
                h-10
                px-3
                rounded-md
                border
                border-gray-200
                bg-white
                min-w-0
              "
            >
              <TbSearch className="text-gray-500 text-lg mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="
                  w-full
                  bg-transparent
                  border-none
                  outline-none
                  text-sm
                  font-['Roboto']
                  font-normal
                  leading-5
                  tracking-wide
                  text-gray-500
                  placeholder-gray-400
                  whitespace-nowrap
                  overflow-hidden
                  text-ellipsis
                "
              />
            </div>
          </div>

          {/* RIGHT : LOCATION + SIGN IN + MENU */}
          <div className="flex items-center gap-5 md:gap-3 lg:gap-5 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-sm cursor-pointer font-['Roboto'] flex-shrink-0">
              <span>Coimbatore</span>
              <IoChevronDown className="text-gray-400 text-sm" />
            </div>

            <button
              className="
                flex
                items-center
                justify-center
                h-[25px]
                w-[67px]
                bg-[#EB4E62]
                text-white
                text-[12px]
                font-['Roboto']
                font-normal
                rounded
                shadow-md
                flex-shrink-0
              "
            >
              Sign in
            </button>

            <RxHamburgerMenu className="text-2xl cursor-pointer flex-shrink-0" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
