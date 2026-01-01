import throwbackBannerImg from "../assets/throwback-banner.avif"

/* BACKEND-READY BANNER DATA */
const throwbackBanner = {
  id: 1,
  image: throwbackBannerImg,
  alt: "BookMyShow Throwback 2025"
}

const ThrowbackBanner = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-5 sm:py-10 lg:py-20">
      {/* Same container as other sections */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src={throwbackBanner.image}
            alt={throwbackBanner.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ThrowbackBanner
