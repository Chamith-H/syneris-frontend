import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Booking } from "./pages/booking/Booking";
import { About } from "./pages/about/About";

export const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
