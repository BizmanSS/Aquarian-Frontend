import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    {
      factor: "Age",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 25,
    },
    {
      factor: "Language",
      skilledWorker: 20,
      criticalWorker: 20,
      internationalGraduate: "N/A",
    },
    {
      factor: "Education",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 35,
    },
    {
      factor: "Work experience",
      skilledWorker: 20,
      criticalWorker: 20,
      internationalGraduate: "N/A",
    },
    {
      factor: "Employment",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 20,
    },
    {
      factor: "Adaptability",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 20,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Factor</th>
          <th>Skilled Worker</th>
          <th>Critical Worker</th>
          <th>International Graduate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.factor}</td>
            <td>{item.skilledWorker}</td>
            <td>{item.criticalWorker}</td>
            <td>{item.internationalGraduate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PEILaborImpact() {
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
          <Link to="/immigrate/provincial-nominee-program/prince-edward-island">
            Prince Edward Island
          </Link>
          {" > "}PEI Labor Impact
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Labor Impact</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Skilled workers and recent graduates wishing to permanently settle in
        PEI can take advantage of one of several Labour Impact streams of the
        Prince Edward Island Provincial Nomination Program (PEI PNP).
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
        These programs give prospective immigrants who have a job offer from a
        PEI employer the opportunity to take advantage of an accelerated path to
        permanent residency. The PEI Labour Impact category includes three
        streams:
        <br />
        <br />
        <ul>
          <li>
            PEI Skilled Workers
            <ul>
              <li>Skilled Workers in PEI</li>
              <li>Skilled Workers Outside Canada</li>
            </ul>
          </li>
          <br />
          <li>PEI Critical Worker </li>
          <br />
          <li>PEI International Graduate</li>
        </ul>
        <br />
        <sp>PEI Skilled Worker</sp>
        <br />
        <br />
        Workers with relevant experience in skilled occupations and have been
        hired or identified by a PEI employer can receive provincial nomination
        through one of the PEI Skilled Worker streams. The Skilled Workers in
        PEI stream is for candidates currently working in the province of PEI.
        Eligible candidates outside of PEI may be able to apply to the PEI
        Skilled Workers Outside of Canada stream.
        <br />
        <br />
        <ul>
          <li>Skilled Workers in PEI</li>
          <li>Skilled Workers Outside Canada </li>
        </ul>
        <br />
        <sp>PEI Critical Worker</sp>
        <br />
        <br />
        Workers in low-skilled occupations who have worked on a full-time basis
        for at least six months with a PEI employer may be eligible for
        provincial nomination through the PEI Critical Worker stream. Applicants
        must have experience as a truck driver, labourer, customer service
        agent, hospitality worker, or housekeeper.
        <br />
        <br />
        <sp>PEI International Graduate</sp>
        <br />
        <br />
        Recent graduates from recognized PEI post-secondary institutions who
        have received a full-time, permanent job offer in a skilled occupation
        and hold a valid Post-Graduation Work Permit may be eligible for the PEI
        International Graduate stream.
        <br />
        <br />
        <sp>PEI Labour Impact Category Ranking System</sp>
        <br />
        <br />
        If a candidate meets all of the Skilled Worker in PEI eligibility
        requirements, they will need to create a profile in the PEI Expression
        of Interest (EOI) system. Applicants will be awarded up to 100 points
        based on their age, language, education, work experience, employment,
        and adaptability.
        <br />
        <br />
        Overview of Factors
        <br />
        <br />
        <Table />
      </h2>
    </div>
  );
}
