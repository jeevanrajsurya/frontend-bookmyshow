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
            <div className="flex">
              <button
                onClick={() => setActiveTab("egift")}
                className={`px-10 py-[15px] border border-[#cccccc]
                text-[12px] leading-[16px] tracking-[0.2px] uppercase
                ${activeTab === "egift"
                  ? "bg-white text-black"
                  : "bg-[#f5f5f5] text-[#999999]"}`}
              >
                E-GIFT CARDS
              </button>

              <button
                onClick={() => setActiveTab("physical")}
                className={`px-10 py-[15px] border border-[#cccccc]
                text-[12px] leading-[16px] tracking-[0.2px] uppercase
                ${activeTab === "physical"
                  ? "bg-white text-black"
                  : "bg-[#f5f5f5] text-[#999999]"}`}
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
                <div className="py-6">

                  <h2 className="text-center text-[18px] font-normal leading-[28px] text-[#666666] mb-6">
                    Pick a card from one of our themes
                  </h2>

                  <div className="flex justify-center gap-4 flex-wrap mb-10">
                    {["All", "Entertaining Gifts", "Bestie Gifts", "Made with Love"].map(btn => (
                      <button
                        key={btn}
                        className="px-4 py-2 rounded-[16px] text-[12px]
                        border border-[#cccccc]
                        leading-[16px] tracking-[0.2px]
                        text-[#666666]
                        hover:bg-[#e2565a] hover:text-white hover:border-[#e2565a]
                        transition"
                      >
                        {btn}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-between">
                    {giftCardsData.map((item, index) => (
                      <div
                        key={item.id}
                        data-aos="zoom-in"
                        data-aos-delay={(index % 4) * 100}
                        className="w-[calc(25%-18px)] mb-6 rounded-[12px]
                        overflow-hidden cursor-pointer
                        shadow-[0px_1px_5px_rgba(0,0,0,0.25)]
                        hover:shadow-[0px_6px_16px_rgba(0,0,0,0.3)]
                        transition"
                      >
                        <img src={item.image} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {/* ================= PHYSICAL ================= */}
              {activeTab === "physical" && (
                <div className="p-[16px]">

                  <h2 className="text-center text-[18px] mb-6">
                    INTRODUCING PHYSICAL GIFT CARDS
                  </h2>

                  <p className="max-w-[900px] mx-auto text-center text-[12px] text-[#666666]">
                    Gift your loved ones a range of experiences from movies to events,
                    plays, concerts and sports with a BookMyShow gift card.
                    <br />
                    BookMyShow Gift Cards are now available across India.
                  </p>

                  <p className="text-center mt-6 mb-5">
                    Available at stores near you
                  </p>

                  <div className="flex justify-between max-w-[1100px] mx-auto mb-16">
                    <img src={relianceLogo} className="h-[50px]" />
                    <img src={cromaLogo} className="h-[55px]" />
                    <img src={jioLogo} className="h-[50px]" />
                    <img src={ezoneLogo} className="h-[50px]" />
                    <img src={zeevinLogo} className="h-[55px]" />
                  </div>

                  <p className="text-center mb-6">Or order online from</p>

                  <div className="flex justify-center gap-32 mb-10">
                    <img src={snapdealLogo} className="h-[38px]" />
                    <img src={amazonLogo} className="h-[38px]" />
                  </div>

                  <div className="flex justify-center gap-40 items-center pt-10 pb-5">
                    <img src={physicalGiftImg} className="max-w-[420px]" />

                    <div>
                      <div className="flex font-normal text-[14px] gap-4 mb-6 text-[#666666] leading-[25px]">
                        <FiCreditCard className="text-[28px] text-[#6666] " />
                        <p >As easy as paying cash</p>
                      </div>

                      <div className="flex gap-4 font-normal text-[14px] text-[#666666] leading-[25px] ">
                        <HiOutlineDevicePhoneMobile className="text-[28px] text-[#6666]" />
                        <p className="max-w-[360px]">
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
          <div className="max-w-[1280px] mx-auto flex justify-center gap-16 text-[#e2565a]">
            <span>Terms & Conditions</span>
            <span>Need Help?</span>
            <span>Check Gift Card Balance</span>
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
