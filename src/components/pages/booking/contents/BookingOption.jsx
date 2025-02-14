import { useState } from "react";
import "../../../../styles/pages/booking/contents/BookingOption.css";
import Calendar from "react-calendar";

export const BookingOption = () => {
  const [value, setValue] = useState(new Date());

  const changeValue = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className="BookingOption px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        <p className="mb-0 info-tag">BOOKING</p>
        <h3>MEET YOUR PERFECT MATCH, ANYTIME, ANYWHERE</h3>

        <ul className="Booking-points">
          <li>
            We will work with you to understand the challenges your business
            faces, from inefficient processes to gaps in technology, and
            pinpoint key areas for improvement.
          </li>

          <li>
            Together, we’ll evaluate where your organization is on its path to
            digital transformation. Whether you're just starting or need
            guidance to move forward, we'll assess your current technologies,
            processes, and strategies.
          </li>

          <li>
            Based on our insights, we’ll create a customized digital
            transformation roadmap, outlining the steps, tools, and strategies
            needed to drive efficiency, improve customer experience, and achieve
            sustainable growth.
          </li>
        </ul>

        <div className="row g-0 mt-4">
          <div className="col-12 col-md-6">
            <Calendar onChange={(e) => changeValue(e)} value={value} />
          </div>

          <div className="d-none col-md-6 d-md-block ps-md-4">
            <div className="side-img-book"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
