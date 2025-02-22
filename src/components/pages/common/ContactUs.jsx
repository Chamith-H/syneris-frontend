import "../../../styles/pages/common/ContactUs.css";
import whatsapp from "../../../assets/images/common/whats.png";

export const ContactUs = () => {
  return (
    <div className="Contact-Us p-4 px-md-5 py-md-5">
      <div className="py-4">
        <div className="row">
          <div className="col-sm-6 pe-5">
            <p className="mb-0 info-tag">CONTACT US</p>
            <h3>BETTER YET, SEE US IN PERSON</h3>

            <p className="con-des">
              We truly appreciate and love our customers, and we warmly welcome
              you to visit us in person during our normal business hours to
              connect and receive assistance.
            </p>

            <div className="row gx-3 h-100 card-img-row mt-4 pt-2">
              <div className="d-none d-lg-block col-lg-6 col-xl-3">
                <div className="contact-side-back-img-1"></div>
              </div>

              <div className="col-3 d-none d-xl-block">
                <div className="contact-side-back-img-2"></div>
              </div>

              <div className="d-none d-lg-block col-12 col-lg-6">
                <div className="contact-side-back-img-3 ">
                  <div className="align-c-back px-4 d-flex flex-column justify-content-center align-items-center pb-lg-4 h-100">
                    <img src={whatsapp} alt="" />
                    <a href="">Message us on WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <form action="" className="Form-Fields ps-md-5">
              <div className="d-flex flex-column">
                <label>Name</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="d-flex flex-column mt-2">
                <label>Email</label>
                <input
                  className="field-input"
                  type="text"
                  placeholder="Enter email address"
                />
              </div>

              <div className="d-flex flex-column mt-2">
                <label>Message</label>
                <textarea
                  className="text-area"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="mt-2 submit-Button px-3">
                  Send&nbsp;&nbsp;<i class="bi bi-box-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
