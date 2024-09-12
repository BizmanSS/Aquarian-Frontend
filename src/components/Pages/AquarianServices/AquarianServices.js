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
    </div>
    </div>
    </div>
  );
};

export default App;
