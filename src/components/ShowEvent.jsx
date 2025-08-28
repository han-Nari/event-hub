import { Link } from "react-router-dom";
import { EventProvider, useEvent } from "../../hooks/EventContext";

import noEvent from "../assets/event.png";
import { useState } from "react";

export default function ShowEvent() {
  const { event, eventRemove } = useEvent();
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
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center text-white text-md hover:text-[#f96d00]">
                <i class="fa-solid fa-plus-minus text-xl"></i>
                <Link to="/createEvent">New Event</Link>
              </div>
              <Link
                to="/events"
                className="text-white text-end underline py-5 w-fit font-semibold hover:text-[#f96d00] "
              >
                View All
              </Link>
            </div>

            <div className="md:h-[49vh]  overflow-hidden">
              {event.map((events, id) => (
                <li
                  key={id}
                  className="flex justify-between gap-2 p-2 bg-white/5 px-5 border-l-5 border-[#f96d00]  [&>*>button]:cursor-pointer hover:bg-white/10 "
                >
                  <div className=" flex gap-6 text-white">
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
                      <i class="fa-regular fa-bookmark text-white/80 hover:text-white"></i>
                    </button>

                    <button onClick={() => eventRemove(id)}>
                      <i class="fa-solid fa-trash text-white/80 hover:text-red-500"></i>
                    </button>
                  </div>
                </li>
              ))}
            </div>
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
