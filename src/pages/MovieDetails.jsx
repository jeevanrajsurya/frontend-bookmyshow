import React from "react";
import { FiPlay, FiShare } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

// ===== IMAGES =====
import bgImage from "../assets/movie-bg.avif";
import poster from "../assets/movie-poster.avif";

const MovieDetails = () => {
  return (
     <div className="w-full bg-[#1a1a1a] text-white">
  {/* ===== BACKGROUND SECTION (OFFICIAL GRADIENT) ===== */}
  <div
    className="relative w-full h-[600px] flex items-center"
    style={{
      backgroundImage: `
        linear-gradient(
          90deg,
          rgb(26, 26, 26) 24.97%,
          rgb(26, 26, 26) 38.3%,
          rgba(26, 26, 26, 0.15) 70%,
          rgba(26, 26, 26, 2) 100%
        ),
        url(${bgImage})
      `,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center",
      backgroundSize: "cover",
      backgroundColor: "rgb(26, 26, 26)",
    }}
  >
    {/* ===== MAIN CONTENT CONTAINER (NAVBAR STYLE WIDTH) ===== */}
    <div className="relative w-full">
      <div className="h-full max-w-[1440px] lg:max-w-7xl mx-auto px-4 sm:px-4 flex gap-10 items-center">
        {/* ===== LEFT SIDE MOVIE CARD ===== */}
        <div className="w-[320px]">
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-black">
            <img
              src={poster}
              alt="movie poster"
              className="w-full h-[520px] object-cover"
            />

            {/* TRAILER BUTTON (CENTERED LIKE OFFICIAL) */}
            <div
              className="absolute bottom-60 left-1/2 -translate-x-1/2 
                         flex items-center gap-2 bg-black/70 px-4 py-1
                         rounded-full text-sm cursor-pointer"
            >
              <FiPlay size={14} />
              <span className="font-medium">Trailer</span>
            </div>

            {/* IN CINEMAS TAG */}
            <div className="absolute bottom-0 w-full text-center bg-black py-2.5 text-sm font-semibold tracking-wide">
              In cinemas
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="flex-1 max-w-2xl mt-10">
          <h1 className="text-[36px] font-bold tracking-wide">
            With Love
          </h1>

          {/* RATING BOX */}
          <div
            className="mt-4 bg-black border
                       inline-flex items-center gap-3 px-4 py-5 rounded-xl w-[450px]"
          >
            <div className="flex items-center gap-2">
              <AiFillStar className="text-pink-500 text-xl" />
              <span className="text-white font-semibold text-xl">
                9.2/10
              </span>
              <span className="text-white font-semibold text-xl">
                (6.9K+ Votes)
              </span>
            </div>

            <button className="ml-auto border px-4 py-1.5 rounded-md text-sm bg-[rgba(255,255,255,0.318)]">
              Rate now
            </button>
          </div>

          {/* DURATION / GENRE / DATE */}
          <p className="mt-4 text-[16px] font-medium leading-[20px] tracking-[0.2px] text-white mr-0">
            2h 21m • Drama, Romantic • U • 6 Feb, 2026
          </p>

          {/* FORMAT & LANGUAGES */}
          <div className="mt-6 flex gap-3">
            <span className="bg-[rgba(255,255,255,0.318)] px-3 py-1 rounded text-white font-medium text-[16px]">
              2D
            </span>
            <span className="border border-gray-500 bg-[rgba(255,255,255,0.318)] px-3 py-1 rounded text-white font-medium text-[16px]">
              Tamil, Telugu
            </span>
          </div>

          {/* BOOK TICKETS BUTTON */}
          <button className="mt-8 bg-[#dc3558] text-white px-18 py-4 rounded-lg text-[18px] font-medium leading-[24px] whitespace-nowrap">
            Book tickets
          </button>
        </div>

        {/* ===== SHARE BUTTON ===== */}
        <div className="absolute top-2 w-full left-0">
          <div className="max-w-[1440px] lg:max-w-7xl mx-auto px-4 sm:px-4 flex justify-end">
            <div
              className="flex items-center gap-2
                         h-[48px] w-[122px] 
                         bg-[rgba(34,34,34,0.8)] opacity-80 
                         px-7 cursor-pointer rounded text-[16px] font-medium leading-[20px] tracking-[0.2px] text-white"
            >
              <FiShare size={20} />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default MovieDetails;
