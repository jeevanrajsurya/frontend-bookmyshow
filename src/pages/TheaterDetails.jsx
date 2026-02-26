import React, { useState } from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import lanIcon from "../assets/lan.png";

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

  return (
    <div className="w-full">
      {/* TITLE */}
      <div className="bg-white border-b border-[#E5E5E5]">
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
        <div className="max-w-[1440px] lg:max-w-7xl mx-auto flex items-stretch px-4">

          {/* LEFT —> DATES */}
          <div className="flex">
            {dates.map((d, i) => {
              const isActive = i === activeIndex;
              const isDisabled = !d.enabled;

              return (
                <button
                  key={i}
                  disabled={isDisabled}
                  onClick={() => d.enabled && setActiveIndex(i)}
                  className={`
                    w-[60px] text-center
                    ${isActive ? "bg-[#f84464] text-white my-[6px] rounded-md py-1" : "py-0"}
                    ${
                      isDisabled
                        ? "text-[#C6C6C6] cursor-default"
                        : "text-[#333333]"
                    }
                  `}
                >
                  <div className="text-[12px] leading-[16px]">{d.day}</div>
                  <div className="text-[18px] font-semibold leading-[28px]">
                    {d.date}
                  </div>
                  <div className="text-[12px] leading-[16px]">{d.month}</div>
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
      <div className="bg-white border-b border-[#E5E5E5]">
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
      </div>
    </div>
  );
}

export default TheaterDetailsHeader;