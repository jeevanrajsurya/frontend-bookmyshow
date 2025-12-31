function BottomNavbar() {
  return (
    <div className="hidden md:block w-full bg-[#F5F5F5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-10 px-4 flex items-center">

        {/* LEFT COLUMN (same as Navbar logo+search block) */}
        <div className="flex-1 flex items-center -ml-2">
          <ul className="flex items-center font-['Roboto']">
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
                  "
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* RIGHT COLUMN (same as Navbar right block) */}
        <div className="flex items-center -mr-3">
          <ul className="flex items-center font-['Roboto']">
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
