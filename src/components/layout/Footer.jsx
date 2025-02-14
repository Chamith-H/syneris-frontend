import "../../styles/layout/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCoffee,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../assets/images/common/LogoOri.png";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterTop px-4 px-md-5 py-2 d-flex justify-content-between align-items-center">
        <p className="mb-0 company-name">Syneris Solutions (Pvt) Ltd</p>
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

      <div className="row g-0 pt-4 middle-footer">
        <div className="col-12 px-5 px-md-0 col-sm-6 col-lg-3 d-flex justify-content-center align-items-center logo-sec py-3 mb-2">
          <img src={footerLogo} alt="" />
        </div>
        <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center py-3">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{
              fontSize: "55px",
              color: "rgb(10,112,132)",
            }}
          />

          <p className="text-center mt-2">
            No:71, Kohilawatta , Wellampitiya, <br />
            Sri Lanka.
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center py-3">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{
              fontSize: "55px",
              color: "rgb(10,112,132)",
            }}
          />

          <p className="text-center mt-2">info@syneris.solutions</p>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center py-3">
          <FontAwesomeIcon
            icon={faPhone}
            style={{
              fontSize: "52px",
              color: "rgb(10,112,132)",
            }}
          />

          <p className="text-center mt-2">+94 772268415</p>
        </div>
      </div>

      <div className="Footer-bottom py-2">
        <p className="mb-0 text-center">
          Copyright © 2025 Syneris Solutions - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
