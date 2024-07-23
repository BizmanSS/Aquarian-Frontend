import React from "react";
import { Link } from "react-router-dom";
export default function HomeSupport() {
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
          <Link to="/immigrate/caregiver-programs">
            Caregiver Programs
          </Link>{" "}
          {" > "}Home Support Worker Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">Home Support Worker Pilot</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Home Support Worker Pilot is one of two caregiver pilots launched in
        June, 2019. This pathway is designed for foreign nationals with work
        experience in NOC 4412.
        <br /> <br />
        <ul>
          <li> Eligibility Criteria</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          FREE ASSESSMENT
        </a>
        <br />
        <br />
        <br />
        This pilot is designed to bring Home Support Workers to Canada on
        temporary work permits, with the ability to apply for permanent
        residence after gaining enough work experience.
        <br />
        <br />
        Important Information <br />
        <br />
        The pilot opened applications on June 18th, 2019, and will be accepting
        a maximum of 2,750 primary applicants per year plus their immediate
        family.
        <br />
        <br />
        <sp>What does the Pilot offer?</sp>
        <br />
        <br />
        The new programs amend two main issues with the previous caregiver pilot
        programs:
        <br />
        <br />
        <ul>
          <bold> 1. Ability for caregivers to change jobs:</bold> Caregiver
          programs have been criticised in the past because they bind caregivers
          to single families, creating an environment conducive to workplace
          abuse. The new pilots will enable caregivers to more easily change
          employers.
          <br />
          <bold>2. Accompanying family members:</bold> In past programs,
          spouses/partners and children could not necessarily accompany the
          caregiver to Canada. Under the new programs family members will be
          eligible to accompany caregivers and will be eligible to apply for
          open work permits and/or study permits.
        </ul>
        <br />
        <sp>Other options for caregivers</sp>
        <br />
        <br />
        In addition to the Home Support Worker Pilot, the government introduced
        the Home Child Care Provider Pilot in June 2019. The two pilots are
        similar, with the Home Child Care Provider Pilot targeting those with
        experience in NOC 4411 rather than NOC 4412.
        <br />
        <br />
        <sp>Eligibility Criteria</sp>
        <br />
        <br />
        Interested applicants must meet the requirements listed below.
        <br />
        <br />
        <sp>Job Offer</sp>
        <br />
        <br />
        Eligible candidates will have a job offer in Canada at the time of
        application for a work permit.
        <br />
        <br />
        <sp>Work Experience</sp>
        <br />
        <br />
        With a work permit, caregivers will be able to gain the two years
        mandatory work experience in order to apply for permanent residence in
        Canada.
        <br />
        <br />
        <sp>Language Requirements</sp>
        <br />
        <br />
        Eligible candidates will meet Canadian Language Benchmark level 5.
        <br />
        <br />
        <sp>Educational Requirements</sp>
        <br />
        <br />
        Applicants must have one year of Canadian post-secondary education or
        foreign equivalent to be eligible.
        <br />
        <br />
      </h2>
    </div>
  );
}
