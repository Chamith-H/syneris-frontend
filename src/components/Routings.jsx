import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Booking } from "./pages/booking/Booking";
import { About } from "./pages/about/About";
import { Industry } from "./pages/industry/Industry";
import { BusinessOne } from "./pages/businessOne/BusinessOne";
import { Contact } from "./pages/contact/Contact";

export const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sap-business-one" element={<BusinessOne />} />
      </Routes>
    </Router>
  );
};
