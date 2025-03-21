import React from "react";
import WorkPermitBox from './WorkPermitBox.jsx'
import QLinksWorkPermitBox from './QLinksWorkPermitBox.jsx'
import WorkPermitGuideBox from './WorkPermitGuideBox.jsx'
import EligibilityCardWorkPermit from './EligibilityCardWorkPermit.jsx'
import FaqBoxWork from "./FaqBoxWork.jsx";
import ReadyToStartCard from "./ReadyToStartCard.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

export default function WorkInCanada() {
  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
      <SiteMapMenu type="W" h1="Work In Canada"></SiteMapMenu>

      <div class="pages-content-div">
        <div class="pages-content-text-wrapper">
          <div className="pages-current-page-link">
            <a href="/">Home</a>
            {" > "}Work
            {" > "}Work In Canada
          </div>
          <div class="intro-size-fix">
          <div class="pages-header">Work In Canada</div>
          A work permit is a legal document permitting a foreign national
          to engage in employment while inside of Canada. Each year, Canada
          issues about half a million work permits to temporary foreign
          workers around the world.
          <br></br>
          <br></br>
          Canada is a prime destination for many foreign nationals who are seeking
          employment opportunities. Working in Canada is also an excellent first
          step for those seeking to immigrate to the country permanently.

          </div>
          </div>
        <WorkPermitBox/>
        <QLinksWorkPermitBox/>
        <WorkPermitGuideBox/>
        <EligibilityCardWorkPermit/>
        <FaqBoxWork/>
        <ReadyToStartCard/>

      </div>
      </div>
    </div>
  );
}
