import { FiSearch, FiCreditCard } from "react-icons/fi"
import { BsWallet2 } from "react-icons/bs"
import { HiOutlineTicket } from "react-icons/hi2"
import { MdOutlinePayments } from "react-icons/md"
import { RiBankCardLine } from "react-icons/ri"
import { TbDiscountOff } from "react-icons/tb"
import { FiSmartphone, FiMonitor } from "react-icons/fi"

// assets (same 5 images repeated)
import offer1 from "../assets/offer1.avif"
import offer2 from "../assets/offer2.avif"
import offer3 from "../assets/offer3.avif"
import offer4 from "../assets/offer4.avif"
import offer5 from "../assets/offer5.avif"

const offerImages = [offer1, offer2, offer3, offer4, offer5]

// create 100 cards using 5 images
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
        <div className="pt-6">
          <div className="relative w-full max-w-[350px]">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666] text-[15px]" />
            <input
              type="text"
              placeholder="Search for Offers by Name or Bank"
              className="
                w-full
                h-[42px]
                pl-[34px]
                pr-3
                border
                border-[#cccccc]
                rounded-[4px]
                text-[#333333]
                text-sm
                font-['roboto']
                font-normal
                outline-none
              "
            />
          </div>
        </div>

        {/* ================= FILTER OFFERS BY ================= */}
        <div className="mt-[10px] text-center">
          <p className="tracking-[5px] mb-4 text-[18px] leading-[28px] text-gray-500 font-normal">
            FILTER OFFERS BY
          </p>

          {/* Icons row */}
          <div className="mt-[16px] flex justify-center gap-6 flex-wrap">

           {/* Credit Card */}
          <div className="flex flex-col items-center gap-3 group cursor-pointer">

            {/* Icon Box */}
         <div
         className="
            w-[64px] h-[64px]
            border border-[#cccccc]
            rounded-xl
            flex items-center justify-center
            transition-all duration-200
            group-hover:bg-[#e2565a]
            group-hover:border-[#e2565a]
          "
          >
        <FiCreditCard className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
        </div>

         {/* Text */}
        <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
        Credit Card
        </span>

        </div>

           {/* Debit Card */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <RiBankCardLine className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    Debit Card
  </span>

</div>


            {/* BookMyShow */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <HiOutlineTicket className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    BookMyShow
  </span>

</div>

{/* Wallet */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <BsWallet2 className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    Wallet
  </span>

</div>


           {/* Rewards */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <TbDiscountOff className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    Rewards
  </span>

</div>


           {/* UPI */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <MdOutlinePayments className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    UPI
  </span>

</div>

           {/* Pay Later */}
<div className="flex flex-col items-center gap-3 group cursor-pointer">

  {/* Icon Box */}
  <div
    className="
      w-[64px] h-[64px]
      border border-[#cccccc]
      rounded-xl
      flex items-center justify-center
      transition-all duration-200
      group-hover:bg-[#e2565a]
      group-hover:border-[#e2565a]
    "
  >
    <TbDiscountOff className="text-2xl text-gray-700 transition-all duration-200 group-hover:text-white" />
  </div>

  {/* Text */}
  <span className="text-[12px] font-normal font-['Roboto'] leading-[16px] text-gray-600 transition-all duration-200 group-hover:text-[#e2565a]">
    Pay Later
  </span>
</div>
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

          /* 🔥 AOS ZOOM-IN */
          data-aos="zoom-in"
          data-aos-delay={index % 5 * 50}

          className="
            group relative
            w-[calc(20%-16px)]
            m-2
            bg-white
            rounded
            shadow-[0px_1px_5px_rgba(0,0,0,0.35)]
            overflow-hidden
            cursor-pointer
            min-h-[420px]
          "
        >
          {/* Image */}
          <div className="h-[260px] w-full overflow-hidden relative">
            <img
              src={item.image}
              alt="offer"
              className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
            />

            {/* ===== HOVER OVERLAY ===== */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white px-4 text-center">
              
              <p className="text-sm font-semibold mb-3 uppercase">
                ABOUT OFFER
              </p>

              <p className="text-[13px] leading-[18px] mb-4">
                Get 10% discount upto INR 1000/- on all live event tickets using HSBC Credit Cards
              </p>

              <p className="text-[11px] mb-3 uppercase opacity-80">
                AVAILABLE FOR
              </p>

              <div className="flex gap-4">
                <div className="w-9 h-9 border border-white rounded-full flex items-center justify-center">
                  <FiSmartphone className="text-lg" />
                </div>
                <div className="w-9 h-9 border border-white rounded-full flex items-center justify-center">
                  <FiMonitor className="text-lg" />
                </div>
              </div>

            </div>
            {/* ===== END OVERLAY ===== */}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-2 flex-1">
            <h3 className="py-5 text-gray-900 tracking-[0.3px] text-[#333333] text-sm font-normal leading-[20px]">
              {item.title}
            </h3>

            <span className="py-3 inline-block w-fit px-2 py-[2px] text-[11px] bg-gray-100 text-gray-600 rounded">
              {item.tag}
            </span>

            <p className="text-[12px] text-gray-500 mt-auto">
              {item.valid}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
{/* ================= OFFERS INFO CONTENT ================= */}
<div className="w-full bg-white ">

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
    <p className="text-[12px] mb-2 font-normal  text-[#666666]">
      Home → Offers
    </p>

  </div>
</div>
{/* ================= PRIVACY NOTE ================= */}
<div className="w-full bg-[#f5f6f7] py-3 mb-2 ">

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
    
  )
}

export default Offers
