import React, { useState } from "react";
import "../../../styles/ContactUs.css";
import { useMobile } from "../../globalComponents/MobileContext/IsMobileContext";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import Datepicker from "react-datepicker";
import BannerPages from "../Banner/BannerPages";
const ContactUsPage = () => {
  const { isMobile } = useMobile();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [service, setService] = useState("");
  const [serviceOther, setServiceOther] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const addDate = (date, days) => {
    date.setDate(date.getDate() + days)
    return date
  }

  const [selectedDate, setSelectedDate] = useState(null)
  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleDateChange = (selectedDate) => {
    setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
    setSelectedDate(selectedDate);
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
      date: selectedDate
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
      }
    } catch (error) {
      toast.error("Internal server errror!");
    }
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
    if (service === "Other" && !serviceOther) {
      errorObject.serviceOther = "Please specify your service";
    }
    if (!selectedDate) {
      errorObject.date = "Date is required";
    }

    if (Object.keys(errorObject).length > 0) {
      setErrors(errorObject);
    } else {
      handleFormSubmit();
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
    }
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <div style={{ background: "#FFF" }}>
      <BannerPages
        title={"Contact Us"}
        link={"contact-us"}
        description={"Contact Us"}
      />

      <div className="registration-form">
        {!isMobile && (
          <div className="contact-use-address-menu">
            <div className="address-content">
              <div className="contact-us-address-wraper">
                <h2 className="address-heading">Address</h2>
                <a
                  href="https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu"
                  className="address"
                >
                  122A, Suncity Success Tower, Golf Course Ext Rd, Sector 65,
                  Gurugram, Haryana 122011
                </a>
                <br /> <br />
                <h2 className="address-heading">Email</h2>
                <a href="mailto:enq@iaquarian.com" className="address">
                  enq@iaquarian.com
                </a>
                <br /> <br />
                <h2 className="address-heading">Phone</h2>
                <a href="tel:+919810892192" className="address">
                  +91- 9810892192
                </a>
                <br />
                <a href="tel:+919810890517" className="address">
                  +91- 9810890517
                </a>
                <br />
                <a href="tel:+911244671300" className="address">
                  +91- 1244671300
                </a>
              </div>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit} className="form-contact-us">
          <div className="form-row">
            <div className="form-group">
              <label>
                First Name<x style={{ color: "red" }}>*</x>
              </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange(setFirstName, "firstName")}
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && (
                <div className="error-message">{errors.firstName}</div>
              )}
            </div>

            <div className="form-group">
              <label>
                Last Name<x style={{ color: "red" }}>*</x>{" "}
              </label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                className={errors.lastName ? "error" : ""}
                onChange={handleInputChange(setLastName, "lastName")}
              />
              {errors.lastName && (
                <div className="error-message">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Email Address<x style={{ color: "red" }}>*</x>
              </label>
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={handleInputChange(setEmail, "email")}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>
                Contact Number<x style={{ color: "red" }}>*</x>
              </label>
              <input
                type="tel"
                placeholder="+91"
                value={contactNumber}
                onChange={handleInputChange(setContactNumber, "contactNumber")}
                className={errors.contactNumber ? "error" : ""}
              />
              {errors.contactNumber && (
                <div className="error-message">{errors.contactNumber}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Preferred Time Slot<x style={{ color: "red" }}>*</x>
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
              {errors.timeSlot && (
                <div className="error-message">{errors.timeSlot}</div>
              )}
            </div>
            <div className="form-date">
              <label>
                Preferred Date<x style={{ color: "red" }}>*</x></label>
              <Datepicker
                selected={selectedDate}
                onChange={handleDateChange}
                className={errors.date ? "error" : ""}
                minDate={addDate(new Date(), 2)}
                filterDate={isWeekday}
                placeholderText="Select a Date"
              />
              {errors.date && (
                <div className="error-message">{errors.date}</div>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Which Service you are interested in?
                <x style={{ color: "red" }}>*</x>
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

              {errors.service && (
                <div className="error-message">{errors.service}</div>
              )}
            </div>
            {service === "Other" && (
              <div className="form-group">
                <label>
                  Please Specify Your Service<x style={{ color: "red" }}>*</x>
                </label>
                <input
                  type="text"
                  placeholder="Please Specify Your Service"
                  value={serviceOther}
                  onChange={handleInputChange(setServiceOther, "serviceOther")}
                  className={errors.serviceOther ? "error" : ""}
                />
                {errors.serviceOther && (
                  <div className="error-message">{errors.serviceOther}</div>
                )}
              </div>
            )}
            {service !== "Other" && (
              <div className="form-group">
                <label>Comments (Optional)</label>
                <input
                  value={comments}
                  placeholder="Comments"
                  onChange={handleInputChange(setComments, "comments")}
                />
              </div>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
