import { useNavigate, useLocation } from "react-router-dom"

import listShowIcon from "../assets/list-your-show.svg"

import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"

import bmsLogo from "../assets/bms-logo.png"
import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import yt from "../assets/yt.png"
import pin from "../assets/pinterest.png"
import inIcon from "../assets/linkedin.png"

/* MOBILE ICONS */
import homeIcon from "../assets/home.avif"
import moviesIcon from "../assets/movies1.avif"
import liveIcon from "../assets/live.avif"
import profileIcon from "../assets/profile.avif"

function FooterCTA() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* ================= DESKTOP + TAB FOOTER  ================= */}
      <footer className="w-full hidden md:block bg-[#333338]">

        {/* ================= PART 1 ================= */}
        <section className="bg-[#313035]">
          <div className="max-w-[1300px] mx-auto px-4">
            <div className="flex items-center justify-between h-[82px]">

              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={listShowIcon}
                  alt="List your show"
                  className="w-[38px] h-[38px]"
                />

                <div className="flex gap-2 text-white text-[16px] font-['Roboto'] min-w-0">
                  <span className="font-[600] whitespace-nowrap">
                    List your Show
                  </span>
                  <span className="opacity-90 truncate">
                    Got a show, event, activity or a great experience?
                    Partner with us & get listed on BookMyShow
                  </span>
                </div>
              </div>

              <button className="bg-[#EC5E71] text-white rounded-[3px] font-[500]
                font-['Roboto'] whitespace-nowrap px-[14px] py-[8px] text-[16px]">
                Contact today!
              </button>

            </div>
          </div>
        </section>

        {/* ================= PART 2 ================= */}
        <section className="bg-[#404043]">
          <div className="max-w-[1300px] mx-auto px-4">
            <div className="flex items-center justify-between h-[106px]">

              {[ 
                { icon: info1, text: "24/7 CUSTOMER CARE" },
                { icon: info2, text: "RESEND BOOKING CONFIRMATION" },
                { icon: info3, text: "SUBSCRIBE TO THE NEWSLETTER" }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <img src={item.icon} alt={item.text} className="w-[60px] h-[60px]" />
                  <p className="text-[#B3B3B3] text-[12px] tracking-wide text-center">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= PART 3 ================= */}
        <section className="bg-[#333338] pt-[40px]">
          <div className="max-w-[1300px] mx-auto px-4 font-['Roboto'] text-[#A5A5A5]">

  {[
    {
      title: "Movies Now Showing in Coimbatore",
      items: [
        "Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda","Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda",
      ]
    },
    {
      title: "Upcoming Movies in Coimbatore",
      items: [
        "Avatar 2",
        "Kanguva",
        "Leo 2",
        "Indian 3",
        "Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda","Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda",
      ]
    },
    {
      title: "Sports Events in Coimbatore",
      items: [
        "Action",
        "Comedy",
        "Drama",
        "Thriller",
        "Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda","Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda",
      ]
    },
    {
      title: "Movies Now Showing in Coimbatore",
      items: [
        "Tamil",
        "English",
        "Hindi",
        "Telugu",
        "Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda","Avatar: Fire and Ash",
        "Sirai",
        "Sarvam Maya",
        "Dhurandhar",
        "Anaconda",
      ]
    }
  ].map((section, index) => (
    <div key={index} className="mb-[22px]">

      {/* HEADING */}
      <h4 className="text-[14px] uppercase mb-[20px]">
        {section.title}
      </h4>

      {/* ITEMS */}
      <div className="flex flex-wrap gap-x-[10px] gap-y-[6px] text-[12px] opacity-80">
        {section.items.map((item, i) => (
          <span key={i}>
            {item}
            {i !== section.items.length - 1 && " | "}
          </span>
        ))}
      </div>

    </div>
  ))}

</div>


          <div className="w-full my-[45px] px-[80px]">
            <div className="flex items-center w-full">
              <div className="flex-1 h-[1px] bg-[#555]" />
              <img src={bmsLogo} alt="BookMyShow" className="h-[36px] mx-[24px]" />
              <div className="flex-1 h-[1px] bg-[#555]" />
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-[28px]">
            {[fb, twitter, insta, yt, pin, inIcon].map((icon, i) => (
              <img key={i} src={icon} alt="social"
                className="w-[40px] h-[40px] opacity-80 hover:opacity-100 cursor-pointer" />
            ))}
          </div>

         {/* COPYRIGHT */}
        <p className="text-[11px] text-center leading-[18px] mb-[6px] text-[#A5A5A5] opacity-60">
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>

        {/* LEGAL */}
        <p className="text-[11px] text-center leading-[18px] px-6 md:px-[120px] text-[#A5A5A5] pb-[40px] opacity-50">
          The content and images used on this site are copyright protected and copyrights
          vests with the respective owners. The usage of the content and images on this
          website is intended to promote the works and no endorsement of the artist
          shall be implied. Unauthorized use is prohibited and punishable by law.
        </p>

        </section>
      </footer>

      {/* ================= MOBILE FOOTER  ================= */}
      <footer className="md:hidden bg-[#2B2B2B] text-white pt-6 ">

        {/* LOGO */}
        <div className="flex justify-center mb-5">
          <img src={bmsLogo} alt="BMS" className="h-8" />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-6">
          {[fb, twitter, insta, yt, pin, inIcon].map((icon, i) => (
            <img key={i} src={icon} alt="social"
              className="w-9 h-9 opacity-80 cursor-pointer" />
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="text-[11px] text-center text-gray-400 px-6 mb-2">
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd.
        </p>
        {/* LEGAL */}
        <p className="text-[11px] text-center text-gray-400 px-6 ">
          "The content and images used on this site are copyright protected and copyrights
          vests with the respective owners. The usage of the content and images on this
          website is intended to promote the works and no endorsement of the artist
          shall be implied. Unauthorized use is prohibited and punishable by law."
        </p>

        {/* MOBILE BOTTOM BAR */}
       <div className="w-full bg-[#1F1F1F] border-t border-[#333] py-4 flex justify-around mt-6">

  {[
    { icon: homeIcon, path: "/" },
    { icon: moviesIcon, path: "/movies" },
    { icon: liveIcon, path: "/offers" },
    { icon: profileIcon, path: "/gift-cards" }
  ].map((item, i) => {
    const active = isActive(item.path)

    return (
      <div
        key={i}
        onClick={() => {
          navigate(item.path)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        className="cursor-pointer flex flex-col items-center"
      >
        <img
          src={item.icon}
          alt="icon"
          className={`w-8 h-8 transition ${
            active ? "brightness-125 scale-110" : "opacity-70"
          }`}
        />
      </div>
    )
  })}

</div>

      </footer>
    </>
  )
}

export default FooterCTA
