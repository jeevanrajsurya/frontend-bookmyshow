import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

//  LAUGHTER THERAPY IMAGES
import l1 from "../assets/l1.avif";
import l2 from "../assets/l2.avif";
import l3 from "../assets/l3.avif";
import l4 from "../assets/l4.avif";
import l5 from "../assets/l5.avif";
import l6 from "../assets/l6.avif";
import l7 from "../assets/l7.avif";
import l8 from "../assets/l8.avif";
import l9 from "../assets/l9.avif";
import l10 from "../assets/l10.avif";

const shows = [
  { id: 1, title: "Stupid Philosophy by Anand Rathnam", venue: "Medai The Stage: Coimbatore", img: l1 },
  { id: 2, title: "An Hour? A Trial Show by Niv Prakasam", venue: "Abhinayalaya Creative Studio: Coimbatore", img: l2 },
  { id: 3, title: "GOAT by Vivek Muralidharan", venue: "Abhinayalaya Creative Studio: Coimbatore", img: l3 },
  { id: 4, title: "ImagiNesan – A Live Standup Show", venue: "Medai The Stage: Coimbatore", img: l4 },
  { id: 5, title: "BLUNT ft. Onkar", venue: "Venue To Be Announced: Coimbatore", img: l5 },
  { id: 6, title: "Laugh Riot Night", venue: "Chennai", img: l6 },
  { id: 7, title: "Comic Therapy Live", venue: "Bangalore", img: l7 },
  { id: 8, title: "Standup Tamil Special", venue: "Madurai", img: l8 },
  { id: 9, title: "Open Mic Comedy Night", venue: "Hyderabad", img: l9 },
  { id: 10, title: "Laugh Unlimited", venue: "Kochi", img: l10 },
];

function LaughterTherapy() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(shows.length / cardsPerPage);

  return (
    <section className="bg-[#F5F7FA] pt-5 pb-2">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222]">
            Laughter Therapy
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
                <div
                  key={p}
                  className="grid grid-cols-5 gap-x-8 w-full flex-shrink-0"
                >
                  {shows
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map(show => (
                      <LaughterCard key={show.id} show={show} />
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
          {shows.map(show => (
            <div key={show.id} className="snap-start">
              <LaughterCard show={show} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* CARD */
function LaughterCard({ show }) {
  return (
    <div>
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={show.img}
          alt={show.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 text-[#222] text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.33]">
        {show.title}
      </h3>

      <p className="text-[#666] text-[13px] sm:text-[14px] leading-[1.5]">
        {show.venue}
      </p>
    </div>
  );
}

export default LaughterTherapy;
