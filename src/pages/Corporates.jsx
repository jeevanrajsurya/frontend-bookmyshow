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
import employeeEngagementImage3 from "../assets/your-image-name3.avif"
import employeeEngagementImage4 from "../assets/your-image-name4.avif"
import employeeEngagementImage5 from "../assets/your-image-name5.avif"

import creativeIcon from "../assets/creative-support.avif"
import marketingIcon from "../assets/marketing-email.avif"
import smsIcon from "../assets/bulk-sms.avif"

import movieVoucherBg from "../assets/movie-voucher-bg.avif"
import giftVoucherBg from "../assets/gift-voucher-bg.avif"





function Corporates() {
  return (
  <section className="w-full bg-white overflow-x-hidden">


     {/* ================= HERO ================= */}
<div
  className="
    relative
    w-full
    h-[420px]
    sm:h-[460px]
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
        flex-col
        lg:flex-row
        items-center
        justify-center
        lg:justify-between
        gap-8
      "
    >

      {/* LEFT CONTENT */}
      <div
        className="
          text-white
          max-w-[520px]
          text-center
          lg:text-left
        "
      >
        <h1 className="text-[26px] sm:text-[30px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[44px]">
          Entertainment you can gift.
        </h1>

        <p className="mt-4 text-[14px] sm:text-[16px] lg:text-[20px] leading-[22px] sm:leading-[26px] lg:leading-[30px] text-white/90">
          A variety of solutions to skyrocket your business with vouchers,
          promotions, loyalty, employee recognition & rewards.
        </p>

        <div className="mt-6 flex items-center justify-center lg:justify-start gap-6 text-[14px] sm:text-[16px] lg:text-[20px] font-medium">
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

      {/* RIGHT FORM (DESKTOP ONLY) */}
      <div
        className="
          hidden
          lg:block
          bg-white
          w-full
          max-w-[380px]
          rounded-lg
          p-6
          shadow-lg
          font-['Roboto']
        "
      >
        <form className="flex flex-col gap-4">

          <div>
            <label className="text-[12px] text-[#333]">
              <span className="text-red-500">*</span> Full Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
            />
          </div>

          <div>
            <label className="text-[12px] text-[#333]">
              <span className="text-red-500">*</span> Company Email
            </label>
            <input
              type="email"
              placeholder="Company Email"
              className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
            />
          </div>

          <div>
            <label className="text-[12px] text-[#333]">
              <span className="text-red-500">*</span> Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="mt-1 w-full border border-gray-400 rounded-md px-3 py-2 text-[14px] outline-none"
            />
          </div>

          <div>
            <label className="text-[12px] text-[#333]">
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
          src={employeeEngagementImage3}
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
          src={employeeEngagementImage4}   
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
          src={employeeEngagementImage5}
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
  {/* ================= BUSINESS SOLUTIONS ================= */}
<section className="w-full bg-[#f2f2f2] py-2 ">
  <div className="max-w-[1200px] bg-white mx-auto  py-7">

    <h2 className="text-[16px] tracking-[2px] pl-10 text-[#222] font-bold mb-6 pt-5 ">
      OUR SUITE OF BUSINESS SOLUTIONS:
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3">

      {/* CARD 1 */}
      <div className="relative bg-[#6fb96f] h-[360px] px-10 flex items-center overflow-hidden">
        <img
          src={creativeIcon}
          className="absolute right-6 bottom-6 w-[220px] opacity-20"
        />
        <h3 className="relative text-white text-[32px] leading-[40px] font-semibold max-w-[260px]">
          End-to-End Creative Support
        </h3>
      </div>

      {/* CARD 2 */}
      <div className="relative bg-[#d64550] h-[360px] px-10 flex items-center overflow-hidden">
        <img
          src={marketingIcon}
          className="absolute right-6 bottom-6 w-[220px] opacity-20"
        />
        <h3 className="relative text-white text-[32px] leading-[40px] font-semibold max-w-[260px]">
          Marketing & E-mail Guidance
        </h3>
      </div>

      {/* CARD 3 */}
      <div className="relative bg-[#f6d04d] h-[360px] px-10 flex items-center overflow-hidden">
        <img
          src={smsIcon}
          className="absolute right-6 bottom-6 w-[220px] opacity-20"
        />
        <h3 className="relative text-white text-[32px] leading-[40px] font-semibold max-w-[260px]">
          Bulk SMS Communication
        </h3>
      </div>

    </div>
  </div>
</section>
{/* ================= CTA STRIP ================= */}
<section className="w-full bg-[#f2f2f2] ">
  <div
    className="
      max-w-[1200px]
      mx-auto
      bg-white
      px-10
      py-8
      flex
      items-center
      justify-between
      gap-6
    "
  >
    {/* LEFT TEXT */}
    <p
      className="
        text-[18px]
        leading-[28px]
        text-[#1f1f1f]
        font-normal
      "
    >
      Get priority support from the experts in the entertainment industry.
    </p>

    {/* RIGHT BUTTON */}
    <button
      className="
        bg-[#e15b64]
        text-white
        text-[16px]
        font-semibold
        px-8
        py-3
        rounded-md
        hover:bg-[#d84f58]
        transition
        whitespace-nowrap
      "
    >
      Access the complete suite
    </button>
  </div>
  {/* ================= OUR PRODUCTS ================= */}
<section className="w-full bg-[#f2f2f2] py-2">
  <div className="max-w-[1200px] bg-white mx-auto">

    {/* HEADING */}
    <h2
      className="
        text-[14px]
        tracking-[2px]
        text-[#222]
        font-semibold
        mb-8
        pt-5
        pl-5
      "
    >
      OUR PRODUCTS
    </h2>

    {/* PRODUCTS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">

      {/* LEFT – MOVIE VOUCHERS */}
      <div
        className="
          relative
          min-h-[420px]
          text-white
          px-12
          py-14
          flex
          flex-col
          justify-between
        "
        style={{
          backgroundImage: `url(${movieVoucherBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY (to keep text readable) */}
        <div className="absolute inset-0 bg-[#c7353a]/90"></div>

        <div className="relative z-10 max-w-[420px]">
          <h3 className="text-[34px] leading-[42px] font-semibold mb-6">
            Movie Vouchers
          </h3>

          <p className="text-[16px] leading-[28px] font-normal mb-4">
            Highly customizable, single usage, promotional codes in the form
            of set amount / value or a percentage of discount on the ticket cost.
          </p>

          <p className="text-[16px] leading-[28px] font-normal mb-10">
            An ideal suit for movie and product promotions, consumer activation
            and countless more!
          </p>

          <button
            className="
              bg-white
              text-[#e15b64]
              text-[14px]
              font-semibold
              px-8
              py-3
              rounded-md
              hover:bg-[#f5f5f5]
              transition
            "
          >
            Enquire
          </button>
        </div>
      </div>

      {/* RIGHT – GIFT VOUCHERS */}
      <div
        className="
          relative
          min-h-[420px]
          text-white
          px-12
          py-14
          flex
          flex-col
          justify-between
        "
        style={{
          backgroundImage: `url(${giftVoucherBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#3e3a45]/95"></div>

        <div className="relative z-10 max-w-[420px]">
          <h3 className="text-[34px] leading-[42px] font-semibold mb-6">
            Gift Vouchers
          </h3>

          <p className="text-[16px] leading-[28px] font-normal mb-10">
            Amazing little pre-loaded cash cards which can be used to purchase
            tickets across all categories for 6 months. Be it employee rewards,
            trade channel incentive or consumer engagement, a gift voucher fits all.
          </p>

          <button
            className="
              bg-white
              text-[#e15b64]
              text-[14px]
              font-semibold
              px-8
              py-3
              rounded-md
              hover:bg-[#f5f5f5]
              transition
            "
          >
            Enquire
          </button>
        </div>
      </div>

    </div>
  </div>
              </section>
          </section>
        </section>
      </section>
    </section>
  </section>
</section>


</section>

    


  )
}

export default Corporates
