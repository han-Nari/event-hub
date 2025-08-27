import { Link } from "react-router-dom";
import useEventScript from "../../hooks/useEventScript";
import MyHeader from "../pages/MyHeader";

export default function EventForm() {
  const { newEvent, error, success, eventInput, addEvent } = useEventScript();

  return (
    <div className=" h-[100vh] md:grid md:gap-0 md:grid-cols-12 md:grid-rows-12 ">
      <MyHeader />

      <main className="col-span-3 row-span-8 px-10 md:row-span-12 md:col-span-5 md:grid md:items-center md:justify-start">
        <form onSubmit={addEvent} className="grid gap-5 py-10 md:gap-10">
          {error && (
            <p className="text-red-500 text-xl font-semibold">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-xl font-semibold">
              {success}
              <Link
                to="/"
                className="text-white text-sm underline px-5 hover:text-[#f96d00]"
              >
                Check your event now!
              </Link>
            </p>
          )}
          <h2 className="leading-none text-2xl text-[#f96d00] font-bold">
            New Event++
          </h2>
          <div
            className="flex flex-col gap-4 text-white  [&>div>div>label]:font-semibold [&>div>div>label]:text-[#f96d00]  [&>div>div>input,select]:outline-none [&>div>div>input:focus,select:focus]:ring-1 [&>div>div>input:focus,select:focus]:ring-[#f96d00] [&>div>div>input,select]:p-3 [&>div>div>input,select]:shadow-xl [&>div>div>input]:w-[100%] [&>div>div>input,select]:bg-white/5  [&>div>div>input,select]:rounded-[5px] 
            md:[&>div>div>input,select]:w-[500px]"
          >
            <div className="grid gap-5 md:flex">
              <div className="grid gap-3">
                <label for="eventName" className="text-white">
                  Event Name
                </label>

                <input
                  id="eventName"
                  onChange={eventInput}
                  name="eName"
                  value={newEvent.eName}
                  type="text"
                  placeholder="🎉 Event Name"
                />
              </div>

              <div className="grid gap-3">
                <label htmlFor="orgName" className="text-white">
                  Organizer
                </label>
                <input
                  id="orgName"
                  onChange={eventInput}
                  name="orgName"
                  value={newEvent.orgName}
                  type="text"
                  placeholder="👥 Organizer"
                />
              </div>
            </div>

            <div className="grid gap-5 [&>input['date']:w-[100px] md:flex">
              <div className="grid gap-3">
                <label htmlFor="loc" className="text-white">
                  Location
                </label>
                <input
                  id="loc"
                  onChange={eventInput}
                  name="loc"
                  value={newEvent.loc}
                  type="text"
                  placeholder="📍 Location "
                />
              </div>

              <div className="grid gap-3 ">
                <label htmlFor="date" className="text-white">
                  Date
                </label>
                <input
                  id="date"
                  onChange={eventInput}
                  name="date"
                  value={newEvent.date}
                  type="date"
                  className="w-[50px]"
                />
              </div>
            </div>

            <div className="grid gap-5  md:flex">
              <div className="grid gap-3">
                <label htmlFor="loc" className="text-white">
                  Categories
                </label>
                <select
                  id="category"
                  name="categories"
                  value={newEvent.categories}
                  onChange={eventInput}
                >
                  <option value="">🎨 Select Categories</option>
                  <option value="🎶">🎶 Music</option>
                  <option value="🏀">🏀 Sports</option>
                  <option value="🎓">🎓 Education</option>
                  <option value="💼">💼 Business</option>
                  <option value="❤️">❤️ Community</option>
                  <option value="🎮">🎮 Games</option>
                </select>
              </div>
            </div>

            <div className="grid gap-5">
              <label htmlFor="desc" className="text-[#f96d00] font-semibold ">
                Description
              </label>
              <textarea
                id="desc"
                onChange={eventInput}
                name="desc"
                value={newEvent.desc}
                placeholder="📝 Description"
                rows={5}
                className="bg-white/5 p-4 rounded-[5px] outline-none focus:ring-1 focus:ring-[#f96d00]"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" p-2 rounded-[5px] shadow-xl px-3 bg-[#f96d00] text-white cursor-pointer md:w-min"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
