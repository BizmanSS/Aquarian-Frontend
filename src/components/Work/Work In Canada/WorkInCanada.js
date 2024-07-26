import React from "react";
import WorkPermitBox from './WorkPermitBox.jsx'
import QLinksWorkPermitBox from './QLinksWorkPermitBox.jsx'
import WorkPermitGuideBox from './WorkPermitGuideBox.jsx'
import EligibilityCardWorkPermit from './EligibilityCardWorkPermit.jsx'
import FaqBoxWork from "./FaqBoxWork.jsx";
import ReadyToStartCard from "./ReadyToStartCard.jsx";
export default function WorkInCanada() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Work
          {" > "}Work in Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Work in Canada</h1>
        </div>
      </div>
      <div class="pages-content-div">
        <div class="pages-content-text">
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

        <WorkPermitBox/>
        <QLinksWorkPermitBox/>
        <WorkPermitGuideBox/>
        <EligibilityCardWorkPermit/>
        <FaqBoxWork/>
        <ReadyToStartCard/>
      </div>
    </div>
  );
}
