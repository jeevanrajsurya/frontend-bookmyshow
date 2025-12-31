import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// 🔟 GAMES & SPORTS IMAGES
import gs1 from "../assets/gs1.avif";
import gs2 from "../assets/gs2.avif";
import gs3 from "../assets/gs3.avif";
import gs4 from "../assets/gs4.avif";
import gs5 from "../assets/gs5.avif";
import gs6 from "../assets/gs6.avif";
import gs7 from "../assets/gs7.avif";
import gs8 from "../assets/gs8.avif";
import gs9 from "../assets/gs9.avif";
import gs10 from "../assets/gs10.avif";

const events = [
  { id: 1, title: "Pro Kabaddi League", venue: "Indoor Stadium: Bengaluru", img: gs1 },
  { id: 2, title: "ISL Football Match", venue: "Jawaharlal Nehru Stadium: Kochi", img: gs2 },
  { id: 3, title: "IPL Fan Fest", venue: "Chinnaswamy Stadium: Bengaluru", img: gs3 },
  { id: 4, title: "Badminton Open", venue: "Sports Complex: Chennai", img: gs4 },
  { id: 5, title: "Marathon Run 2026", venue: "Marina Beach: Chennai", img: gs5 },
  { id: 6, title: "Street Basketball Cup", venue: "City Arena: Hyderabad", img: gs6 },
  { id: 7, title: "Cricket Turf League", venue: "Play Arena: Bengaluru", img: gs7 },
  { id: 8, title: "E-Sports Championship", venue: "Convention Center: Mumbai", img: gs8 },
  { id: 9, title: "Swimming Championship", venue: "Aquatic Center: Pune", img: gs9 },
  { id: 10, title: "Cycling Rally", venue: "City Roads: Coimbatore", img: gs10 },
];

function TopGamesSportsEvents() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(events.length / cardsPerPage);

  return (
    <section className="bg-[#F5F7FA] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[24px] font-bold text-[#222]">
            Top Games & Sports Events
          </h2>

          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[14px] text-[#dc3558]">See All</span>
            <FiChevronRight className="text-[#dc3558] text-[16px]" />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block">

          {/* LEFT ARROW */}
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
                    .map((event) => (
                      <GameSportCard key={event.id} event={event} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
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

        {/* MOBILE + TAB */}
        <div
          className="flex gap-4 overflow-x-auto lg:hidden scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[23%]"
            >
              <GameSportCard event={event} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* CARD */
function GameSportCard({ event }) {
  return (
    <div>
      <div className="relative aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 text-[#222] text-[18px] font-medium leading-[1.33]">
        {event.title}
      </h3>

      <p className="text-[#666] text-[16px] leading-[1.5]">
        {event.venue}
      </p>
    </div>
  );
}

export default TopGamesSportsEvents;
