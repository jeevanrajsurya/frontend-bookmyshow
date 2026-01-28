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
    <section className="w-full bg-[#F5F5F5] py-2 sm:py-4 overflow-hidden">

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="200"
        data-aos-once="true"
        className="relative w-full overflow-hidden"
      >
        {/* ===== TRACK ===== */}
        <div
          className={`flex ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >

          {/* ===== MOBILE ===== */}
          <div className="flex md:hidden w-full">
            {mobileTrack.map((ad, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <div className="px-4">
                  <div className="rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={ad.image}
                      alt="mobile-ad"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== TABLET ===== */}
          <div className="hidden sm:flex lg:hidden w-full">
            {tabletTrack.map((ad, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                {/* FULL WIDTH */}
                <div className="w-full">
                  <div className="px-4">
                    <div className="rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={ad.image}
                        alt="tablet-ad"
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ===== DESKTOP ===== */}
          <div className="hidden lg:flex w-full">
            {track.map((ad, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                {/* FULL WIDTH  */}
                <div className="w-full">
                  <div className="px-4">
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay="100"
                      className="w-full rounded-xl overflow-hidden aspect-[16/3.5]"
                    >
                      <img
                        src={ad.image}
                        alt="ad"
                        className="w-full h-full object-cover object-center rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ===== DOTS ===== */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {ads.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(startIndex + i)}
              className={`h-1 w-1 sm:h-2 sm:w-2 rounded-full cursor-pointer ${
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
