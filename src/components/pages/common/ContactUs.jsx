import "../../../styles/pages/common/ContactUs.css";
import whatsapp from "../../../assets/images/common/whats.png";
import { useState } from "react";
import { Api } from "../../../Api";
import { Loader } from "../../shared/Loader";
import { ToastContainer, toast } from "react-toastify";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [saving, setSaving] = useState(false);

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
    <div className="Contact-Us p-4 px-md-5 py-md-5">
      <div className="py-4">
        <div className="row">
          <div className="col-sm-6 pe-5">
            <p className="mb-0 info-tag">CONTACT US</p>
            <h3 className="main-t-all">BETTER YET, SEE US IN PERSON</h3>

            <p className="con-des-p">
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
            <form onSubmit={submitFormData} className="Form-Fields ps-md-5">
              <div className="d-flex flex-column">
                <label>Name</label>
                <input
                  className="field-input"
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

              <div className="d-flex flex-column mt-2">
                <label>Email</label>
                <input
                  className="field-input"
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

              <div className="d-flex flex-column mt-2">
                <label>Message</label>
                <textarea
                  className="text-area"
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

              <div className="d-flex justify-content-end mt-3">
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
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
