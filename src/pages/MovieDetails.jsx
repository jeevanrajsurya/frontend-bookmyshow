import React from "react";
import { FiPlay, FiShare } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { IoTrendingUp } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";



// ===== IMAGES =====
import bgImage from "../assets/movie-bg.avif";
import poster from "../assets/movie-poster.avif";          
import tabPoster from "../assets/movie-poster-tab.avif";   
import mobilePoster from "../assets/movie-poster-mobile.avif"; 


const MovieDetails = () => {
  
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      {/* ===== BACKGROUND SECTION ===== */}
      <div
        className="relative w-full h-[550px] hidden lg:flex items-center"
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
        {/* ===== DESKTOP  ===== */}
        <div className="relative w-full">
          <div className="h-full max-w-[1440px] lg:max-w-7xl mx-auto px-4 sm:px-4 flex gap-10 items-center">
            {/* LEFT POSTER  */}
            <div className="w-[280px]">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-black">
                <img
                  src={poster}
                  alt="movie poster"
                  className="w-full h-[470px] object-cover"
                />

                <div
                  className="absolute bottom-54 left-1/2 -translate-x-1/2 
                             flex items-center gap-2 bg-black/70 px-3 py-1
                             rounded-full text-sm cursor-pointer"
                >
                  <FiPlay size={14} />
                  <span className="font-medium">Trailer</span>
                </div>

                <div className="absolute bottom-0 w-full text-center bg-black py-1.5 text-sm font-medium tracking-wide">
                  In cinemas
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT  */}
            <div className="flex-1 max-w-2xl mt-10">
              <h1 className="text-[36px] font-bold tracking-wide">
                With Love
              </h1>

              <div
                className="mt-4 bg-black border
                           inline-flex items-center gap-3 px-4 py-5 rounded-xl w-[450px]"
              >
                <div className="flex items-center gap-2">
                  <AiFillStar className="text-red-400 text-xl" />
                  <span className="text-white font-semibold text-xl">
                    9.2/10
                  </span>
                  <span className="text-white font-medium text-lg">
                    (6.9K+ Votes)
                  </span>
                </div>

                <button className="ml-auto border px-4 py-1.5 rounded-md text-sm bg-[rgba(255,255,255,0.318)]">
                  Rate now
                </button>
              </div>

              <p className="mt-4 text-[16px] font-medium leading-[20px] tracking-[0.2px] text-white">
                2h 21m • Drama, Romantic • U • 6 Feb, 2026
              </p>

              <div className="mt-6 flex gap-3">
                <span className="bg-[rgba(255,255,255,0.318)] px-2 py-1 rounded text-white font-medium text-[16px]">
                  2D
                </span>
                <span className="border border-gray-500 bg-[rgba(255,255,255,0.318)] px-2 py-1 rounded text-white font-medium text-[16px]">
                  Tamil, Telugu
                </span>
              </div>

              <button className="mt-8 bg-[#dc3558] text-white px-18 py-4 rounded-lg text-[18px] font-medium leading-[24px] whitespace-nowrap">
                Book tickets
              </button>
            </div>

            {/* SHARE BUTTON  */}
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

    {/* ================== TABLET VIEW  ================== */}
<div className="hidden sm:block lg:hidden bg-[#ffffff] min-h-screen">

  {/* TAB POSTER  */}
  <div className="px-4 pt-4">
    <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-black">
      <img
        src={tabPoster}
        alt="movie poster"
        className="w-full h-[350px] object-cover"
      />

      {/* TRAILER BUTTON */}
      <div
        className="absolute bottom-45 left-1/2 -translate-x-1/2 
                   flex items-center gap-2 bg-black/70 px-3 py-1
                   rounded-full text-sm cursor-pointer"
      >
        <FiPlay size={14} />
        <span className="font-medium">Trailer</span>
      </div>

      {/* IN CINEMAS STRIP */}
      <div className="absolute bottom-0 w-full text-center bg-black py-2 text-sm font-medium text-white">
        In cinemas
      </div>
    </div>
  </div>

  {/* WHITE CONTENT SECTION  */}
  <div className="bg-white mt-4 px-4 py-5 shadow-md">

    {/* RATING ROW */}
    <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <AiFillStar className="text-red-400 text-lg" />
        <span className="text-black font-semibold text-lg">9.2/10</span>
        <span className="text-gray-600 text-sm">(7.4K+ Votes)</span>
        <FiChevronRight className="text-gray-400 text-sm" />
      </div>

      <button className="border border-red-400 text-red-500 px-3 py-1 rounded-md text-xs">
        Rate now
      </button>
    </div>

    {/* DURATION / GENRE / DATE */}
    <p className="mt-3 text-[14px] text-gray-700">
      2h 21m • Drama, Romantic • U • 6 Feb, 2026
    </p>

    {/* FORMAT & LANGUAGES */}
    <div className="mt-3 flex gap-2">
      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-black font-medium">
        2D
      </span>
      <span className="bg-gray-100 px-2 py-1 rounded text-xs text-black font-medium">
        TAMIL, TELUGU
      </span>
    </div>

    {/* DESCRIPTION*/}
    <p className="mt-3 text-[14px] text-gray-700 leading-relaxed">
      {showMore ? (
        <>
          Sathya, wary of arranged matches, agrees to a blind date set up by his sister 
          and meets Monisha, only to discover they once shared the same school. 
          As they bond over memories, old crushes, and unspoken feelings, their journey 
          reconnects them with the past and helps them understand love in a new way agrees to a blind date set up by his sister 
          and meets Monisha, only to discover they once shared the same school. 
          <span
            className="text-red-500 font-medium cursor-pointer ml-1"
            onClick={() => setShowMore(false)}
          >
            Read less
          </span>
        </>
      ) : (
        <>
          Sathya, wary of arranged matches, agrees to a blind date set up by his sister 
          and meets Monisha, only to discover they once shared the same school...
          <span
            className="text-red-500 font-medium cursor-pointer ml-1"
            onClick={() => setShowMore(true)}
          >
            Read more
          </span>
        </>
      )}
    </p>

    {/* TRENDING BAR */}
    <div className="mt-4 border border-blue-200 rounded-lg px-3 py-3 flex items-center gap-3 bg-[#F3F5FF]">
      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
        <IoTrendingUp size={14} />
        <span>Trending</span>
      </div>

      <span className="text-black text-sm font-normal">
        22.67K tickets booked in last 24 hours
      </span>
    </div>
  </div>
</div>



      {/* ================== MOBILE VIEW ================== */}
<div className="sm:hidden bg-[#ffffff] min-h-screen">

<div className="px-4 pt-4">
  <div className="relative w-full rounded-xl overflow-hidden bg-black shadow-md">

    {/* CARD HEIGHT */}
    <img
      src={mobilePoster}
      alt="movie poster"
      className="w-full h-[180px] object-cover"
    />

    {/* TRAILER BUTTON  */}
    <div
      className="absolute bottom-20 left-1/2 -translate-x-1/2 
                 flex items-center gap-2 bg-black/70 px-3 py-1
                 rounded-full text-xs cursor-pointer"
    >
      <FiPlay size={12} />
      <span className="font-medium">Trailer</span>
    </div>

    {/* IN CINEMAS */}
    <div className="absolute bottom-0 w-full text-center bg-black py-1.5 text-xs font-medium text-white">
      In cinemas
    </div>
  </div>
</div>

{/* WHITE CONTENT SECTION  */}
<div className="bg-white mt-0 px-4 py-4">

  {/* RATING ROW  */}
  <div className="border border-gray-200 rounded-lg px-3 py-3 flex items-center justify-between">
    <div className="flex items-center gap-2">
    <AiFillStar className="text-red-400 text-lg" />
    <span className="text-black font-semibold text-base">9.2/10</span>
    <span className="text-gray-600 text-xs">(7.4K+ Votes)</span>
    <FiChevronRight className="text-gray-400 text-sm" />
  </div>


    <button className="border border-red-400 text-red-500 px-3 py-1 rounded-md text-xs">
      Rate now
    </button>
  </div>

  {/* DURATION / GENRE / DATE */}
  <p className="mt-3 text-[12px] text-gray-700">
    2h 21m • Drama, Romantic • U • 6 Feb, 2026
  </p>

  {/* FORMAT & LANGUAGES */}
  <div className="mt-2 flex gap-2">
    <span className="bg-gray-100 px-2 py-1 rounded text-xs text-black font-medium">
      2D
    </span>
    <span className="bg-gray-100 px-2 py-1 rounded text-xs text-black font-medium">
      TAMIL, TELUGU
    </span>
  </div>

  {/* DESCRIPTION */}
  <p className="mt-3 text-[13px] text-gray-700 leading-relaxed">
    {showMore ? (
      <>
        Sathya, wary of arranged matches, agrees to a blind date set up by his sister 
        and meets Monisha, only to discover they once shared the same school. 
        As they bond over memories, old crushes, and unspoken feelings, their journey 
        reconnects them with the past and helps them understand love in a new way.
        <span
          className="text-red-500 font-medium cursor-pointer ml-1"
          onClick={() => setShowMore(false)}
        >
          Read less
        </span>
      </>
    ) : (
      <>
        Sathya, wary of arranged matches, agrees to a blind date set up by his sister 
        and meets Monisha, only to discover they once shared the same school...
        <span
          className="text-red-500 font-medium cursor-pointer ml-1"
          onClick={() => setShowMore(true)}
        >
          Read more
        </span>
      </>
    )}
  </p>

  {/* TRENDING BAR  */}
  <div className="mt-4 border border-blue-200 rounded-lg px-3 py-3 flex items-center gap-3 bg-[#F3F5FF]">
    
   <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
  <IoTrendingUp size={14} />
  <span>Trending</span>
</div>


    <span className="text-black text-sm font-normal">
      2.67K booked in last 24 hours
    </span>
  </div>

  {/*  BOOK TICKETS BUTTON */}
  <button className="fixed bottom-0 left-0 w-full bg-[#dc3558] text-white py-3 font-semibold text-[16px]">
    Book tickets
  </button>
</div>

</div>

    </div>
  );
};

export default MovieDetails;
