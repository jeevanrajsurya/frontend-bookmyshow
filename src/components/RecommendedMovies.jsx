import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import m1 from "../assets/m1.avif"
import m2 from "../assets/m2.avif"
import m3 from "../assets/m3.avif"
import m4 from "../assets/m4.avif"
import m5 from "../assets/m5.avif"
import m6 from "../assets/m6.avif"
import m7 from "../assets/m7.avif"
import m8 from "../assets/m8.avif"
import m9 from "../assets/m9.avif"
import m10 from "../assets/m10.avif"

const movies = [
  { id: 1, title: "Tu Meri Main Tera Main Tera Tu Meri", genre: "Action/Adventure/Fantasy/Sci-Fi", image: m1 },
  { id: 2, title: "Avatar: Fire and Ash", genre: "Action/Drama/Thriller", image: m2 },
  { id: 3, title: "Sirai", genre: "Action/Thriller", image: m3 },
  { id: 4, title: "Retta Thala", genre: "Action/Adventure/Horror", image: m4 },
  { id: 5, title: "Dhuranthar", genre: "Comedy/Drama/Fantasy", image: m5 },
  { id: 6, title: "Saravam Maya", genre: "Action/Drama", image: m6 },
  { id: 7, title: "Anaconda", genre: "Drama/Action/Adventure", image: m7 },
  { id: 8, title: "Zootapia", genre: "Thriller", image: m8 },
  { id: 9, title: "Koompuseevi", genre: "Action/Drama", image: m9 },
  { id: 10, title: "Mission Santa", genre: "Family/Animation", image: m10 }
]

function RecommendedMovies() {
  const [page, setPage] = useState(0)
  const cardsPerPage = 5
  const totalPages = Math.ceil(movies.length / cardsPerPage)

  return (
    <section className="bg-[#F5F7FA] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER – ONE LINE ALWAYS */}
        <div className="flex items-center justify-between mb-3 flex-nowrap gap-2">
          <h2
            className="
              text-[18px] sm:text-[20px] lg:text-[24px]
              font-bold text-[#333] font-['Roboto']
              truncate
            "
          >
            Recommended Movies
          </h2>

          <div className="flex items-center gap-1 cursor-pointer flex-shrink-0">
            <span className="text-[13px] sm:text-[14px] text-[#dc3558] font-['Roboto']">
              See All
            </span>
            <FiChevronRight className="text-[#dc3558] text-[16px]" />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="relative hidden lg:block">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="absolute left-[-15px] top-[35%] z-20
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
                  {movies
                    .slice(p * cardsPerPage, (p + 1) * cardsPerPage)
                    .map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="absolute right-[-15px] top-[35%] z-20
                         w-10 h-10 rounded-full bg-black/70
                         flex items-center justify-center"
            >
              <FiChevronRight className="text-white text-2xl" />
            </button>
          )}
        </div>

        {/* MOBILE + TAB */}
        <div
          className="
            flex gap-4 overflow-x-auto lg:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-[42%] sm:w-[28%] md:w-[23%]"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function MovieCard({ movie }) {
  return (
    <div>
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 mb-1 break-words text-[#222] font-['Roboto']
                     text-[16px] sm:text-[17px] lg:text-[18px]
                     font-medium leading-[1.33]">
        {movie.title}
      </h3>

      <p className="text-[#666] font-['Roboto']
                    text-[14px] sm:text-[15px] lg:text-[16px]
                    leading-[1.5] line-clamp-2">
        {movie.genre}
      </p>
    </div>
  )
}

export default RecommendedMovies
