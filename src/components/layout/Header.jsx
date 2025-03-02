import "../../styles/layout/Header.css";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [route, setRoute] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);

  const handle_ClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const path = window.location.pathname.substring(1);
    setRoute(path);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handle_ClickOutside);

    return () => {
      document.removeEventListener("mousedown", handle_ClickOutside);
    };
  });

  return (
    <div className="Header px-4 px-md-5" ref={ref}>
      <div className="Header-Logo">
        <img src="/assets/images/logos/synerisLogo.jpg" alt="syneris-logo" />
      </div>

      <div className="d-none d-lg-block">
        <div className="Desktop-Navigations">
          <a
            className={route === "" ? "active-route" : "deactive-route"}
            href="/"
          >
            Home
          </a>
          <a
            className={
              route === "booking" ? "active-route ms-4" : "deactive-route ms-4"
            }
            href="/booking"
          >
            Booking
          </a>
          <a
            className={
              route === "about" ? "active-route ms-4" : "deactive-route ms-4"
            }
            href="/about"
          >
            About Us
          </a>
          <a
            className={
              route === "sap-business-one"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/sap-business-one"
          >
            SAP Business One
          </a>
          <a
            className={
              route === "sap-s4-hana"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/sap-s4-hana"
          >
            SAP S/4 HANA
          </a>
          <a
            className={
              route === "industries"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/industries"
          >
            Industries
          </a>
          <a
            className={
              route === "contact" ? "active-route ms-4" : "deactive-route ms-4"
            }
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="d-lg-none">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="Toggle-button"
        >
          {isExpanded && (
            <div>
              <i class="bi bi-sliders2"></i>
            </div>
          )}

          {!isExpanded && (
            <div className="rotate-180">
              <i class="bi bi-sliders2"></i>
            </div>
          )}
        </button>
      </div>

      <div className={isExpanded ? "Expanded" : "Collapsed"}>
        <div className="row">
          <div className="col-6">
            <div className="Desktop-Navigations-mobile px-4 py-4">
              <a
                className={
                  route === "" ? "active-route-m mt-3" : "deactive-route-m mt-3"
                }
                href="/"
              >
                Home
              </a>
              <a
                className={
                  route === "booking"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/booking"
              >
                Booking
              </a>

              <a
                className={
                  route === "about"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/about"
              >
                About Us
              </a>

              <a
                className={
                  route === "sap-business-one"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/sap-business-one"
              >
                SAP Business One
              </a>

              <a
                className={
                  route === "sap-s4-hana"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/sap-s4-hana"
              >
                SAP S/4 HANA
              </a>

              <a
                className={
                  route === "industries"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/industries"
              >
                Industries
              </a>

              <a
                className={
                  route === "contact"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="col-6">
            <div className="expand-back">
              <img src="/assets/images/heroMobile/back1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
