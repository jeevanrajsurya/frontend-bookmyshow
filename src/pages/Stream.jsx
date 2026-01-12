import StreamCarousel from "../components/StreamCarousel"
import PopularEvents from "../components/PopularEvents"
import YourMusicStudio from "../components/YourMusicStudio"
import TopGamesSportsEvents from "../components/TopGamesSportsEvents"
import Premiere from "../components/Premiere"
import LaughterTherapy from "../components/LaughterTherapy"
import ExploreFunActivities from "../components/ExploreFunActivities"
import OutdoorEvents from "../components/OutdoorEvents"

function Stream() {
  return (
    <>
      <StreamCarousel />
      <YourMusicStudio />
      <PopularEvents />
      <LaughterTherapy />
      <Premiere />
      <OutdoorEvents />
      <TopGamesSportsEvents />
       <ExploreFunActivities />

      {/* ================= BREADCRUMB ================= */}
      <section className="w-full bg-white ">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <p className="text-left text-[12px] font-medium leading-[20px] tracking-[0.1px] normal-case">
            Home <span className="mx-1">→</span> Plays
          </p>
        </div>
      </section>

      {/* ================= EVENTS DESCRIPTION ================= */}
      <section className="w-full bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-6 pt-2 text-[#666666]">

          {/* TITLE */}
          <h2 className="text-left mb-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            Find The Latest and Best Events in Coimbatore Today!
          </h2>

          {/* PARA */}
          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            If lounging on a sofa with a bowl of popcorn has become your daily ritual,
            you can jazz it up with some live events! Gone are the days when movies were
            the only source of real entertainment. Now you can take a break from the
            constant screen time to indulge in some live entertainment near you with
            the tap of a button. Find a curated list of upcoming events in{" "}
            <span className="font-semibold text-[#333]">Coimbatore</span> so that you
            can spot the right event for that perfect weekend.
          </p>

          {/* SUB TITLE */}
          <h3 className="text-left mb-5 mt-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            How to book an event online?
          </h3>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            BookMyShow offers a simple, yet seamless experience for browsing, sorting,
            and booking handpicked events. Just click on the upcoming events of your
            choice, make the payment through one of the many payment gateways, and
            you’re good to go! <br />
            Consider BookMyShow as a one-stop-shop for all your live entertainment
            cravings. You have an option to filter the latest events according to
            category so you can find the same in the favourite category. You can also
            filter the genre so you can experience comedy, music, action and more.
          </p>

          <h3 className="text-left mb-5 mt-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            How to book an event online?
          </h3>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            BookMyShow offers a simple, yet seamless experience for browsing, sorting,
            and booking handpicked events. Just click on the upcoming events of your
            choice, make the payment through one of the many payment gateways, and
            you’re good to go!. Consider BookMyShow as a one-stop-shop for all your live
            entertainment cravings. You have an option to filter the latest events
            according to category so you can find the same in the favourite category.
            You can also filter the genre so you can experience comedy, music, action
            and more.
          </p>

          {/* CATEGORY TITLE */}
          <h3 className="text-left mb-5 mt-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            Top 3 Events Categories
          </h3>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            <span className="text-[14px] font-medium text-[#808080]">Comedy events</span> – If you
            like to tickle your funny bone, comic relief can be your go-to option.
            Find the latest <span className="text-[#dc3558]">comedy events</span> by
            some of Coimbatore’s best comedians.
          </p>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            <span className="text-[14px] font-medium text-[#808080]">Music shows</span> – Looking
            for a way to unwind from the post-work blues?{" "}
            <span className="text-[#dc3558]">Music shows</span> might do the trick!
            Experience handpicked gigs and concerts.
          </p>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            <span className="text-[14px] font-medium text-[#808080]">
              Performance / workshops
            </span>{" "}
            – For those who want something more hands-on, you can book tickets to a
            live performance or <span className="text-[#dc3558]">workshop</span>.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-left mb-5 mt-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            A hassle-free live events experience
          </h3>

          <p className="p-0 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            Our <span className="text-[#dc3558]">online streaming events</span> in 2026 are
            carefully organized. This digital spin on events lets you experience all
            the good stuff through your laptop or smartphone.
          </p>

          {/* FINAL CTA */}
          <h3 className="text-left mb-5 mt-5 text-[14px] font-medium leading-[20px] tracking-[0.1px] normal-case text-[#808080]">
            Get Tickets to the Latest Events in Your Coimbatore
          </h3>

          <p className="p-0 pb-6 text-[12px] font-normal leading-[16px] tracking-[0.2px] text-justify text-[#808080]">
            Wait no more! Find the next event in Coimbatore and book your tickets now!
            Consider BookMyShow as a one-stop-shop for all your live entertainment
            cravings. You have an option to filter the latest events according to
            category so you can find the same in the favourite category. You can also
            filter the genre so you can experience comedy, music, action and more.
          </p>

        </div>
      </section>
    </>
  )
}

export default Stream
