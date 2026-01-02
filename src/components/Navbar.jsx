import logo from "../assets/bookmyshow-logo.svg"
import { TbSearch } from "react-icons/tb"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDown } from "react-icons/io5"

function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="w-full h-16 bg-white">
        <div className="h-full max-w-[1440px] mx-auto flex items-center px-4">

          {/* LOGO + SEARCH */}
          <div className="flex items-center gap-3 flex-1 min-w-0">

            {/* LOGO */}
            <img
              src={logo}
              alt="BookMyShow"
              className="h-7 object-contain flex-shrink-0"
            />
            {/* SEARCH BAR */}
            <div
              className="
                hidden sm:flex
                items-center
                h-10
                px-3
                rounded-md
                border
                border-gray-200
                bg-white

                flex-shrink-0
                w-[240px]
                sm:w-[260px]
                md:w-[320px]
                lg:w-[420px]
                xl:w-[520px]
              "
            >
              <TbSearch className="text-gray-500 text-lg mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  font-['Roboto']
                  text-gray-600
                  placeholder-gray-400
                  truncate
                "
              />
            </div>
          </div>

          {/* GAP RESERVER  */}
          <div className="w-4 sm:w-6 md:w-8"></div>

          {/*LOCATION + SIGN IN + MENU */}
          <div className="flex items-center gap-4 flex-shrink-0">

            {/* LOCATION */}
            <div className="hidden sm:flex items-center gap-1 text-sm font-['Roboto'] cursor-pointer flex-shrink-0">
              <span>Coimbatore</span>
              <IoChevronDown className="text-gray-400 text-sm" />
            </div>
            
            {/* SIGN IN */}
            <button
              className="
                h-[28px]
                px-4
                bg-[#EB4E62]
                text-white
                text-[12px]
                font-['Roboto']
                rounded
                shadow-sm
                flex-shrink-0
              "
            >
              Sign in
            </button>

            {/* HAMBURGER */}
            <RxHamburgerMenu className="text-2xl cursor-pointer flex-shrink-0" />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
