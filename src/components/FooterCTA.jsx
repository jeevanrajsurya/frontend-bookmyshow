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

function FooterCTA() {
  return (
    <footer className="w-full hidden md:block bg-[#333338]">

      {/* ================= PART 1 ================= */}
      <section className="bg-[#313035]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">

            {/* LEFT */}
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={listShowIcon}
                alt="List your show"
                className="w-[28px] h-[28px]"
              />

              <div className="flex gap-2 text-white text-[14px] font-['Roboto'] min-w-0">
                <span className="font-[600] whitespace-nowrap">
                  List your Show
                </span>
                <span className="opacity-90 truncate">
                  Got a show, event, activity or a great experience?
                  Partner with us & get listed on BookMyShow
                </span>
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              className="
                bg-[#EC5E71]
                text-white
                rounded-[3px]
                font-[500]
                font-['Roboto']
                whitespace-nowrap
                px-[12px] py-[6px] text-[12px]
                lg:px-[16px] lg:py-[8px] lg:text-[14px]
              "
            >
              Contact today!
            </button>

          </div>
        </div>
      </section>

      {/* ================= PART 2 ================= */}
      <section className="bg-[#404043]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-[96px]">

            {[
              { icon: info1, text: "24/7 CUSTOMER CARE" },
              { icon: info2, text: "RESEND BOOKING CONFIRMATION" },
              { icon: info3, text: "SUBSCRIBE TO THE NEWSLETTER" }
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-[50px] h-[50px]"
                />
                <p className="text-[#B3B3B3] text-[10px] tracking-wide text-center">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= PART 3 ================= */}
      <section className="bg-[#333338] pt-[40px]">
        <div className="max-w-[1200px] mx-auto px-4 font-['Roboto'] text-[#A5A5A5]">

          {/* FIRST BLOCK */}
          <div className="mb-[22px]">
            <h4 className="text-[12px] uppercase mb-[20px]">
              Movies Now Showing in Coimbatore
            </h4>
            <div className="flex flex-wrap gap-x-[10px] gap-y-[6px] text-[11px] opacity-80">
              <span>Avatar: Fire and Ash</span> <span>|</span>
              <span>Sirai</span> <span>|</span>
              <span>Retta Thala</span> <span>|</span>
              <span>Sarvam Maya</span> <span>|</span>
              <span>Dhurandhar</span> <span>|</span>
              <span>Anaconda</span>  <span>|</span>
              <span>Retta Thala</span> <span>|</span>
              <span>Retta Thala</span> <span>|</span>
              <span>Retta Thala</span>
            </div>
          </div>

          {[
            "Upcoming Movies in Coimbatore",
            "Movies by Genre",
            "Movies by Language",
            "Sports Events in Coimbatore",
            "Events in Top Cities",
            "Cinemas in Top Cities",
            "Plays in Top Cities",
            "Activities in Top Cities",
            "Countries",
            "Help",
            "BookMyShow Exclusives"
          ].map((title, i) => (
            <div key={i} className="mb-[22px]">
              <h4 className="text-[12px] uppercase mb-[20px]">
                {title}
              </h4>
              <div className="flex flex-wrap gap-x-[10px] gap-y-[6px] text-[11px] opacity-80">
                <span>Avatar: Fire and Ash</span> <span>|</span>
                <span>Avatar: Fire and Ash</span> <span>|</span>
                <span>Avatar: Fire and Ash</span> <span>|</span>
                <span>Avatar: Fire and Ash</span> <span>|</span>
                <span>Avatar: Fire and Ash</span> <span>|</span>
                <span>Avatar: Fire and Ash</span> 
              </div>
            </div>
          ))}
        </div>

        {/* LOGO DIVIDER */}
        <div className="w-full my-[45px] px-[80px]">
          <div className="flex items-center w-full">
            <div className="flex-1 h-[1px] bg-[#555]" />
            <img
              src={bmsLogo}
              alt="BookMyShow"
              className="h-[36px] mx-[24px]"
            />
            <div className="flex-1 h-[1px] bg-[#555]" />
          </div>
        </div>

        {/* ================= SOCIAL ICONS ================= */}
<div className="flex justify-center gap-4 mb-[28px]">
  {[fb, twitter, insta, yt, pin, inIcon].map((icon, i) => (
    <div
      key={i}
      className="
        w-[36px] h-[36px]
        rounded-full
        bg-[#3A3A3A]
        flex items-center justify-center
        cursor-pointer
      "
    >
      <img
        src={icon}
        alt="social"
        className="w-[18px] h-[18px]"
      />
    </div>
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
  )
}

export default FooterCTA
