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
          className="book-appointment-form__modal"
        >
          <div className="book-appointment-form__modal-image">
            {/* Desktop Image */}
            <img src={formLogo} alt="modal" className="book-appointment-form__desktop-image" />
            {/* Mobile Image */}
            <img
              src={bookAppointmentmobile}
              alt="Mobile Image"
              className="book-appointment-form__mobile-image"
            />
          </div>

          <div className="book-appointment-form__form-field">
            <AiOutlineClose
              className="book-appointment-form__closeIcon"
              onClick={() => {
                resetFields();
                setShowForm(false);
              }}
            />

            <div className="book-appointment-form__form-content">
              {isSubmitted ? (
                <div className="book-appointment-form__thank-you-message">
                  <img
                    src={bookAppointmenttick}
                    alt="Thank You"
                    className="book-appointment-form__thank-you-image"
                  />
                  <div className="book-appointment-form__thank-you">
                    <h2 className="book-appointment-form__msg1">Thank You!</h2>
                    <p className="book-appointment-form__thanksmessage">{thankYouMessage}</p>
                    <p className="book-appointment-form__countdown-message">
                      The form will close in {countdown} seconds.
                    </p>
                  </div>
                  <div className="book-appointment-form__modal-image">
                    <img
                      src={bookAppointmentmobile}
                      alt="Mobile Image"
                      className="book-appointment-form__mobile-image"
                    />
                  </div>
                </div>
              ) : (
                <form className="book-appointment-form__form-fields" onSubmit={handleSubmit}>
                  <h2 className="book-appointment-form__form-header">Book Appointment</h2>

                  <div className="book-appointment-form__form-row-popup">
                    <div className="book-appointment-form__form-group book-appointment-form__form-name">
                      <label
                        className={errors.firstName ? "book-appointment-form__error-label" : ""}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleInputChange(setFirstName, "firstName")}
                        className={errors.firstName ? "book-appointment-form__error" : ""}
                      />
                    </div>
                    <div className="book-appointment-form__form-group book-appointment-form__form-name">
                      <label className={errors.lastName ? "book-appointment-form__error-label" : ""}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleInputChange(setLastName, "lastName")}
                        className={errors.lastName ? "book-appointment-form__error" : ""}
                      />
                    </div>
                  </div>

                  <div className="book-appointment-form__form-row-popup">
                    <div className="book-appointment-form__form-group book-appointment-form__form-contact">
                      <label className={errors.email ? "book-appointment-form__error-label" : ""}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="Email-ID"
                        value={email}
                        onChange={handleInputChange(setEmail, "email")}
                        className={errors.email ? "book-appointment-form__error" : ""}
                      />
                    </div>

                    <div className="book-appointment-form__form-group book-appointment-form__form-contact">
                      <label
                        className={errors.contactNumber ? "book-appointment-form__error-label" : ""}
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
                        className={`book-appointment-form__custom-phone-input ${
                          errors.contactNumber ? "book-appointment-form__error" : ""
                        }`}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="book-appointment-form__form-row-popup">
                    <div className="book-appointment-form__form-group">
                      <label className={errors.timeSlot ? "book-appointment-form__error-label" : ""}>
                        Preferred Time Slot *
                      </label>
                      <select
                        value={timeSlot}
                        className={errors.timeSlot ? "book-appointment-form__error" : ""}
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

                    <div className="book-appointment-form__form-group">
                      <label className={errors.date ? "book-appointment-form__error-label" : ""}>
                        Preferred Date *
                      </label>
                      <Datepicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className={errors.date ? "book-appointment-form__book-date-error" : ""}
                        minDate={addDate(new Date(), 2)}
                        filterDate={isWeekday}
                        placeholderText="Select a Date"
                      />
                    </div>
                  </div>
                  <div className="book-appointment-form__form-row-popup book-appointment-form__full-width">
                    <div className="book-appointment-form__form-group">
                      <label className={errors.service ? "book-appointment-form__error-label" : ""}>
                        Which Service you are interested in ? *
                      </label>
                      <select
                        value={service}
                        className={errors.service ? "book-appointment-form__error" : ""}
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
                  <div className="book-appointment-form__form-row-popup book-appointment-form__full-width">
                    {service === "Other" && (
                      <div className="book-appointment-form__form-group">
                        <label
                          className={errors.serviceOther ? "book-appointment-form__error-label" : ""}
                        >
                          Please Specify Your Service *
                        </label>
                        <input
                          placeholder="Please Specify Your Service"
                          type="text"
                          value={serviceOther}
                          onChange={handleInputChange(setServiceOther, "serviceOther")}
                          className={errors.serviceOther ? "book-appointment-form__error" : ""}
                        />
                      </div>
                    )}
                    {service !== "Other" && (
                      <div className="book-appointment-form__form-group">
                        <label>Comments (Optional)</label>
                        <input
                          placeholder="Comments"
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                  <button className="book-appointment-form__Submitbutton" type="submit">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="book-appointment-form__booking-from-background-overlay"></div>
      </>
    )}
  </>
);
}



export default BookAppointmentModel;


