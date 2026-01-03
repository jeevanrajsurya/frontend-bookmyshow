import { useEffect } from "react"
import {
  FiX,
  FiBell,
  FiChevronRight,
  FiHelpCircle,
  FiGift,
  FiSettings,
} from "react-icons/fi"
import { MdOutlineMovie } from "react-icons/md"
import { HiOutlineCreditCard } from "react-icons/hi"
import { BsArrowRepeat } from "react-icons/bs"

import heyImg from "../assets/hey.avif"

function Menu({ onClose, onLogin }) {
  //  STOP BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleLoginClick = () => {
    onClose()      //  close menu
    onLogin()      //  open signin modal
  }

  return (
    <>
      {/* OVERLAY */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* MENU PANEL */}
      <div
        className="
          fixed top-0 right-0 h-full
          w-[360px]
          bg-white z-50 shadow-lg
          font-['Roboto']
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 h-[64px] border-b border-gray-200">
          <h3 className="text-[18px] font-medium text-[#222]">Hey!</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <FiX size={22} />
          </button>
        </div>

        {/* HEY CARD */}
        <div
          className="
            mx-4 my-4
            px-4 py-3
            rounded-lg
            bg-white
            shadow-[0_1px_4px_rgba(0,0,0,0.12)]
            flex items-center justify-between gap-4
          "
        >
          <div className="flex items-center gap-3">
            <img
              src={heyImg}
              alt="offers"
              className="w-[44px] h-[44px] rounded-full"
            />
            <p className="text-[10px] text-gray-600 leading-snug">
              Unlock special offers & great benefits
            </p>
          </div>

          {/*  LOGIN BUTTON → SIGNIN OPEN */}
          <button
            onClick={handleLoginClick}
            className="
              whitespace-nowrap
              px-4 py-1.5
              border border-[#EB4E62]
              text-[#EB4E62]
              text-[13px]
              font-medium
              rounded-md
              hover:bg-[#EB4E62]
              hover:text-white
              transition
            "
          >
            Login / Register
          </button>
        </div>

        {/* MENU LIST */}
        <div className="py-1">
          <MenuItem icon={<FiBell />} text="Notifications" />

          <MenuItem
            icon={<MdOutlineMovie />}
            text="Your Orders"
            sub="View all your bookings & purchases"
            disabled
          />

          <MenuItem
            icon={<MdOutlineMovie />}
            text="Stream Library"
            sub="Rented & Purchased Movies"
            disabled
          />

          <MenuItem
            icon={<HiOutlineCreditCard />}
            text="Play Credit Card"
            sub="View your Play Credit Card details and offers"
          />

          <MenuItem
            icon={<FiHelpCircle />}
            text="Help & Support"
            sub="View commonly asked queries and Chat"
          />

          <MenuItem
            icon={<FiSettings />}
            text="Accounts & Settings"
            sub="Location, Payments, Permissions & More"
            disabled
          />

          <MenuItem
            icon={<FiGift />}
            text="Rewards"
            sub="View your rewards & unlock new ones"
          />

          <MenuItem
            icon={<BsArrowRepeat />}
            text="BookAChange"
          />
        </div>
      </div>
    </>
  )
}

export default Menu

/* ---------- ITEM COMPONENT ---------- */

function MenuItem({ icon, text, sub, disabled }) {
  return (
    <div
      className={`
        flex items-center justify-between
        px-5 py-3
        ${disabled
          ? "opacity-40 cursor-not-allowed"
          : "cursor-pointer hover:bg-gray-50"}
      `}
    >
      <div className="flex items-center gap-4">
        <span className="text-[18px] text-gray-600">{icon}</span>

        <div>
          <p className="text-[14px] font-medium text-[#222]">{text}</p>
          {sub && (
            <p className="text-[12px] text-gray-500 leading-snug">{sub}</p>
          )}
        </div>
      </div>

      {!disabled && (
        <FiChevronRight className="text-gray-400 text-[18px]" />
      )}
    </div>
  )
}
