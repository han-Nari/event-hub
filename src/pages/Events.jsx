import useEventScript from "../../hooks/useEventScript";
import MyHeader from "./MyHeader";

export default function Events() {
  const { event, eventRemove } = useEventScript();

  return (
    <div className="flex flex-col md:grid h-[100vh] md:grid-cols-12 md:grid-rows-12 md:gap-0 ">
      <MyHeader />

      <main className="flex flex-col gap-10  md:col-span-10 md:row-span-12 md:grid  md:h-[100vh] md:overflow-auto">
        <section className="p-10">
          <div>
            <h2 className="text-2xl text-[#f96d00] font-semibold">
              All Events++
            </h2>
            <ul className="grid py-10 grid-cols-[repeat(auto-fit,minmax(min(25rem,100%),1fr))] gap-4">
              {event.map((events, id) => (
                <li
                  key={id}
                  className="flex justify-between gap-2 p-10 bg-white/5 px-5 border-l-5 border-[#f96d00]  [&>*>button]:cursor-pointer hover:bg-white/10 "
                >
                  <div className="flex flex-col  gap-5">
                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold self-center">
                        Event :
                      </span>
                      <span className="text-2xl font-semibold">
                        {events.eName}
                      </span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Organizer :
                      </span>
                      <span>{events.orgName}</span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Location :
                      </span>
                      <span>{events.loc}</span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Date :
                      </span>
                      <span>{events.date}</span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Categories
                      </span>
                      <span>{events.categories}</span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Description :
                      </span>
                      <span>{events.desc}</span>
                    </div>

                    <div className="grid grid-cols-[12ch_1fr] text-white">
                      <span className="text-[#f96d00] text-md font-semibold">
                        Remove:
                      </span>
                      <button
                        onClick={() => eventRemove(id)}
                        className="flex items-center gap-5 text-white"
                      >
                        <i class="fa-solid fa-trash text-white/80 hover:text-red-500"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* <section className="col-span-3 row-span-2 p-4  md:col-span-2 md:row-span-12">
          <h2>Section</h2>
        </section> */}
    </div>
  );
}
