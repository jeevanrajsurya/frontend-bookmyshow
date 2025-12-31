function BottomNavbar() {
  return (
    <div className="hidden md:block w-full bg-[#F5F5F5] border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto h-10 px-4 flex items-center justify-between">

        {/* LEFT COLUMN */}
        <div className="flex items-center flex-1 -ml-2">
          <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">
            {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map(
              (item) => (
                <li
                  key={item}
                  className="
                    text-sm
                    font-normal
                    leading-5
                    tracking-[0.2px]
                    text-[#333333]
                    cursor-pointer
                    px-2
                    hover:text-black
                    flex-shrink-0
                  "
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex items-center -mr-3">
          <ul className="flex items-center gap-1 lg:gap-2 font-['Roboto'] whitespace-nowrap">
            {["ListYourShow", "Corporates", "Offers", "Gift Cards"].map(
              (item) => (
                <li
                  key={item}
                  className="
                    text-xs
                    font-normal
                    leading-4
                    tracking-[0.2px]
                    text-[#333333]
                    cursor-pointer
                    px-3
                    hover:text-black
                    flex-shrink-0
                  "
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default BottomNavbar
