function TrendingSearches() {
  const items = [
    "Jana Nayagan",
    "Sirai",
    "Avatar: Fire and Ash",
    "Dhurandhar",
    "Padayappa",
    "Sarvam Maya",
    "Parasakthi",
    "Kombuseevi",
  ]

  return (
    <section className="w-full bg-[#F5F6F7] py-4 sm:py-5 lg:pt-10 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222] mb-4 sm:mb-6 lg:mb-8 font-['Roboto']">
          Trending Searches Right Now
        </h2>

        {/* BOXES */}
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-x-6 lg:gap-y-6">
          {items.map((item) => (
            <div
              key={item}
              className="
                bg-white
                border border-[#E5E5E5]
                rounded-md
                px-4 py-3
                sm:px-5 sm:py-3.5
                lg:px-6 lg:py-4
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
                  text-[15px] sm:text-[16px] lg:text-[18px]
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
                  text-[13px] sm:text-[14px]
                  font-normal
                  leading-[1.4]
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
