import React from "react";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";
import StudyStepsInvolved from './StudyStepsInvolved.jsx'
import StudyCircle from './StudyCircle.jsx'

export default function PR() {
  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        <SiteMapMenu type="ST" h1="Study In Canada"></SiteMapMenu>
        
        <div class="pages-content-div">
        <div class="pages-content-text-wrapper">
          <div className="pages-current-page-link">
            <a href="/">Home</a>
            {" > "}Study
            {" > "}Study In Canada
          </div>
          <div class="pages-header">Study In Canada</div>

          Studying in Canada holds great appeal for international students for various reasons. Firstly, Canada's reputation as a secure and stable nation is a key factor. Secondly, the top-notch education system, known for its excellence and diversity, is a significant attraction. Lastly, Canada's inclusive and tolerant society also plays a vital role in the decision-making process.
        </div>
        <StudyStepsInvolved/>
        <StudyCircle/>
      </div>
      </div>

    </div>
  );
}
