import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

//  FUN ACTIVITY IMAGES
import fa1 from "../assets/fa1.avif"
import fa2 from "../assets/fa2.avif"
import fa3 from "../assets/fa3.avif"
import fa4 from "../assets/fa4.avif"
import fa5 from "../assets/fa5.avif"
import fa6 from "../assets/fa6.avif"
import fa7 from "../assets/fa7.avif"
import fa8 from "../assets/fa8.avif"
import fa9 from "../assets/fa9.avif"
import fa10 from "../assets/fa10.avif"

const activities = [
  { id: 1, title: "Pottery Workshop", venue: "Art Studio: Bengaluru", img: fa1 },
  { id: 2, title: "Paint & Wine Night", venue: "Creative Hub: Chennai", img: fa2 },
  { id: 3, title: "Standup Comedy Jam", venue: "Comedy Club: Coimbatore", img: fa3 },
  { id: 4, title: "DIY Candle Making", venue: "Workshop Space: Kochi", img: fa4 },
  { id: 5, title: "Board Games Meetup", venue: "Cafe Arena: Hyderabad", img: fa5 },
  { id: 6, title: "Photography Walk", venue: "City Center: Mumbai", img: fa6 },
  { id: 7, title: "Dance Fitness Class", venue: "Dance Studio: Bengaluru", img: fa7 },
  { id: 8, title: "Cooking Masterclass", venue: "Kitchen Lab: Chennai", img: fa8 },
  { id: 9, title: "Kids Art & Craft", venue: "Fun Zone: Coimbatore", img: fa9 },
  { id: 10, title: "Mindfulness & Yoga", venue: "Wellness Center: Pune", img: fa10 },
]

function ExploreFunActivities() {
  const [page, setPage] = useState(0)
  const cardsPerPage = 5
  const totalPages = Math.ceil(activities.length / cardsPerPage)
  const navigate = useNavigate()

  return (
    <section className="bg-[#F5F7FA] pt-5 pb-15">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222]">
            Explore Fun Activities
          </h2>

           <div
            onClick={() => navigate("/activities")}
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
                  {activities
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map((activity, i) => (
                      <FunActivityCard
                        key={activity.id}
                        activity={activity}
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
          {activities.map((activity, i) => (
            <div key={activity.id} className="snap-start">
              <FunActivityCard activity={activity} delay={i * 100} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= CARD ================= */
function FunActivityCard({ activity, delay = 0 }) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay={delay}
    >
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={activity.img}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 text-[#222]
                     text-[15px] sm:text-[16px] lg:text-[18px]
                     font-medium leading-[1.33]">
        {activity.title}
      </h3>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {activity.venue}
      </p>
    </div>
  )
}

export default ExploreFunActivities
