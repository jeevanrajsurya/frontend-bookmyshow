function TrendingSearches() {
  const items = [
    "Jana Nayagan",
    "Sirai",
    "Avatar: Fire and Ash",
    "Dhurandhar",
    "Padayappa",
    "Sarvam Maya",
    "Parasakthi",
    "Kombuseevi"
  ]

  return (
    <section className="w-full bg-[#F5F6F7] pt-2 pb-5">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[24px] font-bold text-[#222] mb-8 font-['Roboto']">
          Trending Searches Right Now
        </h2>

        {/* BOXES */}
        <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-6">
          {items.map((item) => (
            <div
              key={item}
              className="
                bg-white
                border
                border-[#E5E5E5]
                rounded-md
                px-6
                py-4
                cursor-pointer
                inline-flex
                flex-col
                hover:shadow-sm
                transition
              "
            >
              {/* MOVIE NAME */}
              <p
                className="
                  mb-[2px]
                  font-['Roboto']
                  text-[16px]
                  font-medium
                  leading-[1.25]
                  text-[#F84464]
                  overflow-hidden
                  text-ellipsis
                  whitespace-nowrap
                "
              >
                {item}
              </p>

              {/* CATEGORY */}
              <p
                className="
                  font-['Roboto']
                  text-[14px]
                  font-normal
                  leading-[1.43]
                  text-[#666666]
                  overflow-hidden
                  text-ellipsis
                  whitespace-nowrap
                "
              >
                Movies
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TrendingSearches
