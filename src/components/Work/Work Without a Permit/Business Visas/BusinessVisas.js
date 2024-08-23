import React from "react";
import { Link } from "react-router-dom";
export default function BusinessVisas() {
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
          <Link to="/work/work-without-a-permit">Work Without a Permit</Link>
          {" > "}Business Visas
        </p>
        <div className="header-content">
          <h1 className="heading-about">Business Visas</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Business Visitors are foreign nationals who travel to Canada to
        undertake business activities but do not directly enter the Canadian
        labour market. If you meet the definition of a business visitor, you may
        be exempt from requiring a Canadian work permit
        <br />
        <br />
        Unless they are visa-exempt, all visitors, including Business Visitors,
        to Canada require a visitor visa to enter the country, regardless of the
        type of activities they will pursue once in Canada.
        <br />
        <br />
        <a href="/contact-us">
          <sp>CONTACT US TO DISCUSS YOUR WORK PERMIT NEEDS</sp>
        </a>
        <br />
        <br />
        <sp> Business Visitor vs Work Permit</sp>
        <br />
        <br />
        <bold>Note</bold> that a business visitor visa is different from a
        Canadian work permit. You cannot enter the Canadian workforce as a
        business visitor. Business visitor visas are intended to allow
        short-term stays for business activities such as industry conferences,
        site visits, or training. If you are transferred to Canada by your
        company or are otherwise employed by a Canadian company, you will need a
        work permit. You can come to Canada as a visitor to search for Canadian
        employment.
        <br />
        <br />
        <sp> Student working off-campus</sp>
        <br />
        <br />
        Full-time international students do not require a work permit to work
        off-campus during their studies. Full-time international students are
        eligible to work up to 20 hours per week during study periods and to
        work full-time during regularly scheduled academic holidays and breaks.
        <br />
        <br />
        <sp>Student working on-campus</sp>
        <br />
        <br />
        If you are a full-time international student in Canada, you do not
        require a work permit to work on-campus where you study. Full-time
        international students are eligible to work up to 20 hours per week
        during study periods and to work full-time during regularly scheduled
        academic holidays and breaks.
        <br />
        <br />
      </h2>
    </div>
  );
}
