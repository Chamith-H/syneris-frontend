import { useState, useRef, useEffect } from "react";
import "../../../../styles/pages/booking/contents/BookingOption.css";
import Calendar from "react-calendar";
import bookingSide from "../../../../assets/images/booking/bookingSide.png";
import { Loader } from "../../../shared/Loader";
import moment from "moment-timezone";
import { Api } from "../../../../Api";
import { ToastContainer, toast } from "react-toastify";

export const BookingOption = () => {
  const [formData, setFormData] = useState({
    bookedDate: "",
    bookedTime: "",
    name: "",
    email: "",
    phone: "",
    timeZone: "",
  });

  const modalRef = useRef(null);

  const definedTimes = [
    { timeStr: "9.00 AM", time: "9.00" },
    { timeStr: "9.30 AM", time: "9.30" },
    { timeStr: "10.00 AM", time: "10.00" },
    { timeStr: "10.30 AM", time: "10.30" },
    { timeStr: "11.00 AM", time: "11.00" },
    { timeStr: "11.30 AM", time: "11.30" },
    { timeStr: "12.00 PM", time: "12.00" },
    { timeStr: "12.30 PM", time: "12.30" },
    { timeStr: "1.00 PM", time: "13.00" },
    { timeStr: "1.30 PM", time: "13.30" },
    { timeStr: "2.00 PM", time: "14.00" },
    { timeStr: "2.30 PM", time: "14.30" },
    { timeStr: "3.00 PM", time: "15.00" },
    { timeStr: "3.30 PM", time: "15.30" },
    { timeStr: "4.00 PM", time: "16.00" },
  ];

  const [timeSlots, setTimeSlots] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTimeSlots(definedTimes);
  }, []);

  const [currentModal, setCurrentModal] = useState(null);

  const changeValue = (e) => {
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();

    setCurrentModal(modal);

    setSubmitted(false);
    setSaving(false);

    const currentTimeZone = moment.tz.guess();

    const selectedDate = moment(e);
    const currentDate = selectedDate.tz(currentTimeZone).format("YYYY-MM-DD");

    setFormData({
      bookedTime: "",
      name: "",
      email: "",
      phone: "",
      timeZone: currentTimeZone,
      bookedDate: currentDate,
    });
  };

  const hidePopup = () => {
    currentModal.hide();
  };

  const submitFormData = async (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === "" ||
      formData.bookedTime === ""
    ) {
      return;
    }

    setSaving(true);

    const api = new Api();

    try {
      const response = await api.appointment(formData);

      if (response) {
        hidePopup();
        setSaving(false);

        toast.success(response.data.message, {
          style: {
            fontFamily: "R4",
            fontSize: "13px",
            color: "green",
          },
          autoClose: 40000,
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
    <div className="BookingOption ps-4 pt-4 ps-md-5 pt-md-5">
      <div className="pt-4">
        <p className="mb-0 info-tag">BOOKING</p>
        <h3 className="main-t-all">
          SCHEDULE YOUR FREE EXPLORATORY CALL TODAY!
        </h3>

        <ul className="Booking-points">
          <li>
            We will work with you to understand the challenges your business
            faces, from inefficient processes to gaps in technology, and
            pinpoint key areas for improvement.
          </li>

          <li>
            Together, we’ll evaluate where your organization is on its path to
            digital transformation. Whether you're just starting or need
            guidance to move forward, we'll assess your current technologies,
            processes, and strategies.
          </li>

          <li>
            Based on our insights, we’ll create a customized digital
            transformation roadmap, outlining the steps, tools, and strategies
            needed to drive efficiency, improve customer experience, and achieve
            sustainable growth.
          </li>
        </ul>
        <div className="row g-0 mt-5">
          <div className="col-12 col-lg-6 pb-5">
            <div className="pb-4 pe-4 pe-md-5 pe-lg-0">
              <Calendar
                onChange={(e) => changeValue(e)}
                value={formData.bookedDate}
              />
            </div>
          </div>

          <div className="col-lg-6  ps-md-4">
            <div className="side-img-book">
              <img src={bookingSide} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center">
              <div className="modal-title">
                <h6 className="bookingDate mb-1">{formData.bookedDate}</h6>
                <h5 className="modal-title-x mt-0 mb-0">BOOK AN APPOINTMENT</h5>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-book">
                <form onSubmit={submitFormData}>
                  <div className="form-input-book">
                    <label htmlFor="">Select a Time</label>

                    <div className="row gx-4 gy-2 mt-0">
                      {timeSlots.map((slot) => (
                        <div className="col-4">
                          <button
                            onClick={() =>
                              setFormData({
                                ...formData,
                                bookedTime: slot.time,
                              })
                            }
                            className={
                              formData.bookedTime !== "" &&
                              formData.bookedTime === slot.time
                                ? "time-button-selected py-2"
                                : "time-button py-2"
                            }
                            type="button"
                          >
                            {slot.timeStr}
                          </button>
                        </div>
                      ))}
                    </div>
                    {formData.bookedTime === "" && submitted && (
                      <span className="form-error">* Email is required</span>
                    )}
                  </div>

                  <div className="form-input-book mt-3">
                    <label htmlFor="">Full Name</label>
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

                  <div className="form-input-book mt-2">
                    <label htmlFor="">Email</label>
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

                  <div className="form-input-book mt-2">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter your phone umber"
                      value={formData.phone}
                      required={true}
                      disabled={saving}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />

                    {formData.phone === "" && submitted && (
                      <span className="form-error">
                        * Phone number is required
                      </span>
                    )}
                  </div>

                  <div className="d-flex justify-content-end align-items-center button-book mt-2">
                    <button
                      onClick={() => setSubmitted(true)}
                      className="px-4"
                      type="submit"
                      disabled={saving}
                    >
                      {!saving && <span>Book Now</span>}
                      {saving && (
                        <div className="d-flex justify-content-center align-items-center">
                          <Loader />
                          <span className="ms-2">Booking</span>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
