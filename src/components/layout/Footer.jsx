import "../../styles/layout/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../assets/images/logos/synerisLogo.jpg";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="row g-0 middle-footer py-5">
        <div className="col-12 col-sm-6 col-lg-3 px-4 px-md-5 ">
          <div className="d-flex flex-column py-4 h-100">
            <h6>Syneris Solutions (Pvt) Ltd</h6>
            <div className="footer-logo-back">
              <img src={footerLogo} alt="" />
            </div>

            <div className="d-flex flex-column justify-content-between h-100 mt-2">
              <p className="des-foot">
                Syneris Solutions is a leading IT consultant and technology
                solutions provider.
              </p>

              <div className="d-flex">
                <div className="Icon-Rounder-footer me-2">
                  <i class="bi bi-facebook"></i>
                </div>

                <div className="Icon-Rounder-footer me-2">
                  <i class="bi bi-linkedin"></i>
                </div>

                <div className="Icon-Rounder-footer me-2">
                  <i class="bi bi-envelope-at-fill"></i>
                </div>

                <div className="Icon-Rounder-footer">
                  <i class="bi bi-whatsapp"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 f-2 px-4 px-md-5 ">
          <div className="py-4">
            <h6>Contact Us</h6>

            <div className="d-flex">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{
                  fontSize: "20px",
                  color: "rgba(157, 239, 255, 0.774)",
                }}
              />

              <p className="ms-3">
                736 Orion Tower,
                <br />
                Dr. Danister De Silva Mawatha,
                <br />
                Colombo 00900,
                <br />
                Sri Lanka
              </p>
            </div>

            <div className="d-flex">
              <i class="bi bi-telephone-fill"></i>
              <div>
                <p className="ms-3 mb-0">+94 77 2268415</p>
                <p className="ms-3">+94 77 1510709</p>
              </div>
            </div>

            <div className="d-flex">
              <i class="bi bi-envelope-at-fill"></i>
              <p className="ms-3 mb-0">info@syneris.solutions</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 px-4 px-md-5 ">
          <div className="d-flex flex-column py-4 f-3">
            <h6>Quick Links</h6>

            <a href="">Home</a>
            <a href="">Booking</a>
            <a href="">ERP Solutions</a>
            <a href="">Industries</a>
            <a href="">Contact Us</a>
            <a href="">About Us</a>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 px-4 px-md-5 ">
          <div className="d-flex flex-column py-4 f-3">
            <h6>Share Your Experience</h6>

            <div className="form-feedback">
              <form action="">
                <div className="d-flex flex-column">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" />
                </div>

                <div className="d-flex flex-column mt-2">
                  <label>Feedback</label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Type your feedback"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-2">
                  <button type="submit" className="px-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer-bottom py-4">
        <p className="mb-0 text-center">
          Copyright © 2025 Syneris Solutions - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
