import React from "react";
import { Link } from "react-router-dom";
const TableFactor = () => {
  const data = [
    { name: "Language Proficiency", points: 125 },
    { name: "Age", points: 75 },
    { name: "Work Experience", points: 175 },
    { name: "Education", points: 125 },
    { name: "Adaptability", points: 500 },
    { name: "Risk Assessment", points: -200 },
    { name: <bold>Total</bold>, points: <bold>1000</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Maximum Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function SkilledWorkersInManitoba() {
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
          {" > "}Skilled Workers in Manitoba
        </p>
        <div className="header-content">
          <h1 className="heading-about">Skilled Workers in Manitoba</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Skilled Workers in Manitoba (SWM) is a collection of immigration streams
        of the Manitoba Provincial Nominee Program (MPNP), a Provincial Nominee
        Program (PNP) operated by the province of Manitoba. Skilled Workers in
        Manitoba encompasses three immigration streams which target foreign
        nationals who already have employment experience or a job offer in
        Manitoba and who possess the necessary skills and training to succeed in
        the Manitoba labour force.
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
        The Skilled Workers in Manitoba Stream includes the following pathways:
        <br />
        <br />
        <ul>
          <li>Manitoba Experience Pathway </li>
          <li>Employer Direct Recruitment Pathway </li>
        </ul>
        <br />
        Applicants who are successful through the Skilled Workers in Manitoba
        stream will receive an official provincial nomination from Manitoba.
        This provincial nomination makes applicants eligible to apply for
        Canadian permanent resident status.
        <br />
        <br />
        Interested candidates should be aware that simply meeting the minimum
        eligibility requirements does not guarantee success. All candidates will
        be ranked against one another using the MPNP Ranking System and only the
        most competitive candidates will be invited to submit applications.
        <br />
        <br />
        <bold>Manitoba Experience Pathway</bold>
        <br />
        <br />
        The Manitoba Experience Pathway is a pathway of the Skilled Workers in
        Manitoba stream. This pathway targets foreign nationals who already have
        work experience in Manitoba and are working in the province at the time
        of application. This stream is highly competitive, only selecting
        applicants with the most competitive profiles.
        <br />
        <br />
        <bold>Employer Direct Recruitment Pathway</bold>
        <br />
        <br />
        The Employer Direct Recruitment Pathway is a pathway of the Skilled
        Workers in Manitoba stream. This pathway is for candidates who attended
        an interview with the MPNP and an employer outside of Canada. Those
        candidates who successfully receive a job offer through one of these
        recruitment sessions will be invited to submit an application to the
        stream.
        <br />
        <br />
        <bold>MPNP Ranking System</bold>
        <br />
        <br />
        The following system is used to assign all MPNP candidates a score after
        the submission of their Expression of Interest (EOI). Those candidates
        with the highest scores will be invited to apply to the program.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}
