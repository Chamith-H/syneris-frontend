import "../../../styles/pages/contact/Contact.css";
import b1Logo from "../../../assets/images/home/sapB1.png";
import sapCom from "../../../assets/images/contact/contactMan.png";
import sapMobil from "../../../assets/images/sap/sapMobiBack.png";
import whatsapp from "../../../assets/images/common/whats.png";
import "../../../styles/pages/contact/Contact.css";

import facebook from "../../../assets/images/contact/facebook.png";
import linkedin from "../../../assets/images/contact/linkedin.png";
import wtsapp from "../../../assets/images/contact/wtsap.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet.gridlayer.googlemutant";
import L from "leaflet";
import { useState } from "react";
import { Api } from "../../../Api";
import { Loader } from "../../shared/Loader";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [saving, setSaving] = useState(false);

  const lng = 79.8791;
  const lat = 6.94071;

  const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Red marker icon URL
    iconSize: [20, 32], // Adjust size if needed
    iconAnchor: [16, 32], // Center the icon
    popupAnchor: [0, -32], // Position the popup correctly
  });

  const submitFormData = async (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return;
    }

    setSaving(true);

    const api = new Api();

    try {
      const response = await api.contact(formData);

      if (response) {
        setSaving(false);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setSubmitted(false);
        setSaving(false);

        toast.success(response.data.message, {
          style: {
            fontFamily: "R4",
            fontSize: "13px",
            color: "green",
          },
        });
      }
    } catch (err) {
      setSaving(false);
      toast.error(err.response.data.message, {
        style: {
          fontFamily: "R4",
          fontSize: "13px",
          color: "red",
        },
      });
    }
  };

  return (
    <div className="Contact">
      <div className="ContactIntro">
        <div className="Contact-Background">
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
            <div className="py-5 px-4 ps-md-5 pe-md-4">
              <div className="py-4">
                <h5>CONTACT US</h5>
                <p className="mb-0">
                  We deeply appreciate and value your trust in us, and we are
                  committed to providing you with the best service possible.
                  Whether you have questions, need assistance, or simply want to
                  connect with us, we warmly welcome you to visit us in person
                  during our normal business hours.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-end align-items-end pt-lg-5">
              <img className="contact-img" src={sapCom} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Contact-m-Options pt-5 px-4 ps-md-5 pe-md-0">
        <div className="row g-0">
          <div className="col-md-6 py-4 py-md-5">
            <div className="row gy-4 pb-4 pb-md-5">
              <div className="col-sm-6">
                <div className="address">
                  <h6>Visit Us</h6>
                  <p>
                    736 Orion Tower,
                    <br />
                    Dr. Danister De Silva Mawatha,
                    <br />
                    Colombo 00900,
                    <br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="phone-no">
                  <h6>Phone Number</h6>
                  <p>
                    +94 77 2268415 <br />
                    +94 77 1510709
                  </p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="social-media">
                  <h6>Social Media</h6>

                  <div className="d-flex s-images">
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={wtsapp} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="our-contacts-2">
                  <div className="email">
                    <h6>Email</h6>
                    <p>info@syneris.solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pt-md-3 position-relative">
            <div className="locationMap">
              <MapContainer
                center={[lat, lng]}
                zoom={14}
                style={{ height: "100%", width: "100%" }}
              >
                {/* Tile Layer */}
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" />

                {/* Marker */}
                <Marker position={[lat, lng]} icon={redIcon}>
                  <Popup>
                    Latitude: {lat}, Longitude: {lng}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-m-form px-4 py-4 px-md-5 py-md-5">
        <form onSubmit={submitFormData} className="py-4">
          <p className="mb-0 info-tag">GET IN TOUCH</p>
          <h3 className="con-des">SEND US A MESSAGE TODAY</h3>
          <div className="divBorder"></div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="input-sec mt-2">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  required={true}
                  disabled={saving}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {formData.name === "" && submitted && (
                  <span className="form-error">* Name is required</span>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-sec mt-2">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={formData.email}
                  required={true}
                  disabled={saving}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {formData.email === "" && submitted && (
                  <span className="form-error">* Email is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="input-sec mt-2">
              <label>Message</label>
              <textarea
                name=""
                id=""
                placeholder="Enter your message"
                value={formData.message}
                required={true}
                disabled={saving}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {formData.message === "" && submitted && (
                <span className="form-error">* Message is required</span>
              )}
            </div>
          </div>

          <div className="col-12 d-flex justify-content-end mt-3">
            <button
              onClick={() => setSubmitted(true)}
              className="px-3"
              type="submit"
              disabled={saving}
            >
              {!saving && <span>Send</span>}
              {saving && (
                <div className="d-flex justify-content-center align-items-center">
                  <Loader />
                  <span className="ms-2">Sending</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
