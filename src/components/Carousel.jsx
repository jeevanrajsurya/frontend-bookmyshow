import { useState, useEffect } from "react"

/* ===== DESKTOP ADS ===== */
import ad1 from "../assets/ad1.avif"
import ad2 from "../assets/ad2.avif"
import ad3 from "../assets/ad3.avif"
import ad4 from "../assets/ad4.avif"

/* ===== MOBILE ADS ===== */
import mAd1 from "../assets/mobile-ad1.avif"
import mAd2 from "../assets/mobile-ad2.avif"
import mAd3 from "../assets/mobile-ad3.avif"
import mAd4 from "../assets/mobile-ad4.avif"

/* ===== TABLET ADS ===== */
import tAd1 from "../assets/tablet-ad1.avif"
import tAd2 from "../assets/tablet-ad2.avif"
import tAd3 from "../assets/tablet-ad3.avif"
import tAd4 from "../assets/tablet-ad4.avif"

const ads = [
  { id: 1, image: ad1 },
  { id: 2, image: ad2 },
  { id: 3, image: ad3 },
  { id: 4, image: ad4 },
]

const mobileAds = [
  { id: 1, image: mAd1 },
  { id: 2, image: mAd2 },
  { id: 3, image: mAd3 },
  { id: 4, image: mAd4 },
]

const tabletAds = [
  { id: 1, image: tAd1 },
  { id: 2, image: tAd2 },
  { id: 3, image: tAd3 },
  { id: 4, image: tAd4 },
]

const track = [...ads, ...ads, ...ads]
const mobileTrack = [...mobileAds, ...mobileAds, ...mobileAds]
const tabletTrack = [...tabletAds, ...tabletAds, ...tabletAds]

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

  return (
    <section className="w-full bg-[#F5F5F5] py-3 sm:py-4 overflow-hidden">

      {/* ================= MOBILE ================= */}
      <div className="sm:hidden relative overflow-hidden">
        <div
          className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {mobileTrack.map((ad, i) => (
            <div key={i} className="flex-shrink-0 w-full px-4">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img src={ad.image} className="w-full h-auto object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <Dots ads={ads} index={index} setIndex={setIndex} startIndex={startIndex} />
      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden sm:block lg:hidden relative overflow-hidden">
        <div
          className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {tabletTrack.map((ad, i) => (
            <div key={i} className="flex-shrink-0 w-full px-4">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img src={ad.image} className="w-full h-auto object-cover rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <Dots ads={ads} index={index} setIndex={setIndex} startIndex={startIndex} />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {track.map((ad, i) => (
              <div key={i} className="flex-shrink-0 w-full flex justify-center">
                <div className="w-[99%]">
                  <div className="rounded-xl overflow-hidden aspect-[16/4.8] shadow-md">
                    <img
                      src={ad.image}
                      className="w-full h-full  object-fit rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <Dots ads={ads} index={index} setIndex={setIndex} startIndex={startIndex} />
      </div>

    </section>
  )
}

/* ================= DOT COMPONENT ================= */
function Dots({ ads, index, setIndex, startIndex }) {
  return (
    <div className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {ads.map((_, i) => (
        <span
          key={i}
          onClick={() => setIndex(startIndex + i)}
          className={`
            cursor-pointer transition-all rounded-full
            w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2 lg:h-2
            ${index % ads.length === i 
              ? "bg-white scale-125" 
              : "bg-white/50 hover:bg-white/70"}
          `}
        />
      ))}
    </div>
  )
}


export default Carousel
