import React, { useState, useRef, useEffect } from "react";
import "./AquarianServices.css";

import Permanent_immigration_service from "./Services/Permanent_immigration_service.jsx";
import Specialized_service from "./Services/Specialized_service.jsx";
import Visa_immigration_service from "./Services/Visa_immigration_service.jsx";
import aquarian_service_header_img from "../../../Assets/aquarian_service_header.png";

const App = () => {
  // State and refs used in the component
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const expressEntryRef = useRef(null);
  const pnpRef = useRef(null);
  const sponsorshipRef = useRef(null);
  const studentVisaRef = useRef(null);
  const visitorVisaRef = useRef(null);
  const workVisaRef = useRef(null);
  const businessVisaRef = useRef(null);
  const startupVisaRef = useRef(null);
  const investorsRef = useRef(null);
  const superVisaRef = useRef(null);
  const visaExtensionsRef = useRef(null);
  const refusalsRef = useRef(null);
  const interviewPreparationRef = useRef(null);
  const postArrivalSupportRef = useRef(null);
  const citizenshipApplicationRef = useRef(null);

  const handleAppointmentClick = () => {
    // Handle appointment click logic here
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aquarian-services-container">
      <div className="aquarian-services-container-inner">
        <img
          src={aquarian_service_header_img}
          alt="header"
          className="aquarian-service-header-img"
        />
        <div className="aquarian-services-container-inner-content">
          <div className="aquarian-services-header">
            <p>
              Services offered by{" "}
              <span className="aquarian-services-header-text">
                Aquarian Immigration
              </span>
            </p>
          </div>

          <div className="aquarian-services-inner-container">
            <Permanent_immigration_service />
            <Visa_immigration_service />
            <Specialized_service />
          </div>

          {/* Button and Additional Content */}
          <button
            style={{ marginLeft: "3rem" }}
            className="buttonGet"
            onClick={handleAppointmentClick}
          >
            Get Started
          </button>
          <div className="content-below-services">
            <div className="text-area">
              <h2 ref={expressEntryRef}>
                Express Entry
                <div
                  style={{
                    width: isMobile ? "85px" : "154px",
                    backgroundColor: "#020183",
                  }}
                  className="line"
                ></div>
              </h2>
              <p>
                Express entry is the fastest and the most popular route to PR...
              </p>
              {/* Continue with the rest of the content similarly */}
            </div>
            <img src={isMobile ? BelowMobile : RightBackground} alt="" />
          </div>
          <ToastContainer />
          <BookAppointmentModel
            showForm={showAppointmentModel}
            setShowForm={setShowAppointmentModel}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
