import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { Date: "June 29, 2023", "Number of LAAS Issued": 62 },
    { Date: "June 15, 2023", "Number of LAAS Issued": 59 },
    { Date: "June 1, 2023", "Number of LAAS Issued": 56 },
    { Date: "May 4, 2023", "Number of LAAS Issued": 39 },
    { Date: "March 23, 2023", "Number of LAAS Issued": 52 },
    { Date: "March 9, 2023", "Number of LAAS Issued": 53 },
    { Date: "February 23, 2023", "Number of LAAS Issued": 51 },
    { Date: "February 9, 2023", "Number of LAAS Issued": 55 },
    { Date: "January 26, 2023", "Number of LAAS Issued": 60 },
    { Date: "January 12, 2023", "Number of LAAS Issued": 42 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Number of LAAS Issued</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Date}</td>
            <td>{item["Number of LAAS Issued"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function ManitobaInternationalEducationStream() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba">
            Manitoba
          </Link>
          {" > "}Manitoba International Education Stream (IES)
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Manitoba International Education Stream (IES)
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Manitoba International Education Stream (IES) includes three
        pathways of the Manitoba Provincial Nominee Program (MPNP), a Provincial
        Nominee Program (PNP) operated by the province of Manitoba. Manitoba’s
        International Education Stream targets international students who have
        recently graduated from a post-secondary institution in the province of
        Manitoba.
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
        Manitoba International Education includes the following streams:
        <br />
        <br />
        <ul>
          <li>Manitoba Career Employment Pathway</li>
          <li>Manitoba Graduate Internship Pathway</li>
          <li>Manitoba Student Entrepreneur Pathway</li>
        </ul>
        <br />
        Applicants who are successful through this Manitoba stream will receive
        an official provincial nomination from Manitoba. This provincial
        nomination makes applicants eligible to apply for Canadian permanent
        resident status.
        <br />
        <br />
        <bold>Career Employment Pathway</bold>
        <br />
        <br />
        The Career Employment Pathway targets foreign nationals who have
        recently graduated from a post-secondary institution in Manitoba and
        have an offer of employment to work in an in-demand occupation in
        Manitoba. This pathway expedites nomination for overseas graduates in
        STEM subjects -Mathematics, Engineering, Technology, and Science. Their
        internships must contribute to the innovation factor. Overseas graduate
        applicants who have a job offer in one of the In-Demand Occupations in
        Manitoba are not required to work for 6 months before the application.
        <br />
        <br />
        <bold>Graduate Internship Pathway</bold>
        <br />
        <br />
        The Manitoba Graduate Internship Pathway accepts applications from
        international graduates who have completed a Masters or PhD program in
        Manitoba within the last 3 years and who completed a Mitacs Elevate or
        Accelerate internship. Having a job offer is not mandatory.
        <br />
        <br />
        <bold>Student Entrepreneur Pathway</bold>
        <br />
        <br />
        The Manitoba Student Entrepreneur Pathway targets foreign nationals who
        have recently graduated from a Manitoba post-secondary institution and
        who have at least 6-months experience owning and managing a business in
        Manitoba. The applicants are required to fulfil the Business Performance
        Agreement conditions before receiving a nomination for Canada PR Visa.
        <br />
        <br />
        <bold>MPNP Recent Draws - International Education Stream</bold>
        <br />
        <br />
        Below is the history of Letters of Advice to Apply (LAAs) issued for all
        MPNP streams for the International Education Stream.
        <br />
        <br />
        <Table />
      </h2>
    </div>
  );
}
