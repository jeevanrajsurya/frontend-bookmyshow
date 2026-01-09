import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

/* ================= EVENT IMAGES ================= */
import e1 from "../assets/e1.avif"
import e2 from "../assets/e2.avif"
import e3 from "../assets/e3.avif"
import e4 from "../assets/e4.avif"

const eventImages = [e1, e2, e3, e4, e1, e2, e3, e4]

/* ================= EVENT DATA ================= */
const events = eventImages.map((img, i) => ({
  id: i + 1,
  title: `Event Title ${i + 1}`,
  venue: "Venue Name",
  category: "Category",
  price: "₹ 399 onwards",
  image: img,
}))

/* ================= FILTER OPTIONS ================= */
const filtersConfig = {
  Date: ["Today", "Tomorrow", "This Weekend"],
  Languages: [
    "English","Hindi","Tamil","Kannada","Bengali",
    "Malayalam","Telugu","Marathi","Korean","Multi Language",
  ],
  Categories: [
    "Music Shows","Workshops","Meetups","Comedy Shows",
    "Conferences","Kids","Performances","Exhibitions",
  ],
  "More Filters": [
    "Outdoor Events","Fast Filling","Must Attend",
    "Unmissable Events","Kids Allowed","Fund Raising",
    "Kids Activities","New Year Parties",
  ],
  Price: ["Free","0 - 500","501 - 2000","Above 2000"],
}

function Events() {
  const [openSections, setOpenSections] = useState({
    Date: true,
    Languages: false,
    Categories: false,
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
    <section className="bg-[#F5F7FA] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 flex gap-8">

        {/* ================= LEFT FILTERS ================= */}
        <aside className="w-[360px] hidden lg:block">
          <h2 className="text-[24px] font-['Roboto'] font-bold leading-[30px] text-[#333333] capitalize mb-4">Filters</h2>

          {/* DATE */}
          <div className="bg-white rounded-md mb-4 p-4 text-[14px] font-normal leading-[1.43] bg-transparent text-[#333333]">
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
                    onClick={() =>
                      toggleOption("Date", "This Weekend")
                    }
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
          {["Languages", "Categories", "More Filters", "Price"].map(
            (section) => (
              <div
                key={section}
                className="bg-white rounded-md mb-4 p-4 text-[14px] font-normal leading-[1.43] bg-transparent text-[#333333]"
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
                        onClick={() =>
                          toggleOption(section, opt)
                        }
                      >
                        {opt}
                      </FilterChip>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          <button className="w-full border leading-[20px] text-[14px] font-normal border-[#dc3558] text-[#dc3558] py-2 rounded">
            Browse by Venues
          </button>
        </aside>

        {/* ================= RIGHT EVENTS ================= */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">
            Events in Coimbatore
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {filtersConfig.Categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1 border rounded-full text-sm text-[#dc3558]"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
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
        {open ? <FiChevronUp /> : <FiChevronDown />}
        <span className="font-medium text-[#dc3558]">
          {title}
        </span>
      </div>
      <span
        className="text-sm text-gray-400 cursor-pointer"
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
        px-3 py-1 text-sm border rounded
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
    <div>
      <div className="aspect-[20/33] rounded-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-2 text-[16px] font-medium">
        {event.title}
      </h3>

      <p className="text-sm text-gray-500">{event.venue}</p>
      <p className="text-sm text-gray-500">{event.category}</p>
      <p className="text-sm font-medium mt-1">{event.price}</p>
    </div>
  )
}

export default Events
