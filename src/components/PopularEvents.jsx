import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

// POPULAR EVENTS IMAGES
import pe1 from "../assets/pe1.avif"
import pe2 from "../assets/pe2.avif"
import pe3 from "../assets/pe3.avif"
import pe4 from "../assets/pe4.avif"
import pe5 from "../assets/pe5.avif"
import pe6 from "../assets/pe6.avif"
import pe7 from "../assets/pe7.avif"
import pe8 from "../assets/pe8.avif"
import pe9 from "../assets/pe9.avif"
import pe10 from "../assets/pe10.avif"

const events = [
  { id: 1, title: "SAKTHI STAR NIGHT 2K26", venue: "Sree Sakthi Engineering College: Coimbatore", img: pe1 },
  { id: 2, title: "Habibi Arabian Nights NY Party 2026", venue: "Radisson Blu Hotel: Coimbatore", img: pe2 },
  { id: 3, title: "POWER HOUSE NYE 2026 @ LOD Ft DJ LOKIII", venue: "Lord Of The Drinks: Coimbatore", img: pe3 },
  { id: 4, title: "Art Date", venue: "Eat Italiano: Coimbatore", img: pe4 },
  { id: 5, title: "Landscape Painting Workshop", venue: "Eat Italiano: Coimbatore", img: pe5 },
  { id: 6, title: "Night Music Fest", venue: "Bangalore", img: pe6 },
  { id: 7, title: "DJ Night Live", venue: "Chennai", img: pe7 },
  { id: 8, title: "Art & Wine Evening", venue: "Hyderabad", img: pe8 },
  { id: 9, title: "Sunset Music Party", venue: "Goa", img: pe9 },
  { id: 10, title: "Creative Canvas Workshop", venue: "Kochi", img: pe10 },
]

function PopularEvents() {
  const [page, setPage] = useState(0)
  const cardsPerPage = 5
  const totalPages = Math.ceil(events.length / cardsPerPage)
  const navigate = useNavigate()

  return (
    <section className="bg-[#F5F7FA] pt-5 pb-2">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222]">
            Popular Events
          </h2>

           <div
            onClick={() => navigate("/plays")}
            className="flex items-center gap-1 cursor-pointer text-[#dc3558] hover:opacity-80 transition"
          >
            <span className="text-[13px] sm:text-[14px]">See All</span>
            <FiChevronRight className="text-[16px]" />
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="relative hidden lg:block">
          {totalPages > 1 && page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute -left-5 top-[35%] z-20
                         w-10 h-10 rounded-full bg-black/70
                         flex items-center justify-center"
            >
              <FiChevronLeft className="text-white text-2xl" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, p) => (
                <div
                  key={p}
                  className="grid grid-cols-5 gap-x-8 w-full flex-shrink-0"
                >
                  {events
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map((event, i) => (
                      <PopularEventCard
                        key={event.id}
                        event={event}
                        delay={i * 100}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute -right-5 top-[35%] z-20
                         w-10 h-10 rounded-full bg-black/70
                         flex items-center justify-center"
            >
              <FiChevronRight className="text-white text-2xl" />
            </button>
          )}
        </div>

        {/* ================= MOBILE + TABLET ================= */}
        <div
          className="
            lg:hidden
            grid grid-flow-col
            auto-cols-[calc(50%-0.75rem)]
            sm:auto-cols-[calc(25%-0.75rem)]
            gap-6
            sm:gap-4
            overflow-x-auto
            snap-x snap-mandatory
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {events.map((event, i) => (
            <div key={event.id} className="snap-start">
              <PopularEventCard event={event} delay={i * 100} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= CARD ================= */
function PopularEventCard({ event, delay = 0 }) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay={delay}
    >
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 text-[#222]
                     text-[15px] sm:text-[16px] lg:text-[18px]
                     font-medium leading-[1.33]">
        {event.title}
      </h3>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {event.venue}
      </p>
    </div>
  )
}

export default PopularEvents
