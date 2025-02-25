import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCoffee,
  faLaptopMedical,
  faSitemap,
  faTruckMonster,
} from "@fortawesome/free-solid-svg-icons";
import "../../../../styles/pages/home/contents/HealthCare.css";

export const HealthCare = () => {
  return (
    <div className="HeathCare px-4 py-4 px-md-5 py-md-5">
      <div className="py-4">
        {/* <p className="mb-0 info-tag">FREE DIGITAL AUDIT</p> */}
        <h3>DIGITAL HEALTH CHECK</h3>
        <div className="row gx-3 mt-4">
          <div className="col-lg-6">
            <div className="row gx-3 gy-3">
              <div className="col-12 col-sm-6">
                <div className="first-col px-3 py-3">
                  <div>
                    <div className="Icon-Rounder-first">
                      <FontAwesomeIcon
                        icon={faLaptopMedical}
                        style={{
                          fontSize: "20px",
                          color: "rgb(116, 232, 255)",
                        }}
                      />
                    </div>

                    <h6>Identifying Your Pain Points</h6>
                    <p className="mb-0">
                      We will work with you to understand the challenges your
                      business faces, from inefficient processes to gaps in
                      technology, and pinpoint key areas for improvement.
                    </p>
                  </div>

                  <a href="/booking">
                    See More <span>&#8594;</span>
                  </a>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="row gy-3">
                  <div className="col-12">
                    <div className="second-col px-3 py-3">
                      <div className="Icon-Rounder">
                        <FontAwesomeIcon
                          icon={faTruckMonster}
                          style={{ fontSize: "20px", color: "#0C8CA7" }}
                        />
                      </div>

                      <h6>Assessing Your Digital Transformation Journey</h6>
                      <p className="mb-0">
                        Together, we’ll evaluate where your organization is on
                        its path to digital transformation. Whether you're just
                        starting or need guidance to move forward, we'll assess
                        your current technologies, processes, and strategies.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="third-col">
                      <div className="third-col-aliner px-3 py-3">
                        <div className="Icon-Rounder-three">
                          <FontAwesomeIcon
                            icon={faSitemap}
                            style={{ fontSize: "20px", color: "#FFFFFF" }}
                          />
                        </div>

                        <h6>
                          Designing Your Roadmap for Digital Transformation
                        </h6>
                        <p className="mb-0">
                          Based on our insights, we’ll create a customized
                          digital transformation roadmap, outlining the steps,
                          tools, and strategies needed to drive efficiency,
                          improve customer experience, and achieve sustainable
                          growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="Image-Col"></div>
          </div>
        </div>
        <div className="pt-2"></div>
      </div>
    </div>
  );
};
