import React from "react";
import "./AquarianServices.css";

import Permanent_immigration_service from "./Services/Permanent_immigration_service.jsx";
import Specialized_service from "./Services/Specialized_service.jsx";
import Visa_immigration_service from "./Services/Visa_immigration_service.jsx";
import Visa_Solutions_for_Companies from "./Services/Visa_Solutions_for_Companies.jsx";

const App = () => {


  return (
    <div className="aquarian-services-container">
      <div className="aquarian-services-container-inner">
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
        <Visa_Solutions_for_Companies/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default App;
