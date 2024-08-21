import React from "react";
import { Link } from "react-router-dom";
export default function CanadianExperienceClass() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Immigrate
          {" > "}
          <Link to="/immigrate/express-entry">Express Entry</Link>
          {" > "}Canadian Experience Class
        </p>
        <div className="header-content">
          <h1 className="heading-about">Canadian Experience Class</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Canadian Experience Class (CEC) program is ideal for candidates who
        have recent Canadian work experience and are seeking permanent
        immigration to Canada. CEC is also one of the fastest routes to Canadian
        permanent residence, taking as little as three to four months to
        process!
        <br />
        <br />
        <bold>What is the Canadian Experience Class program?</bold>
        <br />
        <br />
        CEC is managed under the Express Entry system and uses the Comprehensive
        Ranking System (CRS) to rank interested candidates.
        <bold>
          {" "}
          Applicants who have competitive CRS scores will receive invitations to
          apply for Canadian permanent residence.
        </bold>
        <br />
        <br />
        <bold>Who is eligible for the Canadian Experience Class Program?</bold>
        <br />
        <br />
        In order to be eligible for CEC,
        <bold>
          {" "}
          a candidate must have at least 12-months of full-time (or an
          equivalent amount of part-time), skilled work experience in Canada.
        </bold>{" "}
        The Canadian work experience must have been acquired within the previous
        three years from the date of the application.
        <br />
        <br />
        CEC is not an option for foreign nationals who do not have recent
        Canadian work experience.
        <br />
        <br />
        <br />
        <bold>Canadian Experience Class requirements</bold>
        <br />
        <br />
        In order to count your 12-months of Canadian work experience towards
        your CEC application, it must meet the following conditions:
        <br /> <br />
        <ul>
          1. Be obtained in Canada within the 36 months prior to the date of
          submission of the electronic Application for Permanent Residence
          (eAPR).
          <br />
          2. Your employment duties in Canada fall under the NOC Code Skill
          Level 0, A, or B
          <br />
          3. Be lawfully obtained, paid work experience in Canada.
          <br />
          <br />
        </ul>
        An applicant cannot count work experience obtained while engaged in
        full-time studies in Canada.
        <br />
        <br />
        In addition to the Canadian experience requirement, CEC has several
        other eligibility criteria which must be met in order to submit:
        <br />
        <br />
        <ul>
          <bold>1. Language: </bold>Reach a Canadian Language Benchmark (CLB)
          level 7 on an approved English or French language test for NOC skill
          level 0 or A jobs. Reach a CLB 5 for NOC B jobs.
          <br />
          <bold>2. Residence in Canada: </bold>Intend to live outside of the
          province of Quebec.
          <br />
          <br />
        </ul>
        <bold>How to calculate your Canadian Experience Class CRS points</bold>
        <br />
        <br />
        Express Entry holds rounds of invitations and invites CEC candidates
        based on their CRS scores.{" "}
        <bold>
          To calculate your points for CEC, you simply need to use our handy CRS
          calculator tool.{" "}
        </bold>
        <br />
        <br />
        CALCULATE MY POINTS
        <br />
        <br />
        <bold>How does the Canada Express Entry work?</bold>
        <br />
        <br />
        Step 1: Complete your Express Entry Profile
        <br />
        <br />
        The first step is to submit your complete profile which requires the
        following documents:
        <br />
        <br />
        <ul>
          1. Language test results
          <br />
          2. Work experience
          <br />
          3. Educational credential assessment report
          <br />
          4. A passport or travel document
          <br />
          5. Job offer
          <br />
          <br />
        </ul>
        A score under the CRS-Comprehensive Ranking System is given based on
        various factors.
        <br />
        <br />
        After the application is accepted into the pool, the candidate is
        provided a Job Seeker Validation Code and Express Entry Profile Number
        through which they can develop their resume in the Canada Job Bank.
        <br />
        <br />
        Step 2: Invitation to Apply
        <br />
        <br />
        After you submit your profile and you receive an invitation to apply for
        Canadian permanent if your CRS score makes the cut off of the latest
        draw.
        <br />
        <br />
        <bold>
          Can I apply to the Canadian Experience Class program from outside of
          Canada?
        </bold>
        <br />
        <br />
        <bold>Yes.</bold>As long as you meet the basic eligibility requirements
        for CEC as mentioned above, you can apply from anywhere in the world.
        <br />
        <br />
        <bold>Is proof of funds required for Canadian Experience Class?</bold>
        <br />
        <br />
        Proof of funds is not a requirement of the CEC program. You will not be
        required to provide any documentation regarding your finances.
        <br />
        <br />
        <bold>
          Does internship experience in Canada count towards my Canadian
          Experience Class application?
        </bold>
        <br />
        <br />
        It depends. If your paid internship is not part of your education, then
        you may count it towards the Express Entry work experience requirement.
        Co-op work while studying does not count.
        <br />
        <br />
      </h2>
    </div>
  );
}
