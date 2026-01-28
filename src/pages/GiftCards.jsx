import { useState, useEffect } from "react"

import gift1 from "../assets/gift1.avif"
import gift2 from "../assets/gift2.avif"
import gift3 from "../assets/gift3.avif"
import gift4 from "../assets/gift4.avif"

// ================= PHYSICAL STORE LOGOS =================
import relianceLogo from "../assets/reliance.avif"
import cromaLogo from "../assets/croma.avif"
import jioLogo from "../assets/jio.avif"
import ezoneLogo from "../assets/ezone.avif"
import zeevinLogo from "../assets/zeevin.avif"
import snapdealLogo from "../assets/snapdeal.avif"
import amazonLogo from "../assets/amazon.avif"

// ===== RIGHT SIDE IMAGE =====
import physicalGiftImg from "../assets/physical-gift.avif"

// ===== ICONS =====
import { FiCreditCard } from "react-icons/fi"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

const giftImages = [gift1, gift2, gift3, gift4]

const giftCardsData = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  image: giftImages[i % 4],
}))

function GiftCards() {
  const [activeTab, setActiveTab] = useState("egift")

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <>
      {/* ================= FULL PAGE GREY BG ================= */}
      <div className="w-full bg-[#f5f5f5]">

        {/* ================= TOP CONTAINER ================= */}
        <div className="max-w-[1280px] mx-auto px-4 py-4">

          {/* ================= TABS ================= */}
         <div className="flex justify-center">
  <div
    className="
      flex
      w-full
      max-w-[420px]
      sm:w-auto
    "
  >
    <button
      onClick={() => setActiveTab("egift")}
      className={`
        flex-1
        sm:flex-none
        px-4
        sm:px-10
        py-3
        sm:py-[15px]
        border border-[#cccccc]
        text-[8px]
        sm:text-[12px]
        leading-[16px]
        tracking-[0.2px]
        uppercase
        ${
          activeTab === "egift"
            ? "bg-white text-black"
            : "bg-[#f5f5f5] text-[#999999]"
        }
      `}
    >
      E-GIFT CARDS
    </button>

    <button
      onClick={() => setActiveTab("physical")}
      className={`
        flex-1
        sm:flex-none
        px-4
        sm:px-10
        py-3
        sm:py-[15px]
        border border-l-0 sm:border-l border-[#cccccc]
        text-[8px]
        sm:text-[12px]
        leading-[16px]
        tracking-[0.2px]
        uppercase
        ${
          activeTab === "physical"
            ? "bg-white text-black"
            : "bg-[#f5f5f5] text-[#999999]"
        }
      `}
    >
      PHYSICAL GIFT CARDS
    </button>
  </div>
</div>

          {/* ================= WHITE CONTENT ================= */}
          <div className="w-full bg-white mt-4">
            <div className="max-w-[1280px] mx-auto px-4">

             {/* ================= E-GIFT ================= */}
{activeTab === "egift" && (
  <div className="py-4 sm:py-6">

    {/* Heading */}
    <h2
      className="
        text-center
        text-[14px]
        sm:text-[16px]
        lg:text-[18px]
        font-normal
        leading-[22px]
        sm:leading-[26px]
        lg:leading-[28px]
        text-[#666666]
        mb-4
        sm:mb-6
      "
    >
      Pick a card from one of our themes
    </h2>

    {/* Filter buttons */}
    <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-6 sm:mb-10 px-2">
      {["All", "Entertaining Gifts", "Bestie Gifts", "Made with Love"].map(
        (btn) => (
          <button
            key={btn}
            className="
              px-3
              sm:px-4
              py-1.5
              sm:py-2
              rounded-[14px]
              sm:rounded-[16px]
              text-[11px]
              sm:text-[12px]
              border border-[#cccccc]
              leading-[14px]
              sm:leading-[16px]
              tracking-[0.2px]
              text-[#666666]
              hover:bg-[#e2565a]
              hover:text-white
              hover:border-[#e2565a]
              transition
            "
          >
            {btn}
          </button>
        )
      )}
    </div>

    {/* Cards grid */}
    <div className="flex flex-wrap justify-between gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-6">
  {giftCardsData.map((item, index) => (
    <div
      key={item.id}
      data-aos="zoom-in"
      data-aos-delay={(index % 4) * 80}
      className="
        w-[calc(50%-8px)]     
        sm:w-[calc(33.333%-16px)] 
        lg:w-[calc(25%-18px)]   
        mb-0
        rounded-[10px]
        sm:rounded-[12px]
        overflow-hidden
        cursor-pointer
        shadow-[0px_1px_5px_rgba(0,0,0,0.25)]
        hover:shadow-[0px_6px_16px_rgba(0,0,0,0.3)]
        transition
      "
    >
      <img
        src={item.image}
        alt="gift card"
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


  </div>
)}

              {/* ================= PHYSICAL ================= */}
{activeTab === "physical" && (
  <div className="px-4 py-6 sm:px-6 lg:px-8">

    {/* Heading */}
    <h2
      className="
        text-center
        text-[16px]
        sm:text-[18px]
        font-medium
        mb-4
      "
    >
      INTRODUCING PHYSICAL GIFT CARDS
    </h2>

    {/* Description */}
    <p
      className="
        max-w-[900px]
        mx-auto
        text-center
        text-[11px]
        sm:text-[12px]
        text-[#666666]
        leading-[18px]
      "
    >
      Gift your loved ones a range of experiences from movies to events,
      plays, concerts and sports with a BookMyShow gift card.
      <br className="hidden sm:block" />
      BookMyShow Gift Cards are now available across India.
    </p>

    {/* Store text */}
    <p className="text-center mt-6 mb-4 text-[13px] text-[#666666]">
      Available at stores near you
    </p>

    {/* Offline stores */}
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-6
        sm:gap-10
        max-w-[1100px]
        mx-auto
        mb-12
      "
    >
      <img src={relianceLogo} className="h-[36px] sm:h-[45px]" />
      <img src={cromaLogo} className="h-[38px] sm:h-[50px]" />
      <img src={jioLogo} className="h-[36px] sm:h-[45px]" />
      <img src={ezoneLogo} className="h-[36px] sm:h-[45px]" />
      <img src={zeevinLogo} className="h-[38px] sm:h-[50px]" />
    </div>

    {/* Online text */}
    <p className="text-center mb-4 text-[13px] text-[#666666]">
      Or order online from
    </p>

    {/* Online stores */}
    <div
      className="
        flex
        justify-center
        gap-10
        sm:gap-20
        mb-12
      "
    >
      <img src={snapdealLogo} className="h-[30px] sm:h-[36px]" />
      <img src={amazonLogo} className="h-[30px] sm:h-[36px]" />
    </div>

    {/* Image + features */}
    <div
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        justify-center
        gap-8
        lg:gap-20
        pt-6
      "
    >
      {/* Image */}
      <img
        src={physicalGiftImg}
        className="
          w-full
          max-w-[260px]
          sm:max-w-[320px]
          lg:max-w-[420px]
        "
      />

      {/* Points */}
      <div className="flex flex-col gap-6">

        <div className="flex gap-4 items-center text-[#666666]">
          <FiCreditCard className="text-[22px] sm:text-[24px]" />
          <p className="text-[13px] sm:text-[14px]">
            As easy as paying cash
          </p>
        </div>

        <div className="flex gap-4 items-start text-[#666666]">
          <HiOutlineDevicePhoneMobile className="text-[58px] sm:text-[28px]" />
          <p className="text-[13px] sm:text-[14px] max-w-[360px]">
            Use it anytime, anywhere through the BookMyShow app or website.
          </p>
        </div>

      </div>
    </div>

  </div>
)}

            </div>
          </div>
        </div>

        {/* ================= COMMON FOOTER (BOTH TABS) ================= */}

        {/* FOOTER LINKS */}
       <div className="w-full bg-[#f5f5f5] py-5">
  <div
    className="
      max-w-[1280px]
      mx-auto
      flex
      flex-col
      sm:flex-row
      flex-wrap
      justify-center
      items-center
      gap-4
      sm:gap-10
      lg:gap-16
      text-[#e2565a]
      text-[13px]
      sm:text-[14px]
      font-medium
    "
  >
    <span className="cursor-pointer hover:underline">
      Terms & Conditions
    </span>

    <span className="cursor-pointer hover:underline">
      Need Help?
    </span>

    <span className="cursor-pointer hover:underline">
      Check Gift Card Balance
    </span>
  </div>
</div>


        {/* OFFERS INFO */}
        <div className="w-full bg-white">
          <div className="max-w-[1240px] mx-auto px-4">
              {/* Heading */}
    <h2 className="p-5 text-[#999999] text-[12px] font-medium leading-[16px] text-[#666666] text-center tracking-[0.2px]">
      A Plethora of Offers and Discounts at BookMyShow!
    </h2>

    {/* Intro paragraph */}
    <p className="max-w-[980px] text-[11px] font-medium leading-[16px] text-[#999999] text-left mb-14 tracking-[0.2px]">
      If you are searching for some <strong className="font-bold">discount offers </strong> on movie tickets, then BookMyShow is the place for you! Browse through our huge array of movie ticket offers and save big every time you book movies tickets with us. Discover these special offers on movie tickets, customized especially for you!
    </p>

    {/* 4 column content */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

      {/* Card offers */}
      <div>
        <h3 className="text-[12px] font-noraml text-[#666666] mb-3 leading-[16px] tracking-[0.2px]">
          Card offers
        </h3>
        <p className="text-[11px] font-medium leading-[16px] tracking-[0.2px] text-[#999999]">
          There is a gamut of credit and debit card offers provided by some of the leading banks in India like ICICI, RBL, Citi Bank, SBI, Axis Bank, HDFC, RBS, IndusInd, HDFC and many more. By availing one of these Debit or credit card offers, you can save massively on your movie tickets.
        </p>
      </div>

      {/* Wallet offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-3 leading-[16px] tracking-[0.2px]">
          Wallet and recharge offers
        </h3>
        <p className="text-[11px] font-medium leading-[16px] tracking-[0.2px] text-[#999999]">
          Wallets and online recharge providers also offer great discounts and deals on movie ticket booking. Using providers like Freecharge, MobiKwik, PayUmoney Payzapp, Ola Money, Pockets by ICICI, and Airtel Money while booking movie tickets on our platform, you can get instant cashback and discount.
        </p>
      </div>

      {/* Cinema Offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-3 leading-[16px] tracking-[0.2px]">
          Cinema Offers
        </h3>
        <p className="text-[11px] font-medium leading-[16px] tracking-[0.2px] text-[#999999]">
          Cinemas like PVR and Cinepolis runs some special offers on movies with BookMyShow. So, here is yet another reason why you should book your movie tickets with us!
        </p>
      </div>

      {/* Telecom Offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-3 leading-[16px] tracking-[0.2px]">
          Telecom Offers
        </h3>
        <p className="text-[11px] font-medium leading-[16px] tracking-[0.2px] text-[#999999]">
          We have some special offers for some selected Vodafone and Idea Users. If you are that lucky selected user, then you can get up to 50% off on your movie tickets. It can't get better than this! Right?
        </p>
      </div>

    </div>

    {/* Bottom note */}
    <p className="text-[11px] font-medium leading-[16px] tracking-[0.2px] text-[#999999] mb-8">
      BookMyShow offers are designed to delight you! Check them out now, there's bound to be one that suits you. Do remember to read Terms and Conditions before applying offer code, though!
    </p>

    {/* Breadcrumb */}
    <p className="text-[12px] mb-2 pb-4 font-normal  text-[#666666]">
      Home → Offers
    </p>
          </div>
        </div>

        {/* PRIVACY NOTE */}
        <div className="w-full bg-[#f5f6f7] py-3 mb-2">
          <div className="max-w-[1240px] mx-auto px-4">
             {/* Title */}
    <h3 className="text-[14px] font-medium leading-[20px] text-[#666666] mb-3">
      Privacy Note
    </h3>

    {/* Content */}
    <p className="text-[12px] font-normal leading-[18px] text-[#999999]">
      By using www.bookmyshow.com (our website), you are fully accepting the Privacy Policy available at{" "}
      <span className="text-[#dc354b] cursor-pointer">
        https://bookmyshow.com/privacy
      </span>{" "}
      governing your access to BookMyShow and provision of services by BookMyShow to you. If you do not accept
      terms mentioned in the{" "}
      <span className="text-[#dc354b] cursor-pointer">
        Privacy Policy
      </span>
      , you must not share any of your personal information and immediately exit BookMyShow.
    </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default GiftCards
