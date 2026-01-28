import logo from "../assets/bookmyshow-logo.svg"
import { TbSearch } from "react-icons/tb"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDown } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

function Navbar({ onLocationClick, onSigninClick, onMenuClick }) {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white border-b border-gray-200 sm:border-gray-200 ">
      <div className="w-full h-16 ">
        <div className="h-full max-w-[1440px] lg:max-w-7xl mx-auto flex items-center px-4 sm:px-4">

          {/* ================= LEFT SECTION ================= */}
          <div className="flex items-center gap-3 flex-1 min-w-0">

            {/* LOGO  */}
            <Link to="/" className="hidden sm:block">
              <img
                src={logo}
                alt="BookMyShow"
                className="h-7 object-contain flex-shrink-0 cursor-pointer"
              />
            </Link>

            {/* ===== MOBILE TEXT BLOCK  ===== */}
            <div 
              onClick={() => navigate("/")}
              className="sm:hidden flex flex-col leading-tight cursor-pointer"
            >
              <span className="text-xl font-semibold text-black">
                It All Starts Here!
              </span>

              <div
                onClick={onLocationClick}
                className="flex items-center gap-1 text-[11px] text-gray-600 cursor-pointer"
              >
                <span className="text-[#EB4E62] text-[14px] font-bold">
                  Coimbatore
                </span>
                <IoChevronDown className="text-[14px] text-[#EB4E62]" />
              </div>
            </div>


            {/* ===== SEARCH BAR (TAB + DESKTOP) ===== */}
            <div
              onClick={() => navigate("/search")}
              className="
                hidden sm:flex        
                items-center
                h-10                  
                px-3
                rounded-md
                border
                border-gray-200
                bg-white
                cursor-pointer
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
                  pointer-events-none   
                "
              />
            </div>
          </div>

          <div className="w-4 sm:w-6 md:w-8"></div>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {/* ===== MOBILE USE APP BUTTON ===== */}
            <button  onClick={onSigninClick} className="sm:hidden text-[11px] px-3 py-1 border rounded-md border-gray-400 text-gray-700">
              Sign in
            </button>

            {/* ===== MOBILE SEARCH ICON ===== */}
            <TbSearch
              onClick={() => navigate("/search")}
              className="sm:hidden text-[20px] text-gray-500 cursor-pointer"
            />

            {/* ===== LOCATION (TAB + DESKTOP) ===== */}
            <div
              onClick={onLocationClick}
              className="
                hidden sm:flex
                items-center
                gap-1
                text-sm
                font-['Roboto']
                cursor-pointer
              "
            >
              <span>Coimbatore</span>
              <IoChevronDown className="text-gray-400 text-sm" />
            </div>

            {/* ===== SIGN IN (TAB + DESKTOP ) ===== */}
            <button
              onClick={onSigninClick}
              className="
                hidden sm:block
                h-[28px]
                px-4
                bg-[#EB4E62]
                text-white
                text-[12px]
                font-['Roboto']
                rounded
              "
            >
              Sign in
            </button>

            {/* ===== HAMBURGER (TAB + DESKTOP) ===== */}
            <RxHamburgerMenu
              onClick={onMenuClick}
              className="hidden sm:block text-2xl cursor-pointer"
            />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
