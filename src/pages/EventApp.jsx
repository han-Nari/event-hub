import MyHeader from "./MyHeader";
import { EventProvider } from "../../hooks/EventContext";
import ShowEvent from "../components/ShowEvent";
import useEventScript from "../../hooks/useEventScript";
import { Link } from "react-router-dom";
import rocket from "../../src/assets/rocket.svg";

export default function EventApp() {
  const { event } = useEventScript();
  const categoryCount = event.reduce((acc, event) => {
    acc[event.categories] = (acc[event.categories] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex flex-col md:grid h-[100vh] md:grid-cols-12 md:grid-rows-12 md:gap-0 ">
      <MyHeader />

      <main className="flex flex-col gap-10 md:gap-8  md:col-span-7 md:row-span-12">
        <section aria-labelledby="guest">
          <div className=" min-h-[10rem] overflow-hidden bg-gradient-to-r from-orange-500/90 to-orange-300/90 p-6 flex items-center justify-between shadow-lg">
            <div className="flex  flex-col gap-5 ">
              <h2 className="text-2xl font-bold text-white">👋 Hello, Guest</h2>
              <p className="text-white/90">
                Welcome to Event Hub! Start planning something amazing.
              </p>
            </div>
            <img
              src={rocket}
              alt="Welcome illustration"
              className="h-40 right-0  "
            />
          </div>
        </section>
        <EventProvider>
          <ShowEvent />
        </EventProvider>
      </main>

      <section
        aria-labelledby="categories activities"
        className="p-5 flex flex-col gap-5 md:col-span-3 md:row-span-12 bg-[#222831]"
      >
        <div className="grid gap-5 [&>div>div]:shadow-xl [&>*]:font-semibold [&>div>div]:px-2 [&>div>div]:flex [&>div>div]:justify-between [&>div>div]:bg-white/10 [&>div>div]:text-white [&>div>div]:p-2 [&>div>div]:rounded-[5px] [&>div>div:hover]:bg-white/15">
          <h2
            id="categories"
            className="leading-none text-xl font-semibold text-[#f96d00]"
          >
            Categories++
          </h2>
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex gap-3">
                <span>🏀</span>
                <span>Sports</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["🏀"] || 0}</div>
            </div>

            <div>
              <div className="flex gap-3">
                <span>🎶</span>
                <span>Music</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["🎶"] || 0}</div>
            </div>

            <div>
              <div className="flex gap-3">
                <span>💼</span>
                <span>Business</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["💼"] || 0}</div>
            </div>

            <div>
              <div className="flex gap-3">
                <span>❤️</span>
                <span>Commnunity</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["❤️"] || 0}</div>
            </div>

            <div>
              <div className="flex gap-3">
                <span>🎓</span>
                <span>Education</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["🎓"] || 0}</div>
            </div>

            <div>
              <div className="flex gap-3">
                <span>🎮</span>
                <span>Games</span>
              </div>
              <div className="text-[#f96d00]">{categoryCount["🎮"] || 0}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pb-10 md:overflow-auto">
          <h2 id="activies" className="text-[#f96d00] text-xl font-semibold">
            Tags++
          </h2>
          <div className="flex flex-wrap gap-2 text-sm text-white [&>*]:bg-white/10 [&>*]:p-1 [&>*]:px-2 [&>*]:rounded-[100px] [&>*]:font-semibold [&>*:hover]:bg-[#f96d00] [&>*]:cursor-pointer [&>*]:shadow-xl  ">
            <p>💼 Career Fair</p>
            <p>🎮 Esports League</p>
            <p>❤️ Blood Donation</p>
            <p>🎶 Jazz Night</p>
            <p>🎓 Coding Bootcamp</p>
            <p>💼 Startup Pitch</p>
            <p>🎮 LAN Party</p>
            <p>❤️ Community Outreach</p>
            <p>🎶 Open Mic Night</p>
            <p>🎓 Research Workshop</p>
            <p>💼 Business Summit</p>
            <p>🎮 Gaming Marathon</p>
            <p>❤️ Fundraising Gala</p>
          </div>
        </div>
      </section>
    </div>
  );
}
