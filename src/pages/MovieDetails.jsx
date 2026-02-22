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
import offerIcon from "../assets/offer-icon.avif";

import cast1 from "../assets/cast1.avif";
import cast2 from "../assets/cast2.avif";
import cast3 from "../assets/cast3.avif";
import cast4 from "../assets/cast4.avif";
import cast5 from "../assets/cast5.avif";
import cast6 from "../assets/cast6.avif";
import cast7 from "../assets/cast7.avif";
import cast8 from "../assets/cast8.avif";

const castList = [
  { name: "Kavya Anil", role: "as Aneesha", img: cast1 },
  { name: "Sacchin Nachiappan", role: "as Sathya", img: cast2 },
  { name: "Ananthi Iyappan", role: "Actor", img: cast3 },
  { name: "Abishan Jeevinth", role: "as Sathya Sheelan", img: cast4 },
  { name: "Anaswara Rajan", role: "as Monisha", img: cast5 },
  { name: "Saravanan", role: "Actor", img: cast6 },
  { name: "Harish", role: "Actor", img: cast7 },
  { name: "Nivetha", role: "Actor", img: cast8 },
];


const MovieDetails = () => {
  
  const [showMore, setShowMore] = React.useState(false);

  const [offerIndex, setOfferIndex] = React.useState(0);

  const [castIndex, setCastIndex] = React.useState(0);

  return (
    <div className="w-full bg-white text-white">
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
          {/* ===== DESKTOP ABOUT SECTION  ===== */}
          <div className="hidden lg:block bg-[#ffffff] text-black py-12">
          <div className="max-w-[1440px] lg:max-w-7xl mx-auto px-4">

          <h2 className="text-[26px] font-medium leading-[30px] text-[#1a1a1a] mb-4">
            About the movie
          </h2>

          <p className="text-[18px] leading-[28px] text-[#404040] max-w-5xl">
          Sathya, wary of arranged matches, agrees to a blind date set up by his sister 
          and meets Monisha, only to discover they once shared the same school as senior 
          and junior.
          </p>

          <p className="text-[18px] leading-[28px] text-[#404040] max-w-4xl mt-6">
          As they bond over memories, old crushes, and unspoken feelings, their journey 
          reconnects them with the past and unexpectedly draws them closer, paving the 
          way for new love.
          </p>

        </div>
      </div>

{/* ===== DESKTOP TOP OFFERS ===== */}
<div className="hidden lg:block bg-white text-black pb-16">
  <div className="max-w-[1440px] lg:max-w-7xl mx-auto px-4">
    
    <h2 className="text-[24px] font-bold leading-[30px] tracking-[0.2px] text-[#1a1a1a] mb-4">
      Top offers for you
    </h2>

    <div className="relative max-w-5xl">
      
      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* LEFT ARROW */}
      {offerIndex > 0 && (
        <button
          onClick={() => setOfferIndex((p) => Math.max(p - 1, 0))}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full bg-[#6b6b6b] text-white
                     flex items-center justify-center shadow-lg"
        >
          <FiChevronRight className="rotate-180" size={26} />
        </button>
      )}

      {/* RIGHT ARROW */}
      {offerIndex < 3 && (
        <button
          onClick={() => setOfferIndex((p) => Math.min(p + 1, 3))}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full bg-[#6b6b6b] text-white
                     flex items-center justify-center shadow-lg"
        >
          <FiChevronRight size={26} />
        </button>
      )}

      {/* TRACK */}
      <div className="overflow-hidden">
        <div
          className="flex gap-10 transition-transform duration-500"
          style={{ transform: `translateX(-${offerIndex * 420}px)` }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
            className="min-w-[490px] bg-[#fff1cc]
           rounded-xl p-5 flex items-center gap-4
           border-[2px] border-[#f3d27a]
           [border-style:dashed]
           [border-dasharray:18_16]"


            >
              <img src={offerIcon} className="w-6 h-6" />

              <div>
                <p className="text-[16px] font-medium text-[#1a1a1a]">
                  YES Private Debit Card Offer
                </p>
                <p className="text-[14px] text-[#666] mt-1">
                  Tap to view details
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
{/* ===== DESKTOP CAST ===== */}
<div className="hidden lg:block bg-white text-black pb-20">
  <div className="max-w-[1440px] lg:max-w-7xl mx-auto px-4">
    
    <h2 className="text-[24px] font-semibold leading-[30px] tracking-[0.2px] text-[#1a1a1a] mb-6">
      Cast
    </h2>

    <div className="relative max-w-5xl">
      
      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* LEFT ARROW */}
      {castIndex > 0 && (
        <button
          onClick={() => setCastIndex((p) => Math.max(p - 1, 0))}
          className="absolute -left-6 top-1/3 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full bg-[#6b6b6b] text-white
                     flex items-center justify-center shadow-lg"
        >
          <FiChevronRight className="rotate-180" size={26} />
        </button>
      )}

      {/* RIGHT ARROW */}
      {castIndex < castList.length - 6 && (
        <button
          onClick={() => setCastIndex((p) => Math.min(p + 1, castList.length - 6))}
          className="absolute -right-6 top-1/3 -translate-y-1/2 z-20
                     w-10 h-10 rounded-full bg-[#6b6b6b] text-white
                     flex items-center justify-center shadow-lg"
        >
          <FiChevronRight size={26} />
        </button>
      )}

      {/* TRACK */}
      <div className="overflow-hidden">
        <div
          className="flex gap-2 transition-transform duration-500"
          style={{ transform: `translateX(-${castIndex * 180}px)` }}
        >
          {castList.map((c, i) => (
            <div key={i} className="min-w-[160px]">
              
              {/* IMAGE */}
              <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <p className="mt-3 text-[18px] font-medium text-[#1a1a1a]">
                {c.name}
              </p>

              {/* ROLE */}
              <p className="text-[16px] text-[#666]">
                {c.role}
              </p>

            </div>
          ))}
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


    {/* ===== TOP OFFERS ===== */}
<div className="mt-6">
  <h3 className="text-[20px] font-semibold leading-[30px] tracking-[0.2px] text-[#1a1a1a] mb-4">
    Top offers for you
  </h3>

  <div
    className="flex gap-4 overflow-x-auto pb-2
               snap-x snap-mandatory
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
  >
    {[1,2,3,4].map((i) => (
      <div
        key={i}
        className="snap-start min-w-[70%]
                   bg-[#fff1cc]
                   rounded-xl p-4 flex items-center gap-3
                   border-[2px] border-[#f3d27a]
                   [border-style:dashed]
                   [border-dasharray:14_10]"
      >
        <img src={offerIcon} className="w-6 h-6" />

        <div>
          <p className="text-[14px] font-medium text-[#1a1a1a]">
            YES Private Debit Card Offer
          </p>
          <p className="text-[12px] text-[#666] mt-0.5">
            Tap to view details
          </p>
        </div>
      </div>
    ))}
      </div>
    </div>

      {/* ===== TABLET CAST ===== */}
<div className="mt-4">
  <h3 className="text-[22px] font-semibold leading-[30px] tracking-[0.2px] text-[#1a1a1a] mb-4">
    Cast
  </h3>

  <div
    className="flex gap-5 overflow-x-auto pb-2
               snap-x snap-mandatory
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
  >
    {castList.map((c, i) => (
      <div
        key={i}
        className="snap-start min-w-[22%]"
      >
        <div className="w-full aspect-square rounded-2xl overflow-hidden">
          <img
            src={c.img}
            alt={c.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-3 text-[15px] font-medium text-[#1a1a1a]">
          {c.name}
        </p>
        <p className="text-[13px] text-[#666]">
          {c.role}
        </p>
      </div>
    ))}
  </div>
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
  
{/* ===== TOP OFFERS  ===== */}
<div className="mt-5">
  <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">
    Top offers for you
  </h3>

  <div
    className="flex gap-3 overflow-x-auto pb-2
               snap-x snap-mandatory
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
  >
    {[1,2,3,4].map((i) => (
      <div
        key={i}
        className="snap-start min-w-[85%]
                   bg-[#fff1cc]
                   rounded-xl p-3 flex items-center gap-3
                   border-[1px] border-[#f3d27a]
                   [border-style:dashed]
                   [border-dasharray:14_10]"
      >
        <img src={offerIcon} className="w-5 h-5" />

        <div>
          <p className="text-[13px] font-medium text-[#1a1a1a]">
            YES Private Debit Card Offer
          </p>
          <p className="text-[11px] text-[#666] mt-0.5">
            Tap to view details
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* ===== MOBILE CAST ===== */}
<div className="mt-3 mb-8">
  <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-3">
    Cast
  </h3>

  <div
    className="flex gap-3 overflow-x-auto pb-2
               snap-x snap-mandatory
               [-ms-overflow-style:none]
               [scrollbar-width:none]
               [&::-webkit-scrollbar]:hidden"
  >
    {castList.map((c, i) => (
      <div
        key={i}
        className="snap-start min-w-[32%]"
      >
        <div className="w-full aspect-square rounded-xl overflow-hidden">
          <img
            src={c.img}
            alt={c.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mt-2 text-[13px] font-medium text-[#1a1a1a]">
          {c.name}
        </p>
        <p className="text-[11px] text-[#666]">
          {c.role}
        </p>
      </div>
    ))}
  </div>
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
