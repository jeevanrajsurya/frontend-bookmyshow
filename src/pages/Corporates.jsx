import corporatesHero from "../assets/corporates-hero.avif"
import { FiPlayCircle, FiDownload } from "react-icons/fi"

// PARTNER LOGOS (YOUR ASSETS)
import hp from "../assets/hp.avif"
import ola from "../assets/ola.avif"
import axis from "../assets/axis.avif"
import mastercard from "../assets/mastercard.avif"
import icici from "../assets/icici.avif"


function Corporates() {
  return (
    <section className="w-full bg-white">

      {/* ================= HERO ================= */}
      <div
        className="
          relative
          w-full
          h-[400px]
          sm:h-[440px]
          lg:h-[500px]
          bg-cover
          bg-center
          overflow-hidden
        "
        style={{ backgroundImage: `url(${corporatesHero})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 h-full">
          <div
            className="
              max-w-[1200px]
              mx-auto
              h-full
              px-6
              flex
              flex-row
              items-center
              justify-between
              gap-6
            "
          >

            {/* LEFT CONTENT */}
            <div className="text-white max-w-[520px] flex-shrink-0">

              <h1 className="text-[32px] sm:text-[36px] font-bold leading-[44px]">
                Entertainment you can gift.
              </h1>

              <p className="mt-4 text-[14px] sm:text-[16px] leading-[26px] text-white/90">
                A variety of solutions to skyrocket your business with vouchers,
                promotions, loyalty, employee recognition & rewards.
              </p>

              <div className="mt-6 flex items-center gap-6 text-[14px] font-semibold">
                <button className="flex items-center gap-2 hover:underline">
                  <FiPlayCircle className="text-[#eb4e62] text-[18px]" />
                  Watch video
                </button>

                <button className="flex items-center gap-2 hover:underline">
                  <FiDownload className="text-[#eb4e62] text-[18px]" />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              className="
                bg-white
                w-full
                max-w-[300px]
                sm:max-w-[240px]
                lg:max-w-[380px]
                rounded-lg
                p-5
                sm:p-6
                shadow-lg
                flex-shrink-0
                font-['Roboto']
              "
            >
              <form className="flex flex-col gap-4">

                <div>
                  <label className="text-[12px] font-normal text-[#333]">
                    <span className="text-red-500">*</span> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[12px] font-normal text-[#333]">
                    <span className="text-red-500">*</span> Company Email
                  </label>
                  <input
                    type="email"
                    placeholder="Company Email"
                    className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[12px] font-normal text-[#333]">
                    <span className="text-red-500">*</span> Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[12px] font-normal text-[#333]">
                    <span className="text-red-500">*</span> Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="eg: 91480XXXXX"
                    className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
                  />
                </div>

                <button
                  type="button"
                  className="
                    mt-2
                    bg-[#e5e5e5]
                    text-[#888]
                    text-[14px]
                    font-semibold
                    py-3
                    rounded-md
                    cursor-not-allowed
                  "
                >
                  Receive a callback
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporates
