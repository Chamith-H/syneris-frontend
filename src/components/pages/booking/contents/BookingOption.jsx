import { useState } from "react";
import "../../../../styles/pages/booking/contents/BookingOption.css";
import Calendar from "react-calendar";
import bookingSide from "../../../../assets/images/booking/bookingSide.png";

export const BookingOption = () => {
  const [value, setValue] = useState(new Date());

  const changeValue = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className="BookingOption ps-4 pt-4 ps-md-5 pt-md-5">
      <div className="pt-4">
        <p className="mb-0 info-tag">BOOKING</p>
        <h3 className="main-t-all">
          SCHEDULE YOUR FREE EXPLORATORY CALL TODAY!
        </h3>

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
        <div className="row g-0 mt-5">
          <div className="col-12 col-lg-6 pb-5">
            <div className="pb-4 pe-4 pe-md-5 pe-lg-0">
              <Calendar onChange={(e) => changeValue(e)} value={value} />
            </div>
          </div>

          <div className="col-lg-6  ps-md-4">
            <div className="side-img-book">
              <img src={bookingSide} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
