import { useState } from "react"
import Carousel from "../components/Carousel"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import FooterCTA from "../components/FooterCTA"

// CAROUSEL ADS
import ad1 from "../assets/ad1.avif"
import ad2 from "../assets/ad2.avif"
import ad3 from "../assets/ad3.avif"

// CARD ICONS (YOUR ASSETS)
import performance from "../assets/performance.avif"
import experience from "../assets/experience.avif"
import exposition from "../assets/exposition.avif"
import online from "../assets/online.avif"
import sports from "../assets/sports.avif"
import parties from "../assets/parties.avif"

// TESTIMONIAL LOGOS (YOUR ASSETS)
import ncpa from "../assets/ncpa.avif"
import prithvi from "../assets/prithvi.avif"
import redfm from "../assets/redfm.avif"

const slides = [
  { image: ad1 },
  { image: ad2 },
  { image: ad3 },
]

const hostItems = [
  { title: "Performances", icon: performance },
  { title: "Experiences", icon: experience },
  { title: "Expositions", icon: exposition },
  { title: "Online Streaming", icon: online },
  { title: "Sports", icon: sports },
  { title: "Parties", icon: parties },
]

const testimonials = [
  {
    text:
      "The NCPA shares a cherished 13 year bond with BMS, its online ticketing partner that has helped art lovers book their seats for their favourite shows in a seamless manner. The presence of a team from Bookmyshow in the NCPA premises on the day of the event further ensures the smooth-functioning of ticket-related formalities.",
    author: "NCPA - National Centre for the Performing Arts.",
    image: ncpa,
  },
  {
    text:
      "BMS and Prithvi Theatre’s partnership goes back many years - to the very beginning. We are proud to be one of the first theatres to go online with our bookings.",
    author:
      "Trustees\nPrithvi Theatre\nShri Prithviraj Kapoor Memorial Trust & Research Foundation.",
    image: prithvi,
  },
  {
    text:
      "It’s been eight fantastic years of RED FM working with Bookmyshow for listing and promoting its events and IPs through BMS.",
    author: "Rajat Uppal\nNational Marketing Head - RED FM",
    image: redfm,
  },
]

function ListYourShow() {
  const [active, setActive] = useState(0)
  const item = testimonials[active]

  const prev = () =>
    setActive((active - 1 + testimonials.length) % testimonials.length)

  const next = () =>
    setActive((active + 1) % testimonials.length)

  return (
    <div className="bg-white">

      {/* ================= CAROUSEL ================= */}
      <Carousel slides={slides} />

      {/* ================= WHAT CAN YOU HOST ================= */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-14">

          {/* TITLE */}
          <h2 className="text-center text-[48px] font-bold text-[#1f2533]">
            What can you host?
          </h2>

          {/* SUBTITLE */}
          <p
            className="text-center mt-4 max-w-[770px] mx-auto
                       text-[18px] leading-[24px]
                       text-[#1f2533] font-semibold"
          >
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostItems.map((item) => (
              <div
                key={item.title}
                className="
                  bg-[#eef6ff]
                  rounded-lg
                  border
                  border-[#d6e3f3]
                  px-5
                  py-10
                  flex flex-col items-center
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                  hover:-translate-y-2
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[82px] h-[82px]"
                />

                <h3 className="mt-6 text-[28px] font-bold text-[#1f2533]">
                  {item.title}
                </h3>

                {/* info icon */}
                <div
                  className="mt-6 w-5 h-5 rounded-full border
                             border-[#eb4e62]
                             text-[#eb4e62]
                             flex items-center justify-center
                             text-[12px] font-semibold"
                >
                  i
                </div>
              </div>
            ))}
          </div>

          {/* ================= BUTTON ================= */}
          <div className="mt-26 flex justify-center">
            <button
              className="
                bg-[#f25d6c]
                text-white
                font-['Roboto']
                text-[16px]
                font-semibold
                px-20
                py-4
                rounded-lg
                hover:bg-[#e44f5f]
                transition
              "
            >
              List your show
            </button>
          </div>

        </div>
      </section>

      {/* ================= WHAT CAN YOU HOST ================= */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-14">

          {/* TITLE */}
          <h2 className="text-center text-[48px] font-bold text-[#1f2533]">
            What are the services we offers?
          </h2>

          {/* SUBTITLE */}
          <p
            className="text-center mt-4 max-w-[770px] mx-auto
                       text-[18px] leading-[24px]
                       text-[#1f2533] font-semibold"
          >
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostItems.map((item) => (
              <div
                key={item.title}
                className="
                  bg-[#FFF4F4]
                  rounded-lg
                  border
                  border-[#d6e3f3]
                  px-5
                  py-10
                  flex flex-col items-center
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                  hover:-translate-y-2
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[82px] h-[82px]"
                />

                <h3 className="mt-6 text-[28px] font-bold text-[#1f2533]">
                  {item.title}
                </h3>

                {/* info icon */}
                <div
                  className="mt-6 w-5 h-5 rounded-full border
                             border-[#eb4e62]
                             text-[#eb4e62]
                             flex items-center justify-center
                             text-[12px] font-semibold"
                >
                  i
                </div>
              </div>
            ))}
          </div>

          {/* ================= BUTTON ================= */}
          <div className="mt-26 -mb-30 flex justify-center">
            <button
              className="
                bg-[#f25d6c]
                text-white
                font-['Roboto']
                text-[16px]
                font-semibold
                px-20
                py-4
                rounded-lg
                hover:bg-[#e44f5f]
                transition
              "
            >
              List your show
            </button>
          </div>

        </div>
      </section>

      {/* ================= FULL WIDTH TESTIMONIAL CAROUSEL ================= */}
      <section className="w-full relative overflow-hidden">

  {/* ===== ARROW LAYER (OUTSIDE CONTENT) ===== */}
  <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 lg:px-6 z-20 pointer-events-none">
    <button
      onClick={prev}
      className="
        pointer-events-auto
        bg-black/50
        rounded-md
        flex items-center justify-center
        w-10 h-10
        sm:w-8 sm:h-8
        lg:w-14 lg:h-14
      "
    >
      <FiChevronLeft className="text-white text-lg sm:text-xl lg:text-2xl" />
    </button>

    <button
      onClick={next}
      className="
        pointer-events-auto
        bg-black/50
        rounded-md
        flex items-center justify-center
        w-10 h-10
        sm:w-8 sm:h-8
        lg:w-14 lg:h-14
      "
    >
      <FiChevronRight className="text-white text-lg sm:text-xl lg:text-2xl" />
    </button>
  </div>

  {/* ===== CONTENT ===== */}
  <div className="max-w-[1200px] mx-auto px-18 sm:px-18 lg:px-14 py-20">
    <div
      className="
        flex
        flex-row
        items-center
        gap-8
        sm:gap-12
        lg:gap-24
      "
    >

      {/* LEFT TEXT */}
      <div className="flex-1 max-w-[520px]">
        <div className="text-[14px] sm:text-[42px] lg:text-[46px] font-bold">
          “
        </div>

        <p className="text-[14px] sm:text-[10px] lg:text-[17px] leading-[10px] sm:leading-[15px] lg:leading-[25px] text-[#1f2533] sm:px-8">
          {item.text}
        </p>

        <div className="mt-6 sm:mt-8 font-bold whitespace-pre-line text-[#1f2533]">
          {item.author}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex justify-end">
        <img
          src={item.image}
          alt="testimonial"
          className="
            w-auto
            object-contain
            max-h-[200px]
            sm:max-h-[300px]
            lg:max-h-[560px]
          "
        />
      </div>

    </div>
  </div>
</section>
{/* ================= FOOTER ================= */}
        <FooterCTA />  
    </div>
  )
}

export default ListYourShow
