import "../../../styles/pages/common/ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="pb-4 pb-mb-5">
      <div className="Contact-Us px-4 px-md-5 pt-4 pt-md-5">
        <div className="pt-3">
          <p className="mb-0 info-tag-c">CONTACT US</p>
          <h3>BETTER YET, SEE US IN PERSON</h3>
        </div>
      </div>

      <div className="row g-0 contact-row pb-5">
        <div className="col-md-6">
          <div className="mx-4 mx-md-5">
            <div className="Form-Fields px-4 py-4 px-md-5 py-md-5">
              <form action="">
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

                <button type="submit" className="mt-2 submit-Button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="contact-description px-4 pt-3 px-md-0 pt-md-0 pe-md-5">
            <p>
              We truly appreciate and love our customers, and we warmly welcome
              you to visit us in person during our normal business hours to
              connect and receive assistance.
            </p>

            <button className="mb-4 py-2">
              <i class="bi bi-whatsapp"></i>&nbsp;&nbsp;Message us on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
