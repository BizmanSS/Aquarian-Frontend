import React from "react";
import { Link } from "react-router-dom";
export default function SaskatchewanExperience() {
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
          <Link to="/immigrate/provincial-nominee-program">
            Provincial Nominee Program
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}Saskatchewan Experience
        </p>
        <div className="header-content">
          <h1 className="heading-about">Saskatchewan Experience</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Saskatchewan Experience is a collection of immigration streams of the
        Saskatchewan Immigrant Nominee Program (SINP), a Provincial Nominee
        Program (PNP) operated by the province of Saskatchewan. Saskatchewan
        Experience encompasses five immigration streams which target foreign
        nationals who have already gained work experience from a Saskatchewan
        employer and who hold a valid job offer for permanent employment in
        Saskatchewan.
        <br />
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        Saskatchewan Experience includes the following streams:
        <br />
        <br />
        <ul>
          <li>Saskatchewan Existing Work Permit</li>
          <li>Saskatchewan Health Professionals</li>
          <li>Saskatchewan Hospitality Sector Project</li>
          <li>Saskatchewan Long-Haul Truck Driver Project</li>
          <li>Saskatchewan Students</li>
        </ul>
        <br />
        Applicants who are successful through any of these Saskatchewan streams
        will receive an official provincial nomination from Saskatchewan. This
        provincial nomination makes applicants eligible to apply for Canadian
        permanent resident status.
        <br />
        <br />
        <sp>Saskatchewan Existing Work Permit</sp>
        <br />
        <br />
        Saskatchewan Existing Work Permit is a stream of Saskatchewan Experience
        targeting foreign workers who have at least 6 months of experience
        working in Saskatchewan and who have an offer of employment to continue
        working in Saskatchewan. In order to qualify, the applicant’s previous
        experience and job offer must meet certain conditions. As well, the
        applicant must hold a valid work permit at the time of application.
        <br />
        <br />
        <sp>Saskatchewan Health Professionals</sp>
        <br />
        <br />
        Saskatchewan Health Professionals is a stream of Saskatchewan Experience
        targeting foreign workers who have at least 6 months of experience
        working in Saskatchewan and who have an offer of employment to continue
        working in Saskatchewan. Both the work experience and the job offer must
        be in the health sector, either as a physician, nurse, or other health
        professional. As well, the applicant must hold a valid work permit at
        the time of application.
        <br />
        <br />
        <sp>Saskatchewan Hospitality Sector Project</sp>
        <br />
        <br />
        Saskatchewan Hospitality Sector Project is a stream of Saskatchewan
        Experience targeting foreign workers who have at least 6 months of
        experience working in Saskatchewan and who have an offer of employment
        to continue working in Saskatchewan. Both the work experience and the
        job offer must be in one of the stream’s in-demand occupations. As well,
        the applicant must hold a valid work permit at the time of application.
        <br />
        <br />
        <sp>Saskatchewan Long-Haul Truck Driver Project</sp>
        <br />
        <br />
        Saskatchewan Long-Haul Truck Driver Project is a stream of Saskatchewan
        Experience targeting foreign workers who have at least 6 months of
        experience working in Saskatchewan and who have an offer of employment
        to continue working in Saskatchewan. Both the work experience and the
        job offer must be as a long-haul truck driver (NOC 7511). As well, the
        applicant must hold a valid work permit at the time of application.
        <br />
        <br />
        <sp>Saskatchewan Students</sp>
        <br />
        <br />
        Saskatchewan Students is a stream of Saskatchewan Experience targeting
        international students who have recently graduated from a post-secondary
        institution in Canada. Graduates must have at least 6 months of work
        experience with a Saskatchewan employer and have an offer of employment
        from a Saskatchewan employer which is related to their field of study.
        As well, the applicant must hold a valid post-graduation work permit at
        the time of application.
      </h2>
    </div>
  );
}
