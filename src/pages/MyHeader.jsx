import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MyHeader() {
  const links = (isActive) => {
    return isActive ? "text-[#f96d00]" : "text-white";
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#222831] p-5 py-12  flex flex-col gap-5 relative md:col-span-2 md:row-span-12 md:gap-5 md:rounded-none ">
        <div className="flex justify-between  items-center">
          <h1
            className="z-999 text-3xl leading-none text-white font-semibold m-0 
          
          md:text-2xl"
          >
            Event Hub
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-999 cursor-pointer md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#EFEFEF"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
        <p className="text-md  text-white/80  md:text-sm ">
          The easiest way to plan your events.
        </p>

        <section aria-labelledby="search-bar">
          <label
            id="search-bar"
            className="flex justify-between w-[100%] bg-white p-2 px-4 rounded-[50px] md:p-1 md:px-4"
          >
            <input
              className="outline-none text-sm w-full"
              type="text"
              placeholder="Seach Event"
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

        <nav
          className={`flex flex-col gap-4 [&>li]:list-none  absolute w-full h-100 left-0 transition-all duration-300 bg-[#222831] rounded-2xl p-5 py-25 [&>*]:text-md   
        ${
          isOpen ? "top-0" : "top-[-500%]"
        } md:top-0 md:bg-transparent md:static md:p-0 md:[&>li]:text-md md:transition-none`}
        >
          <li className="grid gap-5">
            <p className="text-white/80 text-[14px] font-semibold">Dashboard</p>
            <NavLink to="/" className={({ isActive }) => links(isActive)}>
              <div className="flex gap-3 px-2">
                <span>
                  <i class="fa-solid fa-gauge"></i>
                </span>
                <span>Dashboard</span>
              </div>
            </NavLink>
          </li>
          {/* <li className="grid gap-5">
            <p className="text-white/80  text-[14px] font-semibold">Events</p>
            <NavLink to="/events" className={({ isActive }) => links(isActive)}>
              <div className="flex gap-3 px-2">
                <span>
                  <i class="fa-solid fa-calendar"></i>
                </span>
                <span>Event List</span>
              </div>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/CreateEvent"
              className={({ isActive }) => links(isActive)}
            >
              <div className="flex gap-3 px-2">
                <span>
                  <i class="fa-solid fa-plus-minus"></i>
                </span>
                <span>New Event</span>
              </div>
            </NavLink>
          </li>
        </nav>
      </header>
    </>
  );
}
