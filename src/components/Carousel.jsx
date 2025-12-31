import { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import ad1 from "../assets/ad1.avif"
import ad2 from "../assets/ad2.avif"
import ad3 from "../assets/ad3.avif"
import ad4 from "../assets/ad4.avif"

/* BACKEND-READY ADS DATA */
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

  /* AUTO SLIDE – CLOCKWISE ONLY */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  /* RIGHT SIDE RESET */
  useEffect(() => {
    if (index >= startIndex + ads.length) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(index - ads.length)
      }, 700)
    }
  }, [index])

  /* LEFT SIDE RESET */
  useEffect(() => {
    if (index < startIndex) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(index + ads.length)
      }, 700)
    }
  }, [index])

  /* RE-ENABLE TRANSITION */
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
    <div className="w-full bg-[#F5F5F5] py-3 lg:py-2 overflow-hidden">
      <div className="relative w-full overflow-hidden">

        {/* TRACK */}
        <div
          className={`flex ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(calc(50% - ${(index + 0.5) * 70}%))`,
          }}
        >
          {track.map((ad, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                w-full
                sm:w-[85%]
                lg:w-[70%]
                px-3
                lg:px-2
              "
            >
              <img
                src={ad.image}
                alt="ad"
                className="
                  w-full
                  h-[200px]
                  sm:h-[260px]
                  lg:h-[300px]
                  object-cover
                  rounded-xl
                "
              />
            </div>
          ))}
        </div>

        {/* LEFT ARROW – NOW VISIBLE IN ALL VIEWS */}
        <button
          onClick={prev}
          className="
            flex
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            h-14
            w-10
            bg-gradient-to-r
            from-black/70
            to-black/30
            rounded-r-xl
            items-center
            justify-center
            z-30
          "
        >
          <FiChevronLeft className="text-white text-2xl" />
        </button>

        {/* RIGHT ARROW – NOW VISIBLE IN ALL VIEWS */}
        <button
          onClick={next}
          className="
            flex
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            h-14
            w-10
            bg-gradient-to-l
            from-black/70
            to-black/30
            rounded-l-xl
            items-center
            justify-center
            z-30
          "
        >
          <FiChevronRight className="text-white text-2xl" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
    </div>
  )
}

export default Carousel
