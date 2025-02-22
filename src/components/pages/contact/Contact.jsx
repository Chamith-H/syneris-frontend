import "../../../styles/pages/contact/Contact.css";
import b1Logo from "../../../assets/images/home/sapB1.png";
import sapCom from "../../../assets/images/contact/contactMan.png";
import sapMobil from "../../../assets/images/sap/sapMobiBack.png";
import whatsapp from "../../../assets/images/common/whats.png";
import "../../../styles/pages/contact/Contact.css";

import facebook from "../../../assets/images/contact/facebook.png";
import linkedin from "../../../assets/images/contact/linkedin.png";
import wtsapp from "../../../assets/images/contact/wtsap.png";

export const Contact = () => {
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

                <button className="px-4 py-2 mt-4">
                  <img src={whatsapp} alt="" />
                  <p className="mb-0 ms-2">Message us on WhatsApp</p>
                </button>
              </div>
            </div>

            <div className="d-flex d-lg-none w-100 justify-content-center">
              <img className="sap-mobi-img" src={sapMobil} alt="" />
            </div>

            <div className="d-lg-flex justify-content-end align-items-end pt-lg-5 d-none ">
              <img className="sap-com-img" src={sapCom} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Contact-m-Options px-4 py-4 px-md-5 py-md-5">
        <div className="row">
          <div className="col-6">
            <div className="row gy-4">
              <div className="col-6">
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

              <div className="col-6">
                <div className="phone-no">
                  <h6>Phone Number</h6>
                  <p>
                    +94 77 2268415 <br />
                    +94 77 1510709
                  </p>
                </div>
              </div>

              <div className="col-6">
                <div className="social-media">
                  <h6>Social Media</h6>

                  <div className="d-flex s-images">
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={wtsapp} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="our-contacts-2">
                  <div className="email">
                    <h6>Email</h6>
                    <p>info@syneris.solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6"></div>
        </div>
      </div>

      <div className="contact-m-form px-4 py-4 px-md-5 py-md-5">
        <form action="">
          <p className="mb-0 info-tag">GET IN TOUCH</p>
          <h3>SEND US A MESSAGE TODAY</h3>
          <div className="divBorder"></div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="input-sec mt-2">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
            </div>

            <div className="col-6">
              <div className="input-sec mt-2">
                <label>Name</label>
                <input type="text" placeholder="Enter your email" />
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
              ></textarea>
            </div>
          </div>

          <div className="col-12 d-flex justify-content-end mt-3">
            <button className="px-3">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
