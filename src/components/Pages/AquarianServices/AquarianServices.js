import React, { useState, useRef, useEffect } from "react";
import "./AquarianServices.css";

import Permanent_immigration_service from "./Services/Permanent_immigration_service.jsx.jsx";
import Specialized_service from "./Services/Specialized_service.jsx";
import Visa_immigration_service from "./Services/Visa_immigration_service.jsx";
import aquarian_service_header_img from "../../../Assets/aquarian_service_header.png";

const App = () => {

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
          <span class="aquarian-services-header-text">
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
