import "../../../../styles/pages/home/contents/Appointments.css";
import booking from "../../../../assets/images/home/bookingX.gif";
import { useNavigate } from "react-router-dom";

export const Appointments = () => {
  const navigate = useNavigate();

  const clickToBook = () => {
    navigate("/booking");
  };

  return (
    <div className="Appointments">
      <div className="px-4 py-4 py-md-5 px-md-5 background-align-app">
        <div className="py-4">
          <p className="mb-0 info-tag-a">ONLINE APPOINTMENTS</p>
          <h3>TRANSFORMATION READINESS ASSESSMENT</h3>

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

          <button onClick={() => clickToBook()} className="ps-4 pe-3">
            <p className="mb-0">Book Now</p>
            <img src={booking} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
