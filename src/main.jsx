import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css";
import App from "./App.jsx";

import EventForm from "./components/EventForm.jsx";
import Events from "./pages/Events.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createEvent" element={<EventForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
