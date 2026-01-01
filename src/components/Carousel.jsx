import { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import ad1 from "../assets/ad1.avif"
import ad2 from "../assets/ad2.avif"
import ad3 from "../assets/ad3.avif"
import ad4 from "../assets/ad4.avif"

const ads = [
  { id: 1, image: ad1 },
  { id: 2, image: ad2 },
  { id: 3, image: ad3 },
  { id: 4, image: ad4 }
]

const track = [...ads, ...ads, ...ads]

function Carousel() {
  const startIndex = ads.length
  const [index, setIndex] = useState(startIndex)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (index >= startIndex + ads.length) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(index - ads.length)
      }, 700)
    }
  }, [index])

  useEffect(() => {
    if (index < startIndex) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(index + ads.length)
      }, 700)
    }
  }, [index])

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      )
    }
  }, [animate])

  const next = () => setIndex((i) => i + 1)
  const prev = () => setIndex((i) => i - 1)

  return (
    <section className="w-full bg-[#F5F5F5] py-3 overflow-hidden">
      <div className="relative w-full overflow-hidden">

        {/* TRACK */}
        <div
          className={`flex ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {track.map((ad, i) => (
            <div key={i} className="flex-shrink-0 w-full px-3">

              {/* 🔥 ONLY FIX PART */}
              <div
                className="
                  w-full rounded-xl overflow-hidden
                  aspect-[16/7] sm:aspect-[16/6]
                  lg:aspect-auto
                "
              >
                <img
                  src={ad.image}
                  alt="ad"
                  className="
                    w-full h-[160px]
                    sm:h-[275px]
                    lg:h-[320px]
                    2xl:h-[500px]   
                  "
                />
              </div>
              {/* 🔥 ONLY FIX PART */}

            </div>
          ))}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 -translate-y-1/2
            flex items-center justify-center
            bg-black/50 rounded-lg z-30
            h-8 w-8
            sm:h-10 sm:w-10
            lg:h-14 lg:w-12
          "
        >
          <FiChevronLeft className="text-white text-lg sm:text-xl lg:text-2xl" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            flex items-center justify-center
            bg-black/50 rounded-lg z-30
            h-8 w-8
            sm:h-10 sm:w-10
            lg:h-14 lg:w-12
          "
        >
          <FiChevronRight className="text-white text-lg sm:text-xl lg:text-2xl" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {ads.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(startIndex + i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                index % ads.length === i ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Carousel
