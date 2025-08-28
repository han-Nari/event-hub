import { useEffect, useState } from "react";

export default function useEventScript() {
  const [event, setEvent] = useState(() => {
    try {
      const savedEvents = localStorage.getItem("events");
      return savedEvents ? JSON.parse(savedEvents) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  });
  const [newEvent, setNewEvent] = useState({
    eName: "",
    orgName: "",
    loc: "",
    date: "",
    desc: "",
    categories: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Save Events
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(event));
  }, [event]);

  // Event Input
  const eventInput = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add Event
  const addEvent = (e) => {
    e.preventDefault();

    const eName = newEvent.eName.trim();
    const orgName = newEvent.orgName.trim();
    const loc = newEvent.loc.trim();
    const desc = newEvent.desc.trim();
    const date = newEvent.date;
    const categories = newEvent.categories;

    if (!eName || !orgName || !loc || !desc || !categories) {
      setError("Please fill in all required fields.");
      setSuccess("");
      return;
    } else {
      setSuccess("Added New Event!");
    }

    if (!date) {
      setError("Please select a date for the event.");
      setSuccess("");
      return;
    } else {
      setSuccess("Added New Event!");
    }

    setError("");
    setEvent((e) => [...e, newEvent]);
    setNewEvent({
      eName: "",
      orgName: "",
      loc: "",
      date: "",
      desc: "",
      categories: "",
    });
  };

  // Delete Event
  const eventRemove = (id) => {
    const eventName = event[id]?.eName;

    if (window.confirm(`Do you want to remove ${eventName}?`)) {
      const removedEvent = event.filter((_, i) => i !== id);
      setEvent(removedEvent);
      window.location.reload();
    }
  };

  // Search Query
  const filteredEvents = event.filter((ev) => {
    const query = searchQuery.toLowerCase();
    return (
      ev.eName.toLowerCase().includes(query) ||
      ev.orgName.toLowerCase().includes(query) ||
      ev.loc.toLowerCase().includes(query) ||
      ev.categories.toLowerCase().includes(query)
    );
  });

  return {
    event,
    newEvent,
    error,
    success,
    searchQuery,
    setSearchQuery,
    filteredEvents,
    eventInput,
    addEvent,
    eventRemove,
    ...newEvent,
  };
}
