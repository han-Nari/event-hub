import { createContext, useContext } from "react";
import useEventScript from "./useEventScript";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const eventState = useEventScript();
  return (
    <EventContext.Provider value={eventState}>{children}</EventContext.Provider>
  );
};

// ✅ Custom hook to consume context
export const useEvent = () => {
  return useContext(EventContext);
};
