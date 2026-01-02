import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import comedy from "../assets/comedy.avif"
import icc from "../assets/icc.avif"
import kids from "../assets/kids.avif"
import music from "../assets/music.avif"
import art from "../assets/art.avif"

/* BACKEND-READY EVENTS DATA */
const events = [
  { id: 1, image: comedy },
  { id: 2, image: icc },
  { id: 3, image: kids },
  { id: 4, image: music },
  { id: 5, image: art },
  { id: 6, image: music },
  { id: 7, image: art }
]

const CARDS_PER_PAGE = 5

function BestOfLiveEvents() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(events.length / CARDS_PER_PAGE)

  return (
    <section className="bg-[#F5F7FA] py-5">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#333] mb-4 font-['Roboto']">
          The Best Of Live Events
        </h2>

        {/* ================= DESKTOP  ================= */}
        <div className="relative hidden lg:block">

          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20
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
                  className="grid grid-cols-5 gap-x-4 w-full flex-shrink-0"
                >
                  {events
                    .slice(p * CARDS_PER_PAGE, (p + 1) * CARDS_PER_PAGE)
                    .map(event => (
                      <EventCard key={event.id} img={event.image} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20
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
            gap-4
            overflow-x-auto
            snap-x snap-mandatory
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {events.map(event => (
            <div key={event.id} className="snap-start">
              <EventCard img={event.image} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= EVENT CARD ================= */
function EventCard({ img }) {
  return (
    <div className="w-full max-w-[216px] mx-auto">
      <div className="aspect-square rounded-xl overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default BestOfLiveEvents
