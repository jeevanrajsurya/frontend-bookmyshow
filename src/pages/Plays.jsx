import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

/* =================  IMAGES ================= */
import pe1 from "../assets/pe1.avif"
import pe2 from "../assets/pe2.avif"
import pe3 from "../assets/pe3.avif"
import pe4 from "../assets/pe4.avif"
import pe5 from "../assets/pe5.avif"
import pe6 from "../assets/pe6.avif"
import pe7 from "../assets/pe7.avif"
import pe8 from "../assets/pe8.avif"
import pe9 from "../assets/pe9.avif"
import pe10 from "../assets/pe10.avif"
import l1 from "../assets/l1.avif"
import l2 from "../assets/l2.avif"
import l3 from "../assets/l3.avif"
import l4 from "../assets/l4.avif"
import l5 from "../assets/l5.avif"
import l6 from "../assets/l6.avif"
import l7 from "../assets/l7.avif"
import l8 from "../assets/l8.avif"

//AOS ANIMATION
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"



const eventImages = [pe1, pe2, pe3, pe4, pe5, pe6, pe7, pe8, pe9, pe10 , l1, l2, l3, l4, l5, l6, l7, l8]

/* =================  DATA ================= */
const events = Array.from({ length: 1 }).map((_, i) => ({
  id: i + 1,
  title: "Speed Friending",
  venue: "NICE Ground: Bengaluru",
  category: "Concerts",
  price: "₹ 5999 onwards",
  image: eventImages[i % eventImages.length], 
}))

/* ================= FILTER OPTIONS ================= */
const filtersConfig = {
  Date: ["Today", "Tomorrow", "This Weekend"],
  Languages: [
    "Marathi"
  ],
  Categories: [
   "Theatre"
  ],

  Genere: ["Drama"],

  "More Filters": [
    "Outdoor Events","Fast Filling","Must Attend",
    "Unmissable Events","Kids Allowed","Fund Raising",
    "Kids Activities","New Year Parties",
  ],
  Price: ["Free","0 - 500","501 - 2000","Above 2000"],
}

function Plays() {

    useEffect(() => {
    AOS.init({
    duration: 800,   
    once: true,      
    easing: "ease-out-cubic",
  })
}, [])

  const [openSections, setOpenSections] = useState({
    Date: true,
    Languages: false,
    Categories: false,
    Genere:false,
    "More Filters": false,
    Price: false,
  })

  const [selected, setSelected] = useState({})

  const toggleSection = (section) => {
    setOpenSections((p) => ({ ...p, [section]: !p[section] }))
  }

  const toggleOption = (section, option) => {
    setSelected((p) => {
      const arr = p[section] || []
      return {
        ...p,
        [section]: arr.includes(option)
          ? arr.filter((x) => x !== option)
          : [...arr, option],
      }
    })
  }

  const clearSection = (section) => {
    setSelected((p) => ({ ...p, [section]: [] }))
  }

  return (
    <section className="bg-[#F5F7FA] min-h-screen py-[20px] sm:py-[60px]">
      <div className="max-w-7xl mx-auto px-4 flex gap-10">

        {/* ================= LEFT FILTERS ================= */}
        <aside className="w-[360px] lg:w-[300px]  hidden lg:block">
          <h2 className="text-[24px] font-bold leading-[30px] text-[#333333] mb-6">
            Filters
          </h2>

          {/* DATE */}
          <div className="bg-white rounded-sm mb-3 p-4 text-[14px] leading-[1.43] bg-transparent  font-normal text-[#333333]">
            <Header
              title="Date"
              open={openSections.Date}
              onToggle={() => toggleSection("Date")}
              onClear={() => clearSection("Date")}
            />

            {openSections.Date && (
              <>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {["Today", "Tomorrow"].map((d) => (
                    <FilterChip
                      key={d}
                      active={selected.Date?.includes(d)}
                      onClick={() => toggleOption("Date", d)}
                    >
                      {d}
                    </FilterChip>
                  ))}
                </div>

                <div className="mt-2">
                  <FilterChip
                    active={selected.Date?.includes("This Weekend")}
                    onClick={() => toggleOption("Date", "This Weekend")}
                  >
                    This Weekend
                  </FilterChip>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm">
                  <input type="checkbox" />
                  <span>Date Range</span>
                </div>
              </>
            )}
          </div>

          {/* OTHER FILTERS */}
          {["Languages", "Categories","Genere", "More Filters", "Price"].map(
            (section) => (
              <div
                key={section}
                className="bg-white rounded-sm mb-3 p-4 text-[14px] leading-[1.43] bg-transparent  font-medium text-[#333333]"
              >
                <Header
                  title={section}
                  open={openSections[section]}
                  onToggle={() => toggleSection(section)}
                  onClear={() => clearSection(section)}
                />

                {openSections[section] && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {filtersConfig[section].map((opt) => (
                      <FilterChip
                        key={opt}
                        active={selected[section]?.includes(opt)}
                        onClick={() => toggleOption(section, opt)}
                      >
                        {opt}
                      </FilterChip>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          <button className="w-full border text-[14px] font-medium border-[#dc3558] text-[#dc3558] py-2 rounded">
            Browse by Venues
          </button>
        </aside>

        {/* ================= RIGHT EVENTS ================= */}
        <div className="flex-1">
          <h1 className="text-[24px] font-bold leading-[30px] text-[#333333] mb-6">
            Plays in Coimbatore
          </h1>

         {/*  CATEGORY CHIPS – WRAP FIXED */}
<div
  className="
    flex flex-wrap
    items-center
    gap-2
    mb-8
  "
>
  {filtersConfig.Categories.map((cat) => (
    <button
      key={cat}
      className="
        px-4 py-2
        font-['Roboto']
        border border-gray-300
        rounded-full
        text-[12px]
        font-normal
        text-[#dc354b]
        leading-[16px]
        bg-white
        transition-colors
        duration-200
        whitespace-nowrap
      "
    >
      {cat}
    </button>
  ))}
</div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 ">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
      
            {/* ================= BREADCRUMB  ================= */}
          <section className="w-full bg-white mt-8">
            <div className="max-w-6xl mx-auto px-6 py-3">
              <p className="text-left  text-[12px] font-medium leading-[20px] tracking-[0.1px] normal-case ">
                Home <span className="mx-1">→</span> Plays
              </p>
            </div>
          </section>
      {/* ================= EVENTS DESCRIPTION  ================= */}

<section className="w-full bg-[#F5F7FA]">
  <div className="max-w-6xl mx-auto px-6 pt-2 text-[#666666]">

    {/* TITLE */}
    <h2 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      Find The Latest and Best Events in Coimbatore Today!
    </h2>

    {/* PARA */}
    <p className="p-0  text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      If lounging on a sofa with a bowl of popcorn has become your daily ritual,
      you can jazz it up with some live events! Gone are the days when movies were
      the only source of real entertainment. Now you can take a break from the
      constant screen time to indulge in some live entertainment near you with
      the tap of a button. Find a curated list of upcoming events in{" "}
      <span className="font-semibold text-[#333]">Coimbatore</span> so that you
      can spot the right event for that perfect weekend.
    </p>

    {/* SUB TITLE */}
    <h3 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      How to book an event online?
    </h3>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      BookMyShow offers a simple, yet seamless experience for browsing, sorting,
      and booking handpicked events. Just click on the upcoming events of your
      choice, make the payment through one of the many payment gateways, and
      you’re good to go!<br/>
      Consider BookMyShow as a one-stop-shop for all your live entertainment
      cravings. You have an option to filter the latest events according to
      category so you can find the same in the favourite category. You can also
      filter the genre so you can experience comedy, music, action and more.
    </p>
    
     <h3 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      How to book an event online?
    </h3>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      BookMyShow offers a simple, yet seamless experience for browsing, sorting,
      and booking handpicked events. Just click on the upcoming events of your
      choice, make the payment through one of the many payment gateways, and
      you’re good to go!.Consider BookMyShow as a one-stop-shop for all your live entertainment
      cravings. You have an option to filter the latest events according to
      category so you can find the same in the favourite category. You can also
      filter the genre so you can experience comedy, music, action and more.
    </p>
    

    {/* CATEGORY TITLE */}
    <h3 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      Top 3 Events Categories
    </h3>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      <span className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">Comedy events</span> – If you
      like to tickle your funny bone, comic relief can be your go-to option. Find
      the latest{" "}
      <span className="text-[#dc3558]">comedy events</span> by some of
      Coimbatore’s best comedians.
    </p>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      <span className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">Music shows</span> – Looking
      for a way to unwind from the post-work blues?{" "}
      <span className="text-[#dc3558]">Music shows</span> might do the trick!
      Experience handpicked gigs and concerts.
    </p>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      <span className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
        Performance / workshops
      </span>{" "}
      – For those who want something more hands-on, you can book tickets to a
      live performance or{" "}
      <span className="text-[#dc3558]">workshop</span>.
    </p>

    {/* SECTION TITLE */}
    <h3 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      A hassle-free live events experience
    </h3>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      Our{" "}
      <span className="text-[#dc3558]">online streaming events</span> in 2026 are
      carefully organized. This digital spin on events lets you experience all
      the good stuff through your laptop or smartphone.
    </p>

    {/* FINAL CTA */}
    <h3 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
      Get Tickets to the Latest Events in Your Coimbatore
    </h3>

    <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
      Wait no more! Find the next event in Coimbatore and book your tickets now! Consider BookMyShow as a one-stop-shop for all your live entertainment
      cravings. You have an option to filter the latest events according to
      category so you can find the same in the favourite category. You can also
      filter the genre so you can experience comedy, music, action and more.
      You have an option to filter the latest events according to
      category so you can find the same in the favourite category. You can also
      filter the genre so you can experience comedy, music, action and more.
    </p>

  </div>
</section>

    </section>
  )
}

/* ================= SMALL COMPONENTS ================= */
function Header({ title, open, onToggle, onClear }) {
  return (
    <div className="flex justify-between items-center">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onToggle}
      >
        {/* ARROW ICON */}
        {open ? <FiChevronUp /> : <FiChevronDown />}

        {/* TITLE TEXT */}
        <span
          className={`
            text-[14px] font-normal leading-[1.43]
            ${open ? "text-[#dc3558]" : "text-black"}
          `}
        >
          {title}
        </span>
      </div>

      {/* CLEAR */}
      <span
        className="text-[12px] text-[#666666] font-normal cursor-pointer"
        onClick={onClear}
      >
        Clear
      </span>
    </div>
  )
}

function FilterChip({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1 border rounded
        break-words font-['Roboto'] text-[14px] font-normal leading-[1.43]
        ${
          active
            ? "bg-[#dc3558] text-white border-[#dc3558]"
            : "text-[#dc3558] border-gray-300"
        }
      `}
    >
      {children}
    </button>
  )
}

/* ================= EVENT CARD ================= */
function EventCard({ event }) {
    
    return (
    <div data-aos="fade-up">
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 text-[15px] sm:text-[16px] lg:text-[18px] font-medium">
        {event.title}
      </h3>

      <p className="text-13px sm:text-[14px] text-[#666] line-clamp-2">{event.venue}</p>
      <p className="text-13px sm:text-[14px] text-[#666] line-clamp-2">{event.category}</p>
      <p className="text-13px sm:text-[14px] text-[#666] line-clamp-2">{event.price}</p>
    </div>
  )
}




export default Plays
