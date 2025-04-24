import "../../styles/layout/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [route, setRoute] = useState("");

  useEffect(() => {
    const path = window.location.pathname.substring(1);
    setRoute(path);
  }, []);
  return (
    <div className="Footer">
      <div className="row g-0 middle-footer py-5">
        <div className="col-12 col-sm-6 col-lg-3 px-4 px-md-5 ">
          <div className="d-flex flex-column py-4 h-100">
            <h6>Syneris Solutions (Pvt) Ltd</h6>
            <div className="footer-logo-back">
              <img src="/assets/images/logos/synerisLogo.jpg" alt="" />
            </div>

            <div className="d-flex flex-column justify-content-between h-100 mt-2">
              <p className="des-foot">
                Syneris Solutions is a leading IT consultancy and technology
                solutions provider.
              </p>

              <div className="d-flex">
                <div className="Icon-Rounder-footer me-2">
                  <i class="bi bi-facebook"></i>
                </div>

                <a
                  href="https://www.linkedin.com/company/105643401/admin/dashboard/"
                  target="_blank"
                  className="Icon-Rounder-footer me-2"
                >
                  <i class="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=%2B94772268415&text&app_absent=0"
                  target="_blank"
                  className="Icon-Rounder-footer"
                >
                  <i class="bi bi-whatsapp"></i>
                </a>
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

            <a
              className={route === "" ? "active-route-f" : "deactive-route-f"}
              href="/"
            >
              Home
            </a>
            <a
              className={
                route === "booking"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/booking"
            >
              Booking
            </a>
            <a
              className={
                route === "about"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/about"
            >
              About Us
            </a>
            <a
              className={
                route === "sap-business-one"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/sap-business-one"
            >
              SAP Business One
            </a>
            <a
              className={
                route === "sap-s4-hana"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/sap-s4-hana"
            >
              SAP S/4 HANA
            </a>
            <a
              className={
                route === "industries"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/industries"
            >
              Industries
            </a>
            <a
              className={
                route === "contact"
                  ? "active-route-f mb-1"
                  : "deactive-route-f mb-1"
              }
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 px-4 px-md-5 ">
          <div className="d-flex flex-column py-4 f-3">
            <h6>ERP Implementation</h6>

            <div className="row gx-2 gy-0 mt-1">
              <div className="col-6">
                <div className="f-image-erp-1">
                  <div className="back-footer-align">
                    <div className="footer-erp-new">
                      <img src="/assets/images/home/sapB1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="f-image-erp-2">
                  <div className="back-footer-align">
                    <div className="footer-erp">
                      <img src="/assets/images/home/sapS4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
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
