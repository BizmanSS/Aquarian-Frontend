import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "CLB 4",
    },
    { name: "Level of Education", amount: "Post-secondary in Canada" },
    {
      name: "Work Experience",
      amount: "Employed in Canada, related to job offer",
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
export default function NewfoundlandAndLabradorInternationalGraduateCategory() {
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
          {" > "}Newfoundland and Labrador International Graduate Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Newfoundland and Labrador International Graduate Category
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Graduates who have completed at least half of their post-secondary
        studies from an approved Canadian educational institution who choose to
        remain in Canada on a Post-Graduate Work Permit may be eligible to apply
        for the NLNP International Graduate program. Graduates must either be
        currently employed or have received a job offer from a Newfoundland and
        Labrador employer that relates to their field of study.
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
        <bold>Work Experience</bold>
        <br />
        <br />
        Candidates must be working in Canada on a valid Post-Graduation Work
        Permit (PGWP) when they apply. They must have at least six months of
        validity remaining on their PGWP at the time of applying for provincial
        nomination. Those who have obtained their degree or diploma outside of
        Newfoundland and Labrador may be required to be employed for a minimum
        of one year in their field of study prior to being able to submit an
        application. The candidate must have any additional work experience
        required to perform the job they have been offered.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Newfoundland and Labrador International Graduate stream is open to
        new applications at all times. Eligible candidates must submit a
        complete application to the stream. The application fee is $250 CAD.
        Successful applicants will receive a provincial nomination from
        Newfoundland and Labrador. After receiving a provincial nomination an
        applicant has six months to submit a federal application for Canadian
        permanent residence. Applicants in this program must complete and submit
        a paper-based application for permanent residence and submit it by mail
        to the appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}
