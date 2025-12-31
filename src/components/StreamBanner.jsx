import streamBannerImg from "../assets/stream-banner.avif";

/* ✅ BACKEND-READY BANNER DATA */
const streamBanner = {
  id: 1,
  image: streamBannerImg,
  alt: "BookMyShow Stream"
};

const StreamBanner = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-5">
      {/* Same container width as other sections */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src={streamBanner.image}
            alt={streamBanner.alt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StreamBanner;
