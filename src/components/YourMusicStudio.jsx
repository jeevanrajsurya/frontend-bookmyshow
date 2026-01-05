import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

// EVENT IMAGES
import e1 from "../assets/e1.avif"
import e2 from "../assets/e2.avif"
import e3 from "../assets/e3.avif"
import e4 from "../assets/e4.avif"
import e5 from "../assets/e5.avif"
import e6 from "../assets/e6.avif"
import e7 from "../assets/e7.avif"
import e8 from "../assets/e8.avif"
import e9 from "../assets/e9.avif"
import e10 from "../assets/e10.avif"

const events = [
  { id: 1, title: "CALVIN HARRIS - Live in Bengaluru", venue: "NICE Grounds: Bengaluru", category: "Concerts", img: e1 },
  { id: 2, title: "Ilaiyaraaja Live in Concert - Salem Rajadhi Raaja", venue: "DMC-KVP Grounds: Salem", category: "Concerts", img: e2 },
  { id: 3, title: "ISAI KOODARAM", venue: "Hindustan Concert Ground: Coimbatore", category: "Concerts", img: e3 },
  { id: 4, title: "Sunburn Arena NYE ft. ARGY - Bengaluru", venue: "Bhartiya Mall Of Bengaluru", category: "Concerts", img: e4 },
  { id: 5, title: 'Jung Kook Exhibition "GOLDEN : The Moments"', venue: "Stage 1, Mehboob Studios: Mumbai", category: "Artist Legacy", img: e5 },
  { id: 6, title: "Sunburn Arena NYE ft. ARGY - Bengaluru", venue: "Chennai", category: "Artist Legacy", img: e6 },
  { id: 7, title: "Ilaiyaraaja Live in Concert - Salem Rajadhi Raaja", venue: "Hyderabad", category: "Concerts", img: e7 },
  { id: 8, title: "Ilaiyaraaja Live in Concert - Salem Rajadhi Raaja", venue: "Kochi", category: "Concerts", img: e8 },
  { id: 9, title: "Sunburn Arena NYE ft. ARGY - Bengaluru", venue: "Trivandrum", category: "Artist Legacy", img: e9 },
  { id: 10, title: "Sunburn Arena NYE ft. ARGY - Bengaluru", venue: "Goa", category: "Concerts", img: e10 },
]

function YourMusicStudio() {
  const [page, setPage] = useState(0)
  const cardsPerPage = 5
  const totalPages = Math.ceil(events.length / cardsPerPage)

  return (
    <section className="bg-[#F5F7FA] pt-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222]">
            Your Music Studio
          </h2>

          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[13px] sm:text-[14px] text-[#dc3558]">
              See All
            </span>
            <FiChevronRight className="text-[#dc3558] text-[16px]" />
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
                      <MusicCard
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
            gap-4
            overflow-x-auto
            snap-x snap-mandatory
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {events.map((event, i) => (
            <div key={event.id} className="snap-start">
              <MusicCard event={event} delay={i * 100} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= CARD ================= */
function MusicCard({ event, delay = 0 }) {
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

      <h3 className="mt-1 mb-1 text-[#222]
                     text-[15px] sm:text-[16px] lg:text-[18px]
                     font-medium leading-[1.33]">
        {event.title}
      </h3>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {event.venue}
      </p>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {event.category}
      </p>
    </div>
  )
}

export default YourMusicStudio
