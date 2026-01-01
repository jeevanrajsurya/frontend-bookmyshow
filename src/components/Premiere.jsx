import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import premiereIconImg from "../assets/premiere-icon.avif"

// IMAGES
import p1 from "../assets/p1.avif"
import p2 from "../assets/p2.avif"
import p3 from "../assets/p3.avif"
import p4 from "../assets/p4.avif"
import p5 from "../assets/p5.avif"
import p6 from "../assets/p6.avif"
import p7 from "../assets/p7.avif"
import p8 from "../assets/p8.avif"
import p9 from "../assets/p9.avif"
import p10 from "../assets/p10.avif"

/* DATA */
const movies = [
  { id: 1, title: "Appa I Love You", lang: "Kannada", image: p1 },
  { id: 2, title: "Nimbiya Banada Myaga - Page 1", lang: "Kannada", image: p2 },
  { id: 3, title: "Nuremberg", lang: "English", image: p3 },
  { id: 4, title: "Turbulence", lang: "English", image: p4 },
  { id: 5, title: "Sisu: Road to Revenge", lang: "English", image: p5 },
  { id: 6, title: "The Running Man", lang: "English", image: p6 },
  { id: 7, title: "Bahumukham - Good, Bad and Actor", lang: "Telugu", image: p7 },
  { id: 8, title: "Blue Moon", lang: "Spanish", image: p8 },
  { id: 9, title: "Diablo", lang: "English", image: p9 },
  { id: 10, title: "Saturn Return", lang: "Spanish", image: p10 }
]

const cardsPerPage = 5

function PremiereMovies() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(movies.length / cardsPerPage)

  return (
    <section className="bg-[#2B3148] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP STRIP */}
        <div className="mb-4">
          <img src={premiereIconImg} alt="Premiere" className="w-full h-auto" />
        </div>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <div>
            <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-white">
              Premieres
            </h2>
            <p className="text-[13px] sm:text-[14px] text-[#b0b3c2]">
              Brand new releases every Friday
            </p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer text-[#dc3558]">
            <span className="text-[13px] sm:text-[14px]">See All</span>
            <FiChevronRight className="text-[16px]" />
          </div>
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="relative hidden lg:block">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute -left-5 top-[40%] z-20 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center"
            >
              <FiChevronLeft className="text-white text-2xl" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, p) => (
                <div
                  key={p}
                  className="grid grid-cols-5 gap-x-8 w-full flex-shrink-0"
                >
                  {movies
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map(movie => (
                      <PremiereCard key={movie.id} movie={movie} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute -right-5 top-[40%] z-20 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center"
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
          {movies.map(movie => (
            <div key={movie.id} className="snap-start">
              <PremiereCard movie={movie} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ================= CARD ================= */
function PremiereCard({ movie }) {
  return (
    <div>
      <div className="aspect-[2/3] rounded-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 text-[15px] sm:text-[16px] lg:text-[18px] font-medium text-white leading-[1.3]">
        {movie.title}
      </h3>

      <p className="text-[13px] sm:text-[14px] text-[#b0b3c2]">
        {movie.lang}
      </p>
    </div>
  )
}

export default PremiereMovies
