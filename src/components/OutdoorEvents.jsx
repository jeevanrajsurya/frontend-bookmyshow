import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// 🔟 OUTDOOR EVENT IMAGES
import o1 from "../assets/o1.avif";
import o2 from "../assets/o2.avif";
import o3 from "../assets/o3.avif";
import o4 from "../assets/o4.avif";
import o5 from "../assets/o5.avif";
import o6 from "../assets/o6.avif";
import o7 from "../assets/o7.avif";
import o8 from "../assets/o8.avif";
import o9 from "../assets/o9.avif";
import o10 from "../assets/o10.avif";

const events = [
  {id: 1,title: "SAKTHI STAR NIGHT 2K26",venue: "Sree Sakthi Engineering College: Coimbatore",img: o1, promoted: true},
  {id: 2,title: "Habibi Arabian Nights NY Party 2026",venue: "Radisson Blu Hotel: Coimbatore",img: o2, promoted: true},
  {id: 3,title: "Namma Kovai NYE 2026",venue: "Prozone Mall: Coimbatore",img: o3},
  {id: 4,title: "New Year Eve Lavish Buffet TemptAsian",venue: "Tempt Asian: Coimbatore",img: o4},
  {id: 5,title: "Clay Modelling Workshop",venue: "Eat Italiano: Coimbatore",img: o5},
  {id: 6,title: "Open Air DJ Night",venue: "Sree Sakthi Engineering College: Coimbatore",img: o6},
  {id: 7,title: "Habibi Arabian Nights NY Party 2026",venue: "Goa",img: o7},
  {id: 8,title: "Fireworks Carnival",venue: "Sree Sakthi Engineering College: Coimbatore",img: o8},
  {id: 9,title: "Habibi Arabian Nights NY Party 2026",venue: "Hyderabad",img: o9},
  {id: 10,title: "Camping & Music Night",venue: "Sree Sakthi Engineering College: Coimbatore",img: o10},
];

function OutdoorEvents() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(events.length / cardsPerPage);

  return (
    <section className="bg-[#F5F7FA] pt-5 pb-2">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222]">
            Outdoor Events
          </h2>

          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[13px] sm:text-[14px] text-[#dc3558]">
              See All
            </span>
            <FiChevronRight className="text-[#dc3558] text-[16px]" />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block">
          {totalPages > 1 && page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute -left-5 top-[35%] z-20 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center"
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
                <div key={p} className="grid grid-cols-5 gap-x-8 w-full flex-shrink-0">
                  {events
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map(event => (
                      <OutdoorCard key={event.id} event={event} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute -right-5 top-[35%] z-20 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center"
            >
              <FiChevronRight className="text-white text-2xl" />
            </button>
          )}
        </div>

        {/* MOBILE + TABLET */}
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
              <OutdoorCard event={event} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* CARD */
function OutdoorCard({ event }) {
  return (
    <div>
      <div className="relative aspect-[20/33] rounded-lg overflow-hidden">
        {event.promoted && (
          <span className="absolute top-2 right-2 bg-[#dc3558] text-white text-[11px] px-2 py-[2px] rounded">
            PROMOTED
          </span>
        )}

        <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-1 mb-1 text-[#222] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.33]">
        {event.title}
      </h3>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {event.venue}
      </p>
    </div>
  );
}

export default OutdoorEvents;
