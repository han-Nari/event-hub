import { Link } from "react-router-dom";
import { EventProvider, useEvent } from "../../hooks/EventContext";

import noEvent from "../assets/event.png";
import { useState } from "react";

export default function ShowEvent() {
  const { event, eventRemove, searchQuery, setSearchQuery, filteredEvents } =
    useEvent();
  const [isActive, setIsActive] = useState("events");

  if (!event || event.length === 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center pb-10">
          <img src={noEvent} className="w-70 aspect-auto " alt="No Event" />
          <p className="text-xl  text-center text-white py-10 font-semibold font-mono">
            It’s quiet here… add something exciting!
          </p>
          <Link
            to="/createEvent"
            className="mt-3 px-4 py-2 bg-white text-[#f96d00] font-semibold rounded-lg shadow-md hover:bg-[#f96d00] hover:text-white"
          >
            New event++
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col px-5">
      <section
        aria-label="event buttons"
        className="flex border-b text-md text-[#f96d00] [&>button:hover]:bg-white [&>button:hover]:text-[#f96d00] [&>button]:p-2 [&>button]:px-5 [&>button]:cursor-pointer  [&>button]:font-semibold "
      >
        <button
          className={
            isActive === "events" ? "bg-[#f96d00] text-white" : "text-white"
          }
          onClick={() => setIsActive("events")}
        >
          🎉 Events
        </button>

        <button
          className={
            isActive === "progress" ? "bg-[#f96d00] text-white" : "text-white"
          }
          onClick={() => setIsActive("progress")}
        >
          🛠️ In Progress
        </button>

        <button
          className={
            isActive === "progress" ? "bg-[#f96d00] text-white" : "text-white"
          }
          onClick={() => setIsActive("progress")}
        >
          🛠️ In Progress
        </button>
      </section>

      <section aria-label="today's event" className="overflow-hidden pb-5 ">
        {isActive === "events" && (
          <ul className="flex flex-col">
            <div className="flex justify-between items-center py-5">
              <div className="flex gap-2 items-center text-white text-md hover:text-[#f96d00]">
                <i class="fa-solid fa-plus-minus text-xl"></i>
                <Link to="/createEvent">New Event</Link>
              </div>
              <section aria-labelledby="search-bar">
                <label
                  id="search-bar"
                  className="flex justify-between w-[100%] bg-white p-2 px-4 rounded-[50px] md:p-1 md:px-3"
                >
                  <input
                    className="outline-none text-sm w-full"
                    type="text"
                    placeholder="Seach Event"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button role="btn-search">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                  </button>
                </label>
              </section>
            </div>

            <div className="md:h-[39vh]  overflow-hidden">
              {filteredEvents.map((events, id) => (
                <li
                  key={id}
                  className="flex justify-between gap-2 p-2 bg-white/5 px-5 border-l-5 border-[#f96d00] [&>*>button]:cursor-pointer hover:bg-white/10"
                >
                  <div className="flex gap-6 text-white">
                    <span className="grid place-content-center text-2xl">
                      {events.categories}
                    </span>
                    <div className="flex flex-col gap-2">
                      <span className="text-xl text-[#f96d00] font-semibold">
                        {events.eName}
                      </span>
                      <span className="text-sm text-white/80">
                        {events.desc}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button aria-label="bookmark">
                      <i className="fa-regular fa-bookmark text-white/80 hover:text-white"></i>
                    </button>

                    <button onClick={() => eventRemove(id)}>
                      <i className="fa-solid fa-trash text-white/80 hover:text-red-500"></i>
                    </button>
                  </div>
                </li>
              ))}
            </div>
            <Link
              to="/events"
              className="py-5 text-white font-semibold underline hover:text-[#f96d00]"
            >
              View All
            </Link>
          </ul>
        )}
      </section>

      <section>
        {isActive === "progress" && (
          <div className="grid gap-5 text-center text-white place-content-center h-[50vh]">
            <span className="text-[50px]">🛠️</span>
            <h1 className="text-[25px] font-semibold text-[#f96d00]">
              In Progress
            </h1>
          </div>
        )}
      </section>

      {/* <h2
          id="events"
          className="leading-none text-2xl font-semibold text-[#f96d00] md:sticky md:top-0 "
        >
          Events of the Day
        </h2> */}
    </div>
  );
}
