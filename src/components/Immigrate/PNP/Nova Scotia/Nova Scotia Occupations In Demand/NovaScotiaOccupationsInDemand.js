import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    {
      name: "Connection to Province",
      amount: "No",
    },
    {
      name: "Job Offer",
      amount: "Yes- for a permanent, full-time position, in the stated NOC",
    },
    {
      name: "Language Proficiency",
      amount: "CLB Level 4 even if your first language is English or French",
    },
    {
      name: "Level of Education",
      amount: (
        <>
          High school diploma
          <br />
          <br />
          Have appropriate training, skills and/or accreditation for the job
        </>
      ),
    },
    {
      name: "Work Experience",
      amount: "1 year of work experience related to the job",
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
export default function NovaScotiaOccupationsInDemand() {
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
          <Link to="/immigrate/provincial-nominee-program/nova-scotia">
            Nova Scotia
          </Link>
          {" > "}Nova Scotia Occupations in Demand
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia Occupations in Demand</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream targets workers holding a job offer from a Nova Scotian
        employer in an in-demand field.
        <br />
        <br />
        Presently, the only occupations eligible for this program are:
        <br />
        <br />
        <ul>
          <li>NOC 33102 (Nurse Aides)</li>
          <li>NOC 65200 (Food and beverage servers)</li>
          <li>
            NOC 65201 (Food counter attendants, kitchen helpers and related
            support occupations)
          </li>
          <li> NOC 65310 (Light duty cleaners)</li>
          <li>NOC 73300 (Transport truck drivers)</li>
          <li>NOC 73400 (Heavy equipment operators)</li>
          <li>NOC 75110 (Construction trades helpers and labourers)</li>
        </ul>
        <br />
        Nova Scotia has announced that this stream will be run as a three-year
        pilot program, during which the eligible occupations will change.
        Targeted professions will change based on the province’s labour needs.
        <br />
        <br />
        <sp>Eligibility Criteria</sp>
        <br />
        <br />
        Candidates must be between the ages of 21 and 55 to apply.
        <br />
        <br />
        <Table />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        Applications for the Nova Scotia Occupations In Demand category are
        accepted at all times, provided that an applicant meets program
        requirements. Applicants may apply using the online portal on the Nova
        Scotia immigration website. Successful applicants will be issued a
        provincial nomination for permanent residence from Nova Scotia.
        <br />
        <br />
        Once an applicant has been nominated, they will be issued a Letter of
        Support, allowing them to apply for a temporary work permit so they can
        travel to Nova Scotia to begin work.
        <br />
        <br />
        After receiving a provincial nomination an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}
