import { useState } from "react"
import Carousel from "../components/Carousel"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
// import FooterCTA from "../components/FooterCTA"

// CAROUSEL ADS
import ad1 from "../assets/ad1.avif"
import ad2 from "../assets/ad2.avif"
import ad3 from "../assets/ad3.avif"

// CARD ICONS
import performance from "../assets/performance.avif"
import experience from "../assets/experience.avif"
import exposition from "../assets/exposition.avif"
import online from "../assets/online.avif"
import sports from "../assets/sports.avif"
import parties from "../assets/parties.avif"

// TESTIMONIAL LOGOS
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
      <div data-aos="fade-up">
        <Carousel slides={slides} />
      </div>

      {/* ================= WHAT CAN YOU HOST 1 ================= */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14">

          <h2
            data-aos="fade-up"
            className="text-center text-[32px] sm:text-[40px] lg:text-[48px]
                       font-bold text-[#1f2533]"
          >
            What can you host?
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-center mt-4 max-w-[770px] mx-auto
                       text-[16px] sm:text-[17px] lg:text-[18px]
                       leading-[22px] sm:leading-[24px] lg:leading-[20px]
                       text-[rgb(31,37,58)]
                       font-normal font-['Roboto']"
          >
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>

          <div className="py-8 -mx-[-16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {hostItems.map((item, index) => (
              <div
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                className="
                  bg-[rgb(236,245,255)]
                  rounded-lg
                  border border-[#d6e3f3]
                  px-4 sm:px-5
                  m-4
                  py-6 sm:py-7 lg:py-8
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
                  className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] lg:w-[96px] lg:h-[96px]"
                />

                <h3 className="mt-4 sm:mt-5 lg:mt-6 text-[18px] sm:text-[20px] lg:text-[24px]
                               font-bold text-[#1f2533]">
                  {item.title}
                </h3>

                <div className="mt-5 w-[24px] h-[24px] rounded-full border
                                border-[#eb4e62] text-[#eb4e62]
                                flex items-center justify-center
                                text-[12px] font-semibold">
                  i
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" className="mt-5 flex justify-center">
            <button className="bg-[#f25d6c] text-white font-['Roboto']
                               text-[16px] font-medium
                               px-14 sm:px-18 lg:px-20 py-4
                               rounded-lg hover:bg-[#e44f5f] transition">
              List your show
            </button>
          </div>

        </div>
      </section>

      {/* ================= WHAT CAN YOU HOST 2 ================= */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-14">

          <h2 data-aos="fade-up"
              className="text-center text-[32px] sm:text-[40px] lg:text-[48px]
                         font-bold text-[#1f2533]">
            What are the services we offers?
          </h2>

          <p data-aos="fade-up" data-aos-delay="150"
             className="text-center mt-4 max-w-[770px] mx-auto
                        text-[16px] sm:text-[17px] lg:text-[18px]
                        leading-[22px] sm:leading-[24px] lg:leading-[20px]
                        text-[rgb(31,37,58)]
                        font-normal font-['Roboto']">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event.
          </p>

          <div className="py-8 -mx-[-16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostItems.map((item, index) => (
              <div
                key={item.title}
                data-aos="zoom-in"
                data-aos-delay={index * 120}
                className="
                  bg-[rgb(252,241,241)]
                  rounded-lg
                  border border-[#d6e3f3]
                  px-4 sm:px-5
                  py-6 sm:py-7 lg:py-8
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
                  className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] lg:w-[96px] lg:h-[96px]"
                />

                <h3 className="mt-4 sm:mt-5 lg:mt-6 text-[18px] sm:text-[20px] lg:text-[24px]
                               font-bold text-[#1f2533]">
                  {item.title}
                </h3>

                <div className="mt-5 w-[24px] h-[24px] rounded-full border
                                border-[#eb4e62] text-[#eb4e62]
                                flex items-center justify-center
                                text-[12px] font-semibold">
                  i
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="w-full relative overflow-hidden lg:-mt-[100px]">

        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 lg:px-6 z-20 pointer-events-none">
          <button onClick={prev}
                  className="pointer-events-auto bg-black/50 w-10 h-10 lg:w-14 lg:h-14
                             rounded-md flex items-center justify-center">
            <FiChevronLeft className="text-white text-lg lg:text-2xl" />
          </button>
          <button onClick={next}
                  className="pointer-events-auto bg-black/50 w-10 h-10 lg:w-14 lg:h-14
                             rounded-md flex items-center justify-center">
            <FiChevronRight className="text-white text-lg lg:text-2xl" />
          </button>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

            <div data-aos="fade-right"
                 className="flex-1 max-w-[520px] text-center lg:text-left">
              <p className="text-[14px] sm:text-[15px] lg:text-[18px]
                            leading-[20px] sm:leading-[22px] lg:leading-[26px]
                            text-[#1f2533]">
                {item.text}
              </p>

              <div className="mt-6 sm:mt-8 font-bold whitespace-pre-line text-[#1f2533]">
                {item.author}
              </div>
            </div>

            <div data-aos="fade-left"
                 className="flex-1 flex justify-center lg:justify-end">
              <img
                src={item.image}
                alt="testimonial"
                className="w-auto object-contain
                           max-h-[180px] sm:max-h-[260px] lg:max-h-[560px]"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default ListYourShow
