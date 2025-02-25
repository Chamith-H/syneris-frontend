import { ContactUs } from "../common/ContactUs";
import { Appointments } from "./contents/Appointments";
import { HealthCare } from "./contents/HealthCare";
import { Hero } from "./contents/Hero";
import { Industries } from "./contents/Industries";
import { SAPBOne } from "./contents/SapBOne";
import { SapS4Hana } from "./contents/SapS4Hana";
import { Solutions } from "./contents/Solutions";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <Appointments />
      <HealthCare />
      <SAPBOne />
      <SapS4Hana />
      <Industries />
      <ContactUs />
    </div>
  );
};
