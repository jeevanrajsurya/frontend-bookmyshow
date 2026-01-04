import corporatesHero from "../assets/corporates-hero.avif"
import { FiPlayCircle, FiDownload } from "react-icons/fi"

// PARTNER LOGOS (YOUR ASSETS)
import hp from "../assets/hp.avif"
import ola from "../assets/ola.avif"
import axis from "../assets/axis.avif"
import mastercard from "../assets/mastercard.avif"
import icici from "../assets/icici.avif"
import brandPromotionImage from "../assets/your-image-name.avif"
import employeeEngagementImage from "../assets/your-image-name2.avif"




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

          {/* ================= OUR PARTNERS ================= */}
<section className="w-full bg-[#f2f2f2] py-3">
  {/* WHITE CONTAINER */}
  <div
    className="
      max-w-[1200px]
      mx-auto
      bg-white
      py-14
      px-6
    "
  >
    {/* HEADING */}
    <h2
      className="
        text-center
        text-[14px]
        tracking-[2px]
        text-[#222]
        mb-12
        font-semibold
      "
    >
      OUR PARTNERS
    </h2>

    {/* LOGOS */}
    <div
      className="
        flex
        items-center
        justify-center
        gap-16
        flex-wrap
      "
    >
      <img src={hp} alt="HP" className="h-[48px] object-contain" />
      <img src={ola} alt="Ola" className="h-[48px] object-contain" />
      <img src={axis} alt="Axis Bank" className="h-[48px] object-contain" />
      <img src={mastercard} alt="Mastercard" className="h-[48px] object-contain" />
      <img src={icici} alt="ICICI Bank" className="h-[48px] object-contain" />
    </div>
  </div>
</section>

{/* ================= STATS ================= */}
<section className="w-full bg-[#f2f2f2] py-20">
  <div
    className="
      max-w-[1200px]
      mx-auto
      px-6
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-5
      gap-y-12
      text-center
    "
  >
    {/* ITEM 1 */}
    <div>
      <h3 className="text-[28px] font-semibold text-[#222]">1000+</h3>
      <p className="mt-2 text-[14px] font-semibold tracking-wide text-[#555]">
        CITIES
      </p>
    </div>

    {/* ITEM 2 */}
    <div>
      <h3 className="text-[28px] font-semibold text-[#222]">6000</h3>
      <p className="mt-2 text-[14px]  font-semibold  tracking-wide text-[#555]">
        SCREENS
      </p>
    </div>

    {/* ITEM 3 */}
    <div>
      <h3 className="text-[28px] font-semibold text-[#222]">1000+</h3>
      <p className="mt-2 text-[14px] font-semibold  tracking-wide text-[#555]">
        CORPORATES<br />WHO TRUST US
      </p>
    </div>

    {/* ITEM 4 */}
    <div>
      <h3 className="text-[28px] font-semibold text-[#222]">
        15 MILLION+
      </h3>
      <p className="mt-2 text-[14px]  font-semibold  tracking-wide text-[#555]">
        TICKETS SOLD<br />PER MONTHS
      </p>
    </div>

    {/* ITEM 5 */}
    <div>
      <h3 className="text-[28px] font-semibold text-[#222]">
        4 Billion
      </h3>
      <p className="mt-2 text-[14px]  font-semibold  tracking-wide text-[#555]">
        PAGE VIEWS<br />PER MONTH
      </p>
    </div>
  </div>
  </section>



      {/* ================= BRAND PROMOTIONS ================= */}
<section className="w-full bg-[#f2f2f2] ">
  {/* WHITE CONTAINER */}
  <div
    className="
      max-w-[1200px]
      mx-auto
      bg-white
    "
  >
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-stretch
      "
    >
      {/* LEFT CONTENT */}
      <div className="px-10 py-16 flex flex-col justify-center max-w-[520px]">
        <p
          className="
            text-[13px]
            tracking-[2px]
            text-[#666]
            font-medium
            mb-4
          "
        >
          WHAT&apos;S IN IT FOR YOU
        </p>

        <h2
          className="
            text-[36px]
            leading-[44px]
            font-semibold
            text-[#1f1f1f]
            mb-6
          "
        >
          Brand Promotions
        </h2>

        <p
          className="
            text-[16px]
            leading-[28px]
            text-[#4a4a4a]
            mb-10
          "
        >
          Gifting entertainment is a fun way to push your brand’s message.
          And the ways you can use vouchers are endless. For example,
          upselling celebrity-endorsed products timed with a movie release.
        </p>

        <button
          className="
            w-max
            border
            border-[#dc3558]
            text-[#dc3558]
            px-8
            py-3
            text-[14px]
            font-semibold
            rounded-md
            hover:bg-[#dc3558]
            hover:text-white
            transition
          "
        >
          Promote your brand
        </button>
      </div>

      {/* RIGHT IMAGE – FULL COVER */}
      <div className="w-full h-full">
        <img
          src={brandPromotionImage}
          alt="Brand Promotion"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>
    </div>
  </div>

<section className="w-full bg-[#f2f2f2] py-2">
  {/* WHITE CONTAINER */}
  <div className="max-w-[1200px] mx-auto bg-white">
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-stretch
      "
    >
      {/* LEFT IMAGE – FULL COVER */}
      <div className="w-full h-full">
        <img
          src={employeeEngagementImage}   
          alt="Employee Engagement"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="px-10 py-16 flex flex-col justify-center max-w-[520px]">
        <h2
          className="
            text-[36px]
            leading-[44px]
            font-semibold
            text-[#1f1f1f]
            mb-6
          "
        >
          Employee Engagement
          <br />
          Recognition & Rewards
        </h2>

        <p
          className="
            text-[16px]
            leading-[28px]
            text-[#4a4a4a]
            mb-10
          "
        >
          Show your clients and employees some appreciation by gifting
          them our products.
        </p>

        <button
          className="
            w-max
            border
            border-[#dc3558]
            text-[#dc3558]
            px-8
            py-3
            text-[14px]
            font-semibold
            rounded-md
            hover:bg-[#dc3558]
            hover:text-white
            transition
          "
        >
          Engage your employees
        </button>
      </div>
    </div>
  </div>
    <section className="w-full bg-[#f2f2f2] py-2 ">
  {/* WHITE CONTAINER */}
  <div
    className="
      max-w-[1200px]
      mx-auto
      bg-white
    "
  >
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-stretch
      "
    >
      {/* LEFT CONTENT */}
      <div className="px-10 py-16 flex flex-col justify-center max-w-[520px]">
        <p
          className="
            text-[13px]
            tracking-[2px]
            text-[#666]
            font-medium
            mb-4
          "
        >
          WHAT&apos;S IN IT FOR YOU
        </p>

        <h2
          className="
            text-[36px]
            leading-[44px]
            font-semibold
            text-[#1f1f1f]
            mb-6
          "
        >
          Brand Promotions
        </h2>

        <p
          className="
            text-[16px]
            leading-[28px]
            text-[#4a4a4a]
            mb-10
          "
        >
          Gifting entertainment is a fun way to push your brand’s message.
          And the ways you can use vouchers are endless. For example,
          upselling celebrity-endorsed products timed with a movie release.
        </p>

        <button
          className="
            w-max
            border
            border-[#dc3558]
            text-[#dc3558]
            px-8
            py-3
            text-[14px]
            font-semibold
            rounded-md
            hover:bg-[#dc3558]
            hover:text-white
            transition
          "
        >
          Promote your brand
        </button>
      </div>

      {/* RIGHT IMAGE – FULL COVER */}
      <div className="w-full h-full">
        <img
          src={brandPromotionImage}
          alt="Brand Promotion"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>
    </div>
  </div>

<section className="w-full bg-[#f2f2f2] py-2">
  {/* WHITE CONTAINER */}
  <div className="max-w-[1200px] mx-auto bg-white">
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-stretch
      "
    >
      {/* LEFT IMAGE – FULL COVER */}
      <div className="w-full h-full">
        <img
          src={employeeEngagementImage}   
          alt="Employee Engagement"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="px-10 py-16 flex flex-col justify-center max-w-[520px]">
        <h2
          className="
            text-[36px]
            leading-[44px]
            font-semibold
            text-[#1f1f1f]
            mb-6
          "
        >
          Employee Engagement
          <br />
          Recognition & Rewards
        </h2>

        <p
          className="
            text-[16px]
            leading-[28px]
            text-[#4a4a4a]
            mb-10
          "
        >
          Show your clients and employees some appreciation by gifting
          them our products.
        </p>

        <button
          className="
            w-max
            border
            border-[#dc3558]
            text-[#dc3558]
            px-8
            py-3
            text-[14px]
            font-semibold
            rounded-md
            hover:bg-[#dc3558]
            hover:text-white
            transition
          "
        >
          Engage your employees
        </button>
      </div>
    </div>
  </div>

  <section className="w-full bg-[#f2f2f2] py-2 ">
  {/* WHITE CONTAINER */}
  <div
    className="
      max-w-[1200px]
      mx-auto
      bg-white
    "
  >
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-stretch
      "
    >
      {/* LEFT CONTENT */}
      <div className="px-10 py-16 flex flex-col justify-center max-w-[520px]">
        <p
          className="
            text-[13px]
            tracking-[2px]
            text-[#666]
            font-medium
            mb-4
          "
        >
          WHAT&apos;S IN IT FOR YOU
        </p>

        <h2
          className="
            text-[36px]
            leading-[44px]
            font-semibold
            text-[#1f1f1f]
            mb-6
          "
        >
          Brand Promotions
        </h2>

        <p
          className="
            text-[16px]
            leading-[28px]
            text-[#4a4a4a]
            mb-10
          "
        >
          Gifting entertainment is a fun way to push your brand’s message.
          And the ways you can use vouchers are endless. For example,
          upselling celebrity-endorsed products timed with a movie release.
        </p>

        <button
          className="
            w-max
            border
            border-[#dc3558]
            text-[#dc3558]
            px-8
            py-3
            text-[14px]
            font-semibold
            rounded-md
            hover:bg-[#dc3558]
            hover:text-white
            transition
          "
        >
          Promote your brand
        </button>
      </div>

      {/* RIGHT IMAGE – FULL COVER */}
      <div className="w-full h-full">
        <img
          src={brandPromotionImage}
          alt="Brand Promotion"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>
    </div>
  </div>
        </section>
      </section>
    </section>
  </section>
</section>


</section>

    


  )
}

export default Corporates
