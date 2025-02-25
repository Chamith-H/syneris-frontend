import "../../../../styles/pages/home/contents/Appointments.css";
import booking from "../../../../assets/images/home/bookingX.gif";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

export const Appointments = () => {
  const navigate = useNavigate();

  const clickToBook = () => {
    navigate("/booking");
  };

  const text = "TRANSFORMATION READINESS ASSESSMENT";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex < text.length - 1 ? prevIndex + 1 : 0) // Reset after last letter
      );
    }, 80); // 0.5s delay per letter

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Appointments">
      <div className="px-4 py-4 py-md-5 px-md-5 background-align-app">
        <div className="py-4">
          {/* <p className="mb-0 info-tag-a">ONLINE APPOINTMENTS</p> */}
          <h3>
            {text.split("").map((char, idx) => (
              <span
                key={idx}
                className={
                  idx === currentIndex
                    ? "Appointments-Intro-t-h"
                    : "Appointments-Intro-t"
                }
              >
                {char}
              </span>
            ))}
          </h3>

          <p className="solution-description-a">
            Our Free Consultation Service includes: Identifying Your Pain
            Points: We will work with you to understand the challenges your
            business faces, from inefficient processes to gaps in technology,
            and pinpoint key areas for improvement. Assessing Your Digital
            Transformation Journey: Together, we’ll evaluate where your
            organization is on its path to digital transformation. Whether
            you're just starting or need guidance to move forward, we'll assess
            your current technologies, processes, and strategies. Designing Your
            Roadmap for Digital Transformation: Based on our insights, we’ll
            create a customized digital transformation roadmap, outlining the
            steps, tools, and strategies needed to drive efficiency, improve
            customer experience, and achieve sustainable growth.
          </p>

          <h6 className="mt-4">Schedule Your Free Exploratory Call Today!</h6>
          <a href="/booking" className="ps-4">
            <p className="mb-0">Book Now</p>
            <img src={booking} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
