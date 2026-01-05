import logo from "../assets/bookmyshow-logo.svg"
import { TbSearch } from "react-icons/tb"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDown } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

function Navbar({ onLocationClick, onSigninClick, onMenuClick }) {
  const navigate = useNavigate()

  return (
    <header className="w-full bg-white">
      {/* 
        < 640px (mobile):
        - Navbar height = 64px
        - Search bar hidden
        - Location hidden
        - Logo + Sign in + Hamburger visible
      */}
      <div className="w-full h-16">
        {/* 
          lg: ≥1024px
          - Content centered
          - max width applied
        */}
        <div className="h-full max-w-[1440px] lg:max-w-7xl mx-auto flex items-center px-4">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* LOGO (all breakpoints) */}
            <Link to="/">
              <img
                src={logo}
                alt="BookMyShow"
                className="
                  h-7              /* all views */
                  object-contain
                  flex-shrink-0
                  cursor-pointer
                "
              />
            </Link>

            {/* SEARCH BAR */}
            {/* 
              sm: ≥640px   → visible
              md: ≥768px   → width increases
              lg: ≥1024px  → wider search
              xl: ≥1280px  → max width
            */}
            <div
              onClick={() => navigate("/search")}
              className="
                hidden sm:flex        /* <640px hidden, ≥640px show */
                items-center
                h-10                  /* search bar height */
                px-3
                rounded-md
                border
                border-gray-200
                bg-white
                cursor-pointer
                flex-shrink-0
                w-[240px]             /* default (sm) */
                sm:w-[260px]          /* ≥640px */
                md:w-[320px]          /* ≥768px */
                lg:w-[420px]          /* ≥1024px */
                xl:w-[520px]          /* ≥1280px */
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
                  pointer-events-none   /* click opens search page */
                "
              />
            </div>
          </div>

          {/* GAP BETWEEN LEFT & RIGHT */}
          {/* 
            sm: ≥640px → small gap
            md: ≥768px → bigger gap
          */}
          <div className="w-4 sm:w-6 md:w-8"></div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 flex-shrink-0">

            {/* LOCATION */}
            {/* 
              <640px  → hidden
              sm: ≥640px → visible
            */}
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

            {/* SIGN IN BUTTON (all views) */}
            <button
              onClick={onSigninClick}
              className="
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

            {/* HAMBURGER MENU (all views) */}
            <RxHamburgerMenu
              onClick={onMenuClick}
              className="text-2xl cursor-pointer"
            />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
