import React, { useState, useEffect } from "react";
import "../../../styles/BookAppointmentModal.css";
import "react-toastify/dist/ReactToastify.css";
import formLogo from "../../../Assets/formLogo.png";
import { toast } from "react-toastify";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Datepicker from "tailwind-datepicker-react";
//import SubmitPopUp from '../../AssessmentForm/Ui/SubmitPopUp';

const BookAppointmentModel = ({
  showForm,
  setShowForm,
  dataForm,
  setShowPopUp,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showForm]);

  const handleOutsideClick = (event) => {
    if (event.target.closest(".modal") === null) {
      setShowForm(false);
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

  const options = {
    title: "Preferred Date Slot",
    autoHide: false,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: {
      background: "bg-white",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    language: "en",
    defaultDate: new Date(),
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    darkMode: true
  };

  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    setShow(false); // Close the date picker
  };

  const handleClose = (state) => {
    setShow(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObject = {};

    if (!firstName) {
      errorObject.firstName = "First Name is required";
    }
    if (!lastName) {
      errorObject.lastName = "Last Name is required";
    }
    if (!email) {
      errorObject.email = "Email Address is required";
    }
    if (!contactNumber) {
      errorObject.contactNumber = "Contact Number is required";
    }
    if (!timeSlot) {
      errorObject.timeSlot = "Time Slot is required";
    }
    if (!service) {
      errorObject.service = "Service is required";
    }

    // Custom condition for timeSlot and selectedDate
    if (selectedDate === "Select Date") {
      errorObject.timeSlot =
        "Time Slot cannot be 'Anytime' if a date is selected";
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
      toast.error("Please fill out all required fields.");
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setContactNumber("");
      setTimeSlot("");
      setService("");
      setServiceOther("");
      setComments("");
      setErrors({});

      // toast.success('You have successfully booked your appointment!');
      setShowForm(false);
    }
    handleFormSubmit();
  };

  const handleFormSubmit = async () => {
    const formData = {
      firstName,
      lastName,
      email,
      contactNumber,
      timeslot: timeSlot,
      service,
      serviceOther,
      comments,
      date: selectedDate,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/book_appointment`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        toast.success("You have successfully submited your form!");

        setShowPopUp(true);
      }
    } catch (error) {
      toast.error("Internal server errror!");
    }
  };
  return (
    <>
      {showForm && (
        <>
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              borderRadius: "15px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              inset: "0px",
              zIndex: "99",
              outline: "2px solid transparent",
              outlineOffset: "2px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
            className="modal"
          >
            <div className="form-field">
              <AiOutlineClose
                className="closeIcon"
                onClick={() => setShowForm(false)}
              />
              <div
                className="icon-heading"
                style={{ display: "flex", marginBottom: "1rem" }}
              >
                <img src={formLogo} alt="form logo" />
                <h2>Book Your Appointment</h2>
              </div>
              <form className="form-fields" onSubmit={handleSubmit}>
                <div className="form-row-popup">
                  <div className="form-group">
                    <label className={errors.firstName ? "error-label" : ""}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleInputChange(setFirstName, "firstName")}
                      className={errors.firstName ? "error" : ""}
                    />
                  </div>

                  <div className="form-group">
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
                  <div className="form-group">
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

                  <div className="form-group">
                    <label
                      className={errors.contactNumber ? "error-label" : ""}
                    >
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactNumber}
                      onChange={handleInputChange(
                        setContactNumber,
                        "contactNumber"
                      )}
                      className={errors.contactNumber ? "error" : ""}
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
                    >
                      <option value="">Select Time Slot</option>
                      <option value="9 A.M. - 12 P.M.">9 A.M. - 12 P.M.</option>
                      <option value="12 P.M. - 3 P.M.">12 P.M. - 3 P.M.</option>
                      <option value="3 P.M. - 6 P.M.">3 P.M. - 6 P.M.</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  <div className="form-group-date">
                    <label>Preferred Date</label>
                    <Datepicker
                      options={options}
                      onChange={handleChange}
                      show={show}
                      setShow={handleClose}
                    />
                  </div>
                </div>
                <div className="form-row-popup">
                  <div className="form-group">
                    <label className={errors.service ? "error-label" : ""}>
                      Which Service you are interested in ? *
                    </label>
                    <select
                      value={service}
                      className={errors.service ? "error" : ""}
                      onChange={handleInputChange(setService, "service")}
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
                  {service === "Other" && (
                    <div>
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
                    <div>
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
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default BookAppointmentModel;
