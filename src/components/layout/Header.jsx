import "../../styles/layout/Header.css";
import Logo from "../../assets/images/logos/synerisLogo.jpg";
import { ActionButton } from "../shared/ActionButton";
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
        <img src={Logo} alt="syneris-logo" />
      </div>

      <div className="d-none d-md-block">
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
          <div className="ms-4">
            <ActionButton name="Connect" />
          </div>
        </div>
      </div>

      <div className="d-md-none">
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
        <div className="Desktop-Navigations-mobile px-4 py-4">
          <a
            className={route === "" ? "active-route" : "deactive-route"}
            href="/"
          >
            Home
          </a>
          <a
            className={
              route === "booking" ? "active-route mt-2" : "deactive-route mt-2"
            }
            href="/booking"
          >
            Booking
          </a>
          <a
            className={
              route === "about" ? "active-route mt-2" : "deactive-route mt-2"
            }
            href="/about"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};
