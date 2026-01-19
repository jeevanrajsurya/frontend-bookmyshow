import { FiSearch, FiCreditCard } from "react-icons/fi"
import { BsWallet2 } from "react-icons/bs"
import { HiOutlineTicket } from "react-icons/hi2"
import { MdOutlinePayments } from "react-icons/md"
import { RiBankCardLine } from "react-icons/ri"
import { TbDiscountOff } from "react-icons/tb"
import { FiSmartphone, FiMonitor } from "react-icons/fi"

// assets 
import offer1 from "../assets/offer1.avif"
import offer2 from "../assets/offer2.avif"
import offer3 from "../assets/offer3.avif"
import offer4 from "../assets/offer4.avif"
import offer5 from "../assets/offer5.avif"

const offerImages = [offer1, offer2, offer3, offer4, offer5]

//  images
const offersData = Array.from({ length: 92 }, (_, i) => ({
  id: i,
  image: offerImages[i % 5],
  title: "HSBC CREDIT CARDS - LIVE EVENTS OFFER",
  tag: "Processing fee applicable",
  valid: "Valid till 31 Mar 2026 11:59",
}))
//AOS ANIMATION
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function Offers() {
   useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    })
  }, [])

  return (
    <div className="w-full bg-white">
      {/* SAME wrapper as navbar */}
      <div className="max-w-[1280px] mx-auto px-4">

        {/* ================= SEARCH BAR ================= */}
       <div className="pt-4 sm:pt-6">
  <div
    className="
      relative
      w-full
      max-w-full
      sm:max-w-[350px]
    "
  >
    <FiSearch
      className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        text-[#666]
        text-[14px]
        sm:text-[15px]
      "
    />

    <input
      type="text"
      placeholder="Search for Offers by Name or Bank"
      className="
        w-full
        h-[38px]
        sm:h-[42px]
        pl-[32px]
        sm:pl-[34px]
        pr-3
        border
        border-[#cccccc]
        rounded-[4px]
        text-[#333333]
        text-[13px]
        sm:text-sm
        font-['Roboto']
        font-normal
        outline-none
      "
    />
  </div>
</div>


       {/* ================= FILTER OFFERS BY ================= */}
<div className="mt-[10px] text-center">
  <p
    className="
      tracking-[3px]
      sm:tracking-[5px]
      mb-4
      text-[14px]
      sm:text-[16px]
      lg:text-[18px]
      leading-[22px]
      sm:leading-[28px]
      text-gray-500
      font-normal
    "
  >
    FILTER OFFERS BY
  </p>

  {/* Icons row */}
  <div
    className="
      mt-[12px]
      flex
      justify-center
      gap-4
      sm:gap-6
      flex-wrap
    "
  >
    {[
      { icon: <FiCreditCard />, label: "Credit Card" },
      { icon: <RiBankCardLine />, label: "Debit Card" },
      { icon: <HiOutlineTicket />, label: "BookMyShow" },
      { icon: <BsWallet2 />, label: "Wallet" },
      { icon: <TbDiscountOff />, label: "Rewards" },
      { icon: <MdOutlinePayments />, label: "UPI" },
      { icon: <TbDiscountOff />, label: "Pay Later" },
    ].map((item) => (
      <div
        key={item.label}
        className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
      >
        {/* Icon Box */}
        <div
          className="
            w-[48px] h-[48px]
            sm:w-[56px] sm:h-[56px]
            lg:w-[64px] lg:h-[64px]
            border border-[#cccccc]
            rounded-lg
            sm:rounded-xl
            flex items-center justify-center
            transition-all duration-200
            group-hover:bg-[#e2565a]
            group-hover:border-[#e2565a]
          "
        >
          <span
            className="
              text-[18px]
              sm:text-[20px]
              lg:text-[24px]
              text-gray-700
              transition-all duration-200
              group-hover:text-white
            "
          >
            {item.icon}
          </span>
        </div>

        {/* Text */}
        <span
          className="
            text-[10px]
            sm:text-[11px]
            lg:text-[12px]
            font-normal
            font-['Roboto']
            leading-[14px]
            sm:leading-[16px]
            text-gray-600
            transition-all duration-200
            group-hover:text-[#e2565a]
            text-center
            max-w-[70px]
          "
        >
          {item.label}
        </span>
      </div>
    ))}
  </div>
</div>
    </div>
    
    {/* ================= OFFERS LIST ================= */}
<div className="w-full bg-[#f5f5f5] py-2 mt-5">
  
  {/* center container */}
  <div className="max-w-[1240px] mx-auto px-2">

    <div className="flex flex-wrap">
      {offersData.map((item, index) => (
        <div
          key={item.id}

          /* AOS ZOOM-IN */
          data-aos="zoom-in"
          data-aos-delay={(index % 5) * 50}

          className="
            group relative
            w-[calc(50%-16px)]         
            sm:w-[calc(50%-16px)]
            md:w-[calc(25%-16px)]       
            lg:w-[calc(20%-16px)]       
            m-2
            bg-white
            rounded
            shadow-[0px_1px_5px_rgba(0,0,0,0.35)]
            overflow-hidden
            cursor-pointer
            min-h-[340px]
            sm:min-h-[380px]
            lg:min-h-[420px]
          "
        >
          {/* Image */}
          <div className="h-[180px] sm:h-[230px] lg:h-[260px] w-full overflow-hidden relative">
            <img
              src={item.image}
              alt="offer"
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />

            {/* ===== HOVER OVERLAY ===== */}
            <div
              className="
                absolute inset-0
                bg-black/60
                opacity-0
                group-hover:opacity-100
                transition duration-300
                flex flex-col
                items-center
                justify-center
                text-white
                px-4
                text-center
              "
            >
              <p className="text-[11px] sm:text-sm font-semibold mb-2 uppercase">
                ABOUT OFFER
              </p>

              <p className="text-[11px] sm:text-[13px] leading-[16px] sm:leading-[18px] mb-4">
                Get 10% discount upto INR 1000/- on all live event tickets using HSBC Credit Cards
              </p>

              <p className="text-[10px] sm:text-[11px] mb-3 uppercase opacity-80">
                AVAILABLE FOR
              </p>

              <div className="flex gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white rounded-full flex items-center justify-center">
                  <FiSmartphone className="text-sm sm:text-lg" />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 border border-white rounded-full flex items-center justify-center">
                  <FiMonitor className="text-sm sm:text-lg" />
                </div>
              </div>
            </div>
          </div>
          
          {/* ===== END OVERLAY ===== */}

          {/* Content */}
          <div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
            <h3
              className="
                py-3
                sm:py-5
                text-[#333333]
                text-[12px]
                sm:text-sm
                font-normal
                leading-[18px]
                sm:leading-[20px]
              "
            >
              {item.title}
            </h3>

            <span className="inline-block w-fit px-2 py-[2px] text-[10px] sm:text-[11px] bg-gray-100 text-gray-600 rounded">
              {item.tag}
            </span>

            <p className="text-[11px] sm:text-[12px] text-gray-500 mt-auto">
              {item.valid}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>

{/* ================= OFFERS INFO CONTENT ================= */}
<div className="w-full bg-white">

  <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

    {/* Heading */}
    <h2
      className="
        py-4
        sm:py-5
        text-[#666666]
        text-[11px]
        sm:text-[12px]
        font-medium
        leading-[16px]
        text-center
        tracking-[0.2px]
      "
    >
      A Plethora of Offers and Discounts at BookMyShow!
    </h2>

    {/* Intro paragraph */}
    <p
      className="
        max-w-[980px]
        text-[11px]
        sm:text-[12px]
        font-medium
        leading-[16px]
        sm:leading-[18px]
        text-[#999999]
        text-left
        mb-8
        sm:mb-12
        tracking-[0.2px]
      "
    >
      If you are searching for some{" "}
      <strong className="font-bold">discount offers</strong> on movie tickets,
      then BookMyShow is the place for you! Browse through our huge array of
      movie ticket offers and save big every time you book movies tickets with us.
      Discover these special offers on movie tickets, customized especially for you!
    </p>

    {/* Content grid */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-6
        mb-8
        sm:mb-10
      "
    >
      {/* Card offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-2 leading-[16px] tracking-[0.2px]">
          Card offers
        </h3>
        <p className="text-[11px] leading-[16px] text-[#999999]">
          There is a gamut of credit and debit card offers provided by some of the
          leading banks in India like ICICI, RBL, Citi Bank, SBI, Axis Bank,
          HDFC and many more.
        </p>
      </div>

      {/* Wallet offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-2 leading-[16px] tracking-[0.2px]">
          Wallet and recharge offers
        </h3>
        <p className="text-[11px] leading-[16px] text-[#999999]">
          Wallets and online recharge providers offer great discounts on movie
          ticket booking using platforms like Freecharge, MobiKwik, Ola Money,
          Payzapp and more.
        </p>
      </div>

      {/* Cinema offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-2 leading-[16px] tracking-[0.2px]">
          Cinema Offers
        </h3>
        <p className="text-[11px] leading-[16px] text-[#999999]">
          Cinemas like PVR and Cinepolis run special offers on movies with
          BookMyShow. Yet another reason to book with us!
        </p>
      </div>

      {/* Telecom offers */}
      <div>
        <h3 className="text-[12px] font-normal text-[#666666] mb-2 leading-[16px] tracking-[0.2px]">
          Telecom Offers
        </h3>
        <p className="text-[11px] leading-[16px] text-[#999999]">
          Special offers for selected Vodafone and Idea users with up to 50% off
          on movie tickets.
        </p>
      </div>
    </div>

    {/* Bottom note */}
    <p
      className="
        text-[11px]
        sm:text-[12px]
        font-medium
        leading-[16px]
        tracking-[0.2px]
        text-[#999999]
        mb-6
        sm:mb-8
      "
    >
      BookMyShow offers are designed to delight you! Do remember to read
      Terms and Conditions before applying offer codes.
    </p>

    {/* Breadcrumb */}
    <p className="text-[12px] mb-2 font-normal text-[#666666]">
      Home → Offers
    </p>

  </div>
</div>

{/* ================= PRIVACY NOTE ================= */}
<div className="w-full bg-[#f5f6f7] py-3 sm:py-4 mb-2">

  <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

    {/* Title */}
    <h3
      className="
        text-[13px]
        sm:text-[14px]
        font-medium
        leading-[18px]
        sm:leading-[20px]
        text-[#666666]
        mb-2
        sm:mb-3
      "
    >
      Privacy Note
    </h3>

    {/* Content */}
    <p
      className="
        text-[11px]
        sm:text-[12px]
        font-normal
        leading-[16px]
        sm:leading-[18px]
        text-[#999999]
      "
    >
      By using www.bookmyshow.com (our website), you are fully accepting the
      Privacy Policy available at{" "}
      <span className="text-[#dc354b] cursor-pointer break-all sm:break-normal">
        https://bookmyshow.com/privacy
      </span>{" "}
      governing your access to BookMyShow and provision of services by BookMyShow
      to you. If you do not accept terms mentioned in the{" "}
      <span className="text-[#dc354b] cursor-pointer">
        Privacy Policy
      </span>
      , you must not share any of your personal information and immediately exit
      BookMyShow.
    </p>

  </div>
</div>
    </div>
    
  )
}

export default Offers
