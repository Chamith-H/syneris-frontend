import { ContactUs } from "../common/ContactUs";
import { Appointments } from "./contents/Appointments";
import { HealthCare } from "./contents/HealthCare";
import { Hero } from "./contents/Hero";
import { Solutions } from "./contents/Solutions";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <Appointments />
      <HealthCare />
      <ContactUs />
    </div>
  );
};
