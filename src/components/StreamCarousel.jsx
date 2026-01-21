import { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

/* ===== BG IMAGES ===== */
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import img4 from "../assets/img4.avif"
import img5 from "../assets/img5.avif"
import img6 from "../assets/img6.avif"
import img7 from "../assets/img7.avif"
import img8 from "../assets/img8.avif"
import img9 from "../assets/img9.avif"
import img10 from "../assets/img10.avif"

/* ===== CARD IMAGES ===== */
import img1a from "../assets/img1a.avif"
import img2a from "../assets/img2a.avif"
import img3a from "../assets/img3a.avif"
import img4a from "../assets/img4a.avif"
import img5a from "../assets/img5a.avif"
import img6a from "../assets/img6a.avif"
import img7a from "../assets/img7a.avif"
import img8a from "../assets/img8a.avif"
import img9a from "../assets/img9a.avif"
import img10a from "../assets/img10a.avif"

import premiereLogo from "../assets/premiere.avif"

//AOS ANIMATION
import AOS from "aos"
import "aos/dist/aos.css"

const ads = [
  { id: 1, bg: img2, card: img2a, pos: "object-center" },
  { id: 2, bg: img1, card: img1a, pos: "object-center" },
  { id: 3, bg: img3, card: img3a, pos: "object-top" },
  { id: 4, bg: img4, card: img4a, pos: "object-top" },
  { id: 5, bg: img5, card: img5a, pos: "object-center" },
  { id: 6, bg: img6, card: img6a, pos: "object-[50%_25%]" },
  { id: 7, bg: img7, card: img7a, pos: "object-center" },
]

const track = [...ads, ...ads, ...ads]

function StreamCarousel() {
  const startIndex = ads.length
  const [index, setIndex] = useState(startIndex)
  const [animate, setAnimate] = useState(true)

  //AOS ANIMATION
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1)
    }, 5000)
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
    if (!animate) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      )
    }
  }, [animate])

  return (
    <section className="w-full overflow-hidden bg-black">
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[480px]">
        <div
          className={`flex h-full ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {track.map((ad, i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0">
              
              {/* ===== BG IMAGE (FINAL FIX) ===== */}
              <img
                src={ad.bg}
                alt=""
                className="
                  absolute inset-0 w-full h-full
                  object-cover
                  object-[50%_20%]
                  sm:object-[50%_25%]
                  lg:object-[60%_30%]
                  2xl:object-[60%_35%]
                "
                data-aos="zoom-out"
              />

              {/* ===== DARK GRADIENT ===== */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/95 via-black/70 to-black/20
                  sm:from-black/90 sm:via-black/60
                  lg:from-black/90 lg:via-black/60
                "
                data-aos="fade"
              />

              {/* ===== CONTENT ===== */}
              <div
                className="
                  relative z-10 h-full
                  max-w-7xl mx-auto
                  px-4 sm:px-6
                  flex
                  items-end sm:items-center lg:items-center
                "
              >
                <div
                  className="
                    w-full
                    flex
                    flex-col
                    sm:flex-col
                    lg:flex-row
                    gap-4 sm:gap-6 lg:gap-10
                    pb-4 sm:pb-6 lg:pb-0
                  "
                >
                  {/* LEFT CARD */}
                  <div
                    className="hidden lg:block w-[240px] lg:w-[280px] rounded-xl overflow-hidden shadow-xl"
                    data-aos="fade-right"
                  >
                    <img
                      src={ad.card}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div
                    className="
                      text-white
                      max-w-2xl
                      lg:mt-[50px]
                    "
                    data-aos="fade-up"
                  >
                    <img
                      src={premiereLogo}
                      alt=""
                      className="h-3 sm:h-5 lg:h-6"
                    />

                    <div className="mt-2 mb-3 sm:mb-4 lg:mb-10">
                      <span
                        className="
                          block
                          text-[10px] sm:text-[14px] lg:text-[16px]
                          leading-[1.4] lg:leading-[1.5]
                          line-clamp-1
                        "
                      >
                        Brand new releases every Friday
                      </span>
                    </div>

                    <h1
                      className="
                        text-[16px] sm:text-[24px] lg:text-[36px]
                        font-bold
                        leading-[24px] sm:leading-[32px] lg:leading-[42px]
                        line-clamp-2
                      "
                    >
                      Wicked: For Good
                    </h1>

                    <p
                      className="
                        mt-1 sm:mt-3 lg:mt-4
                        text-[10px] sm:text-[14px] lg:text-[16px]
                        line-clamp-2
                      "
                    >
                      2h 17m • Family, Fantasy, Musical • UA16+
                    </p>

                    <p
                      className="
                        mt-1 sm:mt-2 lg:mt-4
                        text-[10px] sm:text-[14px] lg:text-[16px]
                      "
                    >
                      English
                    </p>

                    <p
                      className="
                        mt-1 mb-2 sm:mt-3 lg:mt-4
                        text-[10px] sm:text-[14px] lg:text-[16px]
                        leading-[1.5]
                        line-clamp-3
                      "
                    >
                      Now demonized as the Wicked Witch of the West, Elphaba
                      lives in exile while Glinda enjoys fame in Emerald City.
                      As unrest rises, the two must reunite to change destiny...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {ads.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(startIndex + i)}
              className={`
                rounded-full cursor-pointer transition
                h-1 w-1
                sm:h-2 sm:w-2
                lg:h-2 lg:w-2
                ${index % ads.length === i ? "bg-white" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StreamCarousel
