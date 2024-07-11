import React from "react";
import { Link } from "react-router-dom";
export default function BOWP() {
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
          {" > "}
          <Link to="/work/open-work-permits">Open Work Permit</Link>
          {" > "}Bridging Open Work Permit(BOWP)
        </p>
        <div className="header-content">
          <h1 className="heading-about">Bridging Open Work Permit(BOWP)</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Bridging Open Work Permit (BOWP) lets foreign nationals continue to
        work in Canada while they await a decision on their permanent residency
        application.
        <br />
        <br />
        <a href="/contact-us">
          {" "}
          <sp>CONTACT US TO DISCUSS YOUR WORK PERMIT NEEDS</sp>
        </a>
        <br />
        <br />
        <sp>What is a bridging open work permit?</sp>
        <br />
        <br />
        The Bridging Open Work Permit (BOWP) allows foreign nationals who are
        currently working in Canada to extend their status while awaiting a
        decision on their permanent residency application. The BOWP is only
        available to those who have submitted a permanent residency application
        and are already in possession of a valid work permit. A successful BOWP
        application results in an open work permit, enabling the holder to work
        for multiple employers in multiple locations, of their own choosing.
        <br />
        <br />
        <sp>Who is eligible for a bridging open work permit?</sp>
        <br />
        <br />
        In order to apply for a Bridging Open Work Permit (BOWP) a foreign
        national must first meet the following conditions:
        <br /> <br />
        <ul>
          <li>Reside in Canada with valid temporary resident status</li> <br />
          <li>
            Meet one of the following criteria: <br />
            <ul>
              <li>
                hold a valid work permit with valid temporary resident status
              </li>
              <li>
                have submitted to renew their work permit and are on maintained
                status in Canada
              </li>
              <li>
                are eligible to restore their temporary resident status with
                authorization to work on a work permit
              </li>
            </ul>
            <br />
          </li>
          <li>
            Have applied for Canadian permanent residence as the{" "}
            <bold> principal applicant </bold> under one of the following
            classes:
            <br />{" "}
            <ul>
              <li>Federal Skilled Worker Program (FSWP)</li>
              <li>Canadian Experience Class (CEC)</li>
              <li>Federal Skilled Trades (FST)</li>
              <li>
                Provincial Nominee Program (PNP) (given there are no employer
                restrictions on the nomination)
              </li>
              <li>Agri-Food Pilot (AFP)</li>
              <li>Quebec Skilled Worker Class (QSWC)</li>
            </ul>{" "}
            <br />
          </li>
          <li>
            Have passed the section R10 completeness check for an QSWC
            application or Express Entry application OR a positive eligibility
            assessment after applying under an eligible non-Express Entry
            permanent residence stream
          </li>
        </ul>{" "}
        <br />
        <sp>Bridging open work permit fee</sp>
        <br />
        <br />
        The fee for an open work permit is $255 CAD – $155 for the processing
        fee, and $100 CAD for the open work permit holder fee.
        <br />
        <br />
        <sp>Bridging open work permit processing time</sp>
        <br />
        <br />
        Bridging open work permits are typically processed within 3-4 months.
        <br />
        <br />
        <sp>
          Can I apply for a bridging open work permit from outside of Canada?
        </sp>
        <br />
        <br />
        Foreign nationals must be residing in Canada to apply for a BOWP.
        <br />
        <br />
        <sp>Why was my bridging open work permit rejected?</sp>
        <br />
        <br />
        One common reason that a BOWP is refused is if applicants submit an
        incomplete permanent residence application. As applications for
        permanent residence must be passed the completeness check as part of the
        eligibility requirement, incomplete applications may result in a BOWP
        refusal.
        <br />
        <br />
        <sp>Can I work while waiting for a bridging open work permit?</sp>
        <br />
        <br />A foreign national is required to submit a BOWP application before
        their current work permit expires. If their current work permit expires
        before they have received a decision regarding their BOWP application,
        they may continue to work in Canada under
        <bold> maintained status </bold>until a final decision has been issued
        regarding the BOWP application. However, if the BOWP application is
        denied, the foreign national must cease working in Canada immediately.
        If a foreign national works in Canada without a valid work permit, they
        will jeopardise all future applications for Canadian immigration.
        <br />
        <br />
        <sp>Can a bridging open work permit be extended?</sp>
        <br />
        <br />
        If a permanent residence application is not finalised by the time a BOWP
        expires, IRCC may issue extensions of 12 months.
        <br />
        <br />
      </h2>
    </div>
  );
}
