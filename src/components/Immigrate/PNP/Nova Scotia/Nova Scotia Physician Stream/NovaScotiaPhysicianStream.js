import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    {
      name: "Connection to Province",
      amount: "No",
    },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "No minimum",
    },
    {
      name: "Level of Education",
      amount: "Medical Licence",
    },
    {
      name: "Work Experience",
      amount: "No minimum",
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
export default function NovaScotiaPhysicianStream() {
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
          {" > "}Nova Scotia Physician Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia Physician Stream</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The stream is designed to assist Nova Scotia health organisations to
        recruit highly skilled foreign doctors to fill labour shortages in the
        province’s health sector. Physicians who are successful through this
        program will be able to apply for Canadian permanent resident status.
        This stream is ideal for physicians who have secured a valid job offer
        from one of the eligible health sector employers in Nova Scotia.
        <br />
        <br />
        <sp>Program Requirement</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        In order to be considered eligible, a foreign national must have a job
        offer from either the Nova Scotia Health Authority (NSHA) or the IWK
        Health Centre. This job offer must be for a position at National
        Occupational Classification (NOC) code 31100 (specialist physician) or
        31102 (general practitioner or family physician).
        <br />
        <br />
        <bold>Language Proficiency & Level of Education</bold>
        <br />
        <br />
        While there is no minimum language proficiency, level of education, or
        work experience for this stream, the hiring process for both the NSHA
        and IWK Health Centre include extensive review of prospective employees’
        educational/medical credentials, language proficiency, and eligibility
        for licensing in Nova Scotia. Normally, immigration applications require
        the same sort of proof of education, language, and licensing. Through
        the Physician Stream, the same assessments obtained by the Nova Scotia
        employer will be used in the immigration application, making the
        application process easier for the foreign national.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        Applications for the Nova Scotia Physician Stream are accepted at all
        times, and applications are processed on a first-come, first-served
        basis. Applications must be completed and submitted directly to the Nova
        Scotia Nominee Program by email. Successful applicants through this
        program will receive an provincial nomination from the province of Nova
        Scotia. This enables applicants to submit an official application for
        Canadian permanent residence to the federal government. Applicants must
        submit a paper-based application in hard copy to Immigration, Refugees
        and Citizenship Canada (IRCC) within six months of receiving the
        official provincial nomination.
        <br />
        <br />
        Applicants who have received a provincial nomination through the
        Physician Stream will be issued a work permit support letter from the
        province of Nova Scotia. This letter may be used in an application for a
        temporary work permit which will enable the applicant to work in Nova
        Scotia while the PR application is processing. Paper-based PNP
        applications for permanent residence are generally processed within 18
        months.
      </h2>
    </div>
  );
}
