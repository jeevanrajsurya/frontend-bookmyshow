import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import lanIcon from "../assets/lan.png";

function TheaterDetailsHeader() {
  const [activeIndex, setActiveIndex] = useState(0);

  const dates = [
    { day: "TUE", date: "24", month: "FEB", enabled: true },
    { day: "WED", date: "25", month: "FEB", enabled: true },
    { day: "THU", date: "26", month: "FEB", enabled: true },
    { day: "FRI", date: "27", month: "FEB", enabled: false },
    { day: "SAT", date: "28", month: "FEB", enabled: false },
    { day: "SUN", date: "01", month: "MAR", enabled: false },
    { day: "MON", date: "02", month: "MAR", enabled: false },
  ];

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
          <div className="flex items-stretch ml-auto">
            {[
              "Tamil • 2D",
              "Price Range",
              "Special Formats",
              "Preferred Time",
              "Sort By",
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center px-2 border-l border-[#E5E5E5] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-[#333333]"
              >
                {f}

                {/* show icon except Tamil • 2D */}
                {f !== "Tamil • 2D" && (
                  <FiChevronDown className="text-[#f84464] text-[18px] ml-1" />
                )}
              </div>
            ))}

            <div className="flex items-center px-3 border-l border-[#E5E5E5]">
              <FiSearch className="text-[#333333] text-[22px]" />
            </div>
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
              <span className="text-[#f84464] text-[11px] font-normal leading-[16px] tracking-[0.2px]">Got it</span>
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