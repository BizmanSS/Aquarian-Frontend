import React, { useState, useEffect } from "react";
import "../../../styles/BookAppointmentModal.css";
import formLogo from "../../../Assets/bookAppointment.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { AiOutlineClose } from "react-icons/ai";
import bookAppointmenttick from "../../../Assets/BookAppointmentTick.gif";
import bookAppointmentmobile from "../../../Assets/BookAppointmentMobile.png";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookAppointmentModel = ({ showForm, setShowForm, setShowPopUp }) => {
  const [firstName, setFirstName] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [comments, setComments] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContactNumber("");
    setTimeSlot("");
    setService("");
    setServiceOther("");
    setComments("");
    setSelectedDate(null);
    setErrors({});
    setIsSubmitted(false);
    setThankYouMessage("");
    setCountdown(10);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorObject = {};

    // Validate fields
    if (!firstName) errorObject.firstName = "First Name is required";
    if (!lastName) errorObject.lastName = "Last Name is required";
    if (!email) errorObject.email = "Email Address is required";
    if (!contactNumber)
      errorObject.contactNumber = "Contact Number is required";
    if (!timeSlot) errorObject.timeSlot = "Time Slot is required";
    if (!service) errorObject.service = "Service is required";
    if (!selectedDate) errorObject.date = "Date is required";

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      await onSubmit();
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("contactNumber", contactNumber);
    formData.append("timeSlot", timeSlot);
    formData.append("service", service);
    formData.append("serviceOther", serviceOther);
    formData.append("comments", comments);
    formData.append("date", selectedDate);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setThankYouMessage(
        "Thank you For booking an appointment with us! We will get back to you shortly."
      );
      setIsSubmitted(true);

      let timer = 10;
      setCountdown(timer);
      const countdownInterval = setInterval(() => {
        timer -= 1;
        setCountdown(timer);
        if (timer <= 0) {
          clearInterval(countdownInterval);
          resetFields();
          setShowForm(false);
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setErrors((prevErrors) => ({
      ...prevErrors,
      date: "",
    }));
  };

  const addDate = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <>
      {showForm && (
        <>
          <div
            onClick={(event) => event.stopPropagation()}
            className="modal md:!overflow-visible"
          >
            <div className="modal-image">
              {/* Desktop Image */}
              <img src={formLogo} alt="modal" className="desktop-image" />
              {/* Mobile Image */}
              <img
                src={bookAppointmentmobile}
                alt="Mobile Image"
                className="mobile-image"
              />
            </div>

            <div className="form-field">
              <AiOutlineClose
                className="closeIcon"
                onClick={() => {
                  resetFields();
                  setShowForm(false);
                }}
              />

              <div className="form-content">
                {isSubmitted ? (
                  <div className="thank-you-message">
                    <img
                      src={bookAppointmenttick}
                      alt="Thank You"
                      className="thank-you-image"
                    />
                    <div className="thank-you">
                      <h2 className="msg1">Thank You!</h2>
                      <p className="thanksmessage">{thankYouMessage}</p>
                      <p className="countdown-message">
                        The form will close in {countdown} seconds.
                      </p>
                    </div>
                    
                  </div>
                ) : (
                  <form className="form-fields" onSubmit={handleSubmit}>
                    <h2 className="form-header">Book Appointment</h2>

                    <div className="form-row-popup">
                      <div className="form-group form-name">
                        <label
                          className={errors.firstName ? "error-label" : ""}
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={handleInputChange(
                            setFirstName,
                            "firstName"
                          )}
                          className={errors.firstName ? "error" : ""}
                        />
                      </div>
                      <div className="form-group form-name">
                        <label className={errors.lastName ? "error-label" : ""}>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={handleInputChange(setLastName, "lastName")}
                          className={errors.lastName ? "error" : ""}
                        />
                      </div>
                    </div>

                    <div className="form-row-popup">
                      <div className="form-group form-contact">
                        <label className={errors.email ? "error-label" : ""}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="Email-ID"
                          value={email}
                          onChange={handleInputChange(setEmail, "email")}
                          className={errors.email ? "error" : ""}
                        />
                      </div>

                      <div className="form-group form-contact">
                        <label
                          className={errors.contactNumber ? "error-label" : ""}
                          id="contact-label"
                        >
                          Contact Number *
                        </label>
                        <PhoneInput
                          defaultCountry="in"
                          value={contactNumber}
                          onChange={(phone) => {
                            setContactNumber(phone);
                            if (errors.contactNumber) {
                              setErrors((prevErrors) => ({
                                ...prevErrors,
                                contactNumber: "",
                              }));
                            }
                          }}
                          className={`custom-phone-input ${
                            errors.contactNumber ? "error" : ""
                          }`}
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="form-row-popup">
                      <div className="form-group">
                        <label className={errors.timeSlot ? "error-label" : ""}>
                          Preferred Time Slot *
                        </label>
                        <select
                          value={timeSlot}
                          className={errors.timeSlot ? "error" : ""}
                          onChange={handleInputChange(setTimeSlot, "timeSlot")}
                          id="date"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="9 A.M. - 12 P.M.">
                            9 A.M. - 12 P.M.
                          </option>
                          <option value="12 P.M. - 3 P.M.">
                            12 P.M. - 3 P.M.
                          </option>
                          <option value="3 P.M. - 6 P.M.">
                            3 P.M. - 6 P.M.
                          </option>
                          <option value="Anytime">Anytime</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className={errors.date ? "error-label" : ""}>
                          Preferred Date *
                        </label>
                        <Datepicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          className={errors.date ? "book-date-error" : ""}
                          minDate={addDate(new Date(), 2)}
                          filterDate={isWeekday}
                          placeholderText="Select a Date"
                          disabledKeyboardNavigation
                        />
                      </div>
                    </div>
                    <div className="form-row-popup full-width">
                      <div className="form-group">
                        <label className={errors.service ? "error-label" : ""}>
                          Which Service you are interested in ? *
                        </label>
                        <select
                          value={service}
                          className={errors.service ? "error" : ""}
                          onChange={handleInputChange(setService, "service")}
                          id="srvc"
                        >
                          <option value="">Select Service</option>
                          <option value="Permanent Immigration">
                            Permanent Immigration
                          </option>
                          <option value="Business visit">Business visit</option>
                          <option value="Study">Study</option>
                          <option value="Work">Work</option>
                          <option value="Visit">Visit</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row-popup full-width">
                      {service === "Other" && (
                        <div className="form-group">
                          <label
                            className={errors.serviceOther ? "error-label" : ""}
                          >
                            Please Specify Your Service *
                          </label>
                          <input
                            placeholder="Please Specify Your Service"
                            type="text"
                            value={serviceOther}
                            onChange={handleInputChange(
                              setServiceOther,
                              "serviceOther"
                            )}
                            className={errors.serviceOther ? "error" : ""}
                          />
                        </div>
                      )}
                      {service !== "Other" && (
                        <div className="form-group">
                          <label>Comments (Optional)</label>
                          <input
                            placeholder="Comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                    <button className="Submitbutton" type="submit">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="booking-from-background-overlay"></div>
        </>
      )}
    </>
  );
};

export default BookAppointmentModel;
