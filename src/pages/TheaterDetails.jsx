import React, { useState } from "react";
import { FiChevronDown, FiSearch, FiX, FiArrowLeft, FiSliders, FiShuffle } from "react-icons/fi";
import lanIcon from "../assets/lan.png";
import { useNavigate } from "react-router-dom";

import broadwayLogo from "../assets/broadway.avif";
import kgLogo from "../assets/kg.avif";
import CinepolisLogo from "../assets/cinepolis.avif";
import InoxLogo from "../assets/inox.avif";
import PvrLogo from "../assets/pvr.avif";
import heartIcon from "../assets/heart.png";
import infoIcon from "../assets/info.avif";
import foodIcon from "../assets/food.avif";
import mTicketIcon from "../assets/mticket.avif";



function TheaterDetailsHeader() {
  const [activeIndex, setActiveIndex] = useState(0);

  //  filter interaction state
  const [openFilter, setOpenFilter] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const dates = [
    { day: "TUE", date: "24", month: "FEB", enabled: true },
    { day: "WED", date: "25", month: "FEB", enabled: true },
    { day: "THU", date: "26", month: "FEB", enabled: true },
    { day: "FRI", date: "27", month: "FEB", enabled: false },
    { day: "SAT", date: "28", month: "FEB", enabled: false },
    { day: "SUN", date: "01", month: "MAR", enabled: false },
    { day: "MON", date: "02", month: "MAR", enabled: false },
  ];

  const filters = [
    "Tamil • 2D",
    "Price Range",
    "Special Formats",
    "Preferred Time",
    "Sort By",
  ];

  const toggleFilter = (name) => {
    setSearchOpen(false);
    setOpenFilter(openFilter === name ? null : name);
  };
  
  const navigate = useNavigate();

  const theatres = [
  {
    id: 1,
    name: "Broadway Cinemas: Coimbatore",
    logo: broadwayLogo,
    facilities: [foodIcon, mTicketIcon],
    showtimes: [
      { time: "12:30 PM", format: "4K DOLBY ATMOS" },
      { time: "03:50 PM", format: "4K DOLBY ATMOS" },
      { time: "07:05 PM", format: "4K DOLBY ATMOS" },
      { time: "10:20 PM", format: "4K DOLBY ATMOS" },
    ],
    note: "Non-cancellable",
  },
  {
    id: 2,
    name: "KG Cinemas: Coimbatore",
    logo: kgLogo,
    facilities: [foodIcon, mTicketIcon],
    showtimes: [
      { time: "12:00 PM", format: "ANTARAA", lang: "ENG" },
      { time: "07:10 PM", format: "PALLAVI", lang: "ENG" },
      { time: "10:35 PM", format: "ANTARAA", lang: "ENG" },
    ],
    note: "Cancellation available",
  },
  {
    id: 3,
    name: "Cinepolis: Fun Republic Mall, Coimbatore",
    logo: CinepolisLogo,
    facilities: [foodIcon, mTicketIcon],
    showtimes: [
      { time: "12:00 PM", format: "ANTARAA", lang: "ENG" },
      { time: "07:10 PM", format: "PALLAVI", lang: "ENG" },
      { time: "10:35 PM", format: "ANTARAA", lang: "ENG" },
    ],
    note: "Cancellation available",
  },
  {
    id: 1,
    name: "INOX: Prozone Mall, Coimbatore",
    logo: InoxLogo,
    facilities: [foodIcon, mTicketIcon],
    showtimes: [
      { time: "12:30 PM", format: "4K DOLBY ATMOS" },
      { time: "03:50 PM", format: "4K DOLBY ATMOS" },
      { time: "07:05 PM", format: "4K DOLBY ATMOS" },
      { time: "10:20 PM", format: "4K DOLBY ATMOS" },
    ],
    note: "Non-cancellable",
  },
  {
    id: 1,
    name: "PVR: Brookefields Mall, Coimbatore",
    logo: PvrLogo,
    facilities: [foodIcon, mTicketIcon],
    showtimes: [
      { time: "12:30 PM", format: "4K DOLBY ATMOS" },
      { time: "03:50 PM", format: "4K DOLBY ATMOS" },
      { time: "07:05 PM", format: "4K DOLBY ATMOS" },
      { time: "10:20 PM", format: "4K DOLBY ATMOS" },
    ],
    note: "Non-cancellable",
  },
];

  return (
    <div className="w-full">
      {/* TITLE */}
        <div className="hidden lg:block bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] lg:max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-[32px] font-medium leading-[36px]">
            With Love - (Tamil)
          </h1>

          <div className="flex gap-2 mt-3">
            {["Movie runtime: 2h 21m", "U", "Drama", "Romantic"].map(
              (t, i) => (
                <span
                  key={i}
                  className="text-[#666666] px-[6px] py-[2px] rounded-[12px] border border-[#666666] text-[12px] leading-[16px] tracking-[0.2px]"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* DATE + FILTER */}
<div className="bg-white border-b border-[#E5E5E5] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.10)]">

  {/* MOBILE + TAB */}
  {/* <div className="lg:hidden px-3 py-2 space-y-2 "> */}
  <div className="lg:hidden px-3 py-2 space-y-2 sticky top-0 z-40 bg-white">
  
   <div className="flex items-center justify-between py-1 w-full sm:max-w-[520px] sm:mx-auto ">
  
  {/* LEFT GROUP */}
  <div className="flex items-center gap-4">
  <FiArrowLeft
    onClick={() => navigate(-1)}
    className="text-[20px] sm:text-[22px] text-[#333] cursor-pointer"
  />
    <div className="flex flex-col">
      <div className="text-[#333333] text-[18px] sm:text-[22px] font-medium leading-[18px] sm:leading-[20px] tracking-[0.2px] sm:tracking-[0.2px]">
        With Love
      </div>
      <div className="text-[11px] sm:text-[12px] text-[#666] font-medium leading-[18px] sm:leading-[20px] tracking-[0.2px] sm:tracking-[0.2px]">
        Movie runtime: 2h 21m
      </div>
    </div>
  </div>

  {/* RIGHT ICONS */}
  <div className="flex items-center gap-4">
    <FiSearch className="text-[18px] sm:text-[20px] text-[#333]" />
    <FiSliders className="text-[18px] sm:text-[20px] text-[#333]" />
  </div>
</div>

  {/* DATES WRAPPER */}
<div className="border-t border-b border-[#E5E5E5] -mx-3 ">
  
  {/* DATES SCROLL */}
  <div className="flex gap-1 sm:gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
    {dates.map((d, i) => {
      const isActive = i === activeIndex;
      const isDisabled = !d.enabled;

      return (
        <button
          key={i}
          disabled={isDisabled}
          onClick={() => d.enabled && setActiveIndex(i)}
          className={`min-w-[45px] sm:min-w-[48px] text-center ${
            isActive
              ? "bg-[#f84464] text-white py-1 "
              : "text-[#333]"
          } ${isDisabled && "text-[#C6C6C6]"}`}
        >
          <div className="text-[10px] sm:text-[12px]">{d.day}</div>
          <div className="text-[14px] sm:text-[16px] font-semibold">
            {d.date}
          </div>
          <div className="text-[10px] sm:text-[12px]">{d.month}</div>
        </button>
      );
    })}
  </div>
</div>
{/* LANGUAGE */}
<div className="text-[11px] sm:text-[13px] text-[#333] font-medium my-2 sm:my-4">
  Tamil • 2D
</div>

    {/* FILTER WRAPPER */}
<div className="border-t border-b border-[#E5E5E5] -mx-3 px-3 py-2 sm:py-3">

  <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">

    {/* SORT BY  */}
    <button className="flex items-center px-3 py-1 border border-[#B3B3B3] rounded-md  text-[#333] whitespace-nowrap">
      
      {/* LEFT ICON */}
      <FiShuffle className="text-[14px] text-[#f84464] mr-1" />
      
      <span className="text-[#f84464] text-[12px] sm:text-[12px] " >Sort by</span>

      {/* DIVIDER */}
      <span className="mx-2 h-3 w-[1px] bg-[#E5E5E5] " />

      {/* RIGHT ICON */}
      <FiChevronDown className="text-[14px] text-[#f84464]" />
    </button>

    {/* OTHER PILLS */}
    {["Special Formats", "₹0 - ₹100", "₹101 - ₹200", "₹201 - ₹400", "Clear filter"].map((f, i) => (
      <button
        key={i}
        className="flex items-center gap-1 px-3 py-2 border border-[#B3B3B3] rounded-full text-[12px] sm:text-[14px]  text-[#f84464] whitespace-nowrap"
      >
        {f}
        <FiChevronDown className="text-[14px] text-[#f84464]" />
      </button>
    ))}

  </div>
</div>
  </div>

  {/* DESKTOP  */}
  <div className="hidden lg:flex max-w-[1440px] lg:max-w-7xl mx-auto items-stretch px-4">
    
    {/* LEFT — DATES */}
    <div className="flex">
      {dates.map((d, i) => {
        const isActive = i === activeIndex;
        const isDisabled = !d.enabled;

        return (
          <button
            key={i}
            disabled={isDisabled}
            onClick={() => d.enabled && setActiveIndex(i)}
            className={`w-[60px] text-center ${
              isActive
                ? "bg-[#f84464] text-white my-[6px] rounded-md py-1"
                : ""
            } ${isDisabled ? "text-[#C6C6C6]" : "text-[#333]"}`}
          >
            <div className="text-[12px]">{d.day}</div>
            <div className="text-[18px] font-semibold">{d.date}</div>
            <div className="text-[12px]">{d.month}</div>
          </button>
        );
      })}
    </div>

    {/* RIGHT — FILTERS */}
   
    <div className="flex items-stretch ml-auto relative">

  {/* FILTER ITEMS */}
  {!searchOpen && filters.map((f, i) => (
    <div
      key={i}
      onClick={() => f !== "Tamil • 2D" && toggleFilter(f)}
      className="flex items-center px-2 border-l border-[#E5E5E5] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#333333] cursor-pointer relative"
    >
      {f}

      {f !== "Tamil • 2D" && (
        <FiChevronDown
          className={`text-[#f84464] text-[18px] ml-1 transition-transform ${
            openFilter === f ? "rotate-180" : ""
          }`}
        />
      )}

      {/* DROPDOWN — PRICE */}
      {openFilter === "Price Range" && f === "Price Range" && (
        <div className="absolute top-full left-0  w-[120px] bg-white border border-[#E5E5E5] rounded shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-2 space-y-2 z-50">
          {["₹0 - ₹100","₹101 - ₹200","₹201 - ₹300","₹301 - ₹400","₹401 - ₹500"].map((t,i)=>(
            <label key={i} className="flex justify-between items-center text-[12px]">
              {t}
              <input type="checkbox" className="w-4 h-4 " />
            </label>
          ))}
        </div>
      )}

      {/* DROPDOWN — SPECIAL */}
      {openFilter === "Special Formats" && f === "Special Formats" && (
        <div className="absolute top-full left-0  w-[145px] bg-white border border-[#E5E5E5] rounded shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-2 space-y-2 z-50">
          {["Dolby Atmos","4K","Laser","Dolby"].map((t,i)=>(
            <label key={i} className="flex justify-between items-center text-[12px]">
              {t}
              <input type="checkbox" className="w-4 h-4" />
            </label>
          ))}
        </div>
      )}

      {/* DROPDOWN — TIME */}
      {openFilter === "Preferred Time" && f === "Preferred Time" && (
        <div className="absolute top-full left-0  w-[200px] bg-white border border-[#E5E5E5] rounded shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-2 space-y-2 z-50">
          {[
            ["🌤️","Morning","12:00 AM - 11:59 AM"],
            ["☀️","Afternoon","12:00 PM - 3:59 PM"],
            ["🌆","Evening","4:00 PM - 6:59 PM"],
            ["🌙","Night","7:00 PM - 11:59 PM"],
          ].map((t,i)=>(
            <label key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span>{t[0]}</span>
                <div>
                  <div className="text-[14px] font-medium">{t[1]}</div>
                  <div className="text-[10px] text-[#666]">{t[2]}</div>
                </div>
              </div>
              <input type="checkbox" className="w-4 h-4" />
            </label>
          ))}
        </div>
      )}

      {/* DROPDOWN — SORT */}
      {openFilter === "Sort By" && f === "Sort By" && (
        <div className="absolute top-full left-0  w-[200px] bg-white border border-[#E5E5E5] rounded shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-3 space-y-3 z-50">
          {[
            ["Relevance","Best options for you first"],
            ["Popularity","Show most popular first"],
            ["Distance","Show nearest first"],
          ].map((t,i)=>(
            <label key={i} className="flex justify-between items-center">
              <div>
                <div className="text-[14px] font-medium">{t[0]}</div>
                <div className="text-[10px] text-[#666]">{t[1]}</div>
              </div>
              <input type="radio" name="sort" className="w-4 h-4" />
            </label>
          ))}
        </div>
      )}
    </div>
  ))}

  {/* SEARCH */}
  {!searchOpen && (
    <div
      onClick={() => {
        setOpenFilter(null);
        setSearchOpen(true);
      }}
      className="flex items-center px-3 border-l border-[#E5E5E5] cursor-pointer"
    >
      <FiSearch className="text-[#333333] text-[22px]" />
    </div>
  )}

  {searchOpen && (
    <div className="flex items-center px-3 border-l border-[#E5E5E5] w-[300px]">
      <FiSearch className="text-[#666] mr-2" />
      <input
        autoFocus
        placeholder="Search by cinema or area"
        className="flex-1 outline-none text-[14px]"
      />
      <FiX
        onClick={() => setSearchOpen(false)}
        className="ml-2 text-[18px] text-[#666] cursor-pointer"
      />
    </div>
  )}
</div>
        </div>
      </div>

      {/* SHADOW SPACER */}
      <div className="h-[2px] shadow-[0_3px_6px_rgba(0,0,0,0.12)]"></div>

      {/* SUBTITLE + LEGEND */}
      <div className="hidden lg:block bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] lg:max-w-7xl mx-auto flex justify-between px-4 py-2 text-[13px] text-[#666666]">
          <div className="flex items-center gap-1">
            <img src={lanIcon} alt="LAN" className="w-7 h-5" />
            <span className="text-[#404040] text-[11px] font-normal leading-[16px] tracking-[0.2px]">
              indicates subtitle language, if subtitles are available{" "}
              <span className="text-[#f84464] text-[11px] font-normal leading-[16px] tracking-[0.2px]">
                Got it
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] font-normal leading-[16px] tracking-[0.2px] text-[#666666] uppercase">
              <span className="w-2 h-2 bg-green-500 rounded-full "></span>
              AVAILABLE
            </div>
            <div className="flex items-center gap-1 text-[10px] font-normal leading-[16px] tracking-[0.2px] text-[#666666] uppercase">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              FAST FILLING
            </div>
          </div>
        </div>


    {/* THEATRE LIST — DESKTOP */}
<div className="hidden lg:block bg-[#F2F5F9] py-4">
  <div className="max-w-[1440px] lg:max-w-7xl mx-auto space-y-0">

    {theatres.map((t) => (
  <div
    key={t.id}
    className="relative bg-white border border-[#E5E5E5] px-6 py-4"
  >

    <div className="flex gap-18">

      {/* LEFT SIDE */}
    <div className="flex  w-[25%]">

  {/* LOGO + FACILITY COLUMN */}
  <div className="flex flex-col items-start">

    {/* LOGO */}
    <img src={t.logo} className="w-10 h-10 object-contain" />

    {/* FACILITY ICONS */}
    <div className="flex gap-2 mt-6">
      {t.facilities.map((f, i) => (
        <img key={i} src={f} className="w-6 h-6" />
      ))}
    </div>
  </div>

  {/* THEATRE NAME COLUMN */}
  <div>
    <div className="flex items-center gap-2">
      <div className="text-[14px] font-medium leading-[20px] tracking-[0.2px] text-[#333333] mr-5">
        {t.name}
      </div>
      {/* <img src={infoIcon} className="w-4 h-4" /> */}
    </div>
  </div>
</div>

      {/* RIGHT SIDE */}
<div className="w-[70%]">

  {/* SHOWTIME */}
  <div className="flex items-start gap-4">

    {/* HEART */}
    <img
      src={heartIcon}
      className="w-5 h-5 mt-3 cursor-pointer"
    />

   {/* SHOWTIMES */}
<div className="flex gap-3 flex-wrap">
  {t.showtimes.map((s, i) => (
    <div
      key={i}
      className="border border-[#4CAF50] border-l-[4px] border-l-[#4CAF50] text-center px-4 py-1.5 rounded-sm"
    >
      {/* TIME + LANG SAME ROW */}
      <div className="flex items-center justify-center text-[#666666] text-[12px] font-medium leading-[16px] tracking-[0.2px]">
        {s.time}

        {s.lang && (
          <span className="flex items-center justify-center text-[7px] font-bold h-[10px] tracking-[0.5px] p-[1px] relative ml-1 border-[0.8px] border-[#666666]">
            {s.lang}
          </span>
        )}
      </div>

      {/* FORMAT BELOW */}
      <div className="text-[8px] font-normal leading-[12px] tracking-[0.2px] text-[#666666] w-full whitespace-nowrap overflow-hidden text-ellipsis">
        {s.format}
      </div>
    </div>
  ))}
</div>

  </div>

  {/* NOTE */}
  <div className="text-[11px] font-normal leading-[16px] tracking-[0.2px] text-[#666666] mt-2 ml-9">
    {t.note}
  </div>

</div>
    </div>
  </div>
))}
  {/* EMPTY STATE SECTION */}
<div className="flex flex-col items-center justify-center py-10">
  <div className="break-words text-[#333333] grow text-center font-medium leading-[24px] text-[16px] mb-6">
    Unable to find what you are looking for?
  </div>

  <button className="text-[14px] font-normal leading-[20px] tracking-[0.2px] rounded-lg border border-[#DC354B] text-[#DC354B] bg-white cursor-pointer inline-block px-4 py-[6px] hover:bg-[#F84464] hover:text-white transition">
    Change Location
  </button>
</div>

  </div>
</div> 
{/* end */}


    </div>
  </div>
  );
}

export default TheaterDetailsHeader;




