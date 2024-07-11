import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "Education AND Work Experience" },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 7",
    },
    { name: "Level of Education", amount: "2 year post-secondary program" },
    {
      name: "Work Experience",
      amount: "1 year as business owner and manager",
    },
    {
      name: "Investment Requirement",
      amount: "None",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Requirement</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function NewfoundlandAndLabradorInternationalGraduateEntrepreneurCategory() {
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
          <Link to="/immigrate/provincial-nominee-program/newfoundland-and-labrador">
            New Foundland and Labrador
          </Link>
          {" > "}Newfoundland and Labrador International Graduate Entrepreneur
          Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Newfoundland and Labrador International Graduate Entrepreneur
            Category
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The International Graduate Entrepreneur category of the Newfoundland and
        Labrador Provincial Nominee Program (NLNP) allows graduates of
        Newfoundland post-secondary institutions to apply for permanent
        residency if they have at least one-year of experience owning and
        managing a business in the province. The post-secondary program should
        be of at least two years.
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
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Connection to Province</bold>
        <br />
        <br />
        Applicants must have completed a post-secondary program of at least two
        years in Newfoundland & Labrador. As well, the applicant must have at
        least one year of experience owning and managing a business in the
        province.
        <br />
        <br />
        <bold>Level of Education</bold>
        <br />
        <br />
        Applicants must have a minimum of a post-secondary educational
        credential of at least two-years. This credential must have been
        completed in-person at either Memorial University or the College of the
        North Atlantic. The credential must have been completed within 2 years
        of submission of the Expression of Interest.
        <br />
        <br />
        <bold> Work Experience</bold>
        <br />
        <br />
        Applicants must have at least one year of experience in actively
        managing and owning a business in which they hold a minimum one-third
        ownership in Newfoundland & Labrador.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        This program uses an Expression of Interest (EOI) system to select
        applicants. In order to be considered for the program, first a candidate
        must submit an EOI using the PNP’s online service. The most competitive,
        qualified candidates will be invited to apply to the program.
        <br />
        <br />
        After receiving an Invitation to Apply (ITA) candidates must submit an
        official application for nomination to the province. This application
        includes documentation supporting the information included in the
        original EOI. As well, all applicants must pay an application fee of CAD
        $250 and must provide an Audit Report and a Business Continuity Plan,
        outlining their entrepreneurial intentions. If an application is deemed
        to be complete, the applicant will have to participate in an in-person
        interview.
        <br />
        <br />
        If an application is approved, the applicant will receive an official
        provincial nomination from Newfoundland and Labrador. Once an applicant
        has received an official nomination, they can apply to IRCC for Canadian
        permanent resident status.
      </h2>
    </div>
  );
}
